import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  giphyArray: Gif[];
}
const ResultsList = ({ giphyArray }: Props) => {
  return (
    //fragment <></>
    <>
      <h2 className="results-heading">Results</h2>
      <ul className="ResultsList">
        {giphyArray.map((gif) => (
          <Result key={gif.id} gif={gif} />
        ))}
      </ul>
    </> //fragment
  );
};

export default ResultsList;
