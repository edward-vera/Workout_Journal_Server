SELECT 
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
INNER JOIN exercises on exercises.workoutId=workouts.workoutId WHERE workouts.workoutId = 1;