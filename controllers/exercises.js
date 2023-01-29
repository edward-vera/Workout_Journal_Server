const pool = require("../sql/connection");

// const all = (req, res) => {
//     pool.query(`SELECT * FROM exercises`, function (err, rows, fields) {
//     res.json(rows)
//     })
// };


// Get list of exercises for user
const list = (req, res) => {
    // console.log(req.user);
    // console.log(user);
    pool.query(
    `SELECT 
    workouts.workoutId,
    workouts.workout, 
    exercises.exerciseName, 
    exercises.muscleTarget,
    exercises.equipmentType, 
    exercises.sets, 
    exercises.reps, 
    exercises.weight, 
    exercises.duration, 
    exercises.notes
    FROM workouts
    INNER JOIN exercises on exercises.workoutId=workouts.workoutId;`,
    function (err, rows, fields) {
    res.json({ rows, exercise: req.exercise })
    })
};


// GET
const show = (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM exercises WHERE id = ${id}`, function (err, rows, fields) {
    res.json(rows)
    })
};


// POST
const create = (req, res) => {
    console.log(req.body);
    pool.query(`INSERT INTO exercises (id, workoutId, exerciseName, muscleTarget, equipmentType, sets, reps, weight, duration, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [null, req.body.workoutId, req.body.exerciseName, req.body.muscleTarget, req.body.equipmentType, req.body.sets, req.body.reps, req.body.weight, req.body.duration, req.body.notes],
    function (err, row, fields) {
    res.json(row);
    })
};

// PUT
const update = (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const { id } = req.params;
    pool.query(`UPDATE exercises SET ? WHERE id = ?`, 
    [req.body, id],
    function (err, row, fields) {
    res.json(row);
    })
};

const remove = (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM exercises WHERE id = ?`, 
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