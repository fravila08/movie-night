import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const DetailPage = () => {
  const [movie, setMovie] = useState(useLoaderData());

  useEffect(() => {
    console.log(movie);
  }, []);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
      <Card.ImgOverlay style={{backgroundColor:"grey", minHeight:"10vmin", maxHeight:"fit-content"}}>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
        <Card.Text>{movie.release_date}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DetailPage;
