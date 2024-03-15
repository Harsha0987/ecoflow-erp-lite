const BASE_URL = 'https://api.ecoflow-erp-lite.com';

const api = {
  get: (endpoint) => fetch(`${BASE_URL}/${endpoint}`).then((response) => response.json()),
  post: (endpoint, data) => fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json()),
  put: (endpoint, data) => fetch(`${BASE_URL}/${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json()),
  delete: (endpoint) => fetch(`${BASE_URL}/${endpoint}`, { method: 'DELETE' }).then((response) => response.json()),
};

export default api;
