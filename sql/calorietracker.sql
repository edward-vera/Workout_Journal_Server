CREATE TABLE calorie_tracker (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meal VARCHAR(255) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    calories INT NOT NULL,
    fat INT NOT NULL,
    protien INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO calorie_tracker VALUES (
    null,
    "chicken parm",
    "chicken breast, parmesan cheese, tomato sauce",
    "10",
    "15",
    "20",
    "14"
);




DELETE FROM calorie_tracker WHERE id = ?;

DROP TABLE IF EXISTS calorie_tracker;