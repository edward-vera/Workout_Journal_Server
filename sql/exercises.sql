CREATE TABLE exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
	workoutId INT NOT NULL,
    exerciseName VARCHAR(255) NOT NULL,
    muscleTarget VARCHAR(255) NOT NULL,
    equipmentType VARCHAR(255) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    weight INT NOT NULL,
    duration VARCHAR(255) NOT NULL,
    notes VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (workoutId) REFERENCES workouts(workoutId) ON DELETE CASCADE
);

INSERT INTO exercises VALUES (
    null,
    "13",
    "4",
    "bench press",
    "pectorals",
    "barbell",
    "5",
    "5",
    "245",
    "0",
    "This Was a Good Workout"
),(
    null,
    "12",
    "3",
    "pinkytoe press",
    "pectorals",
    "barbell",
    "5",
    "5",
    "245",
    "0",
    "This Was a Good Workout"
),(
    null,
    "13",
    "2",
    "shoulder press",
    "pectorals",
    "barbell",
    "5",
    "5",
    "245",
    "0",
    "This Was a Good Workout"
),(
    null,
    "14",
    "1",
    "leg press",
    "pectorals",
    "barbell",
    "5",
    "5",
    "245",
    "0",
    "This Was a Good Workout"
);


DELETE FROM exercises WHERE id = ?;


DROP TABLE IF EXISTS exercises;