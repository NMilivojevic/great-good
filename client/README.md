# Frontend Documentation

## Overview

This project is a React application integrated with blockchain contracts using ethers.js for Ethereum blockchain interaction. The application is designed to interact with smart contracts deployed on the Mumbai Polygon network using MetaMask Browser Extension.

## Project setup

-   **Development Environment**: Bootstraped with Vite.
-   **Blockchain Integration**: Utilized ethers.js for interaction with Ethereum smart contracts.
-   **Folder Structure**: Organized the project into the following structure:
    -   `src/`: Contains the main application code.
        -   `components/`: Holds React components for UI.
        -   `contracts/`: Includes smart contract files and their artifacts.
        -   `context/`: Manages application state using React context.
        -   `hooks/`: Implements custom hooks for interacting with contracts and managing state.
        -   `pages/`: Contains page-level components.
        -   `styles/`: Includes CSS modules for styling.
        -   `assets/`: Stores images and other static assets.
        -   `utils/`: Contains utility functions.
        -   `App.js` and `index.js`: Entry points for the application.

## State Management

-   **Context API**: Utilized React context for global state management without prop drilling.
-   **Custom Hooks**: Created custom hooks for interacting with blockchain contracts and managing related state:
    -   `useContract`: Sets up the contract instance.
    -   `useStake`: Handles stake transactions using MetaMask.
    -   `useBalance`: Retrieves the balance of the user's account from the backend.
    -   `useLogin`: Handles user login using MetaMask.
    -   `useWithdraw`: Manages withdraw transactions using MetaMask.
    -   `useLogout`: Handles user logout by dispatching the logout action to the context.
    -   `useMinStakeAmount`: Retrieves the minimum stake amount from the backend.
    -   `useTotalSupply`: Retrieves the total supply of tokens from the backend.

## Error Handling

-   **Error Management**: Implemented error handling using `eth-rpc-errors` to better manage MetaMask errors.

## Contract Integration

-   **Contract Setup**: Configured contract interaction using ethers.js:
    -   Created JSON artifacts from Solidity contracts.
    -   Utilized contract ABIs for contract instance creation.
    -   Integrated contract methods for stake, withdraw, balance querying, etc.

## Usage of CSS Modules

CSS modules were chosen for styling in this test assignment to maintain simplicity. Rather than introducing more complex styling solutions like Material UI, Chakra UI, etc, CSS modules offer a straightforward approach for styling components without overcomplicating the project. This decision was made to prioritize simplicity and focus on demonstrating core functionality without unnecessary dependencies.

## Dependencies

-   **eth-rpc-errors**: A library for handling Ethereum RPC (Remote Procedure Call) errors.
-   **ethers**: A JavaScript library for interacting with the Ethereum blockchain.
-   **rc-tooltip**: A React component library for creating customizable tooltips.

## Notes

-   In order for account switching in MetaMask to reflect immediately in the user interface, users must enable both accounts for the domain.

-   The decision not to persist user login state permanently in the browser session was intentional and aligns with the primary focus of the application on smart contract functionalities.

## Demo

-   Check out the live demo of the React app hosted on Glitch: [Great Good App](https://great-good-app.glitch.me/)
-   The backend API hosted on Glitch: [Great Good API](https://great-good-api.glitch.me/)
