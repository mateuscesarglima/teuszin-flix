
import FilmForm from '../Film/FilmForm'
import api from '../services/api'
import styles from './NewFilm.module.css'

const NewFilm = () => {

    const createPost = (film) => {
        api
            .post('http://localhost:8080/films')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                //redirect
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newfilm_container}>
            <h1>New Film</h1>
            <p>Load your films to watch them after</p>
            <FilmForm handleSubmit={createPost} btnText='Insert Film'/>
        </div>
    )
}

export default NewFilm