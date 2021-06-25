import axios from 'axios';
import {getUserToken} from './storage';
import {APIURL} from './config';

const request = async ({
  fullUrl = false,
  url,
  data,
  auth = false,
  headers = {
    'Content-Type': 'application/json',
  },
  params = {},
  type = 'json',
  method,
}) => {
  const useUrl = fullUrl ? url : `${APIURL}${url}`;
  const token = await getUserToken();

  switch (type) {
    case 'json': {
      headers = {
        'Content-Type': 'application/json',
      };
      break;
    }
    case 'form-data': {
      headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      break;
    }
    default:
  }

  if ((!token && auth) || (typeof token === 'object' && auth)) {
    return {
      success: false,
      message: 'Unauthenticated',
    };
  }

  if (auth && !!token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response = {};

  try {
    switch (method) {
      case 'get': {
        response = await axios.get(`${useUrl}`, {
          maxContentLength: 2000,
          params: {...data, ...params},
          headers,
        });
        break;
      }
      case 'post': {
        response = await axios.post(`${useUrl}`, data, {params, headers});
        break;
      }
      case 'put': {
        response = await axios.put(`${useUrl}`, data, {headers});
        break;
      }
      case 'delete': {
        response = await axios.delete(`${useUrl}`, {data, headers});
        break;
      }
      default:
    }

    return Promise.resolve({
      success: true,
      ...response.data,
    });
  } catch (error) {
    // const {response} = error;
    const responseError = error?.response;
    let msg;
    let dat;
    let statusCode;
    let detailData = '';
    if (responseError && responseError instanceof Object) {
      const {statusText} = responseError;
      const dataError = responseError?.data;
      statusCode = responseError.status;
      const {detail} = dataError;
      detailData = detail;
      msg = dataError.message || statusText;
      dat =
        {
          ...dataError,
        } || {};
    } else {
      statusCode = 600;
      if (Object.prototype.hasOwnProperty.call(error, 'message')) {
        msg = error.message || 'Network Error';
      } else {
        msg = error;
      }
    }
    return {
      success: false,
      detail: detailData,
      statusCode,
      message: msg,
      data: dat,
    };
  }
};

export default request;
