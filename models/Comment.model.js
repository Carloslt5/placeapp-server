const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'El comentario es obligatorio'],
      trim: true
    },
    owner: {
      ref: 'User',
      type: Schema.Types.ObjectId
    },
  },
  {
    timestamps: true
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
