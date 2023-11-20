import axios from '../api/axios';

export default async function validateToken(token) {
  const { data } = await axios.get('/admin', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
