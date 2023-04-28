const baseURL = 'http://localhost:3000/';

const postFetch = async (url: string, body:object) => {
  return await fetch(baseURL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body),
  });
};

const getFetch = async (url: string) => {
  return await fetch(baseURL + url, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
};

export { postFetch, getFetch };
