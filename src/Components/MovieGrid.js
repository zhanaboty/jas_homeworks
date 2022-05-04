import { Grid }  from "@mui/material";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={2} margin="auto">
        {movies.map((movie) => (
          <Grid item lg={12 / 5} justifyContent="center">
            <MovieCard movie={movie} boxShadow="5px 5px 5px black" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MovieGrid;
