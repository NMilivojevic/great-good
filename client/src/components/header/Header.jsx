import styles from "../../styles/header/header.module.css";
import logoHeaderSrc from "../../assets/images/logo-header.webp";
import Image from "../image/Image";
import PrimaryButton from "../button/PrimaryButton";
import useLogin from "../../hooks/use-login";
import useLogout from "../../hooks/use-logout";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const Header = () => {
    const { handleLogin, loggedIn, account } = useLogin();
    const { handleLogout } = useLogout();
    const isTablet = window.innerWidth < 768;
    const renderAccount = () => {
        if (isTablet && loggedIn && account.length > 5) {
            return `${account.substring(0, 5)}...${account.substring(
                account.length - 5
            )}`;
        } else {
            return account;
        }
    };

    return (
        <header className={styles.header}>
            <nav className={loggedIn ? styles.navLoggedIn : styles.nav}>
                <Image src={logoHeaderSrc} alt="Header Logo" />
                {loggedIn ? (
                    <div className={styles.container}>
                        {isTablet ? (
                            <Tooltip
                                placement="bottom"
                                overlay={account}
                                showArrow={false}
                                trigger={["hover"]}
                            >
                                <p className={styles.address}>
                                    {renderAccount()}
                                </p>
                            </Tooltip>
                        ) : (
                            <p className={styles.address}>{renderAccount()}</p>
                        )}
                        <PrimaryButton onClick={handleLogout} label="Logout" />
                    </div>
                ) : (
                    <PrimaryButton
                        onClick={handleLogin}
                        label="Connect Wallet"
                    />
                )}
            </nav>
        </header>
    );
};

export default Header;
