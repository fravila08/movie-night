import { useEffect, useState } from "react";
import MovieIcon from "../components/MovieIcon";

const CategoryResultsPage = ({dataLoader, paramState}) => {
  const [page, setPage] = useState(2);
  const [maxPage, setMaxPage] = useState(0);
  const [films, setFilms] = useState([]);

  const getMoreMovies = async () => {
    const [newFilms, highestPage] = await dataLoader(paramState, page);
    setFilms([...films, ...newFilms]);
    setPage(page + 1);
  };

  useEffect(() => {
    setPage(2)
    const initData = async()=> {
        const [newFilms, highestPage] = await dataLoader(paramState)
        setFilms(newFilms)
        setMaxPage(highestPage)
    }
    initData()
  }, [paramState]);
  

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5vmin" }}>
        {films.map((film) => (
          <MovieIcon film={film} key={film.id}/>
        ))}
      </div>
      {page < maxPage ? (
        <button onClick={async () => await getMoreMovies()}>More Movies</button>
      ) : null}
    </>
  );
};

export default CategoryResultsPage;
