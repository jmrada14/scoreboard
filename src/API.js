import axios from "axios";
const BASEURL = "";
const APIKEY = "";

export default {
    post: (query) => axios.got(BASEURL + query + APIKEY)

};
