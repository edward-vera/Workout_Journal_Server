CREATE TABLE exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
	workout_id INT NOT NULL,
    body_part VARCHAR(255) NOT NULL,
    muscle_target VARCHAR(255) NOT NULL,
    equipment_type VARCHAR(255) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    duration VARCHAR(255) NOT NULL,
    notes VARCHAR(255) NOT NULL,
    FOREIGN KEY (workout_id) REFERENCES workouts(id) ON DELETE CASCADE
);

INSERT INTO exercises VALUES (
    null,
    "1",
    "chest",
    "pectorals",
    "barbell",
    "5",
    "5",
    "0",
    "This Was a Good Workout"
);




DELETE FROM exercises WHERE id = ?;


DROP TABLE IF EXISTS exercises;