const tasksWrapper = document.querySelector("#tasksWrapper");
const stepsWrapper = document.querySelector("#stepsWrapper");
const openTasks = document.querySelector("#openTasks");
const closeTasks = document.querySelector("#closeTasks");
const taskToggler = document.querySelector("#taskToggler");

task1.addEventListener("click", () => {
	tasksWrapper.classList.add("hidden");
	taskToggler.classList.remove("hidden");
	stepsWrapper.classList.remove("hidden");
});

task2.addEventListener("click", () => {
	openTasks.classList.remove("hidden");
	closeTasks.classList.add("hidden");
	tasksWrapper.classList.add("hidden");
	taskToggler.classList.remove("hidden");
	stepsWrapper.classList.remove("hidden");
});

openTasks.addEventListener("click", () => {
	openTasks.classList.add("hidden");
	closeTasks.classList.remove("hidden");
	tasksWrapper.classList.remove("hidden");
	stepsWrapper.classList.add("hidden");
});

closeTasks.addEventListener("click", () => {
	closeTasks.classList.add("hidden");
	openTasks.classList.remove("hidden");
	stepsWrapper.classList.remove("hidden");
	tasksWrapper.classList.add("hidden");
});
