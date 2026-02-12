import { useState, useEffect } from "react";

const filmGenreList = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

// array di generi senza ripetizioni
const genreList = [];

for (const film of filmGenreList) {
  if (!genreList.includes(film.genre)) {
    genreList.push(film.genre);
  }
}

export default function App() {
  const [filmList, setFilmList] = useState(filmGenreList);
  const [genreSelected, setGenreSelected] = useState("");
  const [filmSearch, setFilmSearch] = useState("");
  const [filmAdded, setFilmAdded] = useState("");

  let filteredFilmList = filmList;

  //filtri per tipo di genere con select e nome del film con input

  if (genreSelected !== "") {
    filteredFilmList = filteredFilmList.filter((film) => film.genre === genreSelected);
  }

  if (filmSearch !== "") {
    filteredFilmList = filteredFilmList.filter((film) => film.title.toLocaleLowerCase().includes(filmSearch.toLowerCase()));
  }

  const addNewFilm = (e) => {
    e.preventDefault();

    if (!filmAdded) return;

    setFilmList([...filmList, { title: filmAdded, genre: "" }]);
    setFilmAdded("");
  };

  return (
    <>
      <header className="bg-light">
        <div className="container p-2">
          <h1>Movie filter</h1>
        </div>
      </header>
      {/* lista film mappati sulla lista filtrata per genere */}
      <section className="container">
        <ul>
          {filteredFilmList.map((film, index) => (
            <li key={index}>
              <span>{film.title}</span> <span>{film.genre}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* select mappata sull'array di generi senza ripetizioni */}
      <section className="container my-3">
        <label htmlFor="genre-selection">Filtra per genere</label>
        <select value={genreSelected} onChange={(e) => setGenreSelected(e.target.value)} id="genre-selection" className="form-select" aria-label="Default select example">
          <option value="">Seleziona un genere</option>
          {genreList.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </section>
      {/* sezione ricerca per titolo */}
      <section className="container my-3">
        <form action="#">
          <label className="form-label" htmlFor="title-search">
            Cerca per titolo:
          </label>
          <input value={filmSearch} onChange={(e) => setFilmSearch(e.target.value)} className="form-control" type="text" name="title-search" id="title-search" />
        </form>
      </section>
      {/* seziona aggiunta titolo */}
      <section className="container my-3">
        <form action="#" onSubmit={addNewFilm}>
          <label className="form-label" htmlFor="title-addition">
            Aggiungi titolo:
          </label>
          <div className="input-group mb-3">
            <input value={filmAdded} onChange={(e) => setFilmAdded(e.target.value)} className="form-control" type="text" name="title-addition" id="title-addition" />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
              Aggiungi
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
