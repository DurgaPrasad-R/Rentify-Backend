// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const Seller = require("./models/Seller");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(
//     "mongodb+srv://21pa1a0531:JU5kGfUf5niBZreG@eventscluster.aoyo1zs.mongodb.net/Rentify"
//   )
//   .then(() => console.log(`${mongoose.connection.name}`))
//   .catch((err) => console.log(err));

// cloudinary.config({
//   cloud_name: "dp1gjfgmg",
//   api_key: "973866118168666",
//   api_secret: "hJTdoFtZiFavz4kS10rjKihjrOY",
//   secure: true,
// });

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// app.use(upload.array("photos", 6)); // Make sure "photos" matches the field name in your form-data

// app.post("/seller-form", upload.array("photos", 6), async (req, res) => {
//   try {
//     const {
//       title,
//       price,
//       address,
//       desc,
//       city,
//       nobed,
//       nobath,
//       latitude,
//       longitude,
//       rentorsell,
//       propertyType,
//       totalSize,
//       incomePolicy,
//       utilityPolicy,
//       petPolicy,
//       school,
//       busStop,
//       restaurant,
//     } = req.body;

//     const uploadedPhotos = [];
//     for (const file of req.files) {
//       const result = await cloudinary.uploader
//         .upload_stream(
//           {
//             resource_type: "image",
//           },
//           (error, result) => {
//             if (error) {
//               throw new Error(error.message);
//             }
//             uploadedPhotos.push(result.secure_url);
//           }
//         )
//         .end(file.buffer);
//     }

//     const newSeller = new Seller({
//       title,
//       price,
//       address,
//       desc,
//       city,
//       nobed,
//       nobath,
//       latitude,
//       longitude,
//       rentorsell,
//       propertyType,
//       totalSize,
//       incomePolicy,
//       utilityPolicy,
//       petPolicy,
//       school,
//       busStop,
//       restaurant,
//       photos: uploadedPhotos,
//     });

//     await newSeller.save();
//     res
//       .status(201)
//       .json({ message: "Form submitted successfully", seller: newSeller });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Seller = require("./models/Seller");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    // "mongodb+srv://21pa1a0531:JU5kGfUf5niBZreG@eventscluster.aoyo1zs.mongodb.net/Rentify"
    // "mongodb+srv://21pa1a0531:JU5kGfUf5niBZreG@eventscluster.aoyo1zs.mongodb.net/Rentify"
    "mongodb+srv://21pa1a0531:Z022Q5gVKsl0THI8@cluster.amzxnnx.mongodb.net/Rentify"
  )
  .then(() => console.log(`${mongoose.connection.name}`))
  .catch((err) => console.log(err));

cloudinary.config({
  cloud_name: "dp1gjfgmg",
  api_key: "973866118168666",
  api_secret: "hJTdoFtZiFavz4kS10rjKihjrOY",
  secure: true,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/seller-form", upload.array("photos", 6), async (req, res) => {
  try {
    const {
      title,
      price,
      address,
      desc,
      city,
      nobed,
      nobath,
      latitude,
      longitude,
      rentorsell,
      propertyType,
      totalSize,
      incomePolicy,
      utilityPolicy,
      petPolicy,
      school,
      busStop,
      restaurant,
    } = req.body;

    if (!req.files || !req.files.length) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadedPhotos = [];
    for (const file of req.files) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "image" }, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          })
          .end(file.buffer);
      });
      uploadedPhotos.push(result);
    }

    const newSeller = new Seller({
      title,
      price,
      address,
      desc,
      city,
      nobed,
      nobath,
      latitude,
      longitude,
      rentorsell,
      propertyType,
      totalSize,
      incomePolicy,
      utilityPolicy,
      petPolicy,
      school,
      busStop,
      restaurant,
      photos: uploadedPhotos,
    });

    await newSeller.save();
    res
      .status(201)
      .json({ message: "Form submitted successfully", seller: newSeller });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
