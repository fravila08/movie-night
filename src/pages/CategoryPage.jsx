import { useEffect, useState } from "react";
import { useLoaderData, useParams, useFetcher } from "react-router-dom";
import { getFilmsForGenre } from "../utilities";
import MovieIcon from "../components/MovieIcon";

const CategoryPage = () => {
  const { genreId } = useParams();
  const [page, setPage] = useState(2);
  const [maxPage, setMaxPage] = useState(useLoaderData()[1]);
  const [films, setFilms] = useState(useLoaderData()[0]);
  const fetcher = useFetcher();

  const getMoreMovies = async () => {
    const newFilms = await getFilmsForGenre(genreId, page);
    console.log(page, maxPage);
    setFilms([...films, ...newFilms[0]]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetcher.load(`/genres/${genreId}`);
    setPage(2);
  }, [genreId]);

  useEffect(() => {
    if (fetcher.data) {
      const [newFilms, newMaxPage] = fetcher.data;
      setFilms(newFilms);
      setMaxPage(newMaxPage);
    }
  }, [fetcher.data]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5vmin" }}>
        {films.map((film) => (
          <MovieIcon film={film} />
        ))}
      </div>
      {page < maxPage ? (
        <button onClick={async () => await getMoreMovies()}>More Movies</button>
      ) : null}
    </>
  );
};

export default CategoryPage;
