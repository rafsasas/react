import axios from 'axios';

//localhost:3001

http: const api = axios.create({
  baseURL: 'https://github.com/rafsasas/estagio',
});

export default api;
