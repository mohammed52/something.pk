/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const CitiesSchema = new mongoose.Schema({
  id: String,
  name: String,
  shortCode: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Bank' collection in the MongoDB database
export default mongoose.model('City', CitiesSchema);

