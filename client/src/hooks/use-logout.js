import { useAppContext, ACTIONS } from "../context/Context";

const useLogout = () => {
    const { state, dispatch } = useAppContext();

    const handleLogout = () => {
        dispatch({ type: ACTIONS.LOGOUT });
    };

    return { handleLogout };
};

export default useLogout;
