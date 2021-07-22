# Tech Blog (MVC)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

This application provides a blog site where developers can publish blog posts and comment on others' blog posts. It provides users a space to discuss and learn with each other.

With Express.js APIs, it uses Handlebars.js for templating, Sequelize and MySQL2 to connect to a MySQL database, and the express-session package for authentication purposes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

To use this application, navigate to the deployed Heroku [site](https://fast-meadow-10211.herokuapp.com/).

To install this application locally yourself, download and clone the files from this repository. Create your own .env file (for the database name, your user, and your password). Run 'npm install' to install the packages in the package.json (required packages include express, mysql2, sequelize, handlebars, dotenv, bcrypt, express-session, express-handlebars, and connect-session-sequelize).

The schema.sql file can be used to create a MySQL database, and the seeds files can populate the database (by running 'npm run seed' in the command-line). The server can then be started in the command-line by running 'npm start,' and the application can be viewed on your local browser at localhost.

## Usage

If you use the application through the deployed [Heroku site](https://fast-meadow-10211.herokuapp.com/), simply navigate to and interact with the site from there. Before viewing any of the links, the blog will prompt you to login or signup. Create an account, and from there, you are able to access all of the blog posts on the Homepage (and have the ability to comment). You also are able to access your own posts on the Dashboard, where you can create a new post, or update/delete one of your previous posts.

If the program was cloned, downloaded, and installed instead, get the application running by typing "npm start" into the command-line. All features of the application are then accessible through _localhost_ on your browser or other applications.

_View Blog Posts and Comment_
![Gif of Homepage](assets/Comments.gif)

_Interact with Individual Dashboard_
![Gif of Dashboard](assets/Dashboard.gif)

## License

This project is licensed under [MIT License](https://opensource.org/licenses/MIT).

## Questions

See more of my work on my [GitHub Profile](https://github.com/msteblu/).
For any additional questions, reach me at my email: megan@steblay.net.
