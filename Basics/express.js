// var express = require('express');  
// var app = express(); 
// var count = 0 
// app.get('/', function (req, res) {  
//   res.send('Welcome to Express server - '.concat('Counting' + count++));  




// });  
// var server = app.listen(8000, function () {  
//   var host = server.address().address;  
//   var port = server.address().port;  
//   console.log('Example app listening at http://%s:%s', host, port);  
// });  

// const express = require('express')
// const app = express()
// const port = 3000

// app.post('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// var express = require('express');  
// var app = express();  
// app.listen(3000)
// app.get('/', function (req, res) {  
//    res.send('Welcome to JavaTpoint'); 
   
//    console.log("loading");
// })  
// var server = app.listen(8000, function () {  
// var host = server.address().address  
//   var port = server.address().port  
//  console.log("Example app listening at http://%s:%s", host, port)  
// })  


// let express = require('express')
// let app = express()
// app.listen(3000)
// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
//   })

//   let express = require('express')
// let a = express()
// a.listen(3000)
// a.post('/user', (req, res) => {
//     res.send('Got a POST request at /user')
//   })

// let express = require('express')
// let b = express()
// b.listen(3000)
// b.get('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
//   })

//   let express = require('express')
// let b = express()
// b.listen(3000)
// b.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
//   })
// let express = require('express')
// let b = express()
// b.listen(3000)
// b.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
//   })

// const express = require('express');
// const app = express();
// const PORT = 3000;
 
// // Single routing
// const router = express.Router();
 
// router.get('/', function (req, res, next) {
//     console.log("Router Working");
//     res.end();
// })
 
// app.use(router);
 
// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });

// const express = require('express');
// const app = express();
// const path = require('path');
 
// // Static Middleware
// console.log(app.use(express.static(
//     path.join(__dirname, 'public'))))


// const express = require("express");
// const app = express();
 
// const port = process.env.port || 3000;
// app.get("/", (req, res) => {
//   res.send(`<div>
//     <h2>Welcome to Webpage</h2>
//     <h5>Middleware</h5>
//   </div>`);
// });
// app.listen(port, () => {
//   console.log(`Listening to port ${port}`);
// });


// Get:

// let express = require('express')
// let b = express()
// b.listen(3000)
// b.get('/user', (req, res) => {
//     res.send('Got a GET request at /user')
//   })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Ima change this up!');
// });

// app.get('/courses/IDs', (req, res) => {
//     res.send(['DATABASES', 'PROGRAMMIN LANGUAGE-JAVA', 'FRONTEND-HTML Kong']);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

// PUT:

// const express = require('express');
// const app = express();
// app.put('/', (req, res) => {
//   res.send('PUT request received');
// });
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

//   // POST:

// const express = require('express');
// const app = express();
// app.post('/', (req, res) => {
//   res.send('POST request received');
// });
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


  // DELETE:

//   const express = require('express');
//   const app = express();
//   app.delete('/', (req, res) => {
//     res.send('DELETE request received');
//   });
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
  
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017';

// Connect to MongoDB
MongoClient.connect(MONGO_URI, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db();

  app.post()

  // Define a route to fetch data from MongoDB
  app.get('/Courses/IDs', (req, res) => {
    db.collection('your-collection-name').find().toArray((err, data) => {
      if (err) {
        res.status(500).send('Error fetching data from MongoDB');
      } else {
        res.status(200).json(data);
      }
    });
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
