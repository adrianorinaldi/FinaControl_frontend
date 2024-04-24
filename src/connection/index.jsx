import axios from 'axios';

const requisicao = axios.create({
  baseURL: 'https://teste-backend-production.up.railway.app',
});

export default requisicao;