const deleteTask = (taskId) => {
	const taskIndex = taskArray.indexOf(taskId);
	const indexEnd = taskIndex + 1 ? taskIndex < 0 : 1;
	taskArray.splice(taskIndex, indexEnd);
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
