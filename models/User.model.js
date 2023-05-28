const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required.'],
      minlength: 3
    },
    lastName: {
      type: String,
      trim: true,
      required: false,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    profileImg: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    role: {
      type: String,
      default: 'EDITOR',
      enum: ['ADMIN', 'EDITOR'],
    },
    favouritePlaces: [
      {
        ref: "Place",
        type: Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
