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

// add to "friends" array in user model
async addFriend(req, res) {
try {
const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $push: { friends: req.params.friendId } }, { new: true });


res.json(dbUserData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},
// remove friend from friend list
async removeFriend(req, res) {
try {
const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });


res.json(dbUserData);
} catch (err) {
console.log(err);
res.status(500).json(err);
}
},
};

module.exports = userController;
