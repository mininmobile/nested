let container = document.getElementById("container");

{ //init
	let main = getDropdown();
	container.appendChild(main);
}

function getDropdown(type = "universe") {
	let dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	dropdown.innerText = type;

	switch (type) {
		case "universe": {
			dropdown.addEventListener("click", () => {
				addDropdown(dropdown, starr("galactic supercluster", 5));
			});
		} break;

		case "galactic supercluster": {
			dropdown.addEventListener("click", () => {
				addDropdown(dropdown, starr("galaxy", 5));
			});
		} break;

		default: {
			throw new Error(`Invalid dropdown type: "${type}"`);
		}
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

/**
 * @param {string} string 
 * @param {number} multiplier 
 */
function starr(string, multiplier) {
	let array = [];
	
	for (let i = 0; i < multiplier; i++) {
		array.push(string);
	}
	
	return array;
}

function jarr() {
	let joint = [];

	[].forEach.call(arguments, (z) => {
		z.forEach((x) => joint.push(x));
	});

	return joint;
}

/**
 * @param {number} max
 * @param {number} min
 */
function random(max, min = 1) {
	return Math.floor((Math.random() * max) + min);
}
