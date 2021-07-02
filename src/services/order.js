import request from '../utils/request';

export const apiGetStandOrder = async data => {
  return request({
    url: '/stand-order',
    auth: true,
    data,
    method: 'get',
  });
};
