import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Button } from 'react-bootstrap'



function App() {
  const [user, setUser] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const location = useLocation()

  const handleUser = () => {
    if (!user && location.pathname !== '' ){
      navigate("")
    }
  }

  useEffect(()=>{
    // TBDAuthentication()
  },[])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Outlet context={{user, setUser}}/>
      <NavBar show={show} handleClose={handleClose} />
    </>
  )
}

export default App
