import axios from 'axios'

export const getData = id => axios.get(axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`))