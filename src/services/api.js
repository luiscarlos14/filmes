//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=7b9c0f3b5cf82b98453dd8360b90eebc&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;