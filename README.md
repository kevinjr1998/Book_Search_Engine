# Book Search Engine

[Project Repo](https://github.com/kevinjr1998/Book_Search_Engine)

[Deployed Application](https://rocky-mountain-68929.herokuapp.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application is a MERN stack web application that allows a user to search for books and save their favourites. The front-end is created using `React`, `MongoDB` is the database and `Express` and `Node` used to handle requests and serve our application. `GraphQL` is used to handle queries and mutations to our database. A Google Books API is queried and will return a list of books that match the search term. A user also has the ability to login and sign up. Once logged in, a user can save books and will be notified if they have already saved them. This application uses `JSON Web Tokens` (`JWT`)  to authenticate a user and the requests a logged in user may make. A user can then see all the books they have saved and delete them from their saved list if they wish.


## Table Of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)


## Installation

There is no need to install anything. You can access the application at https://rocky-mountain-68929.herokuapp.com/

To install your own version that works locally, first, clone the repo to your local repository. Once you ahve done this, type `npm i` while in the root of the folder to install all dependencies (note, please make sure graphql is v15.x.x, and @apollo/server v2.x.x are installed, or the application will not work). make sure you have `MongoDB` installed on your device (and optionally `Robo 3T`). Then type `npm run develop` to start both the express erver and the `React` development server and you can test the app at `localhost:3000`.

To deploy your own version of the application, make sure you have a heroku account and a `MongoAtlas` database set up. Follow [these instrucions](https://devcenter.heroku.com/articles/git) to deploy your application to heroku. Once you have done this, go to your MongoAtlas database and find the option to connect application and copy the connection string. Update the connection string with your unsername, password and database name and go to the heroku page that relates to your application. On the settings tab, find the config vars section and in the `KEY` section, enter `MONGODB_URI` and in the `VALUE` section, enter your updated connection string. Once you have done this, the application should work in full.

## Usage

![demo](./assets/GoogleBookSearchGif.gif)


## License

This application is covered under the MIT License 

[License Link](https://opensource.org/licenses/MIT)

## Questions

If you have any questions, please contact me at kevinryner@yahoo.co.uk