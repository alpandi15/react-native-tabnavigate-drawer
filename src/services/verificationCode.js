import request from '../utils/request';

export const verificationCode = async data => {
  console.log('MASUK KE REQUEST ', data);
  return request({
    url: '/auth/verification',
    auth: false,
    data,
    method: 'post',
  });
};
