import styles from "../../styles/image/image.module.css";

const Image = ({ src, alt }) => {
    return <img className={styles.image} src={src} alt={alt} />;
};

export default Image;
