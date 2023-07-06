const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    habit: {
      type: String,
      required: true,
    },

    dates: {
      date: String,
      complete: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    days: {
      one: {
        type: String,
        default: null,
      },
      two: {
        type: String,
        default: null,
      },
      three: {
        type: String,
        default: null,
      },
      four: {
        type: String,
        default: null,
      },
      five: {
        type: String,
        default: null,
      },
      six: {
        type: String,
        default: null,
      },
      seven: {
        type: String,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
