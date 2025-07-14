import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { getGenres } from "../utilities";
import { useNavigate, Link } from "react-router-dom";

function NavBar({ show, handleClose }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      setGenres(await getGenres());
    };
    fetchGenres();
  }, []);


  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <Link to={`/films/`} onClick={handleClose}>
                <ListGroup.Item >
                  Home
                </ListGroup.Item>
              </Link>
            {genres.map((genre) => (
              <Link to={`/genres/${genre.id}/`} onClick={handleClose}>
                <ListGroup.Item >
                  {genre.name}
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
