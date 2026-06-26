const Workout = require("../models/Workout");

/* ============================
   GET ALL WORKOUTS
============================ */

const getWorkout = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({
      workoutDate: -1,
    });

    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ============================
   GET WORKOUT BY DATE
============================ */

const getWorkoutByDate = async (req, res) => {
  try {
    const { userId, date } = req.params;

    const workout = await Workout.findOne({
      userId,
      workoutDate: date,
    });

    if (!workout) {
      return res.status(200).json(null);
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ============================
   GET ALL SAVED DATES
============================ */

const getWorkoutDates = async (req, res) => {
  try {
    const { userId } = req.params;

    const workouts = await Workout.find(
      { userId },
      {
        workoutDate: 1,
        _id: 0,
      }
    ).sort({
      workoutDate: -1,
    });

    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ============================
   CREATE / OVERWRITE WORKOUT
============================ */

const createWorkout = async (req, res) => {
  try {
    const { userId, workoutDate, exercises } = req.body;

    let workout = await Workout.findOne({
      userId,
      workoutDate,
    });

    if (workout) {
      workout.exercises = exercises;

      await workout.save();

      return res.status(200).json(workout);
    }

    workout = new Workout({
      userId,
      workoutDate,
      exercises,
    });

    await workout.save();

    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ============================
   UPDATE WORKOUT
============================ */

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ============================
   DELETE WORKOUT
============================ */

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    res.status(200).json({
      message: "Workout deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getWorkout,
  getWorkoutByDate,
  getWorkoutDates,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};