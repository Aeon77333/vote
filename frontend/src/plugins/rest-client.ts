import axios from 'axios';

/**
 * axiosのデフォルト設定を指定する
 */
function setDefaults() {
  // TODO: 本開発する場合は環境を変更する
  axios.defaults.baseURL = `http://${process.env.baseUrl}`;
  axios.defaults.headers.common = {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': `http://${process.env.baseUrl}`,
    'Access-Control-Allow-Credentials': true,
  };
  // axios.defaults.withCredentials = true;
}

export default () => {
  setDefaults();
};
