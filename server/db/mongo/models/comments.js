/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const CommentsSchema = new mongoose.Schema({
  id: String,
  text: String,
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Comments', CommentsSchema);

