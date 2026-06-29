const Food = require("../models/Food");
const Workout = require("../models/Workout");

exports.getHomeData = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const food = await Food.findOne({
      userId: req.params.id,
      foodDate: today,
    });

    const workout = await Workout.findOne({
      userId: req.params.id,
      workoutDate: today,
    });

    const exerciseCount = workout ? workout.exercises.length : 0;

    res.json({
      caloriesConsumed: food?.totalCalories || 0,
      calorieGoal: 2500,

      proteinConsumed: food?.totalProtein || 0,
      proteinGoal: 140,

      carbsConsumed: food?.totalCarbs || 0,
      carbsGoal: 300,

      fatConsumed: food?.totalFat || 0,
      fatGoal: 70,

      workout: {
        title: exerciseCount > 0 ? "Today's Workout" : "No Workout",
        exerciseCount,
        duration: exerciseCount * 8, // temporary estimate
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};