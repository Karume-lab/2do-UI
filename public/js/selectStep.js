const selectStep = (stepIndex) => {
	const StepB = document.querySelector(`#selectStep${stepIndex}`);
	const sTask = taskArray[selectedTaskId.replace("task", "") - 1];
	const step = sTask.steps[stepIndex];
	step.is_selected = StepB.checked;

	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
