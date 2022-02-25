import styles from './FilmCard.module.css'


const FilmCard = ({ id, name, category, handleRemove }) => {
  return (
    <div className={styles.film_card}>
      <h4>{name}</h4>
    </div>
  );
};

export default FilmCard;
