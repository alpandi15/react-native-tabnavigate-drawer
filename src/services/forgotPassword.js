import request from '../utils/request';

export async function apiForgotPassword(type = 'email', data) {
  return request({
    url: `/auth/forgot-password/${type}`,
    auth: false,
    data,
    method: 'post',
  });
}

export const apiResetPassword = async (type = 'email', data) => {
  return request({
    url: `/auth/reset-password/${type}`,
    auth: false,
    data,
    method: 'post',
  });
};
