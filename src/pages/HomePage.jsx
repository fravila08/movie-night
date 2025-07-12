import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import MovieScroll from "../components/MovieScroll"

 const HomePage = () => {
    const [genres, setGenres] = useState(useLoaderData())
    useEffect(()=>{
        console.log(genres)
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            {genres.map((genre)=>(
                <MovieScroll genre={genre}/>
            ))}
        </>
    )
}

export default HomePage