CREATE TABLE workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    workout VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO workouts VALUES (
    null,
    "chest workout",
    "13"
);

DELETE FROM workouts WHERE id = ?;

DROP TABLE IF EXISTS workouts;