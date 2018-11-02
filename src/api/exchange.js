// api
import { get } from './api-client';

export default {
  getExchange: params => {
    return get(`price?fsym=${params.coin}&tsyms=${params.currency}`);
  }
};
