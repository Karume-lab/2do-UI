const tasks = document.querySelectorAll('button[id^="task"]');
const addStepBtn = document.querySelector("#addStepBtn");
const stepsUl = document.querySelector("#stepsUl");
const clickTask = document.querySelector("#clickTask");

tasks.forEach(task => {
	task.addEventListener("click", () => {
		tasks.forEach(task => {
			task.parentElement.classList.remove("bg-green-400");
		});
		
		let taskLi = task.parentElement;
		let taskId = task.id.replace("task", "");
		let tskId = 0;

		taskLi.classList.add("bg-green-400");
		stepsUl.id = `steps${taskId}`;

		taskArray.forEach((task, index) => {
			if (task.id === Number(taskId)) {
				tskId  = index;
			}
		});

		stepsUl.innerHTML = displayStepsHTML(taskArray[tskId].steps);
		selectedTaskId = taskLi.children[1].id;
		clickTask.classList.add("hidden");
		addStepBtn.classList.remove("cursor-not-allowed");
		addStepBtn.disabled = false;
	});
});
