const pool = require("../sql/connection");

// const list = (req, res) => {
//     pool.query(`SELECT * FROM todos`, function (err, rows, fields) {
//     res.json(rows)
//     })
// };

// Get list of todos for user
const list = (req, res) => {
    // console.log(req.user);
    const {id} = req.user
    // console.log(id);
    pool.query(`SELECT * FROM todos WHERE user_id = ${id}`, function (err, rows, fields) {
    res.json(rows)
    })
};

const show = (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM todos WHERE id = (?)`, function (err, rows, fields) {
    res.json(rows)
    })
};

const create = (req, res) => {
    console.log(req.body);
    pool.query(`INSERT INTO todos (id, todo, user_id) VALUES (?, ?, ?)`, 
    [null, req.body.todo, req.body.user_id],
    function (err, row, fields) {
    res.json(row);
    })
};

const update = (req, res) => {
    const { id } = req.params;
    pool.query(`UPDATE todos SET ? WHERE id = ?`, 
    [req.body, id],
    function (err, row, fields) {
    res.json(row);
    })
};

const remove = (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM todos WHERE id = ?`, 
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