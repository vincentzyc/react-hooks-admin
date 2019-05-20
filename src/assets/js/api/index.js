import Common from './common';
import AppRank from './app-rank';
import AdAnalysis from './ad-analysis';
// import Util from '../util';
import Axios from "./axios";
import { message } from 'antd';


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
          return message.info(res.statusText || '网络异常');
        }
        return resolve(res.data);
      }).catch(error => {
        console.log(error);
        return message.info('网络异常');
      });
    })
  }
}

export default Api