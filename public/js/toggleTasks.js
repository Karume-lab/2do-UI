const tasks = document.querySelectorAll('button[id^="task"]');
const steps = document.querySelectorAll('ul[id^="steps"]');
const addStepBtn = document.querySelector("#addStepBtn");

tasks.forEach(task => {
	task.addEventListener("click", () => {
		let taskLi = task.parentElement;
		tasks.forEach((task, index) => {
			task.parentElement.classList.remove("bg-blue-600");
			// steps[index].classList.add("hidden");
		});
		selectedTaskId = taskLi.children[1].id;
		taskLi.classList.toggle("bg-blue-600");
		const stepsUl = task.getAttribute("data-target");
		// console.log(stepsUl);
		// console.log(document.querySelector(`ul[id=steps0]`));
		// .classList.remove("hidden");
		addStepBtn.classList.remove("cursor-not-allowed");
		addStepBtn.disabled = false;
	});
});
