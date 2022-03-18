const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const {
  EMAIL_FORMAT,
  PASSWORD_PATTERN,
} = require('../helpers');

const schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
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
    firstName: {
      type: String,
      required: true,
      max: 100
    },

    lastName: {
        type: String,
        required: true,
        max: 100
    },

    bio: {
        type: String,
        required: false,
        max: 255
    },

    profileImage: {
        type: String,
        required: false,
        max: 255
    },
  
    resetPasswordToken: {
        type: String,
        required: false
    },

    resetPasswordExpires: {
        type: Date,
        required: false
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id,
          delete ret._id,
          delete ret.__v,
          delete ret.password,
          delete ret.active
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

schema.methods.generatePasswordReset = function() {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

module.exports = mongoose.model('User', schema);
