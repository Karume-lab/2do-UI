const markSelectedTasks = () => {
	selectedTaskArray.forEach(sTask => {
		sTask.checked = true;
	});
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
