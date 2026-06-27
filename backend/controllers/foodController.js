const Food = require("../models/Food");

/* ==========================
   Add Meal
========================== */
const saveFood = async (req, res) => {
  try {
    const {
      userId,
      date,
      mealType,
      foodName,
      quantity,
      unit,
      calories,
      protein,
      carbs,
      fat,
      time,
    } = req.body;

    if (!userId || !date || !foodName) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    let food = await Food.findOne({
      userId: String(userId),
      foodDate: date,
    });

    if (!food) {
      food = new Food({
        userId: String(userId),
        foodDate: date,
        meals: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
        water: 0,
      });
    }

    const newMeal = {
      mealType,
      foodName,
      quantity: Number(quantity),
      unit,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat),
      time,
    };

    food.meals.push(newMeal);

    // Recalculate totals
    food.totalCalories = food.meals.reduce(
      (sum, meal) => sum + Number(meal.calories || 0),
      0
    );

    food.totalProtein = food.meals.reduce(
      (sum, meal) => sum + Number(meal.protein || 0),
      0
    );

    food.totalCarbs = food.meals.reduce(
      (sum, meal) => sum + Number(meal.carbs || 0),
      0
    );

    food.totalFat = food.meals.reduce(
      (sum, meal) => sum + Number(meal.fat || 0),
      0
    );

    await food.save();

    return res.status(201).json({
      success: true,
      message: "Meal added successfully",
      food,
    });
  } catch (err) {
    console.error("Save Food Error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
/* ==========================
   Get Food
========================== */
const getFoodByDate = async (req, res) => {
  try {
    const { userId, date } = req.params;

    const food = await Food.findOne({
      userId,
      foodDate: date,
    });

    if (!food) {
      return res.json(null);
    }

    res.json(food);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to fetch food",
    });
  }
};

/* ==========================
   Update Meal
========================== */
const updateMeal = async (req, res) => {
  try {
    const { foodId, mealId } = req.params;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food log not found",
      });
    }

    const meal = food.meals.id(mealId);

    if (!meal) {
      return res.status(404).json({
        message: "Meal not found",
      });
    }

    food.totalCalories -= meal.calories;
    food.totalProtein -= meal.protein;
    food.totalCarbs -= meal.carbs;
    food.totalFat -= meal.fat;

    Object.assign(meal, req.body);

    food.totalCalories += Number(meal.calories);
    food.totalProtein += Number(meal.protein);
    food.totalCarbs += Number(meal.carbs);
    food.totalFat += Number(meal.fat);

    await food.save();

    res.json(food);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to update meal",
    });
  }
};

/* ==========================
   Delete Meal
========================== */
const deleteMeal = async (req, res) => {
    const { mealId } = req.params;

    const food = await Food.findOne({
        "meals._id": mealId,
    });

    if (!food)
        return res.status(404).json({
            message: "Meal not found",
        });

    const meal = food.meals.id(mealId);

    food.totalCalories -= meal.calories;
    food.totalProtein -= meal.protein;
    food.totalCarbs -= meal.carbs;
    food.totalFat -= meal.fat;

    meal.deleteOne();

    await food.save();

    res.json({
        success: true,
    });
};

module.exports = {
  saveFood,
  getFoodByDate,
  updateMeal,
  deleteMeal,
};