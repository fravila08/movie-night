import { useParams } from "react-router-dom"

const DetailPage = () => {
    const {film_id} = useParams()
    return (
        <h1>Detail Page {film_id}</h1>
    )
}

export default DetailPage