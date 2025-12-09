const express = require('express'); 
const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken'); 
const app = express();  
// Set up Global configuration access 
dotenv.config(); 
let PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
  console.log(`Server is up and running on ${PORT} ...`); 
}); 
  
app.get('/', (req, res) => {
  res.send('Hello');
});

function generateAccessToken(user) {
  const payload = {
    id: user.id,
    email: user.email
  };
  
  const secret = 'your-secret-key';
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secret, options);
}
function verifyAccessToken(token) {
  const secret = 'your-secret-key';

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const result = verifyAccessToken(token);

  if (!result.success) {
    return res.status(403).json({ error: result.error });
  }

  req.user = result.data;
  next();
}

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the protected route!', user: req.user });
});























































// const express = require('express');
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');
// const app = express();
// const axios = require('axios');
// const qs = require('qs');
// const port = 3000
// const memoryStore = new session.MemoryStore();
// const keycloak = new Keycloak({ store: memoryStore });

// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true,
//   store: memoryStore,
// }));

// app.use(keycloak.middleware());

// app.get('/', (req, res) => {
//   res.send('Home page');
// });



// app.post('/login', keycloak.protect(), (req, res) => {
//     // This route handles authentication through Keycloak.
//     // If the request reaches here, the user is already authenticated.
//     let data = qs.stringify({
//       'client_id': 'demo',
//       'client_secret': 'scXI4rZ7ArcBw2QGJaj9CAtT3Nel8j4n',
//       'grant_type': 'password',
//       'username': 'rosh',
//       'password': 'roshan26' 
//     });
    
    
//     let config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'http://localhost:8080/realms/mytest/protocol/openid-connect/token',
//       headers: { 
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data : data
//     };
    
//     console.log('Before making request to Keycloak');
//     axios.request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//       console.log('Keycloak error:', error)
//     });
//     res.send('Authentication successful');
//   });

//   // app.get('/logout', keycloak.enforcer('logout'), (req, res) => {
//   //     req.logout();
//   //     res.redirect('/');
//   //   });


//     app.post('/logout', keycloak.protect(), (req, res) => {
//       // This route handles authentication through Keycloak.
//       // If the request reaches here, the user is already authenticated.
// let data = qs.stringify({
//   'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1Mzk1NWE2YS1hNDQ0LTQwZTEtYTZlZC0zNzYzZTk1ZjE4NDQifQ.eyJleHAiOjE3MDM1NzcwMjIsImlhdCI6MTcwMzU3NTIyMiwianRpIjoiNDhmMjE2YzUtZDI1Yi00MzQ0LTg2OGItMjQzZmFmOTUxMjNhIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXRlc3QiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL215dGVzdCIsInN1YiI6IjNmZDAwNjM5LTZjNzItNDk0ZC1iZjMyLTkzMDU2M2U4YzQ0NiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJkZW1vIiwic2Vzc2lvbl9zdGF0ZSI6IjlhYzZlMTQ4LTYwYjgtNGFmMi04NGE3LWM3MWRlNzY3NDYwYSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjlhYzZlMTQ4LTYwYjgtNGFmMi04NGE3LWM3MWRlNzY3NDYwYSJ9.1rSEwUgTC9nfOHfu_zZME6oBRZ3loj_FG2xCrwfEKDI',
//   'client_id': 'demo',
//   'client_secret': 'scXI4rZ7ArcBw2QGJaj9CAtT3Nel8j4n' 
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'http://localhost:8080/realms/mytest/protocol/openid-connect/logout',
//   headers: { 
//     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsTjJERDV3dVdVOGdGWGZYSk5mb3p1aFFkYk1MV2NROG82V2hOeHdTRFBFIn0.eyJleHAiOjE3MDM1NzM5ODgsImlhdCI6MTcwMzU3Mzg2OCwianRpIjoiMzkxM2JlMDMtNjQyOC00MTRhLThlNTEtZGEwZWQyNDMzOWVmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXRlc3QiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiM2ZkMDA2MzktNmM3Mi00OTRkLWJmMzItOTMwNTYzZThjNDQ2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGVtbyIsInNlc3Npb25fc3RhdGUiOiIwOWVhZmU5OC1iZTJmLTRhMTEtYWY5MS00YWUxNTc1MTYxZGEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1teXRlc3QiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjA5ZWFmZTk4LWJlMmYtNGExMS1hZjkxLTRhZTE1NzUxNjFkYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoicm9zaCBqb2huIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicm9zaCIsImdpdmVuX25hbWUiOiJyb3NoIiwiZmFtaWx5X25hbWUiOiJqb2huIiwiZW1haWwiOiJyb3NoQGhleC5jb20ifQ.MPbzPpkcj7vzOmHq3gFQc36GMDYyySkTAx_S6wtL3vjy6bVLcNGkkavppiDsGnJek6oTr8rMAO6bACYS6-DJF7_iP8fPljsTAjA-OqyAbISA3u4HNdovyEV56Hxx5TXXDNP6L06P4oduAhYBAzNPr1qFXYRwLL6fYrJHaJFaNjMTlHs6fcH7u4B2G0-_alQEuIOC6GOFtVtuGehPAB9HgADOgS_GPxJvyTvZG_eNi7FIxrj0OuE-pZ0mF6tsZQQSpfsw2OKbiI5aDRuhGHuPujDnaGtNsIcWmOsR_zOZzlTD9ncpr9T8WanhVm3n04APOckX8Od6ZGcWi9NR4WGKyA', 
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
//     });

  
  
