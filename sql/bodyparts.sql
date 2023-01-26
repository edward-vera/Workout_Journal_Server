DROP TABLE IF EXISTS body_parts;


CREATE TABLE body_parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    body_part VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS body_parts;


CREATE TABLE body_parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    body_part VARCHAR(255) NOT NULL
);

INSERT INTO body_parts VALUES (
    null,
    "back"
),(
	null,
    "cardio"
),(
    null,
    "chest"
),(
	null,
    "lower arms"
),(
    null,
    "lower legs"
),(
	null,
    "neck"
),(
    null,
    "shoulders"
),(
	null,
    "upper arms"
),(
    null,
    "legs"
),(
	null,
    "waist"
);

DELETE FROM body_parts WHERE id = ?;