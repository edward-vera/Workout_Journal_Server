const pool = require("../sql/connection");

// const all = (req, res) => {
//     pool.query(`SELECT * FROM calories`, function (err, rows, fields) {
    //     res.json(rows)
    //     })
    // };
    
    
    // Get list of calories for user
    const list = (req, res) => {
    console.log('inside GET calorie by id route')
    console.log(req.user);
    pool.query(`SELECT * FROM calorie_tracker WHERE user_id = ${req.user.id}`,
    function (err, rows, fields) {
        if(err){
            console.log(err)
            return res.status(500).json({error:err})
        }
    console.log(rows)
    res.json({ rows, user: req.user })
    })
};

// GET
const show = (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM calorie_tracker WHERE id = ${id}`, function (err, rows, fields) {
        if(err) return res.json({err})
        res.json(rows)
    })
};

// POST
const create = (req, res) => {
    // console.log(req.body);
    console.log('inside POST calorie_tracker')
    pool.query(`INSERT INTO calorie_tracker (id, meal, ingredients, calorie, fat, protein, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`, 
    [null, req.body.meal, req.body.ingredients, req.body.calorie, req.body.fat, req.body.protein, req.user.id],
    function (err, row, fields) {
        console.log('inside query', err)
        if(err) return res.json({err})
        console.log(row)
        res.json(row);
    })
};

// PUT
const update = (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    const { id } = req.params;
    pool.query(`UPDATE calorie_tracker SET ? WHERE id = ?`, 
    [req.body, id],
    function (err, row, fields) {
        if(err){
            return res.json(err)
        }
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
    // all,
    list,
    show,
    create,
    update,
    remove
};