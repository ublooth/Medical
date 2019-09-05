import axios from 'axios'
import { Toast } from 'vant';

const BASE_URL = '/test'

const Axios = axios.create({
  headers: {'token': '394fc1ebebde46b882cdc606a8d54dc1'}
});


Axios.interceptors.response.use(function (response) {
  const { data } = response
  if (data.status === 9999) {
    Toast.fail(data.message);
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


const Apis = {
  // 获取个人用户信息
  getUserInfo: () => Axios.get(`${BASE_URL}/user/getUser`),

  // 查询家庭成员列表
  getMembers: () => Axios.post(`${BASE_URL}/user/queryMembers`)

}

export default Apis