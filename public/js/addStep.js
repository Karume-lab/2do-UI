const createStepHTML = (step, index) => {
	const stepHTML = `
		<li class="flex items-center justify-between">
		<span>${step.description}</span>
		<div>
		<input type="checkbox" id="markStep${index}">
		<button class="p-2 m-1 rounded-xl bg-red-600 hover:bg-red-500">Delete</button>
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
			displayHTML = "Add a step for this Task";
		}
		stepsUl.innerHTML = displayHTML;
	return stepsUl;
}

const addStep = () => {
	const description = document.querySelector("#stepDescription").value;
	storeStep(description);
	location.reload();
}
