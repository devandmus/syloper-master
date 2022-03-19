const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'Project'
    },
    title: {
      type: String,
      required: true,
    },
    task_description: {
      type: String
    },
    status: {
      type: mongoose.ObjectId,
      required: true
    },
    task_due_date: {
      type: Date
    },
    task_responsable_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'User'
    },
    task_estimated_time: {
      type: Date
    }
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

module.exports = mongoose.model('Task', schema);
