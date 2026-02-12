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

export default function Main() {
  const [filmList, setFilmList] = useState(filmGenreList);
  const [genreSelected, setGenreSelected] = useState("");
  const [filmSearch, setFilmSearch] = useState("");
  const [filmAdded, setFilmAdded] = useState("");

  const [addedGenreSelected, setAddedGenreSelected] = useState("");

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

    setFilmList([...filmList, { title: filmAdded, genre: addedGenreSelected }]);
    setFilmAdded("");
  };

  const deleteFilm = (deletedFilm) => {
    const updatedList = filmList.filter((film, index) => index !== deletedFilm);
    setFilmList(updatedList);
  };
  return (
    <main>
      {/* lista film mappati sulla lista filtrata per genere */}
      <section className="container">
        <ul className="list-group">
          {filteredFilmList.map((film, index) => (
            <li key={index} className="list-group-item">
              <span>{film.title}</span> <span>{film.genre}</span>{" "}
              <span>
                <button onClick={(e) => deleteFilm(index)} className="btn btn-outline-danger">
                  Elimina
                </button>
              </span>
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
      <section className="container">
        <form onSubmit={addNewFilm} className="row row-cols-lg-auto g-3 align-items-center">
          <label className="form-label" htmlFor="title-addition">
            Aggiungi titolo:
          </label>
          <div className="col-auto">
            <input value={filmAdded} onChange={(e) => setFilmAdded(e.target.value)} className="form-control" type="text" name="title-addition" id="title-addition" />
          </div>

          <div className="col-auto">
            <select value={addedGenreSelected} onChange={(e) => setAddedGenreSelected(e.target.value)} className="form-select" id="inlineFormSelectPref">
              <option value="">Seleziona genere</option>
              {genreList.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="col-auto">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
              Aggiungi
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
