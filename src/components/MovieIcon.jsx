import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieIcon = ({ film }) => {
  const { title, poster_path } = film;
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/films/${film.id}/`)
  }

  return (
    <Card
      className="bg-dark text-white"
      onClick={handleClick}
      style={{ minWidth: "20vmin", maxWidth: "20vmin" }}
    >
      <Card.Img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="Card image"
      />
    </Card>
  );
};

export default MovieIcon;
