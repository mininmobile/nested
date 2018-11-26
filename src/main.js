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
				addDropdown(dropdown, "galaxy");
				addDropdown(dropdown, "galaxy");
				addDropdown(dropdown, "galaxy");
				addDropdown(dropdown, "galaxy");
				addDropdown(dropdown, "galaxy");
			});
		} break;

		case "galaxy": {
			dropdown.addEventListener("click", () => {
				dropdown.innerText = "aaaa";
			});
		} break;
	}

	return dropdown;
}
