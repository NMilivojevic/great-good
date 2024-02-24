import styles from "../../styles/footer/footer.module.css";
import footerLogoSrc from "../../assets/images/logo-footer.webp";
import Image from "../image/Image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image src={footerLogoSrc} alt="Footer logo" />
        </footer>
    );
};

export default Footer;
