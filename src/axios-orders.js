import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-builder-909bf.firebaseio.com/',
})

export default instance
