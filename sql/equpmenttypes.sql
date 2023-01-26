DROP TABLE IF EXISTS equipment_types;


CREATE TABLE equipment_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipment_type VARCHAR(255) NOT NULL
);

INSERT INTO equipment_types VALUES (
    null,
    "assisted"
),(
	null,
    "band"
),(
    null,
    "barbell"
),(
	null,
    "body weight"
),(
    null,
    "bosu ball"
),(
	null,
    "cable"
),(
    null,
    "dumbbell"
),(
	null,
    "elliptical machine"
),(
    null,
    "ex barbell"
),(
	null,
    "hammer"
),(
	null,
    "kettlebell"
),(
    null,
    "leverage machine"
),(
	null,
    "medicine ball"
),(
    null,
    "olympic barbell"
),(
	null,
    "resistence band"
),(
    null,
    "roller"
),(
	null,
    "rope"
),(
    null,
    "skierg machine"
),(
	null,
    "sled machine"
),(
	null,
    "smith machine"
),(
    null,
    "stability ball"
),(
	null,
    "stationary bike"
),(
    null,
    "stepmill machine"
),(
	null,
    "tire"
),(
    null,
    "trap bar"
),(
	null,
    "upper body ergometer"
),(
    null,
    "weighted"
),(
	null,
    "wheel roller"
);

DELETE FROM equipment_types WHERE id = ?;