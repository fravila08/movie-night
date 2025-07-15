import { InputGroup, Form } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = ({handleClose}) => {
    const [userInput, setUserInput] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(event)=> {
        event.preventDefault()
        navigate(`/search/${userInput}/`)
        setUserInput("")
        handleClose()
    }

    return (
        <Form onSubmit={(event)=>handleSubmit(event)}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
                <Form.Control
                placeholder="Searching for a movie?"
                aria-label="userInput"
                aria-describedby="basic-addon1"
                onChange={(e)=>setUserInput(e.target.value)}
                value={userInput}
                />
            </InputGroup>
        </Form>
    )
}

export default SearchBar;