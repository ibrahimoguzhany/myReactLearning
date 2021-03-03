import youtube from "axios";

const KEY = "AIzaSyBNV1pp-4dHtob_BOx3cUVz0v0OiFT89pM";

export default youtube.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
    q: "surfboards",
  },
});

youtube.get("/search");
