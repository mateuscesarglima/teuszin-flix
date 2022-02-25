import { useNavigate } from "react-router-dom";
import FilmForm from "../Film/FilmForm";
import api from "../services/api";
import styles from "./NewFilm.module.css";

const NewFilm = () => {

  const navigate = useNavigate();

  const createPost = (film) => {
    api
      .post("/films", film)
      .then((data) => {
        console.log(data);
        navigate('/films', {message: 'Film inserted successfully!'})
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.newfilm_container}>
      <h1>New Film</h1>
      <p>Load your films to watch them after</p>
      <FilmForm handleSubmit={createPost} btnText="Insert Film" />
    </div>
  );
};

export default NewFilm;
