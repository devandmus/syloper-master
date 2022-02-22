const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
      cost_type_description:{
          type: String,
          required: true
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

module.exports = mongoose.model('Cost_Type',schema);
