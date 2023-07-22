import axios from "axios";

const Api = axios.create({
    baseURL: "https://people55-production.up.railway.app",
    timeout: 5000,

})

export default Api;