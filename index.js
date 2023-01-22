const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
// const pool = require("./sql/connection")
const userRoutes = require("./routes/users")
const todosRoutes = require("./routes/todos")
const signupRoutes = require("./routes/signup")
const signinRoutes = require("./routes/signin")

const PORT = process.env.PORT || 5000

// Create function to authenticate toke that we get back from the signin route
function authenticateToken(req, res, next) {
    // console.log(req.headers);
    // Get meta information for req
    const authHeader = req.headers.authorization;
    // console.log( {auth: authHeader} );
    
    if(!authHeader) return res.sendStatus(403);
    // Store just the token in a variable
    const token = authHeader.split(" ")[1];
    // console.log(token);

    // What if no token
    if(!token) return sendStatus(403);


    // If there is token
    // Verify it!
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // console.log({ user });
        if(err) return res.sendStatus(403);

        req.user = user;
        // console.log(req.user);
        next();
    })
    };

app.use(express.json())
app.use('/users', authenticateToken, userRoutes);
app.use('/todos', authenticateToken, todosRoutes);
app.use('/signup', signupRoutes);
app.use('/signin', signinRoutes);

app.get('/', (req, res) => {
    res.json({message: "Welcome to the API"})
});

app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));