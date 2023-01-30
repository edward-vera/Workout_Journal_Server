const pool = require("../sql/connection");

const all = (req, res) => {
    pool.query(`SELECT * FROM workouts`, function (err, rows, fields) {
    res.json(rows)
    })
};


// Get list of workouts for user
// const list = (req, res) => {
//     // console.log(req);
//     // console.log(req.user.id);
//     pool.query(`SELECT * FROM workouts WHERE user_id = ${Number(req.user.id)}`,
//     function (err, rows, fields) {
//     // console.log(rows)
//     res.json({ rows, user: req.user })
//     })
// };

const show = (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM workouts WHERE id = ${id}`, function (err, rows, fields) {
    res.json(rows)
    })
};

// POST
const create = (req, res) => {
    // console.log(req.body);
    pool.query(`INSERT INTO workouts (id, workout, user_id) VALUES (?, ?, ?)`, 
    [null, req.body.workout, req.body.user_id],
    function (err, row, fields) {
    res.json(row);
    })
};

// PUT
const update = (req, res) => {
    const { id } = req.params;
    pool.query(`UPDATE workouts SET ? WHERE id = ?`, 
    [req.body, id],
    function (err, row, fields) {
    res.json(row);
    })
};

// DELETE
const remove = (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM workouts WHERE id = ?`, 
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