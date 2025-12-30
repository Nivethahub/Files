const express = require("express")  //express framework
const session_exp = require("express-session");
const app = express();
const port=2200; 
const HomeHandler = require('./handlers');
const LoginHandler = require("./login.js");
const ProcessLoginHandler = require("./process_login.js");
const LogoutHandler = require("./logout.js")

//middleware registration which automatically 
//handles the session initialization, 
//cookie parsing and session data retrieval, and so on
app.use(session_exp({
    //using this unguessed secret we can reduce the ability of hijack 
    //ena nu theriyatha secret key moolama hijack reduce aagum and cookie la 
    //session id ah oru sign ah create pana use aaguthu
    secret:"some secret",               //session id is used to sign in the cookie,
    
    //Object containing the configuration for session id cookie
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
      },

      //Forces the session to be saved back to the session store, 
      //even if the session data was never modified during the request.
      resave: true,

      //Forces an “uninitialized” session to be saved to the store, 
      //i.e., saves a session to the store even if the session was not initiated.
      saveUninitialized: false,
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', HomeHandler);
app.get('/login', LoginHandler);
app.post('/process-login', ProcessLoginHandler);
app.get('/logout', LogoutHandler);
app.listen(port,()=>{
console.log("Server is running");
})

