import { useParams } from "react-router-dom";
import CategoryResultsPage from "./CategoryResultsPage";
import {  useEffect, useState } from "react";
import { getFilmsForGenre, searchForFilm } from "../utilities";

const CatResWrapper = () => {
    const [param, setParam] = useState(null)
    const params = useParams()
    
    useEffect(()=> {
        if('genreId' in params) {
            setParam(params.genreId)
        }
        else{
            setParam(params.query)
        }
    }, [params])

    return (
        <>
        {
            param?
            <CategoryResultsPage
             dataLoader={'genreId' in params? getFilmsForGenre: searchForFilm }
             paramState={param}
            />
            :
            null
        }
        </>
    )

}

export default CatResWrapper;