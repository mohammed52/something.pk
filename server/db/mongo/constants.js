export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackNode';
// export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://heroku_1p903gx7:rtipp81bt3usttno0e89e1v1ng@ds027709.mlab';

export default {
  db
};
