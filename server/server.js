const express = require('express');
const cors = require('cors');
const placeSchema = require('./models/placeModel');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

require('./db/config');
require('dotenv').config();

const app = express();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // 100 MB
});

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//Middlewares
app.use(express.json());
app.use(cors());


app.get('/getPlaces', async (req, res) => {
    const places = await placeSchema.find({});
    console.log(places);
    res.status(200).json(places);
});

app.post('/addPlace', upload.single('image'), async (req, res) => {
    const base64String = req.file.buffer.toString("base64");
    const name = req.file.originalname
    const result = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${base64String}`,
        {
            public_id: name,
            resource_type: "image",
            folder: "profileImages",
            tags: name,
        }
    );
    if (result) {
        const newPlace = new placeSchema({
            ...req.body, image: result.secure_url
        })
        try {
            const response = newPlace.save();
            console.log(response);
            res.status(200).json({ response })
        } catch (err) {
            res.status(500).json({ err });
        }
    }
})



app.listen(5000, () => console.log(`Listening on port 5000`));