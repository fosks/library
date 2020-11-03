import axios from "axios";

const conn_protocol = process.env.REACT_APP_CONNECTION_PROTOCOL || "https";
const host = process.env.REACT_APP_HOSTNAME || "fast-sea-41868.herokuapp.com";
const port = process.env.REACT_APP_BACKEND_PORT || 443;

export default axios.create({
    baseURL: `${conn_protocol}://${host}:${port}/api`,
    headers: {
        "Content-type": "application/json"
    }
});