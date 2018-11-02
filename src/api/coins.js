// api
import { get } from './api-client';

export default {
  getCoins: () => {
    return get('all/coinlist');
  }
};
