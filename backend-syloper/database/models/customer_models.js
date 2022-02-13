const mongoose = require('mongoose');
const {
  EMAIL_FORMAT,
  PHONE_PATTERN,
} = require('../helpers');

const schema = new mongoose.Schema(
  {
    customer_full_name: {
      type: String,
      required: true
    },
    customer_email: {
      type: String,
      required: true,
      unique: true,
      match: EMAIL_FORMAT
    },
    customer_phone: {
      type: String,
      required: true,
      match: PHONE_PATTERN
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

module.exports = mongoose.model('Customer',schema);
