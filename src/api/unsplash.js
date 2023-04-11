import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID apzmoSjXEORzIUOHgY1JscQlQs9wRPgp3NzymW65Pug",
  },
});
