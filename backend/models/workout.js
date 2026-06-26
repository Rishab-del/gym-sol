const mongoose = require("mongoose");

const SetSchema = new mongoose.Schema({
  setNumber: Number,
  reps: Number,
  weight: String,
  done: Boolean,
});

const ExerciseSchema = new mongoose.Schema({
  name: String,
  muscle: String,
  rest: String,
  done: Boolean,
  setDetails: [SetSchema],
});

const WorkoutSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    workoutDate: {
      type: String, // Example: "2026-06-27"
      required: true,
    },

    exercises: [ExerciseSchema],
  },
  {
    timestamps: true,
  }
);

// One workout per user per day
WorkoutSchema.index(
  {
    userId: 1,
    workoutDate: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("Workout", WorkoutSchema);