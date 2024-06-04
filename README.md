# Memo_rise

## About MemoRise

MemoRise is a bookstore specializing in books on learning and personal development. Catering to students, professionals, and individuals eager to enhance their skills, MemoRise is now expanding online with its e-commerce platform to better reach and serve its customers.

## Project Objective

The aim of this project is to build a user-friendly and secure e-commerce platform for MemoRise. This platform will support high transaction volumes, offer personalized shopping experiences, and efficiently manage both physical and digital book inventories, helping MemoRise become a leading online source for specialized books.

## Initializing the Project

### Prerequisites
Ensure you have the following installed on your machine:

Node.js (Preferably the latest stable version)
npm (Comes with Node.js)
Git

## Set Up
Clone the Repository:

```bash
git clone https://github.com/Leila042/Memo_rise.git
cd Memo_rise
```

### Initialize the Front-End:

Navigate to the front-end directory and install the dependencies:

```bash
cd frontend
npm install
```

To start the React application:

```bash
npm start
```

### Initialize the Back-End:

From the root of the project, navigate to the backend directory:

```bash
cd backend
npm install
```

To start the Express server:

```bash
npm start
```

Database Setup

To set up the database, please follow these steps:

Ensure that MySQL is installed and running on your machine.
Run the setup.sql script to create the necessary tables:
```bash
mysql -u root -p < db/setup.sql
```

To insert test data, execute the seed.sql script:
```bash
mysql -u root -p < db/seed.sql
```
