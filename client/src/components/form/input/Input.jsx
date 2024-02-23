import styles from "./input.module.css";

const Input = ({ label, ...props }) => {
    return <input className={styles.input} {...props} />;
};

export default Input;
