import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params: {
        key :'ec442188c3824a738781459dc447d562'
    }
})