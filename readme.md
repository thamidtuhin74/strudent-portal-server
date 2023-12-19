# Student Portal Server

## Overview

The Student Portal Server is a backend application that serves as the backbone for the Student Portal system. It handles user authentication, manages student data, and provides API endpoints for communication with the frontend.

## Table of Contents

- [API Documentation & Links](#api-documentation-link)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
<!-- - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license) -->

## API Documentation & Links

#### I used vercel to online my ServerAPI links are given below ⬇
- Server home : https://strudent-portal-server.vercel.app/
- All Courses : https://strudent-portal-server.vercel.app/all-courses/
- Single Course: https://strudent-portal-server.vercel.app/all-courses/_id


## Features

- User authentication and authorization
- RESTful API for communication with the frontend
- Admin Can ADD/ EDIT/ Remove a course

## Technologies

- Node.js 
- MongoDB 
- expressJS
- vercel

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

- Node.js 
- MongoDB 
- expressJS

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-portal-server.git

2. Install dependencies:
    ```bash
    cd student-portal-server
    npm install

3. Configure environment variables:

    Create a .env file in the root directory and define the following variables:
    ```
    USER_NAME=username_of_mongodb_user
    PASSWORD=password_of_mongodb_user

4. Start the server:
    ```
    npm start


