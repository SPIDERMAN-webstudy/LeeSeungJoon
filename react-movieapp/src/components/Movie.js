import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";
import { useMediaQuery } from "react-responsive";

function Movie({ id, movie }) {
  console.log(movie);
  const isMobile = useMediaQuery({
    query: "(max-width:770px)",
  });
  return (
    <div className={style.card}>
      <Link to={`/movie/${id}`}>
        <img
          className={style.coverImg}
          src={movie.medium_cover_image}
          alt={movie.title}
        />
      </Link>
      <span className={style.info}>
        <h2 className={style.title}>{movie.title_long}</h2>
        <p>
          {isMobile
            ? movie.summary.slice(0, 100) + "..."
            : movie.summary.slice(0, 320) + "..."}
        </p>
      </span>
      {movie.hasOwnProperty("genres") ? (
        <ul className={style.genreList}>
          {movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
Movie.propTypes = {
  movie: Proptypes.object.isRequired,
};
export default Movie;
