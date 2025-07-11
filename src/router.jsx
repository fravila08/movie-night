import { createHashRouter } from "react-router-dom";
import App from "./App";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { getGenreFilms } from "./utilities";

export const router = createHashRouter([{
    path:'/movie-night/',
    element:<App/>,
    children:[
        {
            index:true,
            element: <UserPage/>
        },
        {
            path:"films/",
            element:<HomePage/>,
            loader: getGenreFilms,
        },
        {
            path:"films/:film_id/",
            element: <DetailPage/>
        }
    ]
}])
