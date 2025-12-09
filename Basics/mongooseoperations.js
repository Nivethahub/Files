// const mongoose = require('mongoose');
// const express =  require('express');
// const app = express();
// mongoose.connect("mongodb://localhost:27017/Courses")

// const { default: mongoose } = require("mongoose");

// const courseschema = mongoose.Schema({
//     courseID:String,
//     title:String,
//     days:Number
// })
// module.exports = mongoose.model("IDs", courseschema);

// app.use(express.json());

// app.post("/create",(req,res) =>{
//     console.log(req.body);
//     res.send("RESPONDED");
// })

// app.listen(3000);

// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// mongoose.connect("mongodb://localhost:27017/Courses");

// const courseschema = new mongoose.Schema({
//     courseID: String,
//     title: String,
//     days: Number,
//     name: String,
//     age:Number
// });

// const Course = mongoose.model("Course", courseschema);

// app.use(express.json());

// app.post("/create", (req, res) => {
//     console.log(req.body);
//     res.send("RESPONDED");
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// var MongoClient = require('mongodb').m;
// var url = "mongodb://localhost:27017/Courses";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
 
//   console.log("Database created!");
//   db.close();
// });






// CREATion:

// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//       const newTask = new Task({
//         name: 'JASMINE',
//         age: 'age45',
//         pincode : 600011,
//         location: 'KOVAI'
//       });
      
//       newTask.save()
//       .then(savedTask => {
//         console.log('Document inserted:', savedTask);
//       })
//       .catch(error => console.error('Error saving document:', error));
// })
// .catch(error => console.log(error))






// UPDATED:

// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//       const taskIdToUpdate = "6571497e7788dde105cf7c5d";
      
//       Task.findByIdAndUpdate(taskIdToUpdate, { name: 'ROSE', age: 'age16', location: 'OOTY', pincode: 600089 },{ new: true }  )
//       .then(updatedTask => {
//         if (!updatedTask) {
//           console.log('Document not found');
//           return;
//         }
//         console.log('Document updated:', updatedTask);
//       })
//       .catch(error => console.error('Error updating document:', error));
// })
// .catch(error => console.log(error))






//DELETE a particular value in a particular database


// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//       const taskIdToUpdate = "65714bc27e312ceb12cbe9d0";
      
//       Task.findByIdAndUpdate(taskIdToUpdate, { $unset:{age:0}},{ new: true }  )
//       .then(updatedTask => {
//         if (!updatedTask) {
//           console.log('Document not found');
//           return;
//         }
//         console.log('Document updated:', updatedTask);
//       })
//       .catch(error => console.error('Error updating document:', error));
// })
// .catch(error => console.log(error));






//delete a data 

// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//       const taskIdToDelete = "65714bc27e312ceb12cbe9d0";
      
//       Task.deleteOne({ _id: taskIdToDelete })
//   .then(result => {
//     if (result.deletedCount === 0) {
//       console.log('Document not found');
//       return;
//     }
//     console.log('Document deleted successfully');
//   })
//   .catch(error => console.error('Error deleting document:', error))
// })
// .catch(error => console.log(error));







//RETRIEVE the datas

// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//       const taskIdToRetrieve = "65714c8e2811161a3337d9d6";
      
//       Task.findById(taskIdToRetrieve)
//       .then(retrievedTask => {
//         if (!retrievedTask) {
//           console.log('Document not found');
//           return;
//         }
//         console.log('Document retrieved:', retrievedTask);
//       })
//       .catch(error => console.error('Error retrieving document:', error))
// })
// .catch(error => console.log(error));








// Retrieve the document after deleting


// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//       const taskIdToDelete = "65714c8e2811161a3337d9d6";
    
// Task.findByIdAndUpdate(
//     taskIdToDelete,
//     { $set: { isDeleted: true } },
//     { new: true }
//   )
//     .then(deletedTask => {
//       if (!deletedTask) {
//         console.log('Document not found');
//         return;
//       }
//       console.log('Document soft deleted:', deletedTask);

//       // If you want to retrieve deleted data, query for soft-deleted documents
//       Task.find({ _id: taskIdToDelete, isDeleted: true })
//         .then(retrievedDeletedTask => {
//           console.log('Retrieved soft-deleted document:', retrievedDeletedTask);
//         })
//         .catch(error => console.error('Error updating document::', error))
// })
// .catch(error => console.log(error));
//  })




//by using a function:
// const mongoose=require('mongoose');
// const ConnectionString = "mongodb://localhost:27017/Courses"

//  mongoose.connect(ConnectionString)
//  .then(client => {
//     console.log("Connected");})

//     const taskSchema = new mongoose.Schema({
//         name: String,
//         age: String, 
//         pincode : Number,
//         location: String
//       });
//       const Task = mongoose.model('Task', taskSchema);
//      // const taskIdToDelete = "65714c8e2811161a3337d9d6";
//     async function call(){
//       Task.create({ 
//         name: "Nivetha", 
//         age: 10 
//       })
//     }
//     call()






//creating using function


// let mongoose = require('mongoose');
// let url = 'mongodb://localhost:27017/Courses';
// mongoose.connect(url)
// .then((happen)=>console.log("URL connected"))
// .catch((err)=>console.log("URL not connected"));

// const Schema = new mongoose.Schema({
//     height: String,
//     weight: String,
//     eyecolour: String,
//     ID:Number
// })

// async function creation(){
//     console.log("DB creating");
//     Task.create({
//         height:'154cms',
//         weight:'50kgs',
//         eyecolour:'brown',
//         ID: 5459
//     })
// }
// const Task = mongoose.model("Task",Schema)






//retrieving using a function
// let mongoose = require('mongoose');
// let url = 'mongodb://localhost:27017/Courses';
// mongoose.connect(url)
// .then((happen)=>console.log("URL connected"))
// .catch((err)=>console.log("URL not connected"));

// const Schema = new mongoose.Schema({
//     height: String,
//     weight: String,
//     eyecolour: String,
//     ID:Number
// })

// const Task = new mongoose.model('Task',Schema)

// async function retrieve(){
//     const ToRetrieve = '10';
// const retrievedvalue= await Task.findOne({'age': ToRetrieve})
// if(retrievedvalue){
//     console.log('Value is filtered'+ retrievedvalue)
//     }
// else {
//     console.log('error');
//     };
// }
// retrieve()



// const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/Courses';
// mongoose.connect(url)
// .then(console.log('connected successfully'))
// .else(console.log('not connected successfully'))

// const ToUpdate = '657182f7543b369cbd83e33b'

// const Test = mongoose.model('Test')

// function update(){
//   //const tocheck = 'OOTY'
//  Test.findByIdAndUpdate(ToUpdate,{location: 'KERALA'})
//  if(location){
//  }
// }
// update()
