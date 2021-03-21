import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ojan-ecommerce-cms.herokuapp.com'
})

export default instance
