const tasks = document.querySelectorAll('button[id^="task"]');
const steps = document.querySelectorAll('div[data-target^="step"]');


tasks.forEach((task) => {
	task.addEventListener("click", () => {
		let taskLi = task.parentElement;
		tasks.forEach((task, index) => {
			task.parentElement.classList.remove("bg-blue-600");
			steps[index].classList.add("hidden");
		});
		taskLi.classList.toggle("bg-blue-600");
		const stepDiv = task.getAttribute("data-target");
		document.querySelector(`div[data-target=${stepDiv}]`).classList.remove("hidden");
	});
});


// const tasksWrapper = document.querySelector("#tasksWrapper");
// const stepsWrapper = document.querySelector("#stepsWrapper");
// const openTasks = document.querySelector("#openTasks");
// const closeTasks = document.querySelector("#closeTasks");
// const taskToggler = document.querySelector("#taskToggler");

// task1.addEventListener("click", () => {
// 	tasksWrapper.classList.add("hidden");
// 	taskToggler.classList.remove("hidden");
// 	stepsWrapper.classList.remove("hidden");
// });

// task2.addEventListener("click", () => {
// 	openTasks.classList.remove("hidden");
// 	closeTasks.classList.add("hidden");
// 	tasksWrapper.classList.add("hidden");
// 	taskToggler.classList.remove("hidden");
// 	stepsWrapper.classList.remove("hidden");
// });

// openTasks.addEventListener("click", () => {
// 	openTasks.classList.add("hidden");
// 	closeTasks.classList.remove("hidden");
// 	tasksWrapper.classList.remove("hidden");
// 	stepsWrapper.classList.add("hidden");
// });

// closeTasks.addEventListener("click", () => {
// 	closeTasks.classList.add("hidden");
// 	openTasks.classList.remove("hidden");
// 	stepsWrapper.classList.remove("hidden");
// 	tasksWrapper.classList.add("hidden");
// });
