
import styles from "./Select.module.css"



const Select = ({text, name, handleOnChange }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handleOnChange}>
            <option>Select...</option>
            <option value="COMEDY">Comedy</option>
            <option value="FICTION">Fiction</option>
            <option value="ACTION">Action</option>
            <option value="MYSTERY">Mystery</option>
            <option value="ROMANCE">Romance</option>
            <option value="TERROR">Terror</option>
            <option value="FAMILY">Family</option>
            <option value="THRILLER">Thriller</option>
        </select>
    </div>
  );
};

export default Select;
