import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d7cface011874ef2bf2a8c0a77dc8ac7",
  },
});
