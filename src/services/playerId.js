import request from '../utils/request';

const apiUpdatePlayerId = async data => {
  return request({
    url: '/update-player-id',
    auth: true,
    data,
    method: 'put',
  });
};

const apiLogoutPlayerId = async data => {
  return request({
    url: '/update-player-id/logout',
    auth: true,
    data,
    method: 'put',
  });
};

export {apiUpdatePlayerId, apiLogoutPlayerId};