//     app.listen(port,()=>{console.log(`Port is working on the server ${port}`)})






























































































































































// const express = require('express')
// const app = express()
// const port = 3000;
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');
// const memoryStore = new session.MemoryStore();
// // const keycloak = new Keycloak({ store: memoryStore });
// app.listen(port,()=>{console.log(`Port is working on the server ${port}`)})
// app.get('/', function (req, res) {
//   res.render('index')
// })
// app.use(session({
//   secret: 'mySecret',
//   resave: false,
//   saveUninitialized: true,
//   store: memoryStore
// }))
// const keycloak = new Keycloak({
//   store: memoryStore
// })
// app.use(keycloak.middleware({
//   logout: '/logout',
//   admin: '/',
//   protected: '/protected/resource'
// }))
// app.get('/login', keycloak.protect(), function (req, res) {
//   res.render('index', {
//     result: JSON.stringify(JSON.parse(
//       req.session['keycloak-token']), null, 4),
//         event: '1. Authentication\n2. Login'
//   })
// })
// app.get('/protected/resource', keycloak.enforcer(['resource:view', 'resource:write'], {
//   resource_server_id: 'nodejs-apiserver'
//     }), function (req, res) {
//        res.render('index', {
//          result: JSON.stringify(JSON.parse(req.session['keycloak-token']), null, 4),
//           event: '1. Access granted to Default Resource\n'
//   })
// })


















































































// require('dotenv').config();
// const express = require('express')
// const bodyparser = require('body-parser')
// const Keycloak = require('keycloak-connect')
// const app = express()
// const port = 9000;
// const jwt = require('jsonwebtoken')
// app.use(express.json())
// app.post('/login', async(req,res)=>{
//     const { Username, Password } = req.body;
//     const user = { Username, Password };
//  const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET|| 'defaultSecret')
//  res.json({accessToken:accessToken})

// })
// app.get('/login', (req, res) => {
//     // Example protected route using JWT
//     const token = req.header('Authorization');
    
//     // Verify the token and extract user information if needed

//     res.json({ message: 'Profile endpoint reached' });
// });

// app.listen(port,()=>{
//     console.log(`port is working in ${port}`)
// });

// const express = require('express'); 
// const dotenv = require('dotenv'); 
// const jwt = require('jsonwebtoken'); 
// const app = express();  
// // Set up Global configuration access 
// dotenv.config(); 
// let PORT = process.env.PORT || 5000; 
// app.listen(PORT, () => { 
//   console.log(`Server is up and running on ${PORT} ...`); 
// }); 
  
// // Main Code Here  // 
// // Generating JWT 
// app.post("login", (req, res) => { 
//     // Validate User Here 
//     // Then generate JWT Token 
//     const { Username, Password } = req.body;
//         const user = { Username, Password };
//      const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET|| 'defaultSecret')
//      res.json({accessToken:accessToken})
    
// }); 
//   app.get('/login', (req, res) => {
//       // Example protected route using JWT
//       const token = req.header('Authorization');
//       // Verify the token and extract user information if needed
//       res.json({ message: 'Profile endpoint reached' });
//   });


















// const express = require('express');
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');

// const app = express();
// const port = 3000;

// // Initialize Keycloak
// const keycloak = new Keycloak({ store: new session.MemoryStore() });

// // Express session middleware
// app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));

// // Keycloak middleware
// app.use(keycloak.middleware());

// // Home route
// app.get('/', (req, res) => {
//   res.send('Home page');
// });

// // Protected route
// app.get('/login', keycloak.protect(), (req, res) => {
//   res.send('Protected page');
// });
// app.post('/login',(req,res)=>{
// res.send('Get login is working');
// })

// // Logout route
// app.get('/logout', keycloak.enforcer('logout'), (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });





















// const express = require('express');
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');
// const app = express();
// const axios = require('axios');
// const qs = require('qs');
// const port = 5000
// const memoryStore = new session.MemoryStore();
// const keycloak = new Keycloak({ store: memoryStore });

// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true,
//   store: memoryStore,
// }));

// app.use(keycloak.middleware());

// app.get('/', (req, res) => {
//   res.send('Home page');
// });

// app.get('/login', (req, res) => {
//   res.send('get page');
// });


// app.post('/login', (req, res) => {
//   // This route handles authentication through Keycloak.
//   // If the request reaches here, the user is already authenticated.
//   res.send('Authentication successful');
// });

// app.get('/secured-endpoint', keycloak.protect(), (req, res) => {
//   res.send('This is a secured endpoint');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.get('/logout',keycloak.protect(), (req,res)=>{
//   res.send('Logout successfully');
// })





















