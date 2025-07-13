import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { getFilmsForGenre } from "../utilities"
import MovieIcon from "../components/MovieIcon"

const CategoryPage = () => {
    const {genreId} = useParams()
    const [page, setPage] = useState(2)
    const [films, setFilms] = useState(useLoaderData())

    const getMoreMovies = async() => {
        setFilms([...films, await getFilmsForGenre(genreId, page)])
        setPage(page+1)
    }

    return (
        <>
        <div style={{display:"flex", flexWrap:"wrap", gap:"5vmin"}}>
            {
                films.map((film)=>(
                    <MovieIcon film={film} />
                ))
            }
        </div>
        <button onClick={async() => await getMoreMovies()}>More Movies</button>
        </>
    )
}

export default CategoryPage