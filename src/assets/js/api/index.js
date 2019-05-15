import Common from './common';
import AppRank from './app-rank';
import AdAnalysis from './ad-analysis';
import Util from '../util';
import Axios from "./axios";
import { Modal } from 'antd';


const createInterface = arr => {
  let Interface = {};
  arr.forEach(v => {
    Interface[v.name] = param => {
      return new Promise(reslove => {
        Api.axiosPost(v.url, param, v.backData).then(res => reslove(res))
      })
    }
  });
  return Interface
}

const Api = {
  AppRank: createInterface(AppRank),
  Common: createInterface(Common),
  AdAnalysis: createInterface(AdAnalysis),
  env() {
    if (process.env.NODE_ENV === "development") return "development";
    return "production";
  },
  axiosPost(url, data, backData) {
    return new Promise(resolve => {
      Axios.post(url, data).then(res => {
        if (res.status !== 200) {
          console.log('请求失败', res);
          if (backData === 'getError') resolve({ error: true });
          return Modal.info({
            title: '提示',
            content: res.statusText || '网络异常'
          });
          // return vm.$alert(res.statusText || '网络异常');
        }
        let result = res.data;
        if (backData === 'allData') return resolve(result);
        switch (result.code) {
          case "0000": //  成功
            return resolve(result.data)
          case "000004": // 用户尚未登录
            Util.closeLoading();
            // MessageBox.alert(result.message, {
            //   showClose: false,
            //   callback: () => {
            //     Util.setSStorage('statusCode', '000004');
            //     MessageBox.close();
            //     router.push("/login");
            //   }
            // });
            break;
          default: // 失败
            Util.closeLoading();
            if (backData === 'getError') resolve({ error: true });
            // MessageBox.alert(result.message || '服务器异常', {
            //   showClose: false,
            //   callback: () => {
            //     MessageBox.close();
            //   }
            // });
            break;
        }
      }).catch(error => {
        console.log(error);
        Util.closeLoading();
        if (backData === 'getError') resolve({ error: true });
        // MessageBox.alert('网络异常', {
        //   showClose: false,
        //   callback: () => {
        //     MessageBox.close();
        //   }
        // });
      });
    })
  }
}

export default Api