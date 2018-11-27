let container = document.getElementById("container");

{ //init
	let main = getDropdown();
	container.appendChild(main);
}

function getDropdown(type = "universe") {
	let dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	dropdown.innerText = type[0].toUpperCase() + type.substring(1);

	switch (type) {
		case "universe": {
			dropdown.addEventListener("click", () => {
				addDropdown(dropdown, ["galaxy", "galaxy", "galaxy", "galaxy", "galaxy"]);
			});
		} break;

		case "galaxy": {
			dropdown.addEventListener("click", () => {
				addDropdown(dropdown, ["universe"]);
			});
		} break;
	}

	return dropdown;
}


/**
 * @param {HTMLElement} parent
 * @param {array} types
 */
function addDropdown(parent, types) {
	let content = document.createElement("div");
	content.classList.add("content");

	types.forEach((type) => {
		let dropdown = getDropdown(type);
		content.appendChild(dropdown);
	});

	parent.parentElement.insertBefore(parent.cloneNode(true), parent);
	parent.parentElement.insertBefore(content, parent);
	parent.remove();
}
