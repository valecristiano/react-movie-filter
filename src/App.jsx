const filmList = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  return (
    <>
      <header className="bg-light">
        <div className="container p-2">
          <h1>Movie filter</h1>
        </div>
      </header>
      <section className="container">
        <ul>
          {filmList.map((film, index) => (
            <li key={index}>
              <span>{film.title}</span> <span>{film.genre}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="container">
        <label htmlFor="genre-selection">Filtra per genere</label>
        <select id="genre-selection" className="form-select" aria-label="Default select example">
          {filmList.map((film, index) => (
            <option key={index} value="{index}">
              {film.genre}
            </option>
          ))}
        </select>
      </section>
    </>
  );
}
