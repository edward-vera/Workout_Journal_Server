const pool = require("../sql/connection")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET)
}

const signin = (req, res) => {
    const {email, password} = req.body;
    // console.log(email, password);

    pool.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        async (err, results, fields) => {

            if (err) {
                console.log(err);
              }
        
              console.log(results);

                
            const match = await bcrypt.compare(password, results[0].password)

            //   try {
            //       const match = await bcrypt.compare(password, results[0].password)
                
            //   } catch (error) {
            //     console.log(error)
            //     res.json(error)
            //   }
        // console.log(match);
            
        if(match) {
            const token = generateToken(results[0]);
            res.json({
                token,
                user: req.user,
            })
        }
    }
  );
};

module.exports = {
    signin
}