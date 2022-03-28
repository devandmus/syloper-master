const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const {
  EMAIL_FORMAT,
  PASSWORD_PATTERN,
} = require('../helpers');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: EMAIL_FORMAT
    },
    password: {
      type: String,
      required: true,
      match: PASSWORD_PATTERN
    },
    active: {
      type: Boolean,
      default: true
    },
    passwordTokenReset: {
      type: String,
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
          delete ret._id;
          delete ret.__v;
          delete ret.password;
          delete ret.active;
          delete ret.passwordTokenReset;
      }
    }
  }
);

schema.pre('save', function (next) {
    this.isModified("password")
    ?
    (
      bcrypt
        .genSalt(10)
        .then((salt) => {
          bcrypt
            .hash(this.password, salt)
            .then((hash) => {
              this.password = hash;
              next();
            })
            .catch((error) => next(error));
        })
        .catch((error) => next(error))
    )
    :
    next();
  }
);

schema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', schema);
