import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifBySeachTerm, getTrendingGifs } from "../services/giphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [giphyArray, setGiphyArray] = useState<Gif[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  //if search term is truthy. get item searched. if not get trending gifs

  useEffect(() => {
    if (searchTerm) {
      getGifBySeachTerm(searchTerm).then((res) => {
        setGiphyArray(res.data);
      });
    } else {
      getTrendingGifs().then((res) => {
        //this data is unique to Giphy API
        setGiphyArray(res.data);
      });
    }
  }, [searchTerm]);

  const updateSearchTerm = (query: string): void => {
    setSearchTerm(query);
  };

  return (
    <div className="Main">
      <SearchForm updateSearchTerm={updateSearchTerm} />
      <ResultsList giphyArray={giphyArray} />
    </div>
  );
};

export default Main;
