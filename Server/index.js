const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
const corsOrigin = 'http://192.168.1.101:3000';
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST'],
  credentials: true 
})); 
// ==============Mongodb Connection===================
mongoose.connect("mongodb://localhost:27017/AudioImageDb", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB is connected");
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
// ======================BASIC NO BACKEND=====================

app.get("/simpletextresponse", (req, res) => {
  console.log("received");
  res.send("hi");
});

//===================================================MONGODB BACKEND
const loginSchema = {
  "userId" : Number,
  "password" : Number,
}
const Login=mongoose.model("Login", loginSchema);

//GET : NO BODY 
//POST : BODY EXAMPLE
//DELETE : PARAMETER EXAMPLE
// PUT / PATCH : BODY + PARAMETER EXAMPLE

//CHAINING OF API EXAMPLE
// GET HAS NO PARAMETER NO BODY , RETURNS ALL
// POST HAS BODY NO PARAMETER TO JUST POST IT INTO LOGIN
app.route("/SimpleCRUDMongoDB") 
.get(async function(req, res) {
  try {
    const logins = await Login.find();
    res.status(200).json(logins);

  } catch (error) {
    console.error("Error fetching logins:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}) 
.post(async function(req, res) {
  try {
    const { userId, password } = req.body;
    const login = new Login({ userId, password });
    await login.save();
    res.status(201).json(login);
  } catch (error) {
    console.error("Error creating login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

//NON CHAINING EXAMPLES 
//delete : ONLY PARAM
//PUT AND PATCH : PARAM AND BODY

app.delete("/SimpleCRUDMongoDB/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    await Login.deleteOne({ userId: userId });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/SimpleCRUDMongoDB/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;
    await Login.updateOne({ userId: userId }, { password: password });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error("Error updating login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.patch("/SimpleCRUDMongoDB/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;
    await Login.findOneAndUpdate({ userId: userId }, { password: password });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error("Error updating login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//==================================================================
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

server.listen(3001, process.env.IP, function(){
  console.log("SERVER IS RUNNING");
});