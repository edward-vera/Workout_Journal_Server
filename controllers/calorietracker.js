const pool = require("../sql/connection");

const all = (req, res) => {
    pool.query(`SELECT * FROM calories`, function (err, rows, fields) {
    res.json(rows)
    })
};


// Get list of calories for user
// const list = (req, res) => {
//     console.log(req.user.id);
//     console.log(req);
//     pool.query(`SELECT * FROM calories WHERE userId = ${Number(req.user.id)}`,
//     function (err, rows, fields) {
//     console.log(rows)
//     res.json({ rows, user: req.user })
//     })
// };

// GET
const show = (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM calories WHERE id = ${id}`, function (err, rows, fields) {
    res.json(rows)
    })
};

// POST
const create = (req, res) => {
    // console.log(req.body);
    pool.query(`INSERT INTO calories (id, meal, userId, ingredients, calories, fat, protein) VALUES (?, ? ,?, ?, ?, ?, ?)`, 
    [null, req.body.meal, req.body.userId, req.body.ingredients, req.body.calories, req.body.fat, req.body.protein],
    function (err, row, fields) {
    res.json(row);
    })
};

// PUT
const update = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const { id } = req.params;
    pool.query(`UPDATE calories SET ? WHERE id = ?`, 
    [req.body, id],
    function (err, row, fields) {
    res.json(row);
    })
};

// DELETE
const remove = (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM calories WHERE id = ?`, 
    [id],
    function (err, row, fields) {
    res.json(row);
    })
};


module.exports = {
    all,
    // list,
    show,
    create,
    update,
    remove
};