// require all necessary
const express = require("express");
const mongoose = require("mongoose");
//create app n port
const app = express();
const PORT = 8000;
//middleware
app.use(express.urlencoded({extended: false}))
//connect mongodb
mongoose.connect("mongodb://localhost:27017/hogStud")
.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err);
})
//create schema
const userSchema = new mongoose.Schema({
    id :{
        type: Number,
        required: true,
        unique: true
    },
    firstName :{
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    house :{
        type: String,
        required: false
    },
    wizard: {
        type: String,
        required: false
    }
})
//create model
const Student = new mongoose.model("Student", userSchema)
app.post("/api/student/post", async(req,res)=>{
    const body = req.body;
    const result= await Student.create({
        id: body.id,
        firstName: body.firstName,
        gender: body.gender,
        house: body.house,
        wizard: body.wizard
    })
    console.log(result);
    return res.status(201).json({msg: "succes"});
})
app.get('/api/student/:id', async (req, res) => {
  try {
      const student = await Student.findById(req.params.id);
       if (!student) {
           return res.status(404).json({ message: 'Student not found' });
      }
      res.json(student);
     }
     catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});
app.delete('/api/student/delete/:id', async(req, res)=>{
  try{
    const deleteid = await Student.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      res.status(400).send();
    }
    res.send(deleteid);
    console.log("deleted successfully");
  } catch(err){
      res.status(500).send(e);
  }
})
app.patch('/api/student/patch/:id', async(req, res)=>{
  try{
      const studentUp = await Student.findByIdAndUpdate(req.params.id, req.body)
      res.send(studentUp);
  } catch(e){
    res.status(404).send(e);
  }
})
//listen port
app.listen(PORT, (req,res)=>{
    console.log("server is connected");
})
