const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  mealType: String, // Breakfast Lunch Dinner Snack
  foodName: String,
  quantity: Number,
  unit: String,

  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,

  time: String,
});

const foodSchema = new mongoose.Schema({
  userId: String,
  foodDate: String,

  meals: [mealSchema],

  totalCalories: Number,
  totalProtein: Number,
  totalCarbs: Number,
  totalFat: Number,
  water: Number,
});

module.exports = mongoose.model("Food", foodSchema);