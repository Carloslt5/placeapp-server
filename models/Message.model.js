const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
            trim: true
        },
        owner: {
            ref: 'User',
            type: Schema.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
)

const Message = model("message", messageSchema);

module.exports = Message;