const express = require("express");
const app = express();
const pool = require("./sql/connection")
const userRoutes = require("./routes/users")
const todosRoutes = require("./routes/todos")
const signupRoutes = require("./routes/signup")
const signinRoutes = require("./routes/signin")

const PORT = process.env.PORT || 5000

// Create function to authenticate toke that we get back from the signin route

app.use(express.json())
app.use('/users', userRoutes);
app.use('/todos', todosRoutes);
app.use('/signup', signupRoutes);
app.use('/signin', signinRoutes);

app.get('/', (req, res) => {
    res.json({message: "Welcome to the API"})
});

app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));