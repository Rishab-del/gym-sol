const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);