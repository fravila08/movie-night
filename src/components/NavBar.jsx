import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { getGenres } from '../utilities';

function NavBar({show, handleClose}) {  
  const [genres, setGenres] = useState([])

  useEffect(()=>{
    const fetchGenres = async()=>{
        setGenres(await getGenres())
    }
    fetchGenres()
  }, [])


  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {
                genres.map((genre)=>(

                    <ListGroup.Item>{genre.name}</ListGroup.Item>
                ))
            }
            </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;