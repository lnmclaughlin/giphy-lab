import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifByID } from "../services/giphyService";
import "./Details.css";
import Result from "./Result";

//useParams is a hook just like useState and UseEffect
//UseParams allows you to navigate down a certain path, in this case id. the only reason id is a path param (app.tsx) is because of the ' : ' before id
//useEffect essentially is saying if there is an id param, show that id only - take the detailed path of that particular thing
const Details = () => {
  const id: string | undefined = useParams().id;
  const [gif, setGif] = useState<Gif>();

  useEffect(() => {
    getGifByID(id!).then((res) => {
      setGif(res.data);
      console.log(res.data);
    });
  }, [id]);
  return (
    //as long as gif is truthy... as long as it was chosen.. show that gif
    <div className="Details">
      {gif ? <Result gif={gif} /> : <p>Loading... </p>}
    </div>
  );
};

export default Details;
