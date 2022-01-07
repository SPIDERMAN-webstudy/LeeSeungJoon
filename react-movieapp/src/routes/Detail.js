import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [data, setData] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setData(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>{data.title}</h1>;
}

export default Detail;
