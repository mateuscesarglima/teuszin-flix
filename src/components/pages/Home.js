import homeImg from '../../img/holidays-friends-relaxing-and-watching-tv-together.png'
import styles from './Home.module.css'
import LinkButton from '../layouts/LinkButton'

const Home = () => {
    return(
        <section className={styles.home_container}>
            <h1>Welcome to <span>TeuszinFlix</span></h1>
            <p>Your best site to insert movies and watch them later</p>
            <LinkButton to='newFilm' text='Insert Film'/>
            <img src={homeImg} alt="" />
        </section>
    )
}

export default Home