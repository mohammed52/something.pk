export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/Somethingpk';

export default {
  db
};
