// Imports
const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken")

// Accessing express
const app = express();

// Importing Routers
const signupRoutes = require("./routes/signup")
const signinRoutes = require("./routes/signin")
const userRoutes = require("./routes/users")
const workoutsRoutes = require("./routes/workouts")
const exerciseRoutes = require("./routes/exercises")
const calorieRoutes = require("./routes/calorietracker")

// Importing Ports
const PORT = process.env.PORT || 5000

// Create function to authenticate toke that we get back from the signin route
function authenticateToken(req, res, next) {
    // console.log(req.headers);
    // Get meta information for req
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization;
    // console.log( {auth: authHeader} );
    
    if(!authHeader) return res.status(403).json({err: 'No Header'});
    // Store just the token in a variable
    const token = authHeader.split(" ")[1];
    // console.log(token);
    console.log('token***********', token)
    // What if no token
    if(!token) return res.sendStatus(403);


    // If there is token
    // Verify it!
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        console.log({ user });
        if(err) return res.sendStatus(403);

        req.user = user;
        // console.log(req.user);
        next();
    })
    };

    // Use cors for cross page communication
app.use(cors());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // res.setHeader(
    //     'Access-Control-Allow-Origin',
    //     'workout-journal-server.vercel.app'
    // );

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, DELETE');

    // Request headers you with to allow
    res.setHeader(
    'Access-Control-Allow-Headers', 
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Set to true if you need the website to inclue cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of Middleware
    next();
});

// Using the route variables above
app.use(express.json())
app.use('/signup', signupRoutes);
app.use('/signin', signinRoutes);
app.use('/users', authenticateToken, userRoutes);
app.use('/workouts', authenticateToken, workoutsRoutes);
app.use('/workoutsId', exerciseRoutes);
app.use('/calorietracker', authenticateToken, calorieRoutes);

// Base route to make sure app is working
app.get('/', (req, res) => {
    res.json({message: "Welcome to the API"})
});

// Show what port you're on
app.listen(PORT,
     () => console.log(`Listening @ https://localhost:${PORT}`)
     );