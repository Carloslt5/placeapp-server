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
    photoReference: [String],//preguntar si creamos otra propiedad donde guardemos la foto, para no hacer tantas llamadas a la api
    type: {
      enum: ['Night', 'Parks and gardens', 'Bar', 'Restaurant', 'Theatre', 'Cinema', 'Exposition', 'Interest point']
    },
    phone: {
      type: String
    },
    weekDay: [String],
    city: {
      type: String
    },
    address: {
      type: String
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    },
    myRating: {
      type: Number,
      required: [true, 'Rating is required.']
    },
    myOpinion: {
      type: String,
      trim: true,
      required: [true, 'Your opinion is required.']
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
