/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

var Schema = mongoose.Schema

const DealSchema = new mongoose.Schema({
  id: String,
  restaurantId: Schema.ObjectId,
  bankId: Schema.ObjectId,
  cardDeals: Array,
  cities: Array,
  generalDeal: String,
  expiry: String,
  comments: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Deal' collection in the MongoDB database
export default mongoose.model('Deal', DealSchema);

