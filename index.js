// add mongoose dependency and connect to mongodb server
const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/blahblahboom' );
mongoose.Promise = global.Promise;

// add express dependency
const express = require( "express" );
const app = express();

// add routing to todos controller
const todosController = require( './controllers/todos_controller' );

// add bodyParser dependency 
const bodyParser = require( "body-parser" );

// convert x-www-form-urlencoded data in req to req.body
app.use( bodyParser.urlencoded( { extended: false } ) );

// convert json in req to req.body
app.use( bodyParser.json() );

// route to the controller for todos
app.use( "/todos", todosController );

// default display for get host without other route
app.get( "/", ( req, res ) => {
  res.send( "Welcome To Local App, use /todos to access Todo List App" );
} );

// spin up server to port
app.listen( process.env.port || 3000 );

module.exports = app;