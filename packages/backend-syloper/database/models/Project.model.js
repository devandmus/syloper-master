const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.ObjectId,
      required: true
    },
    project_date:{
      type: Date,
      required: true
    },
    project_description:{
      type: String,
      required: true
    },
    project_cost:{
      type: Number,
      required: true
    },
    project_responsable:{
      type: String,
      required: true
    },
    project_status_id: {
      type: mongoose.ObjectId,
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

module.exports = mongoose.model('Project',schema);
