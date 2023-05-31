const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    placeId: {
      type: String
    },
    name: {
      type: String,
      required: [true, 'Name is required.']
    },
    description: {
      type: String
    },
    placeImg: {
      type: String
    },
    photoReference: [
      String
    ],
    type: {
      type: String,
      enum: ['Night', 'Parks and gardens', 'Bar', 'Restaurant', 'Theatre', 'Cinema', 'Exposition', 'Interest point']
    },
    phone: {
      type: String
    },
    weekDay: [
      String
    ],
    addressComponents: {
      type: {
        city: String,
        address: String,
        location: {
          type: {
            type: String
          },
          coordinates: [Number]
        },
      }
    },
    userRating: {
      type: Number,
      required: [true, 'Rating is required.']
    },
    userOpinion: {
      type: String,
      trim: true,
      required: [true, 'Your opinion is required.'],
      minlength: [15, 'The opinion must have a minimum of 15 characters.']
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]

  },
  {
    timestamps: true
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
