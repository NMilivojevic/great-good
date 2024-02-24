import React, { createContext, useContext, useReducer } from "react";

const initialState = {
    loggedIn: false,
    account: null,
    balance: null,
    amount: "",
    minStakeAmount: null,
    contract: null,
    totalSupply: null,
    isLoading: true,
    isError: false,
    isSuccess: false,
    toast: null,
    message: "",
    inputError: false,
};

export const ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SET_ACCOUNT: "SET_ACCOUNT",
    SET_BALANCE: "SET_BALANCE",
    SET_AMOUNT: "SET_AMOUNT",
    SET_MIN_STAKE_AMOUNT: "SET_MIN_STAKE_AMOUNT",
    SET_CONTRACT: "SET_CONTRACT",
    SET_TOTAL_SUPPLY: "SET_TOTAL_SUPPLY",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
    SET_SUCCESS: "SET_SUCCESS",
    SET_TOAST: "SET_TOAST",
    SET_MESSAGE: "SET_MESSAGE",
    SET_INPUT_ERROR: "SET_INPUT_ERROR",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return { ...state, loggedIn: true };
        case ACTIONS.LOGOUT:
            return { ...state, loggedIn: false, account: null, amount: "" };
        case ACTIONS.SET_ACCOUNT:
            return { ...state, account: action.payload };
        case ACTIONS.SET_BALANCE:
            return { ...state, balance: action.payload };
        case ACTIONS.SET_AMOUNT:
            return { ...state, amount: action.payload };
        case ACTIONS.SET_MIN_STAKE_AMOUNT:
            return { ...state, minStakeAmount: action.payload };
        case ACTIONS.SET_CONTRACT:
            return { ...state, contract: action.payload };
        case ACTIONS.SET_TOTAL_SUPPLY:
            return { ...state, totalSupply: action.payload };
        case ACTIONS.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case ACTIONS.SET_ERROR:
            return { ...state, isError: action.payload };
        case ACTIONS.SET_SUCCESS:
            return { ...state, isSuccess: action.payload };
        case ACTIONS.SET_TOAST:
            return { ...state, toast: action.payload };
        case ACTIONS.SET_MESSAGE:
            return { ...state, message: action.payload };
        case ACTIONS.SET_INPUT_ERROR:
            return { ...state, inputError: action.payload };
        default:
            return state;
    }
};

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
