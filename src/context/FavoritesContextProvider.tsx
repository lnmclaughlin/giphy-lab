import { ReactNode, useState } from "react";
import Gif from "../models/Gif";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

export default function FavoritesContextProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<Gif[]>([]);
  //get code from here too
  const addFav = (gif: Gif): void => {
    setFavorites((prev) => [...prev, gif]);
  };

  const deleteFav = (id: string) => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const isThisAFav = (id: string): boolean => {
    return favorites.some((fav) => {
      return fav.id === id;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFav, isThisAFav, deleteFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
