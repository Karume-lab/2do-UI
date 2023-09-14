const createStepHTML = (step, index) => {
	let checked = "";
	let line = "";
	let select = "";
	let bg = "";

	if (step.checked) {
		checked = "checked";
		line = "line-through";
	}

	if (step.is_selected) {
		select = "checked";
		bg = "bg-blue-400";
	}

	const stepHTML = `
		<li class="flex items-center justify-between ${bg}">
			<input type="checkbox" id="selectStep${index}" onclick="selectStep(${index}) ${select}">
			<span class="${line} cursor-pointer">${step.description}</span>
			<div>
				<input type="checkbox" onchange="checkStep(${index})" id="markStep${index}" ${checked}>
				<button onclick="deleteStep(${index})" id="deleteStep${index}" class="p-2 m-1 rounded-xl bg-red-600 hover:bg-red-500">Delete</button>
			</div>
		</li>
		`;
		return stepHTML;
}

const displayStepsHTML = (steps) => {
	let displayHTML = "";

	if (steps.length > 0) {
		steps.forEach((step, index) => {
			displayHTML += createStepHTML(step, index);
		});
	} else {
		displayHTML = "This task has no steps.";
	}
	return displayHTML;
}

const addStep = () => {
	const description = document.querySelector("#stepDescription").value;
	storeStep(description);
	location.reload();
}
