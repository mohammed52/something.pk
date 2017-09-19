import mongoose from 'mongoose';
import { db } from './constants';
import loadModels from './models';

export default () => {
  // Find the appropriate database to connect to, default to localhost if not found.
  console.log("process.env.MONGOHQ_URL", process.env.MONGOHQ_URL);
  // console.log("db", db);

  const connect = () => {

    const db = process.env.MONGOHQ_URL

    mongoose.connect(db, (err) => {
      // mongoose.connect('mongodb://heroku_47kh9fld:hrbdtn3coro52vbrcho4i5ti3f@ds155411.mlab.com:55411/heroku_47kh9fld', (err) => {
      if (err) {
        console.log(`===>  Error connecting to ${db}`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===>  Succeeded in connecting to ${db}`);
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);

  loadModels();
};
