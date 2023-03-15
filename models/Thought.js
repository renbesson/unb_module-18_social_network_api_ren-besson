// Define Mongoose
const { model, Schema } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
  thoughtText: { type: String, require: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now() },
  username: { type: String, require: true },
  reactions: [reactionSchema],
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
