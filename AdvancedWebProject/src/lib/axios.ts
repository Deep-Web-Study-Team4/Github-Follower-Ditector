import axios from "axios";

const client = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
  },
});

export { client };
