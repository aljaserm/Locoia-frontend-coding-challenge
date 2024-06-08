# Lucky Names Checker

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [TODO](#todo)
  - [Further Improvements](#further-improvements)
    - [Authentication](#authentication)
    - [Rate Limiting and Error Handling](#rate-limiting-and-error-handling)
    - [Deployment](#deployment)
    - [Code Quality](#code-quality)
    - [Accessibility](#accessibility)
    - [CSS Structure](#css-structure)
    - [Additional Improvements](#additional-improvements)

## Project Description

This project is a single-page application (SPA) that allows users to check if their name is in the lucky names list for the day. If the name is lucky, the user is declared a winner. The application uses Vue.js 3 and Element Plus for the UI components. The state management is handled by Vuex.

## Features

- Enter a name to check if it is a lucky name.
- Display a list of winners for the day.
- Clear the list of winners.
- Navigate between the home page and the winners page.

## Requirements

- Node.js and npm (or yarn) installed.
- Vue CLI installed.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/lucky-names-checker.git
cd lucky-names-checker
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

## Running the Project

1. Start the development server:

```bash
npm run serve
# or
yarn serve
```

2. Open your browser and navigate to `http://localhost:8080`.

## Project Structure

- `src/`
    - `api/`
        - `peopleApi.js`: Mock API to fetch the list of lucky names.
    - `components/`
        - `NameSearcher.vue`: Component to handle name input and checking.
        - `NameSearchResponse.vue`: Component to display the name search response.
    - `router/`
        - `index.js`: Router configuration.
    - `store/`
        - `index.js`: Vuex store configuration.
    - `views/`
        - `Home.vue`: Home page component.
        - `Winners.vue`: Winners page component.
    - `App.vue`: Root component.
    - `main.js`: Main entry point of the application.

## TODO

### Further Improvements

#### Authentication

- Implement user authentication to ensure only authorized users can access or modify the list of winners.
- Use a secure method such as JWT (JSON Web Tokens) for managing user sessions.

#### Rate Limiting and Error Handling

- Implement rate limiting to prevent abuse of the API.
- Improve error handling to gracefully manage API unavailability or other errors.
- Implement retry strategies for API calls that fail due to transient issues.

#### Deployment

- Deploy the application to a cloud environment such as AWS, Azure, or Google Cloud.
- Use CI/CD pipelines to automate the deployment process.
- Ensure the application is running with the latest version of the code.

#### Code Quality

- Set up tools to measure and enforce code quality, such as ESLint and Prettier.
- Apply linting rules and format the code according to preferred guidelines.

#### Accessibility

- Ensure the application is accessible to users with disabilities.
- Follow best practices for web accessibility, such as using semantic HTML and providing alternative text for images.

#### CSS Structure

- Structure CSS to maximize reusability and minimize leakage between components.
- Use a CSS preprocessor like SCSS or a CSS-in-JS solution for better maintainability.

#### Additional Improvements

- Add unit tests and integration tests to ensure the application's reliability.
- Optimize performance by lazy loading components and using efficient data fetching techniques.
- Collect user feedback and iterate on the application's design and functionality.
