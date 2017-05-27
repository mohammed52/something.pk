export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackNode';
// export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://heroku_47kh9fld:hrbdtn3coro52vbrcho4i5ti3f';

export default {
  db
};
