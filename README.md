# oddschecker.betting.slip
A simple React app which gets odds data from an Express server API

# Getting the project up and running on your machine
1) Run `npm install` in the root directory, the src directory and the server directory.

# Running the app in developer mode
1) If you want to examine the state in the developer mode uncomment the code in the /src/app.js (lines 24 - 54) and comment out the code on lines 58 - 78.
2) Type `npm run` in the src directory for available commands. This also applies for the root and server directories.

# Building the app
N.B: The asset files have already been copied over to /dist...
1) Navigate to /src and run `npm run build`.

# Running the built app
N.B: The asset files have already been copied over to /dist...
1) Navigate to /src and run `npm run build`.
2) Navigate to the root directory and run `npm start`. A server will be started on the `localhost` and listening on port `5000`

N.B: This project does not make use of web storage so when you refresh the browser the data is gone forever...... (o_o)...bye bye. Implementing web storage was passed on a requirement so I didn't add it. If this were an agile development then the different developers would ideally work on the parts of the project in unison, i.e. One developer working on the source (/src), another on the server (/server), etc... Node modules have not been commited so you will have to install all packages. Any questions, etc please email me: bernard.baker.me@gmail.com.
