import axios from 'axios';
import  wh from '../util/common';

let getToken = wh.getToken;
 const requestHead = (process.env.NODE_ENV ==='development')? '/api':'';
 const projectName = '';
axios.defaults.baseURL = requestHead+projectName;
axios.interceptors.request.use(
  config => {
    config.headers['token'] =  getToken().token;
    config.headers['authorization'] =  'dfj777jshjh7hns8hjg8sgj8dhajs8h9_56fe18cead11477ab2f59fa8ec60138a_1';
    return config
  }
);

export default {
  //get请求
  get (url,param) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res);
      }).catch(function (err) {
        alert('请求失败')
        reject();
      })
    })
  },
  //post请求
  post (url,param={}) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res);

      }).catch(function (err) {
        alert('请求失败')
        reject();
      })
    })
  }
}

