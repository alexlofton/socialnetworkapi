const {  Thought } = require('../models');

const thoughtController = {

async getThoughts(req, res) {
try {
const thoughtData = await Thought.find()

res.json(thoughtData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},

async getSingleThought(req, res) {
try {
const thoughtData = await Thought.findOne({ _id: req.params.thoughtId })
.populate('reactions')

if (!thoughtData) {
return res.status(404).json({ message: 'No thought with this id!' });
}

res.json(thoughtData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},

async createThought(req, res) {
try {
const thoughtData = await Thought.create(req.body);
res.json(thoughtData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},

async updateThought(req, res) {
try {
const thoughtData = await Thought.findOneAndUpdate(
{ _id: req.params.thoughtId },
{
$set: req.body,
},
{
runValidators: true,
new: true,
}
);

res.json(thoughtData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},

async deleteThought(req, res) {
try {
const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

res.json(thoughtData)
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},

// add to "reactions" array in user model
async addReaction(req, res) {
try {
const thoughtData = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } }, { new: true });


res.json(thoughtData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},
// remove friend from friend list
async removeReaction(req, res) {
try {
const thoughtData= await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: {reactionId: req.params.reactionId }} }, { new: true });


res.json(thoughtData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},
};

module.exports = thoughtController;
