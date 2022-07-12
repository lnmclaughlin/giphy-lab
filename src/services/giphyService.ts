import axios from "axios";
import DetailResponse from "../models/DetailResponse";
import Gif from "../models/Gif";
import GiphyResponse from "../models/GiphyResponse";

const apiKey: string = process.env.REACT_APP_GIPHY_API_KEY || "";

//function that returns trending gifs from giphy
export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/trending`, {
      params: { api_key: apiKey },
    })
    .then((res) => res.data); //handles response .then
};

//search endpoint
export const getGifBySeachTerm = (
  searchTerm: string
): Promise<GiphyResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: apiKey,
        q: searchTerm,
      },
    })
    .then((res) => res.data);
};
//this is the function that hits the endpoint of that particular id (the detailed path)
export const getGifByID = (id: string): Promise<DetailResponse> => {
  return axios

    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data);
};
