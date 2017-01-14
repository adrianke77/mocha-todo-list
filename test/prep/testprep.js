//WARNING WILL DELETE EVERYTHING IN THE DATABASE!!!
//WARNING WILL DELETE EVERYTHING IN THE DATABASE!!!
//WARNING WILL DELETE EVERYTHING IN THE DATABASE!!!

const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/blahblahboom' );
mongoose.Promise = global.Promise;
const TodoMongModel = require( "../../models/todoMongModel" );

function dataSetup() {
  //run all tests inside this function to provide fixed data set
  TodoMongModel.remove( {}, () => {
    TodoMongModel.create( {
      name: "mocha test name",
      description: "mocha test description",
      completed: true
    }, () => {
      TodoMongModel.create( {
        name: "mocha test name 2",
        description: "mocha test description 2",
        completed: false
      }, () => {
        TodoMongModel.find( { name: "mocha test name" }, ( err,
          item ) => {
          console.log( "id to use:", item[ 0 ]._id );
        } );
      } );
    } );
  } );
}
