import { createContext } from "react";
import Gif from "../models/Gif";

//describing object
interface FavContextModel {
  favorites: Gif[];
  addFav: (g: Gif) => void;
  isThisAFav: (id: string) => boolean;
  deleteFav: (id: string) => void;
}
//creating object
const defaultValue: FavContextModel = {
  favorites: [],
  addFav: () => {},
  isThisAFav: () => false,
  deleteFav: () => {},
};
//providing obj as argument to function
//that fn will create our context obj
const FavoritesContext = createContext(defaultValue);
//export context obj
export default FavoritesContext;
