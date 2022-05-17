import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import star from "../icons/star.svg";
import { MovieCard } from "../components/MovieCard";
import { Grid } from "@mui/material";

export function MoviePage() {
  const [movie, setMovie] = useState();
  const [similar, setSimilar] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`
    )
      .then((res) => res.json())
      .then(setMovie);
  }, [movieId]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`
    )
      .then((res) => res.json())
      .then((movie) => setSimilar(movie.results));
  }, [movieId]);

  if (!movie) {
    return "Loading...";
  }

  return (
    <div>
      <div
        className="movie_wrapper"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}
      >
        <Container>
          <div className="movie_wrapper__box">
            {movie.genres.map((genre) => (
              <div className="movie_wrapper__genres">{genre.name}</div>
            ))}
          </div>
          <div className="movie_card__stars">
            {movie.vote_average >= 0 && <img src={star} alt="" />}
            {movie.vote_average >= 2 && <img src={star} alt="" />}
            {movie.vote_average >= 4 && <img src={star} alt="" />}
            {movie.vote_average >= 6 && <img src={star} alt="" />}
            {movie.vote_average >= 8 && <img src={star} alt="" />}
          </div>
          <div className="box">
            <h1 className="movie_wrapper__title">{movie.title}</h1>
            <p className="movie_wrapper__overview">{movie.overview}</p>
          </div>
        </Container>
      </div>
      <Container maxWidth="xl" style={{ color: "white" }}>
        <h2>Similar movies</h2>
        <Grid container spacing={2}>
          {similar.slice(0, 5).map((movie) => (
            <Grid item xs={12 / 5}>
              <MovieCard key={movie.id} movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
