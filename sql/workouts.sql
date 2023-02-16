CREATE TABLE workouts (
    workoutId INT AUTO_INCREMENT PRIMARY KEY,
    workout VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO workouts VALUES (
    null,
    "legs workout",
    "14"
),(
	null,
    "arms workout",
    "13"
),(
	null,
    "toes workout",
    "13"
),(
	null,
    "chests workout",
    "14"
);




DELETE FROM workouts WHERE id = ?;

DROP TABLE IF EXISTS workouts;