class thing {
	constructor(name, children, nick) {
		things[name] = {
			children: children,
			nick: nick ? nick : [name]
		}
	}
}

let container;
let uid = 0;
let things = {};

function getDropdown(type = "universe") {
	let dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");
	dropdown.id = `${uid}-dropdown`;
	dropdown.title = `archetype: ${type}`;
	dropdown.innerText = rarr(things[type].nick);

	dropdown.onclick = () => {
		if (things[type]) {
			let child = document.getElementById(`${getUID(dropdown)}-content`);
			let me = document.getElementById(`${getUID(dropdown)}-dropdown`);
			if (child) {
				me.classList.toggle("expanded");
				child.classList.toggle("closed");
			} else {
				dropdown.classList.add("expanded");
				addDropdown(dropdown, parse(things[type].children));
			}
		} else {
			throw new Error(`Invalid type: "${type}"`);
		}
	}

	uid++;
	return dropdown;
}

{ // create things
	{ // basic elements (stolen from ortiel uwu)
		new thing("diamond", [["carbon", 1]]);
		new thing("oil", [["lipids", 1]]);
		new thing("magma", [["silica", 1], [["aluminium"], 3], [["iron"], 5], [["potassium"], 5], [["sodium"], 2], [["calcium"], 2]]);
		new thing("rock", [["silica", 1], [["aluminium"], 3], [["iron"], 5], [["potassium"], 5], [["sodium"], 2], [["calcium"], 2]]);
		new thing("silica", [["silicon", 1], ["oxygen", 1]]);
		new thing("chitin", [["carbon", 1], ["hydrogen", 1], ["oxygen", 1], ["nitrogen", 1]]);
		new thing("salt", [["chlorine", 1], ["sodium", 1]]);
		new thing("water", [["hydrogen", 1], ["oxygen"]]);
		new thing("fire", [["oxygen", 1], ["carbon", 1]]);
		new thing("ash", [["organic matter", 1], ["carbon", 1]]);
		new thing("dew", [["water", 1]]);
		new thing("ice", [["water", 1]]);
		new thing("snow", [["snowflakes", 1]]);
		new thing("snowflakes", [["water", 1]]);
		new thing("ammonia", [["hydrogen", 1], ["nitrogen", 1]]);
		new thing("methane", [["hydrogen", 1], ["carbon", 1]]);
		new thing("hydrogen", [["proton", 1], ["electron", 1]]);
		new thing("hydrogen atom", [["proton", 1], ["electron", 1]], ["atoms"]);
		new thing("steel", [["iron", 1], ["carbon", 1]]);
		new thing("plastic",	[["polymers", 1]]);
		new thing("rubber",		[["polymers", 1]]);
		new thing("polymers",	[["carbon", 1], ["hydrogen", 1], ["oxygen", 1]]);
		new thing("alcohol",	[["carbon", 1], ["hydrogen", 1], ["oxygen", 1]]);
		new thing("carbon",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("sodium",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("chlorine",	[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("oxygen",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("helium",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("potassium",	[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("aluminium",	[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("iron",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("copper",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("lead",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("gold",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("silver",		[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("silicon",	[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("calcium",	[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("nitrogen",	[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("sulfur",		[["proton", 1], ["neutron", 1], ["electron", 1]]);

		new thing("glucose",		[["carbon", 1], ["hydrogen", 1], ["oxygen", 1]]);
		new thing("atom",			[["proton", 1], ["neutron", 1], ["electron", 1]]);
		new thing("proteins",		[["atom", 1]]);
		new thing("lipids",			[["atom", 1]]);
		new thing("organic matter",	[["proteins", 1], ["lipids", 1], ["glucids", 1], [["salt"], 3]]);
		new thing("molecule",		[["atom", 1]]);
		new thing("proton",			[["up quark", 2],["down quark", 1]]);
		new thing("neutron",		[["down quark", 2], ["up quark", 1]]);
		new thing("electron",		[["qwubble", 1]]);
		new thing("up quark",		[["qwubble", 1]]);
		new thing("down quark",		[["qwubble", 1]]);
		new thing("qwubble",		["multiverse,1-5"]);
		new thing("portal",			["universe"]);
	}

	{ // universe base
		new thing("multiverse", [["universe", 30, 10]], ["multiverse","lasagnaverse","doughnutverse","towelverse","baconverse","sharkverse","nestedverse","tastyverse","upverse","downverse","layerverse","clusterverse","metaverse","quantiverse","paraverse","epiverse","alterverse","hypoverse","dimensioverse","planiverse","pluriverse","polyverse","maniverse","stackoverse","antiverse","superverse","upperverse","maxiverse","megaverse","babyverse","tinyverse","retroverse","ultraverse","topoverse","otherverse","bubbleverse","esreverse","versiverse","'verse","cookieverse","grandmaverse"]);
		new thing("universe", [["galactic supercluster", 20]]);
		new thing("galactic supercluster", [["galaxy", 20, 5]]);
		new thing("galaxy", [["galactic center", 1], ["arm", 6, 2]]);
		new thing("galactic center", [["black hole", 1], ["star system", 30, 20]]);
		new thing("arm", [["star system", 30, 20], ["nebula", 10, 3]]);
		new thing("black hole", [["inside the black hole", 1]]);
		new thing("inside the black hole", [["white hole", 1]]);
		new thing("white hole", [["universe", 1]]);

		new thing("nebula", ["this is going to be complicated"]);
		new thing("star system", ["this is going to be complicated"]);
	}
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
		if (typeof(item[0]) == "string") {
			if (item[2]) {
				result = jarr(result, starr(item[0], rint(item[1], item[2])));
			} else {
				result = jarr(result, starr(item[0], item[1]));
			}
		} else {
			if (rint(item[1]) == 1) {
				rarr(item[0]);
			}
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
function rint(max, min = 1) {
	return Math.floor((Math.random() * max) + min);
}


/**
 * @param {array} arr
 * @returns
 */
function rarr(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}
