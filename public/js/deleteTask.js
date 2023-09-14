const deleteTask = (taskstr) => {
	const dTask = JSON.parse(decodeURIComponent(taskstr));

	taskArray.forEach((task, index) => {
		if (task.id == dTask.id) {
			taskArray.splice(index, 1);
		}
	});
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
