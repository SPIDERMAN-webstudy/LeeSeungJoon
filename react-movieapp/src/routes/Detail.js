import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import style from "./Detail.module.css";
import { Link } from "react-router-dom";
function Detail() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.container}>
          <form className={style.form}>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <h1 className={style.domain}>Moviezn</h1>
            </Link>
            <h2 className={style.title}>{data.title_long}</h2>
          </form>
          <img
            src={data.background_image}
            className={loading ? null : style.backImg}
          />
          <div className={style.card}>
            <div>
              <img src={data.medium_cover_image} />
              <h2 style={{ marginBottom: 0 }}>{data.title_long}</h2>
              <h3 style={{ marginBottom: 0 }}>⭐ {data.rating}</h3>
              <h3 style={{ marginBottom: 0 }}>🕛 {data.runtime} 분</h3>
              <h3>🌈 장르</h3>
              {data.genres.map((g) => (
                <span> | {g} | </span>
              ))}
              <br />
            </div>
            <br />
            <iframe
              className={style.trailer}
              src={`https://www.youtube.com/embed/${data.yt_trailer_code}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
