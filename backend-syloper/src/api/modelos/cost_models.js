const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        task_id: {
            type: mongoose.ObjectId, 
            required: true
        },
        cost_description:{
            type: String,
            required: true
        },
        cost_type_id:{
            type: mongoose.ObjectId,
            required: true
        },
        cost_amount:{
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

module.exports = mongoose.model('Cost',schema);