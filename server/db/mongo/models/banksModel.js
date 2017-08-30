/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const BankSchema = new mongoose.Schema({
  id: String,
  fullName: {
    type: String,
    unique: true
  },
  shortName: {
    type: String,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  logoUrl: String,
  cards: Array
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Bank' collection in the MongoDB database
export default mongoose.model('Bank', BankSchema);

