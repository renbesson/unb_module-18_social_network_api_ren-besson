// Define Mongoose
const { Schema } = require('mongoose');

const dateFormated = (date) => {
  return date.getDay();
  // return date.toLocaleDateString("en-US");
};

const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, require: true, maxLength: 280 },
  username: { type: String, require: true },
  createdAt: { type: Date, default: Date.now(), get: dateFormated },
});

reactionSchema.virtual('reactionCount').get(function () {
  return this.createdAt;
});

module.exports = reactionSchema;
