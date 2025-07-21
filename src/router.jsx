import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { getHomeGenreFilms, getMovieDetails } from "./utilities";
import CatResWrapper from "./pages/CatResWrapper";
import { getExistingUsers } from "./userUtilities";

export const router = createBrowserRouter([{
    path:'',
    element:<App/>,
    children:[
        {
            index:true,
            element: <UserPage/>,
            loader: getExistingUsers
        },
        {
            path:"films/",
            element:<HomePage/>,
            loader: getHomeGenreFilms,
        },
        {
            path:"films/:film_id/",
            element: <DetailPage/>,
            loader: async({params})=>{
                const {film_id} = params;
                return await getMovieDetails(film_id)
            }
        },
        {
            path:"genres/:genreId/",
            element: <CatResWrapper />
        },
        {
            path:"search/:query/",
            element: <CatResWrapper/>
        }
    ]
}])
