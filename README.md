<h1 align="center">
<br>
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="GoBarber" width="150">
<br>
<br>
GoBarber 
</h1>

<p align="center">An API for barber appointment and scheduling.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Features

A Node.js API built with Express and all the latest tools and best practices in development!

**Express** — A web microframework for Node
**Sequelize** — A SQL ORM for Node.js
**MongoDB** — Non-relational database
**Redis** — key-value data model
**Yup** - Object schema validation
**Sentry** - cross-platform application monitoring
**Nodemailer** - Send e-mails with Node.JS
**Lint** — ESlint/Prettier/Editor Config

## Dependencies

- [Node.js](https://nodejs.org/en/) V10.15.3
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Prerequisites

_In the next few weeks, I plan to include Docker directly in the repository with docker-compose, until there this step is required._

To run this server you will need three containers running on your machine.

To do so, you will need to run the following commands:

- `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`; src/config/redis.js
- `docker run --name mongobarber -p 27017:27017 -d -t mongo`; 
- `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`; src/config/database.js

_Remember: If you restart your machine, you will need to start again the server with `docker start <container_id>`._

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
