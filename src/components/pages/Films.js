import Container from "../layouts/Container";
import styles from "./Film.module.css";
import LinkButton from "../layouts/LinkButton";
import FilmCard from "../Film/FilmCard";
import { useState, useEffect } from "react";
import api from "../services/api";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api
      .get("/films")
      .then((data) => {
        console.log(data);
        setFilms(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.film_container}>
      <div className={styles.title_container}>
        <h1>Filmes</h1>
        <LinkButton to="newFilm" text="Insert Film" />
      </div>
      <Container customClass="start">
        {films.length > 0 &&
          films.map((film) => <FilmCard 
          id={film.id} 
          name={film.filmName}
          category={film.filmCategory}
          />)}
      </Container>
    </div>
  );
};

export default Films;
