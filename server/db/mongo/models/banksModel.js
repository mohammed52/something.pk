/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const BankSchema = new mongoose.Schema({
  id: String,
  fullName: String,
  shortName: String,
  date: {
    type: Date,
    default: Date.now
  },
  logoUrl: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Bank' collection in the MongoDB database
export default mongoose.model('Bank', BankSchema);

