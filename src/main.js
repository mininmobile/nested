class thing {
	constructor(name, children) {
		things[name] = children;
	}
}

let container = document.getElementById("container");

let things = {};

{ //init
	let main = getDropdown();
	container.appendChild(main);
}

function getDropdown(type = "universe") {
	let dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	dropdown.innerText = type;

	if (things[type]) {
		dropdown.addEventListener("click", () => {
			addDropdown(dropdown, parse(things[type]));
		});
	} else {
		// lol epic
		function up() { return `Invalid type: "${type}"`; }
		throw up();
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

function parse(childlist) {
	// parse child list eg. [["toe", 10], ["eye", 2]] --> ["toe", "toe", "toe"... "eye", "eye"]
	// or random amount eh. [["ball", 10, 1]] --> [list of 1 to 10 "ball"s]
	let result = [];

	childlist.forEach((item) => {
		if (item[2]) {
			result = jarr(result, starr(item[0], random(item[1], item[2])));
		} else {
			result = jarr(result, starr(item[0], item[1]));
		}
	});

	return result;
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
