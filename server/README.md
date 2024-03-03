# Backend Documentation

## Overview

This project serves as the backend for the React part of the application. The backend is responsible for handling API requests related to blockchain interactions.

## Project setup

-   **Development Environment**: Developed using Node.js and Express.js framework.
-   **Blockchain Integration**: Utilized Web3.js for interacting with Ethereum smart contracts.
-   **Folder Structure**: Organized the backend into a single file named `app.js` for simplicity and streamlined development.

## Project Structure

The project now consists of a single file:

-   `app.js`: Contains all the backend logic, including route handling and contract interaction.

## Polygon Mumbai Test Network Connection

The backend service connects to the Polygon Mumbai Test Network using the Infura endpoint.

## Available Routes

-   `/balance/:account`: Get balance information for a specified account.
-   `/minStakeAmount`: Get minimum stake amount information.
-   `/totalSupply`: Get total supply information.

## Error handling

Error handling might be omitted or kept minimal to streamline development efforts and focus on demonstrating key features. The primary emphasis is on demonstrating functionality and meeting project requirements. Error handling may be added in subsequent iterations or as part of future development efforts.

## Dependencies

-   **express**: Web framework for Node.js, used to handle HTTP requests.
-   **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
-   **dotenv**: Library for loading environment variables from a `.env` file.
-   **web3**: Ethereum JavaScript API for interacting with Ethereum nodes.

## Demo

-   Check out the live demo of the React app hosted on Glitch: [Great Good App](https://great-good-app.glitch.me/)
-   The backend API hosted on Glitch: [Great Good API](https://great-good-api.glitch.me/)
