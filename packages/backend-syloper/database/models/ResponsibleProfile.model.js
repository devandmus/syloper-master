const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
    },
    hourly_cost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id,
          delete ret._id,
          delete ret.__v
      }
    }
  }
);

module.exports = mongoose.model('ResponsibleProfile', schema);
