// Import all the requirements here...
const express = require('express'); // Import express into the file
const mongoose = require('mongoose'); // Import mongoose into the file
const bodyParser = require('body-parser'); // Import body-parser
const cors = require('cors'); // Import CORS (Cross-Origin Resource-Sharing)
const passport = require('passport'); // This is used to authenticate the user after password decryption

const routes = require('./routes/users');

const server = express(); // Make a new express server
server.use(cors());

server.set('view engine', 'ejs');


server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(passport.initialize());
require('./config/passport')(passport);
server.use('/', routes);

const dbURL = require('./config/keys').mongoURI;

mongoose.connect(dbURL, {useNewUrlParser: true})
.catch(err=>{
    console.log(err)
}) //Database configuration
mongoose.connection.once('open', ()=>{ // 
    console.log("Database is connected");
});

server.listen(process.env.PORT, ()=>{ //GLOBAL VARIABLE, like Port, across all files, like domain, mongodb url, etc.
    // we can create a variable when noding index.js like PORT=3333 node index.js
    console.log('the port is', process.env.PORT);
    console.log("Server is running at http://localhost:"+process.env.PORT)
});