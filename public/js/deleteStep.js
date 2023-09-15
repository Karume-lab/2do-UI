const deleteStep = (stepIndex) => {
	const taskClicked = taskArray[selectedTaskId.replace("task", "")];
	const stepsArray = taskClicked.steps;
	const indexEnd = stepIndex > 0 ? stepIndex + 1 : 1;
	stepsArray.splice(stepIndex, indexEnd);
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
