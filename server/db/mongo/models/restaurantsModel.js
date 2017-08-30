/**
/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const RestaurantsSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  logoUrl: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Bank' collection in the MongoDB database
export default mongoose.model('Restaurants', RestaurantsSchema);

