# Frontend Documentation

## Overview

This project is a React application integrated with blockchain contracts using ethers.js for Ethereum blockchain interaction. The application is designed to interact with smart contracts deployed on the Mumbai Polygon network using MetaMask Browser Extension.

## Project setup

-   **Development Environment**: Bootstraped with Vite.
-   **Blockchain Integration**: Utilized ethers.js for interaction with Ethereum smart contracts.
-   **Folder Structure**: Organized the project into a single file named `app.jsx` for simplicity and streamlined development.

## State Management

-   **useState Hook**: Utilized React's `useState` hook for managing component state.

## Error Handling

-   **Error Management**: Implemented error handling using `eth-rpc-errors` to better manage MetaMask errors.

## Contract Integration

-   **Contract Setup**: Configured contract interaction using ethers.js:
    -   Created JSON artifacts from Solidity contracts.
    -   Utilized contract ABIs for contract instance creation.
    -   Integrated contract methods for stake, withdraw, balance querying, etc.

## CSS Styling

The project uses a single CSS file (`app.css`) for styling.

## Dependencies

-   **eth-rpc-errors**: A library for handling Ethereum RPC (Remote Procedure Call) errors.
-   **ethers**: A JavaScript library for interacting with the Ethereum blockchain.

## Notes

-   In order for account switching in MetaMask to reflect in the user interface, user must expose the accounts.

-   The decision not to persist user login state permanently in the browser session was intentional and aligns with the primary focus of the application on smart contract functionalities.

## Demo

-   Check out the live demo of the React app hosted on Glitch: [Great Good App](https://great-good-app.glitch.me/)
-   The backend API hosted on Glitch: [Great Good API](https://great-good-api.glitch.me/)
