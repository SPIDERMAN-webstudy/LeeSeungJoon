import Proptypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, movie }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${id}`}>{movie.title}</Link>
      </h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.summary}</p>
      {movie.hasOwnProperty("genres") ? (
        <ul>
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
