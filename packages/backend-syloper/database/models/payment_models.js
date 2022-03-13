const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    cost_id:{
      type: mongoose.ObjectId,
      required: true
    },
    payment_date:{
      type: Date,
      required: true
    },
    payment_amount:{
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toJSON:{
      transform: (doc, ret) => {
        ret.id = doc._id,
          delete ret._id,
          delete ret.__v
      }
    }
  }
);

module.exports = mongoose.model('Payment',schema);
