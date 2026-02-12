import { useState, useEffect } from "react";

const filmList = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

// array di generi senza ripetizioni
const genreList = [];

for (const film of filmList) {
  console.log(film.genre);
  if (!genreList.includes(film.genre)) {
    genreList.push(film.genre);
  }
}

console.log("genreList", genreList);

export default function App() {
  const [genreSelected, setGenreSelected] = useState("");

  //lista film filtrata per genere selezionato nella select
  const filteredFilmList = genreSelected === "" ? filmList : filmList.filter((film) => film.genre === genreSelected);
  console.log("filteredFilmList", filteredFilmList);

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
      <section className="container">
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
    </>
  );
}
