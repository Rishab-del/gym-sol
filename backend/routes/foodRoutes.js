const express = require("express");
const router = express.Router();

const {
  saveFood,
  getFoodByDate,
  updateMeal,
  deleteMeal,
} = require("../controllers/foodController");

router.post("/", saveFood);
router.get("/:userId/:date", getFoodByDate);
router.put("/:foodId/:mealId", updateMeal);
router.delete("/:mealId", deleteMeal);

module.exports = router;