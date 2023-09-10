const steps1 = document.querySelector("#steps1");
const steps2 = document.querySelector("#steps2");
const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const clickTask = document.querySelector("#clickTask");

task1.addEventListener("click", () => {
	clickTask.classList.add("hidden");
	steps2.classList.add("hidden");
	steps1.classList.remove("hidden");
});

task2.addEventListener("click", () => {
	clickTask.classList.add("hidden");
	steps2.classList.remove("hidden");
	steps1.classList.add("hidden");
});
