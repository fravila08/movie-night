import { Card } from "react-bootstrap";

const MovieIcon = ({film}) => {
    const {title, poster_path} = film

    return(
        <Card className="bg-dark text-white" style={{minWidth:"10rem"}}>
        <Card.Img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="Card image" />
        <Card.ImgOverlay style={{display:"flex", justifyContent:"center"}}>
            <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
        </Card>
    )
}

export default MovieIcon;