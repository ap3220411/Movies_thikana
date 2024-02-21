import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviesDetail.css";

const MoviesDetail = () => {
  const [moviesDetail, setMoviesDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesDetail(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            moviesDetail ? moviesDetail.backdrop_path : ""
          }`}
          alt="Backdrop"
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                moviesDetail ? moviesDetail.poster_path : ""
              }`}
              alt="Poster"
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {moviesDetail ? moviesDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {moviesDetail ? moviesDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {moviesDetail ? moviesDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {moviesDetail ? `(${moviesDetail.vote_count} votes)` : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {moviesDetail ? `${moviesDetail.runtime} mins` : ""}
            </div>
            <div className="movie__releaseDate">
              {moviesDetail ? `Release date: ${moviesDetail.release_date}` : ""}
            </div>
            <div className="movie__genres">
              {moviesDetail && moviesDetail.genres
                ? moviesDetail.genres.map((genre) => (
                    <span key={genre.id} className="movie__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="movie__detailRightBottom">
        <br/>
        <div className="synopsisText">Synopsis</div>
        <div>{moviesDetail ? moviesDetail.overview : " "}</div>
      </div>

      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {moviesDetail && moviesDetail.homepage && (
          <a
            href={moviesDetail.homepage}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {moviesDetail && moviesDetail.imdb_id && (
          <a
            href={`https://www.imdb.com/title/${moviesDetail.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default MoviesDetail;
