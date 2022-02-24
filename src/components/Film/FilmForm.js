import { useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./FilmForm.module.css";

const FilmForm = ({handleSubmit, btnText, filmData}) => {
 
    const [film, setFilm] = useState(filmData || {})

    const submit = (e) => {
        e.preventDefault()
       handleSubmit(film)
    }

    function handleChange(e) {
        setFilm({...film, [e.target.name]: e.target.value})
    }
    


  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Film Name"
        name="name"
        placeholder="Enter Film Name"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Sinopse"
        name="sinopse"
        placeholder="Enter Sinopse"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Film Image"
        name="filmImage"
        handleOnChange={handleChange}
      />
      <Select name="film_category" text="Film Category" handleOnChange={handleChange} />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default FilmForm;
