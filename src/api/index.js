import common from './common';
import appRank from './app-rank';
import adAnalysis from './ad-analysis';
import Axios from "./axios";
import { message } from 'antd';


export function createInterface(arr) {
  let Interface = {};
  arr.forEach(v => {
    Interface[v.name] = param => {
      return new Promise(reslove => {
        axiosPost(v.url, param, v.backData).then(res => reslove(res))
      })
    }
  });
  return Interface
}

export let Common = createInterface(common)
export let AppRank = createInterface(appRank)
export let AdAnalysis = createInterface(adAnalysis)

export function env() {
  if (process.env.NODE_ENV === "development") return "development";
  return "production";
}
export function axiosPost(url, data, backData) {
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


