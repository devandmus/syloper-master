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
    project_due_date: {
      type: Date,
    },
    project_title:{
      type: String,
      required: true
    },
    project_description:{
      type: String,
    },
    project_responsable:{
      type: mongoose.ObjectId,
      required: true,
      ref: 'User',
    },
    project_status: {
      type: Array,
      default: ['To Do', 'Doing', 'Done'],
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
