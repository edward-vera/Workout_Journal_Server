const pool = require("../sql/connection")
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    // console.log({ hashedPassword });

        pool.query(`INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`, 
    [null, name, email, hashedPassword],
    function (err, row, fields) {
    res.json(row);
    })
};

module.exports = {
    signup
}