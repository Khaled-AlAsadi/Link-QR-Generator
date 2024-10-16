import axios from 'axios'

const api = axios.create({
  baseURL: 'https://link-qr-generator.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
