const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    task_description: {
      type: String
    },
    task_due_date: {
      type: Date
    },
    estimated_hours: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    project_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'Project'
    },
    task_responsible_user_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'User'
    },
    responsible_profile_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'ResponsibleProfile'
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

module.exports = mongoose.model('Task', schema);
