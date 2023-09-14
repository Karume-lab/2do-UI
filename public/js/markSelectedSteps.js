const markSelectedSteps = () => {
	const task = taskArray[selectedTaskId.replace("task", "") - 1];
	const selectedStepsIdArray = [];

	taskArray.forEach(task => {
		task.steps.forEach((step, index) => {
			if (step.is_selected) {
				selectedStepsIdArray.push(index);
			}
		});
	});

	selectedStepsIdArray.forEach(sStep => {
		console.log(sStep);
	});
	
	task.steps.forEach(step => {
		selectedStepsIdArray.forEach(sStepId => {
			if (step === task.steps[sStepId]) {
				step.checked = true;
			}
		});
	});

	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
