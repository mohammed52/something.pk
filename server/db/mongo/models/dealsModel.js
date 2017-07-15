/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const DealSchema = new mongoose.Schema({
  id: String,
  restaurantId: String,
  restaurantName: String,
  bankId: String,
  bankName: String,
  cardDeals: Array,
  generalDeal: String,
  expiry: String,
  comments: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Deal' collection in the MongoDB database
export default mongoose.model('Deal', DealSchema);

