
<h2>Features<h2>
  
A Node.js API built with Express and all the latest tools and best practices in development!

<ul><li>⚡ Express — A web framework for Node</li>
floppy_disk Sequelize — SQL dialect ORM for Node.js
fallen_leaf MongoDB — document-based database
key Redis — key-value data model
keyboard Yup - Object schema validation
small_red_triangle Sentry - cross-platform application monitoring
e-mail Nodemailer - Send e-mails with Node.JS
sparkling_heart Lint — ESlint/Prettier/Editor Config

<h2>Dependencies</h2>
<ul>
  <li>Node.js 8.0.0 ou ></li>
  <li>Yarn</li>
  <li>Docker</li>
 </ul>
  
  
<h2> Prerequisites </h2>
In the next few weeks, I plan to include Docker directly in the repository with docker-compose, until there this step is required.

To run this server you will need three containers running on your machine.

To do so, you will need to run the following commands:

docker run --name redisbarber -p 6379:6379 -d -t redis:alpine;
docker run --name mongobarber -p 27017:27017 -d -t mongo;
docker run --name some-postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres;
Remember: If you restart your machine, you will need to start again the server with docker start <container_id>.

<h2> Getting started </h2>
Consider checking out the FrontEnd repository!

Clone this repo using https://github.com/TalesHabib/GoStack-modulo02
Move to the appropriate directory: cd gobarber-api.
Run yarn to install dependencies.
Copy the .env.example file and rename it to .env.
Add all the values for the environment variables.
Run yarn start and yarn queue to run the servers at http://localhost:3333.
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
