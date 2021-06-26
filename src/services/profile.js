import request from '../utils/request';

const apiGetProfile = async data => {
  return request({
    url: '/auth/me',
    auth: true,
    method: 'get',
  });
};

export {apiGetProfile};
