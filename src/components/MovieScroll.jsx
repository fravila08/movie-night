import MovieIcon from "./MovieIcon";

const MovieScroll = ({genre}) => {
    const {genre_title, films} = genre
    return (
        <>
        <h3>{genre_title}</h3>
        <div className="movie-scroll">
            {films.map((film)=>(
                <MovieIcon film={film}/>
            ))}
        </div>
        </>
    )
}

export default MovieScroll;