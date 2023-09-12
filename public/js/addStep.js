const stepsDiv = document.querySelector("#stepsDiv");

const createStepHTML = (step, index) => {
	const stepHTML = `
		<li class="flex items-center justify-between">
			<span>${step}</span>
			<div>
				<input type="checkbox" id="markStep${index}">
				<button class="p-2 m-1 rounded-xl bg-red-600 hover:bg-red-500">Delete</button>
			</div>
		</li>
	`;
	return stepHTML;
}

// console.log(taskArray[0].steps);

const displayStepsHTML = (taskArray) => {	
	taskArray.forEach((task, index) => {
		let displayHTML = "";
		task.steps.forEach((step) => {
			displayHTML += createStepHTML(step, index);
		});
		const stepsUl = document.createElement("ul");
		stepsUl.id = `steps${index}`;
		stepsUl.classList.add("hidden");
		stepsUl.innerHTML = displayHTML;
		stepsDiv.appendChild(stepsUl);
	});
}


const description = document.querySelector("#stepDescription").value;
storeStep(description);

const addStep = () => {
	displayStepsHTML(taskArray);
	// location.reload();
}
