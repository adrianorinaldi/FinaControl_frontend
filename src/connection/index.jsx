import axios from 'axios';

const requisicao = axios.create({
  baseURL: 'https://finacontrol-backend.up.railway.app',
});

export default requisicao;
