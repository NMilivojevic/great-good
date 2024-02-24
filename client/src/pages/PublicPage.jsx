import WelcomeText from "../components/animations/WelcomeText";
import PublicLayout from "../components/layout/PublicLayout";
import Toast from "../components/toast/Toast";
import { useAppContext } from "../context/Context";

const PublicPage = ({}) => {
    const { state } = useAppContext();

    const { toast, isSuccess, isError, message } = state;

    const status =
        !isSuccess && !isError
            ? "info"
            : isSuccess
            ? "success"
            : isError
            ? "error"
            : "info";

    return (
        <PublicLayout>
            <WelcomeText label="Please connect your wallet." />
            {toast && <Toast status={status} message={message} />}
        </PublicLayout>
    );
};

export default PublicPage;
