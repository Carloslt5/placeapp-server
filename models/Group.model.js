const { Schema, model } = require("mongoose")

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria'],
            trim: true
        },
        owner: {
            ref: 'User',
            type: Schema.Types.ObjectId
        },
        members: [{
            ref: 'User',
            type: Schema.Types.ObjectId
        }],
    },
    {
        timestamps: true
    }
)

const Group = model("Group", groupSchema)

module.exports = Group
