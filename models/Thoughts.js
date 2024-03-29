const { Schema, model } = require('mongoose');
//const formatDate = require("../utils/date")
const reactionSchema =  require("./Reaction")

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //get: timestamp => formatDate(timestamp)
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function(){
 return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
