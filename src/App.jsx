import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'



function App() {
  const [user, setUser] = useState(null)
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
      <Outlet context={{user, setUser}}/>
    </>
  )
}

export default App
