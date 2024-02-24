# Backend Documentation

## Overview

This project serves as the backend for a React application integrated with blockchain contracts using ethers.js for Ethereum blockchain interaction. The backend is responsible for handling API requests related to blockchain interactions.

## Project setup

-   **Development Environment**: Developed using Node.js and Express.js framework.
-   **Blockchain Integration**: Utilized ethers.js for interacting with Ethereum smart contracts.
-   **Folder Structure**: Organized the backend into the following structure:
    -   `/contracts`: Contains Solidity smart contract files and their compiled JSON artifacts.
    -   `/controllers`: Handles the logic for each route.
    -   `/routes`: Defines routes and their corresponding handlers.
    -   `/services`: Provides functionality for interacting with the blockchain or other backend operations.
    -   `/utils`: Houses utility functions and configurations.

## Project Structure

The project is structured as follows:

-   `services`: Contains modules responsible for interacting with the Ethereum blockchain and smart contract.
-   `controllers`: Handles HTTP request/response logic.
-   `routes`: Defines API endpoints and routes requests to the appropriate controllers.

## Polygon Mumbai Test Network Connection

The backend service connects to the Polygon Mumbai Test Network using the Infura endpoint.

## Flow for Balance Retrieval

1. **Service Layer**:

    - The `balanceService.js` module (`/services/balanceService.js`) defines the `getBalance` function.
    - This function interacts with the Ethereum blockchain using the `contractService` to retrieve the balance of a specified account.

2. **Controller Layer**:

    - The `balanceController.js` module (`/controllers/balanceController.js`) imports the `getBalance` function from `balanceService.js`.
    - It defines an async function `getBalance` that handles HTTP requests to fetch balance information.
    - Upon receiving a request, it calls the `getBalance` function from `balanceService` and sends the balance as a JSON response.

3. **Routing Layer**:
    - The `balanceRoutes.js` module (`/routes/balanceRoutes.js`) defines a route to handle GET requests for retrieving balance.
    - It imports the `getBalance` function from the `balanceController` and sets up a route to trigger this function when a GET request is made to `/:account`.

## Flow for Minimum Stake Amount and Total Supply

The flow for retrieving minimum stake amount and total supply follows a similar pattern as the balance retrieval flow, with separate service, controller, and route modules for each functionality. These modules are named accordingly (`minStakeService.js`, `minStakeController.js`, `minStakeRoutes.js`, `totalSupplyService.js`, `totalSupplyController.js`, `totalSupplyRoutes.js`) and follow the same structure and organization as described above for balance retrieval.

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
