const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs')


const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required.'],
      minlength: [3, 'the length must be at least 3 characters']
    },
    lastName: {
      type: String,
      trim: true,
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
      required: [true, 'Password is required.'],
      minlength: [3, 'the length must be at least 3 characters']
    },
    avatar: {
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
)

userSchema.pre('save', function (next) {
 
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword
 
  next()
})

const User = model("User", userSchema);

module.exports = User;
