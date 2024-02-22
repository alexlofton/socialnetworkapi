const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    inPerson: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    students: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);

courseSchema.virtual("username").get(function(){
 
  //enable login with username 
})

const Course = model('course', courseSchema);

module.exports = Course;
