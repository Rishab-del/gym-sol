const express = require("express");
const router = express.Router();

const {
  getWorkout,
  getWorkoutByDate,
  getWorkoutDates,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

router.get("/workout/:userId/:date", getWorkoutByDate);
router.get("/workout-dates/:userId", getWorkoutDates);
router.get("/workout", getWorkout);
router.post("/workout", createWorkout);
router.put("/workout/:id", updateWorkout);
router.delete("/workout/:id", deleteWorkout);

module.exports = router;