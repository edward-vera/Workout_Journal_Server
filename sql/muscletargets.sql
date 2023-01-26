DROP TABLE IF EXISTS muscle_targets;


CREATE TABLE muscle_targets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    muscle_target VARCHAR(255) NOT NULL
);

INSERT INTO muscle_targets VALUES (
    null,
    "abductors"
),(
	null,
    "abs"
),(
    null,
    "adductors"
),(
	null,
    "biceps"
),(
    null,
    "calves"
),(
	null,
    "cardiovascular system"
),(
    null,
    "delts"
),(
	null,
    "forearms"
),(
    null,
    "glutes"
),(
	null,
    "hamstrings"
),(
	null,
    "lats"
),(
    null,
    "levator scapulae"
),(
	null,
    "pactorals"
),(
    null,
    "quads"
),(
	null,
    "serratus anterior"
),(
    null,
    "spine"
),(
	null,
    "traps"
),(
    null,
    "triceps"
),(
	null,
    "upperback"
);

DELETE FROM muscle_targets WHERE id = ?;