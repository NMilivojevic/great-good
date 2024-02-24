# GreatGood Test Assignment

## Description

This project is a full-stack application for a simple staking contract on Mumbai testnet.

## Prerequisites

-   Node 18

## Project Structure

The project is organized into separate frontend and backend folders:

-   **client**: Contains the frontend codebase built with React.js.
-   **server**: Contains the backend codebase built with Node.js and Express.js.

Each folder contains its own detailed README.md file with explanation.

## Getting Started

1. Clone this repository.
2. Navigate to the `client` folder for frontend setup:
    ```bash
    cd client
    ```
3. Install frontend dependencies:
    ```bash
    npm install
    ```
4. Start the frontend development server:
    ```bash
    npm run dev
    ```
5. Open your browser and navigate to `http://localhost:5173` to view the frontend application.

6. Navigate to the `server` folder for backend setup:
    ```bash
    cd ../server
    ```
7. Install backend dependencies:
    ```bash
    npm install
    ```
8. Start the backend server:
    ```bash
    npm start
    ```
9. The backend server will be running on `http://localhost:3000`.

## Environment Variables for the server

To run the application server locally, you'll need to set up the following environment variables for the server.

-   **INFURA_URL**: The URL of the Infura endpoint.
-   **INFURA_KEY**: The Infura project ID.
-   **CONTRACT_ADDRESS**: The address of the smart contract.

### Setting Up Environment Variables for the server

1. Create a new file named `.env` in the root directory of the `server` folder.
2. Add the following lines to the `.env` file:

```
INFURA_URL=https://polygon-mumbai.infura.io/v3/
INFURA_KEY=7dca142182e54feabf04bacfd87732d7
CONTRACT_ADDRESS=0xdD08C4f14475D419ebe6C9f31865bf3730f7EF92

```

### Environment Variables for the client

To run the client application locally, you'll need to set up the following environment variables:

-   **VITE_BASE_URL**: The base URL of the backend API.
-   **VITE_CONTRACT_ADDRESS**: The address of the smart contract.

#### Setting Up Environment Variables for the client

1. Create a new file named `.env` in the root directory of the `client` folder.
2. Add the following lines to the `.env` file:

```
VITE_BASE_URL=http://localhost:3000
VITE_CONTRACT_ADDRESS=0xdD08C4f14475D419ebe6C9f31865bf3730f7EF92

```

## Frontend

The frontend is built with React.js and contains the user interface of the application. It interacts with the backend API to fetch and display data.

## Backend

The backend is built with Node.js and Express.js. It provides APIs to handle requests from the frontend.

## Demo

-   Check out the live demo of the React app hosted on Glitch: [Great Good App](https://great-good-app.glitch.me/)
-   The backend API hosted on Glitch: [Great Good API](https://great-good-api.glitch.me/)

```

```
