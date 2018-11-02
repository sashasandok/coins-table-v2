const apiBaseUrl = 'https://min-api.cryptocompare.com/data/';
const apiImageUrl = 'https://www.cryptocompare.com';

const apiUrl = endpoint => apiBaseUrl + endpoint;
export const imageUrl = endpoint => apiImageUrl + endpoint;

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

export const post = (endpoint, token, { ...args }) =>
  fetch(apiUrl(endpoint), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: 'Bearer ' + token })
    },
    body: JSON.stringify(args)
  }).then(response => response.json());
