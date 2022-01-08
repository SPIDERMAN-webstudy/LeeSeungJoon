import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";
import Loading from "../components/Loading";
import { useMediaQuery } from "react-responsive";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState();
  const [sortBy, setSortBy] = useState("");
  const [last, setLast] = useState(false);
  const [page, setPage] = useState(1);

  const genreSelect = (event) => {
    setGenre(event.target.value);
  };
  const ratingSelect = (event) => {
    setRating(event.target.value);
  };
  const sortSelect = (event) => {
    setSortBy(event.target.value);
  };

  const nextClick = () => {
    setPage((prev) => prev + 1);
  };

  const getMovies = async () => {
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}&minimum_rating=${rating}&sort_by=${sortBy}&limit=20&page=${page}`
      )
    ).json();
    console.log(movies);
    setMovies(json.data.movies);
    console.log(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [genre, rating, sortBy]);

  const loadNext = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}&minimum_rating=${rating}&sort_by=${sortBy}&limit=20&page=${page}`
      )
    ).json();
    if (json.data.movies === undefined) {
      setLast(true);
    } else {
      setMovies(movies.concat(json.data.movies));
      setLast(false);
    }
  };

  useEffect(() => {
    loadNext();
  }, [page]);

  return (
    <div className={style.Home}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <form className={style.form}>
            <h1 className={style.domain}>Moviezn</h1>
            <div className={style.selector}>
              <span>
                &nbsp;장르&nbsp;
                <select
                  className={style.select}
                  onChange={genreSelect}
                  name="genre"
                  value={genre}
                >
                  <option value="">All</option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Animation">Animation</option>
                  <option value="Biography">Biography</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Crime">Crime</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Drama">Drama</option>
                  <option value="Family">Family</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Film Noir">Film Noir</option>
                  <option value="History">History</option>
                  <option value="Horror">Horror</option>
                  <option value="Music">Music</option>
                  <option value="Musical">Musical</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Romance">Romance</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Short Film">Short Film</option>
                  <option value="Sport">Sport</option>
                  <option value="Superhero">Superhero</option>
                  <option value="Thriller">Thriller</option>
                  <option value="War">War</option>
                  <option value="Western">Western</option>
                </select>
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;평점&nbsp;
                <select
                  className={style.select}
                  onChange={ratingSelect}
                  name="minimum_rating"
                  value={rating}
                >
                  <option value="0.0">All</option>
                  <option value="1.0">1.0 이상</option>
                  <option value="2.0">2.0 이상</option>
                  <option value="3.0">3.0 이상</option>
                  <option value="4.0">4.0 이상</option>
                  <option value="5.0">5.0 이상</option>
                  <option value="6.0">6.0 이상</option>
                  <option value="7.0">7.0 이상</option>
                  <option value="8.0">8.0 이상</option>
                </select>
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;정렬&nbsp;
                <select
                  className={style.select}
                  onChange={sortSelect}
                  name="sort_by"
                  value={sortBy}
                >
                  <option value="like_count">추천순</option>
                  <option value="title">이름순</option>
                  <option value="year">최신순</option>
                  <option value="download_count">다운로드 수</option>
                  <option value="date_added">추가된 날짜순</option>
                </select>
              </span>
            </div>
          </form>
          {movies === undefined ? (
            <div className={style.resultbox}>
              <p className={style.noresult}>검색 결과가 없습니다.</p>
            </div>
          ) : (
            <div>
              <div className={style.cardContainer}>
                {movies.map((movie) => (
                  <Movie key={movie.id} id={movie.id} movie={movie} />
                ))}
              </div>
              {last ? null : (
                <div className={style.next}>
                  <button className={style.nextBtn} onClick={nextClick}>
                    더보기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
