const tasks = document.querySelectorAll('button[id^="task"]');
const addStepBtn = document.querySelector("#addStepBtn");
const stepsDiv = document.querySelector("#stepsDiv");
const stepsUl = document.createElement("ul");
const clickTask = document.querySelector("#clickTask");

tasks.forEach(task => {
	task.addEventListener("click", () => {
		tasks.forEach(task => {
			task.parentElement.classList.remove("bg-blue-600");
		});

		let taskLi = task.parentElement;
		let taskId = task.id.replace("task", "");
		taskLi.classList.add("bg-blue-600");
		stepsUl.id = `steps${taskId}`;
		stepsDiv.appendChild(displayStepsHTML(taskArray[taskId].steps, taskId));
		selectedTaskId = taskLi.children[1].id;
		clickTask.classList.add("hidden");
		addStepBtn.classList.remove("cursor-not-allowed");
		addStepBtn.disabled = false;
	});
});
