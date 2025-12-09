// const express = require('express')
// const app= express();
// const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/Courses'
// mongoose.connect(url)
// {
//     console.log('connected successfully');
// }




// const mongoose = require('mongoose'); 
// mongoose.connect("mongodb://localhost:27017/Courses"); 
  
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


// const express = require('express');
// const app=express();
// const port = 8000;
// const mongoose = require('mongoose'); 
// mongoose.connect("mongodb://localhost:27017/Courses"); 
  
// const employeeSchema = { 
//     e_name: String, 
//     e_department: String, 
//     e_salary: Number 
// }; 

// const EmployeeData = mongoose.model( "EmployeeData", employeeSchema); 
//   console.log('Created');
//    const edetails= EmployeeData.create({
//     e_name: 'test',
//     e_department: 'TESTING',
//     e_salary: 10000
//   })

//   // app.get('/employeedatas', (req, res) => {
//   //       console.log('GET function is working');
//   //       res.send(edetails)
//   //     })

//   app.listen(port,()=>{console.log("server is connected as per the request");})


//post{}

const express = require('express');
const app=express();
const port = 8080;
const mongoose = require('mongoose'); 
app.listen(port,()=>{console.log("server is connected as per the request");})

mongoose.connect("mongodb://localhost:27017/Courses", () => console.log("Database connected"));

const employeeSchema = { 
    e_name: String, 
    e_department: String, 
    e_salary: Number 
}; 

const EmployeeData = mongoose.model( "EmployeeData", employeeSchema); 
  console.log('Created');

  app.post("/employeedatas", async(req, res) => { 
    console.log('POST is working');
    const   newedetails = new EmployeeData({ 
        e_name: 'Tom', 
        e_department: 'Trainer', 
        e_salary: 100000
    }); 
  
  try {
    await newedetails.save(function(err) { 
      if (!err) { 
          res.send("Successfully added a new employee."); 
      } else { 
          res.send(err); 
      } 
  }); 
}  catch (error) {
    console.log(error.message);
  } 
  })



//POST and get

// const express = require('express');
// const app=express();
// const port = 8080;
// const mongoose = require('mongoose'); 

// mongoose.connect("mongodb://localhost:27017/Courses", () => console.log("Database connected"));

// const employeeSchema = { 
//     e_name: String, 
//     e_department: String, 
//     e_salary: Number 
// }; 
// let newedetails;

// const EmployeeData = mongoose.model( "EmployeeData", employeeSchema); 
//   console.log('Created');

//   app.post("/employeedatas", async(req, res) => { 
//     console.log('POST is working');
//     newedetails = new EmployeeData({ 
//         e_name: 'Hagrid', 
//         e_department: 'Trainer', 
//         e_salary: 100000
//     }); 
  
//     // Saving the employee 
//     await newedetails.save(function(err) { 
//         if (!err) { 
//             res.send("Successfully added a new employee."); 
//         } else { 
//             res.send(err); 
//         } 
//     }); 
//   }) 

//  app.get('/employeedatas', async (req, res) => {
//         try {
//           const employee = await EmployeeData.findOne({e_name: 'Ron' });
//           if(employee!==null){
//             console.log('Employee details gotted');
//           }
//           else{
//             console.log(error.message);
//           }
//         res.send(employee)
//         } 
//         catch (error) {
//           res.send(error.message)
//         }
//       })

//   app.listen(port,()=>{console.log("server is connected as per the request");})





//update PATCH and GET


// const express =  require("express")
// const app=express();
// const port = 4000;
// const mongoose = require('mongoose'); 
// app.listen(port,()=>{console.log("server is connected as per the request")});

// mongoose.connect("mongodb://localhost:27017/Courses", () => console.log("Database connected"));

// const employeeSchema = { 
//     e_name: String, 
//     e_department: String, 
//     e_salary: Number 
// }; 
// let newedetails;

// const EmployeeData = mongoose.model( "EmployeeData", employeeSchema); 
//   console.log('Created');

//   app.patch("/employeedatas/:id", async(req, res) => { 
//     console.log('PATCH is working');
//    const eupdated_name='Harry Potter'
//     const id='65729ba9f42c27e3f801c49a'
//     try {
//       const newdata= await  EmployeeData.updateOne({'_id':"65729ba9f42c27e3f801c49a"}, {$set: {e_name:eupdated_name}});
//       console.log(newdata);
//       }
//     catch (error) {console.log(error.message);      
//     };
//   })
//  app.get('/employeedatas', async (req, res) => {
//         try {
//           const employee = await EmployeeData.findById('65729ba9f42c27e3f801c49a');
//           if(employee!==null){
//             console.log('Employee details gotted'+ employee);
//             res.send(newdata)
//           }
//           else{
//             console.log(error.message);
//           }
//         res.send(employee)
//         } 
//         catch (error) {
//           res.send(error.message)
//         }
//       })
