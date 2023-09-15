let selectedTaskArray = [];

window.addEventListener("load", () => {
	displayTasksHTML(taskArray);

	const taskNoSpan = document.querySelector("#selectedTasksNo");

	taskArray.forEach(task => {
		if (task.is_selected) {
			selectedTaskArray.push(task);
		}
	});
	
	if (selectedTaskArray.length > 0) {
		taskNoSpan.innerHTML = selectedTaskArray.length;
		taskNoSpan.classList.add("p-2");
	} else {
		taskNoSpan.innerHTML = "";
		taskNoSpan.classList.remove("p-2");
	}
});
