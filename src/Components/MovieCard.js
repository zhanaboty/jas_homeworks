import star from "../icons/star.svg";

function MovieCard({ movie }) {
    return (
        <div className="movie_card">
            <img
                className="movie_card__poster"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
            />
            <div className="movie_card__stars">
                {movie.vote_average >= 0 && <img src={star} alt="" />}
                {movie.vote_average >= 2 && <img src={star} alt="" />}
                {movie.vote_average >= 4 && <img src={star} alt="" />}
                {movie.vote_average >= 6 && <img src={star} alt="" />}
                {movie.vote_average >= 8 && <img src={star} alt="" />}
            </div>
            <h4 className="movie_card__title">{movie.title}</h4>
        </div>
    );
}

export default MovieCard;