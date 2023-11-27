const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const authRouter = require('./routes/authRoutes')
const userDataRouter = require('./routes/users')
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
const corsOrigin = 'http://192.168.0.103:3001';
app.use(cors({
  origin: [corsOrigin],
  methods: ['GET', 'POST'],
  credentials: true
}));
//Routers
app.use('/api/users', authRouter)
app.use('/api/users', userDataRouter)

//KANNAN BRAINLAG IMPORTANT CODE DONT DELETE : 8ZsD1we8oViSWbMY


// ==============Mongodb Connection===================

mongoose.connect(process.env.DB_CONNECT_URL, { useNewUrlParser: true }).then(() => {
  console.log("Connected to db!")
}).catch((error) => { console.log("Couldnt connect to db") }
)

const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB is connected");
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});



//================================================================== IMAGE STORING
// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, './images'); //images
//   },
//   filename(req, file, callback) {
//    callback(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });


// app.post('/image-upload', upload.array("my-image-file"), (req, res) => {
//   console.log('POST request received to /image-upload.');
//   console.log('Uploaded files: ', req.files);
// });

//================================================================== IMAGE STORING
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images'); //images
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });


app.post('/image-upload', upload.array("my-image-file"), (req, res) => {
  console.log('POST request received to /image-upload.');
  console.log('Uploaded files: ', req.files);
});


//==========================server config==========================

const server = http.createServer(app);

server.listen(3001, process.env.IP, function () {
  console.log("SERVER IS RUNNING");
});