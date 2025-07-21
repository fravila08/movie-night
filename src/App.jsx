import './App.css'
import { Outlet } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Button } from 'react-bootstrap'



function App() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const location = useLocation()

  const handleUser = () => {
    if (!selectedUser && location.pathname !== '' ){
      navigate("")
    }
  }


  useEffect(()=>{
    handleUser()
    console.log(selectedUser)
  }, [selectedUser])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Outlet context={{selectedUser, setSelectedUser}}/>
      <NavBar show={show} handleClose={handleClose} />
    </>
  )
}

export default App
