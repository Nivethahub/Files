// const KcAdminClient = require('keycloak-admin')
// const adminClient = new KcAdminClient({
//     baseUrl: 'http://localhost:8080/auth',
//     realmName: 'mytest'
// })

// let execute = async function () {

//     await adminClient.auth({
//         username: 'harry',
//         password: 'harry12',
//         grantType: 'password',
//         clientId: 'test'
//     })

//     const users = await adminClient.users.find();

//     console.log(users)
// }

// execute();


// app.js
// const express = require('express');
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const port = 3000;

// // Keycloak configuration
// const keycloak = new Keycloak({
//   store: memoryStore(), // You can use a different store for production
//   scope: 'openid',
// });

// app.use(session({
//   secret: 'mysecret', // Change this to a strong, random secret in production
//   resave: false,
//   saveUninitialized: true,
// }));

// app.use(keycloak.middleware());

// // Define a route that requires authentication
// app.get('/secure', keycloak.protect(), (req, res) => {
//   res.send('This is a protected resource');
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// function memoryStore() {
//   const store = {};
//   return {
//     get: (key, callback) => callback(null, store[key]),
//     set: (key, value, callback) => {
//       store[key] = value;
//       callback(null, value);
//     },
//     destroy: (key, callback) => {
//       delete store[key];
//       callback();
//     },
//   };
// }












const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const axios = require('axios');

const app = express();

// Initialize Keycloak
const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({ store: memoryStore });

app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

app.use(keycloak.middleware());

// Endpoint to obtain a token
app.get('/login', keycloak.protect(), async (req, res) => {
  try {
    const tokenUrl = 'http://localhost:8080/realms/mytest/protocol/openid-connect/token';
    const clientId = 'user1';
    const clientSecret = 'ay2tfwMuWx1WI0xbiZ20EIuDAHRDBNxx';
    const grantType = 'client_credentials';

    const response = await axios.post(
      tokenUrl,
      `client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Protect other routes using Keycloak
app.get('/secured', keycloak.protect(), (req, res) => {
  res.send('This is a secured resource!');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
