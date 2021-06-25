import request from '../utils/request';

const apiLogin = async data => {
  return request({
    url: '/auth/login',
    auth: false,
    data,
    method: 'post',
  });
};

export {apiLogin};
