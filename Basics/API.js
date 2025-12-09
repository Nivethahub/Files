// const express = require('express')
// const app= express();
// const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/Courses'
// mongoose.connect(url)
// {
//     console.log('connected successfully');
// }
// const employeeSchema = {
//     e_name: String,
//     e_department: String,
//     e_salary: Number
// };

// const EmployeeData = mongoose.model( "EmployeeData", employeeSchema);
//   console.log('Created');
//   EmployeeData.create({
//     e_name: 'Harry',
//     e_department: 'DEV',
//     e_salary: 12000
//   })

// GET{}

// const express = require("express");
// const app = express();
// const port = 8000;
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Courses", { useNewUrlParser: true, useUnifiedTopology: true });
// const bodyparser = require("body-parser");
// // app.use(express.json())
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

// const employeeSchema = new mongoose.Schema({
//   e_name: String,
//   e_department: String,
//   e_salary: Number,
// });

// const EmployeeData = mongoose.model("EmployeeData", employeeSchema);
// console.log("Created");

// const edetails = new EmployeeData({
//   e_name: "SHIVASHANKAR",
//   e_department: "Civilion",
//   e_salary: 1800,
// });

// // console.log(edetails)

// // Save the created document to MongoDB
// edetails.save()
//   .then(savedEmployee => {
//     console.log("Employee saved:", savedEmployee);
//   })
//   .catch(error => {
//     console.error("Error saving employee:", error);
//   });

//   app.get("/employeedatas", async (req, res) => {
//     try {
//       // Retrieve all employees from the database
//       const allEmployees = await EmployeeData.find();

//       // Respond with the retrieved employees
//       res.json(allEmployees);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

//   app.get("/employeedata/:id", async (req, res) => {
//     try {
//       // const employeeId = req.params.id;
//       // console.log(employeeId)

//       // Find an employee by ID from the database
//       const foundEmployee = await EmployeeData.findById(employeeId);
//       console.log(foundEmployee)

//       // Respond with the found employee
//       if (foundEmployee) {
//         res.json(foundEmployee);
//         res.send(foundEmployee)

//       } else {
//         res.status(404).json({ error: "Employee not found" });
//       }
//     } catch (error) {
//       console.error("Error fetching employee:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

// app.listen(port, () => {
//   console.log("server is connected as per the request");
// });

// Get method jan08
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const port = 9000;
// const bodyparser = require("body-parser");
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
// const url = "mongodb://localhost:27017/Courses";
// mongoose.connect(url);
// {
//   console.log("connected successfully");
// }
// const employeeSchema = {
//   e_name: String,
//   e_department: String,
//   e_salary: Number,
// };

// const EmployeeData = mongoose.model("EmployeeData", employeeSchema);
// console.log("Created");

// app.get("/employee", async(req, res) => {
//     const details = await EmployeeData.create({
//         e_name: "Harr",
//         e_department: "DEVops",
//         e_salary: 12000,
//       });
//     // const details = await EmployeeData.find()
//   res.json(details);
//   console.log(details);
// });
// app.listen(port, () => {
//   console.log("connected port");
// });

//post{}

// const express = require('express');
// const app=express();
// const port = 8080;
// const mongoose = require('mongoose');
// app.listen(port,()=>{console.log("server is connected as per the request");})

// mongoose.connect("mongodb://localhost:27017/Courses", () => console.log("Database connected"));

// const employeeSchema = {
//     e_name: String,
//     e_department: String,
//     e_salary: Number
// };

// const EmployeeData = mongoose.model( "EmployeeData", employeeSchema);
//   console.log('Created');

//   app.post("/employeedatas", async(req, res) => {
//     console.log('POST is working');
//     const   newedetails = new EmployeeData({
//         e_name: 'Tom',
//         e_department: 'Trainer',
//         e_salary: 100000
//     });

//   try {
//     await newedetails.save(function(err) {
//       if (!err) {
//           res.send("Successfully added a new employee.");
//       } else {
//           res.send(err);
//       }
//   });
// }  catch (error) {
//     console.log(error.message);
//   }
//   })

//POST and get

const express = require("express");
const app = express();
const port = 8080;
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Courses", () =>
  console.log("Database connected")
);

const employeeSchema = {
  e_name: String,
  e_department: String,
  e_salary: Number,
};
let newedetails;

const EmployeeData = mongoose.model("EmployeeData", employeeSchema);
console.log("Created");

app.post("/employeedatas", async (req, res) => {
  console.log("POST is working");
  newedetails = new EmployeeData({
    e_name: req.body.e_name,
    e_department: req.body. e_department,
    e_salary: req.body.e_salary
  });

  // Saving the employee
  await newedetails.save(function (err) {
    if (!err) {
      res.send("Successfully added a new employee.");
      console.log(newedetails);
    } else {
      res.send(err);
    }
  });
});

// app.get("/employeedatas", async (req, res) => {
//   try {
//     const employee = await EmployeeData.findOne({ e_name: "Ron" });
//     if (employee !== null) {
//       console.log("Employee details gotted");
//     } else {
//       console.log(error.message);
//     }
//     res.send(employee);
//   } catch (error) {
//     res.send(error.message);
//   }
// });

app.listen(port, () => {
  console.log("server is connected as per the request");
});

//update PATCH and GET

// const express = require("express");
// const app = express();
// const port = 3000;
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Courses", () =>
//   console.log("Database connected")
// );

// const employeeSchema = {
//   e_name: String,
//   e_department: String,
//   e_salary: Number,
// };
// // let newedetails;

// const EmployeeData = mongoose.model("EmployeeData", employeeSchema);
// console.log("Created");
//
// app.patch("/employeedatas/:id", async (req, res) => {
//   console.log("PATCH is working");
//   const eupdated_department = "testing";
//   const id = "6572a0db999f3f7694f65d99";
//   try {
//     const newdata = await EmployeeData.updateOne(
//       { _id: "6572a0db999f3f7694f65d99" },
//       { $set: { e_department: eupdated_department } }
//     );
//     console.log(newdata);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.get("/employeedatas", async (req, res) => {
//   try {
//     const employee = await EmployeeData.findById("6572a0db999f3f7694f65d99");
//     if (employee !== null) {
//       console.log("Employee details gotted" + employee);
//       res.send(newdata);
//     } else {
//       console.log(error.message);
//     }
//     res.send(employee);
//   } catch (error) {
//     res.send(error.message);
//   }
// });
// app.listen(port, () => {
//   console.log("server is connected as per the request");
// });
