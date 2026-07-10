const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
  type: String,
  required: true,
  unique: true,
},
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    caloriesConsumed: {
      type: Number,
      default: 0,
    },

    calorieGoal: {
      type: Number,
      default: 2500,
    },

    proteinConsumed: {
      type: Number,
      default: 0,
    },

    proteinGoal: {
      type: Number,
      default: 140,
    },

    carbsConsumed: {
      type: Number,
      default: 0,
    },

    carbsGoal: {
      type: Number,
      default: 300,
    },

    fatConsumed: {
      type: Number,
      default: 0,
    },

    fatGoal: {
      type: Number,
      default: 70,
    },

    waterConsumed: {
      type: Number,
      default: 0,
    },

    waterGoal: {
      type: Number,
      default: 3.5,
    },

    weight: {
      type: Number,
      default: 74,
    },
    height: {
  type: Number,
  default: 181,
},

bodyFat: {
  type: Number,
  default: 18,
},

goal: {
  type: String,
  default: "Muscle Gain",
},

steps: {
  type: Number,
  default: 0,
},

streak: {
  type: Number,
  default: 0,
},

totalWorkouts: {
  type: Number,
  default: 0,
},

fitnessLevel: {
  type: String,
  default: "Fitness Enthusiast 💪",
},

latestAchievement: {
  type: String,
  default: "No achievements yet",
},
startingWeight: {
  type: Number,
  default: 70,
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);