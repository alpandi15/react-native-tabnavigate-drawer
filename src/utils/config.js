import {API_DEBUG, API_PROTOCOL, API_HOST, API_PORT, API_VERSION} from '@env';

export const debug = API_DEBUG;
export const APIPROTOCOL = API_PROTOCOL;
export const APIHOST = API_HOST;
export const APIPORT = API_PORT;
export const APIURL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}${API_VERSION}`;
