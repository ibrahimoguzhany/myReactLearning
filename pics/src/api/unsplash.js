import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MK1iKq2Nkd2WOJ35WBbkt1pAUtOVzB7Ue8BL6Cf8hdQ",
  },
});
