const deleteTask = (taskIndex) => {
	console.log(taskIndex);
	const indexEnd = taskIndex > 0 ? taskIndex + 1 : 1;
	taskArray.splice(taskIndex, indexEnd);
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
