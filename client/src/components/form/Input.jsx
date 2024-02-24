import styles from "../../styles/form/form.module.css";

const Input = ({ label, additionalClass, ...props }) => {
    return (
        <input
            className={`${styles.formInput} ${
                additionalClass ? styles.additionalClass : ""
            }`}
            {...props}
        />
    );
};

export default Input;
