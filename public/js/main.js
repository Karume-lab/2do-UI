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
	

	const progressBar = document.querySelector("#progressBar");
	const progressBarCont = document.querySelector("#progressBarCont");
	const maxPx = document.querySelector("#progressBarCont").clientWidth;
	
	let tasksChecked = 0;
	taskArray.forEach(task => {
		if (task.checked) {
			tasksChecked += 1;
		}
	});

	const checkedPx = tasksChecked / taskArray.length * maxPx;
	const checkedPerc = checkedPx / maxPx * 100;
	let bg = ""

	if (checkedPerc >= 90) {
		bg = "bg-green-600";
	} else if (checkedPerc >= 75) {
		bg = "bg-yellow-600";
	} else if (checkedPerc >= 50) {
		bg = "bg-orange-600";
	} else {
		bg = "bg-red-600";
	}

	if (taskArray.length > 0 && tasksChecked > 0) {
		progressBar.classList.add(`w-[${checkedPx}px]`, bg);
	}else {
		progressBar.classList.add("hidden");
		progressBarCont.classList.add("hidden");
	}
});
