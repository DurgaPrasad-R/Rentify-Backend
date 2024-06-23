// const mongoose = require("mongoose");

// const SellerSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   desc: {
//     type: String,
//     required: false,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   nobed: {
//     type: Number,
//     required: true,
//   },
//   nobath: {
//     type: Number,
//     required: true,
//   },
//   latitude: {
//     type: String,
//     required: true,
//   },
//   longitude: {
//     type: String,
//     required: true,
//   },
//   rentorsell: {
//     type: String,
//     required: true,
//     enum: ["Rent", "Sell"],
//   },
//   propertyType: {
//     type: String,
//     required: true,
//     enum: ["Apartments", "Bodegas", "Houses", "Buildings", "Land", "Villa"],
//   },
//   totalSize: {
//     type: String,
//     required: true,
//   },
//   incomePolicy: {
//     type: String,
//     required: true,
//     enum: ["More than 60K", "More than 70K", "More than 80K", "More than 90K"],
//   },
//   utilityPolicy: {
//     type: String,
//     required: true,
//     enum: ["Owner is Responsible", "Tenant is Responsible"],
//   },
//   petPolicy: {
//     type: String,
//     required: true,
//     enum: ["Not Allowed", "Allowed"],
//   },
//   school: {
//     type: String,
//     required: true,
//   },
//   busStop: {
//     type: String,
//     required: true,
//   },
//   restaurant: {
//     type: String,
//     required: true,
//   },
//   photos: {
//     type: [String],
//     required: false,
//   },
// });

// module.exports = mongoose.model("Seller", SellerSchema);

const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  nobed: {
    type: String,
    required: true,
  },
  nobath: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  rentorsell: {
    type: String,
    required: true,
    enum: ["Rent", "Sell"],
  },
  propertyType: {
    type: String,
    required: true,
    enum: ["Apartments", "Bodegas", "Houses", "Buildings", "Land", "Villa"],
  },
  totalSize: {
    type: String,
    required: true,
  },
  incomePolicy: {
    type: String,
    required: true,
  },
  utilityPolicy: {
    type: String,
    required: true,
  },
  petPolicy: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  busStop: {
    type: String,
    required: true,
  },
  restaurant: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Seller", SellerSchema);
