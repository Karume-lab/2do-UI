const checkStep = (stepIndex) => {
	const stepCheck = document.querySelector(`#markStep${stepIndex}`).checked;
	const step = taskArray[selectedTaskId.replace("task", "") - 1].steps[stepIndex];
	step.checked = stepCheck;
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
