const tasksDropsideMenu = document.querySelector("#tasksDropsideToggler");
const tasksDropsideOptions = document.querySelector("#tasksDropsideOptions");
const openTasksMenu = document.querySelector("#openTasksMenu");
const closeTasksMenu = document.querySelector("#closeTasksMenu");

const stepsDropsideMenu = document.querySelector("#stepsDropsideToggler");
const stepsDropsideOptions = document.querySelector("#stepsDropsideOptions");
const openStepsMenu = document.querySelector("#openStepsMenu");
const closeStepsMenu = document.querySelector("#closeStepsMenu");

tasksDropsideMenu.addEventListener("click", () => {
	tasksDropsideOptions.classList.toggle("hidden");
	tasksDropsideOptions.classList.toggle("flex");
	closeTasksMenu.classList.toggle("hidden");
	openTasksMenu.classList.toggle("hidden");
});

stepsDropsideMenu.addEventListener("click", () => {
	stepsDropsideOptions.classList.toggle("hidden");
	stepsDropsideOptions.classList.toggle("flex");
	closeStepsMenu.classList.toggle("hidden");
	openStepsMenu.classList.toggle("hidden");
});