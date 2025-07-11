import { Card } from "react-bootstrap";

const MovieIcon = ({film}) => {
    const {title, image} = film

    return(
        <Card className="bg-dark text-white" style={{minWidth:"18rem"}}>
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay style={{display:"flex", justifyContent:"center"}}>
            <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
        </Card>
    )
}

export default MovieIcon;