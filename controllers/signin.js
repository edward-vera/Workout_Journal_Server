const pool = require("../sql/connection")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const generateToken = (user) => {
    return jwt.sign(user, "tacos is good")
}

const signin = (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);

    pool.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        async (err, results, fields) => {
        const match = await bcrypt.compare(password, results[0].password)
        console.log(match);
            
        if(match) {
            const token = generateToken(results[0]);
            res.json({
                token,
                user: req.user,
            })
            console.log(token);
        }
    }
  );
};

module.exports = {
    signin
}