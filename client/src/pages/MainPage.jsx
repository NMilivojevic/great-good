import BackgroundEffect from "../components/animations/BackgroundEffect";
import { useAppContext } from "../context/Context";
import LoggedInPage from "./LoggedInPage";
import PublicPage from "./PublicPage";

const MainPage = () => {
    const { state } = useAppContext();
    const { loggedIn } = state;
    return (
        <BackgroundEffect loggedIn={loggedIn}>
            {loggedIn ? <LoggedInPage /> : <PublicPage />}
        </BackgroundEffect>
    );
};

export default MainPage;
