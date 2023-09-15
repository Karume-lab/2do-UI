const tasks = document.querySelectorAll('button[id^="task"]');
const addStepBtn = document.querySelector("#addStepBtn");
const stepsUl = document.querySelector("#stepsUl");
const clickTask = document.querySelector("#clickTask");
const selectedStepsSpan = document.querySelector("#selectedStepsNo");


tasks.forEach(task => {
	task.addEventListener("click", () => {
		tasks.forEach(task => {
			task.parentElement.classList.remove("bg-green-400");
		});
		
		let taskLi = task.parentElement;
		taskLi.classList.add("bg-green-400");
		selectedTaskId = taskLi.children[1].id;
		
		let selectedSteps = 0;
		taskArray[selectedTaskId.replace("task", "")].steps.forEach(step => {
			if (step.is_selected) {
				selectedSteps += 1;
			}
		});

		stepsUl.innerHTML = displayStepsHTML(taskArray[selectedTaskId.replace("task", "")].steps);
		clickTask.classList.add("hidden");
		addStepBtn.classList.remove("cursor-not-allowed");
		addStepBtn.disabled = false;
		if (selectedSteps > 0) {
			selectedStepsSpan.innerHTML = selectedSteps;
			selectedStepsSpan.classList.add("p-2");
		} else {
			selectedStepsSpan.innerHTML = "";
			selectedStepsSpan.classList.remove("p-2");
		}
	});
});
