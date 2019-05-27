import axios from 'axios';
import wh from '../util/common';

let getToken = wh.getToken;
const requestHead = (process.env.NODE_ENV === 'development') ? '/api' : '';
const projectName = '';
axios.defaults.baseURL = requestHead + projectName;
axios.interceptors.request.use(
  config => {
    config.headers['token'] = getToken().token;
    // config.headers['authorization'] =  '';
    return config
  }
);

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
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
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://api.piaoworld.com:9506/', {
        d: {
          act: url,
          pars: data
        },
        i: '',
        e: ''
      }).then((response) => {
        resolve(response.data.d)
        if (response.data.d.status == 403) {
          this.$router.push({
            name: 'login'
          })
        }
      }).catch((response) => {
        alert('请求失败')
        reject();
      })
    })
  },
}

