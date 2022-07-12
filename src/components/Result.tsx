import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}
const Result = ({ gif }: Props) => {
  const { addFav, isThisAFav, deleteFav } = useContext(FavoritesContext);

  const isFav: boolean = isThisAFav(gif.id);

  return (
    <li className="Result">
      <h3 className="gif-title">{gif.title}</h3>
      <Link to={`/details/${gif.id}`}>
        <img
          className="gif-image"
          src={gif.images.original.url}
          alt={gif.title}
        />
      </Link>
      <a className="gif-link" href={gif.url}>
        Link to Giphy
      </a>
      isFav ? (
      <i
        className={`fa-solid fa-heart fav`}
        onClick={() => deleteFav(gif.id)}
      ></i>
      ) : (<i className={`fa-solid fa-heart`} onClick={() => addFav(gif)}></i>)
      <i
        className={`fa-solid fa-heart ${isFav ? "fav" : ""}`}
        onClick={() => addFav(gif)}
      ></i>
    </li>
  );
};

export default Result;
