
// 300 Training - interactivity
// Loaded with "defer", so the page is ready when this runs.
 
// ---------- 1. Button changes content ----------
const workoutButton = document.getElementById("workout-button");
const workoutText = document.getElementById("workout-text");
 
const workouts = [
  "Day 1: 100 squats, 100 push-ups, 100 sit-ups",
  "Day 2: 50 lunges per leg, 3 x 1 min plank",
  "Day 3: 30 burpees, 60 jumping jacks, 40 mountain climbers",
  "Day 4: Active recovery: 20 min walk and stretching",
  "Day 5: 5 rounds of 20 squats, 15 push-ups, 10 pull-ups"
];
let workoutIndex = 0;
 
workoutButton.addEventListener("click", function () {
  workoutText.textContent = workouts[workoutIndex];
  workoutIndex = (workoutIndex + 1) % workouts.length; // go back to Day 1 after the last one
  workoutButton.textContent = "Next Workout";
});
 
// ---------- 2. Style changes on input ----------
const goalInput = document.getElementById("goal-input");
const goalPreview = document.getElementById("goal-preview");
 
goalInput.addEventListener("input", function () {
  const goal = goalInput.value.trim();
 
  if (goal.length === 0) {
    goalPreview.textContent = "Your goal will show here.";
  } else {
    goalPreview.textContent = "Your goal: " + goal;
  }
 
  // Short goal = orange border, goal with 10+ characters = green border
  if (goal.length >= 10) {
    goalInput.classList.add("goal-ready");
  } else {
    goalInput.classList.remove("goal-ready");
  }
});
 
// ---------- 3. Dynamic list (add and remove) ----------
const exerciseInput = document.getElementById("exercise-input");
const addExerciseButton = document.getElementById("add-exercise-button");
const exerciseList = document.getElementById("exercise-list");
 
function addExercise() {
  const exerciseName = exerciseInput.value.trim();
  if (exerciseName === "") {
    return; // do not add empty items
  }
 
  const listItem = document.createElement("li");
 
  const itemText = document.createElement("span");
  itemText.textContent = exerciseName;
 
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", function () {
    listItem.remove();
  });
 
  listItem.appendChild(itemText);
  listItem.appendChild(removeButton);
  exerciseList.appendChild(listItem);
 
  exerciseInput.value = "";
  exerciseInput.focus();
}
 
addExerciseButton.addEventListener("click", addExercise);
 
// Pressing Enter in the box also adds the exercise
exerciseInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addExercise();
  }
});
 
