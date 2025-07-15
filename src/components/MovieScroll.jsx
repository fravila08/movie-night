import MovieIcon from "./MovieIcon";

const MovieScroll = ({genre}) => {
    const {name, films} = genre
    return (
        <>
        <h3>{name}</h3>
        <div className="movie-scroll">
            {films.map((film)=>(
                <MovieIcon film={film} key={film.id}/>
            ))}
        </div>
        </>
    )
}

export default MovieScroll;