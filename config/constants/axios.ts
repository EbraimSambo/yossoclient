import axios from "axios";


export const instanceGlobal = axios({
    baseURL: "https://lovalhost:8000/"
})