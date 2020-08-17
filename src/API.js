import axios from "axios";
const BASEURL = "";

export default {
    post: (query) => axios.got(BASEURL + query)

};
