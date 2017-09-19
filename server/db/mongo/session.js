import session from 'express-session';
import connectMongo from 'connect-mongo';
// import { db } from './constants';

const MongoStore = connectMongo(session);

export default () => {
  console.log("process.env.MONGOHQ_URL-1", process.env.MONGOHQ_URL);
  const db = process.env.MONGOHQ_URL

  console.log("db-1", db);
  new MongoStore(
    {
      url: db,
      autoReconnect: true
    }
  )
};
