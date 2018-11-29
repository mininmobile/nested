class thing {
	constructor(name, children) {
		things[name] = children;
	}
}

let container;
let uid = 0;
let things = {};

function getDropdown(type = "universe") {
	let dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");
	dropdown.id = `${uid}-dropdown`;
	dropdown.innerText = type;

	dropdown.onclick = () => {
		if (things[type]) {
			let child = document.getElementById(`${getUID(dropdown)}-content`);
			let me = document.getElementById(`${getUID(dropdown)}-dropdown`);
			if (child) {
				me.classList.toggle("expanded");
				child.classList.toggle("closed");
			} else {
				dropdown.classList.add("expanded");
				addDropdown(dropdown, parse(things[type]));
			}
		} else {
			throw new Error(`Invalid type: "${type}"`);
		}
	}

	uid++;
	return dropdown;
}

{ // create things
	new thing("universe", [["galactic supercluster", 20]]);
	new thing("galactic supercluster", [["galaxy", 20, 5]]);
	new thing("galaxy", [["galactic center", 1], ["arm", 6, 2]]);
	new thing("galactic center", [["black hole", 1], ["star system", 30, 20]]);
	new thing("arm", [["star system", 30, 20], ["nebula", 10, 3]]);
	new thing("nebula", ["this is going to be complicated"]);
	new thing("star system", ["this is going to be complicated"]);
	new thing("black hole", [["inside the black hole", 1]]);
	new thing("inside the black hole", [["white hole", 1]]);
	new thing("white hole", [["universe", 1]]);
}

{ //init
	let container = document.getElementById("container");

	let main = getDropdown();
	container.appendChild(main);
}

/**
 * @param {HTMLElement} parent
 * @param {array} types
 */
function addDropdown(parent, types) {
	let content = document.createElement("div");
	content.classList.add("content");
	content.id = `${getUID(parent)}-content`;

	types.forEach((type) => {
		let dropdown = getDropdown(type);
		content.appendChild(dropdown);
	});

	let newparent = parent.parentElement.insertBefore(parent.cloneNode(true), parent);
	parent.parentElement.insertBefore(content, parent);
	parent.remove();

	newparent.onclick = parent.onclick;
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
 * @param {HTMLElement} element
 * @returns
 */
function getUID(element) {
	return parseInt(element.id.split("-")[0]);
}

/**
 * @param {number} max
 * @param {number} min
 */
function random(max, min = 1) {
	return Math.floor((Math.random() * max) + min);
}
