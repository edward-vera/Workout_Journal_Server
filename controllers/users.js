const pool = require("../sql/connection");

const list = (req, res) => {
    const {id} = req.params
    pool.query(`SELECT * FROM users`, function (err, rows, fields) {
    res.json(rows)
    })
};

const show = (req, res) => {
    const {id} = req.params
    pool.query(`SELECT * FROM users WHERE id = ${id}`, function (err, rows, fields) {
    res.json(rows)
    })
};

const create = (req, res) => {
    // console.log(req.body);
    pool.query(`INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`, 
    [null, req.body.name, req.body.email, req.body.password],
    function (err, row, fields) {
    res.json(row);
    })
};

const update = (req, res) => {
    const { id } = req.params;
    pool.query(`UPDATE users SET ? WHERE id = ?`, 
    [req.body, id],
    function (err, row, fields) {
    res.json(row);
    })
};

const remove = (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM users WHERE id = ?`, 
    [id],
    function (err, row, fields) {
    res.json(row);
    })
};


module.exports = {
    list,
    show,
    create,
    update,
    remove
};