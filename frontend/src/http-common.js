import axios from "axios";

const port = process.env.REACT_APP_BACKEND_PORT || 443

export default axios.create({
    baseURL: `https://fast-sea-41868.herokuapp.com:${port}/api`,
    headers: {
        "Content-type": "application/json"
    }
});