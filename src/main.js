class thing {
	constructor(name, children, nick) {
		things[name] = {
			children: children,
			nick: nick ? nick : [name]
		}

		// test
		try {
			parse(children);
		} catch (e) {
			console.error(e);
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
		new thing("diamond",		[["carbon"]]);
		new thing("oil",			[["lipids"]]);
		new thing("magma",			[["silica"], [["aluminium"], 3], [["iron"], 5], [["potassium"], 5], [["sodium"], 2], [["calcium"], 2]]);
		new thing("rock",			[["silica"], [["aluminium"], 3], [["iron"], 5], [["potassium"], 5], [["sodium"], 2], [["calcium"], 2]]);
		new thing("silica",			[["silicon"], ["oxygen"]]);
		new thing("chitin",			[["carbon"], ["hydrogen"], ["oxygen"], ["nitrogen"]]);
		new thing("salt",			[["chlorine"], ["sodium"]]);
		new thing("water",			[["hydrogen"], ["oxygen"]]);
		new thing("fire",			[["oxygen"], ["carbon"]]);
		new thing("ash",			[["organic matter"], ["carbon"]]);
		new thing("dew",			[["water"]]);
		new thing("ice",			[["water"]]);
		new thing("snow",			[["snowflakes"]]);
		new thing("snowflakes",		[["water"]]);
		new thing("ammonia",		[["hydrogen"], ["nitrogen"]]);
		new thing("methane",		[["hydrogen"], ["carbon"]]);
		new thing("hydrogen",		[["proton"], ["electron"]]);
		new thing("hydrogen atom",	[["proton"], ["electron"]], ["atoms"]);
		new thing("steel", 			[["iron"], ["carbon"]]);
		new thing("plastic",		[["polymers"]]);
		new thing("rubber",			[["polymers"]]);
		new thing("polymers",		[["carbon"], ["hydrogen"], ["oxygen"]]);
		new thing("alcohol",		[["carbon"], ["hydrogen"], ["oxygen"]]);
		new thing("carbon",			[["proton"], ["neutron"], ["electron"]]);
		new thing("sodium",			[["proton"], ["neutron"], ["electron"]]);
		new thing("chlorine",		[["proton"], ["neutron"], ["electron"]]);
		new thing("oxygen",			[["proton"], ["neutron"], ["electron"]]);
		new thing("helium",			[["proton"], ["neutron"], ["electron"]]);
		new thing("potassium",		[["proton"], ["neutron"], ["electron"]]);
		new thing("aluminium",		[["proton"], ["neutron"], ["electron"]]);
		new thing("iron",			[["proton"], ["neutron"], ["electron"]]);
		new thing("copper",			[["proton"], ["neutron"], ["electron"]]);
		new thing("lead",			[["proton"], ["neutron"], ["electron"]]);
		new thing("gold",			[["proton"], ["neutron"], ["electron"]]);
		new thing("silver",			[["proton"], ["neutron"], ["electron"]]);
		new thing("silicon",		[["proton"], ["neutron"], ["electron"]]);
		new thing("calcium",		[["proton"], ["neutron"], ["electron"]]);
		new thing("nitrogen",		[["proton"], ["neutron"], ["electron"]]);
		new thing("sulfur",			[["proton"], ["neutron"], ["electron"]]);

		new thing("glucose",		[["carbon"], ["hydrogen"], ["oxygen"]]);
		new thing("atom",			[["proton"], ["neutron"], ["electron"]]);
		new thing("proteins",		[["atom"]]);
		new thing("lipids",			[["atom"]]);
		new thing("organic matter",	[["proteins"], ["lipids"], ["glucids"], [["salt"], 3]]);
		new thing("molecule",		[["atom"]]);
		new thing("proton",			[["up quark", 2], ["down quark"]]);
		new thing("neutron",		[["down quark", 2], ["up quark"]]);
		new thing("electron",		[["qwubble"]]);
		new thing("up quark",		[["qwubble"]]);
		new thing("down quark",		[["qwubble"]]);
		new thing("qwubble",		[["multiverse", 5, 1]]);
		new thing("portal",			[["universe"]]);
	}

	{ //cells
		new thing("cell",			[["nucleus"], ["cytoplasm"]], ["cells"]);
		new thing("nucleus",		[["dna"], ["proteins"]]);
		new thing("cytoplasm",		[["glucids"], ["lipids"]]);
		new thing("dna",			[["genetic code"], ["hydrogen"], ["oxygen"], ["nitrogen"], ["carbon"], ["phosphorus"]], ["DNA"]);
		new thing("genetic code",	[["nucleotide", 50, 20]]);
		new thing("nucleotide",		[["molecule"]], ["A", "T", "G", "C"]);
	}

	{ // universe base
		new thing("multiverse",				[["universe", 30, 10]], ["multiverse", "lasagnaverse", "doughnutverse", "towelverse", "baconverse", "sharkverse", "nestedverse", "tastyverse", "upverse", "downverse", "layerverse", "clusterverse", "metaverse", "quantiverse", "paraverse", "epiverse", "alterverse", "hypoverse", "dimensioverse", "planiverse", "pluriverse", "polyverse", "maniverse", "stackoverse", "antiverse", "superverse", "upperverse", "maxiverse", "megaverse", "babyverse", "tinyverse", "retroverse", "ultraverse", "topoverse", "otherverse", "bubbleverse", "esreverse", "versiverse", "'verse", "cookieverse", "grandmaverse"]);
		new thing("universe",				[["galactic supercluster", 30, 10]]);
		new thing("galactic supercluster",	[["galaxy", 30, 10]]);
		new thing("galaxy",					[["galaxy center"], ["galaxy arm", 6, 2]]);

		new thing("galaxy arm",				[[["galactic life"], 20], [["dyson sphere"], 80], [["dyson sphere"], 50], ["star system", 50, 20], ["nebula", 12, 0], [["black hole"], 5], [["black hole"], 5]], ["arm"]);
		new thing("galaxy center",			[["black hole"], [["galactic life"], 10], [["dyson sphere"], 80], [["dyson sphere"], 50], ["star system", 50, 20], ["nebula", 12, 0]], ["galactic center"]);
		new thing("nebula",					[[["galactic life"], 8], [["star"], 50], [["star"], 50], [["star"], 50], ["interstellar cloud", 6, 1]]);
		new thing("interstellar cloud",		[["helium"], ["hydrogen"], [["carbon"], 2], [["water"], 20], [["ammonia"], 20], [["nitrogen"], 20], [["iron"], 20], [["sulfur"], 20], [["oxygen"], 8]], ["a bright pink interstellar cloud", "a faint interstellar cloud", "a fading interstellar cloud", "a pale interstellar cloud interstellar cloud", "a fluo interstellar cloud interstellar cloud", "a glowing interstellar cloud interstellar cloud", "a green interstellar cloud", "a bright green interstellar cloud", "a dark brown interstellar cloud", "a brooding interstellar cloud", "a magenta interstellar cloud", "a bright red interstellar cloud", "a dark red interstellar cloud", "a blueish interstellar cloud", "a deep blue interstellar cloud", "a turquoise interstellar cloud", "a teal interstellar cloud", "a golden interstellar cloud", "a multicolored interstellar cloud", "a silver interstellar cloud", "a dramatic interstellar cloud", "a luminous interstellar cloud", "a colossal interstellar cloud", "a purple interstellar cloud", "a gold-trimmed interstellar cloud", "an opaline interstellar cloud", "a silvery interstellar cloud", "a shimmering interstellar cloud"]);
		new thing("star system",			[["star"], [["star"], 30], [["visitor planet"], 20], [["future planet"], 10], [["future planet"], 10], [["terraformed planet"], 2], [["terraformed planet"], 5], [["terraformed planet"], 10], [["medieval planet"], 3], [["medieval planet"], 5], [["ancient planet"], 2], [["ancient planet"], 3], [["ancient planet"], 10], [["barren planet"], 2], [["barren planet"], 3], [["barren planet"], 5], [["gas giant"], 2], [["gas giant"], 3], [["gas giant"], 5], [["gas giant"], 10], ["asteroid belt", 2, 0]]);
		new thing("dyson sphere",			[["star"], [["star"], 30], ["dyson surface"], ["future planet", 8, 1], [["barren planet"], 2], [["barren planet"], 3], [["barren planet"], 5], [["gas giant"], 2], [["gas giant"], 3], [["gas giant"], 5], [["gas giant"], 10], ["asteroid belt", 2, 0]]);
		new thing("star",					[[["ghost"], 100], [["space monster"], 200]], ["hydrogen star", "helium star", "white star", "faint star", "yellow star", "red star", "blue star", "green star", "purple star", "bright star", "double star", "twin star", "triple star", "old star", "young star", "dying star", "small star", "giant star", "large star", "palt star", "dark star", "hell star", "horrific star", "twisted star", "spectral star"]);
		new thing("planet",					[[".terraformed planet"]], ["telluric planet"]);
		new thing("barren planet",			[[["galactic life"], 10], ["rock"], [["ice"], 2], [".planet composition"]], ["telluric planet"]);
		new thing("visitor planet",			[["visitor city", 8, 1], ["visitor installation", 6, 2], ["galactic life"], ["rock"], [["ice"], 2], [".planet composition"]], ["telluric planet"]);
		new thing("future planet",			[["future continent", 7, 2], ["ocean", 7, 1], ["future sky"], [[".future moon"], 3], [".planet composition"]], ["telluric planet"]);
		new thing("terraformed planet",		[["continent", 7, 2], ["ocean", 7, 1], ["terraformed sky"], [[".terraformed moon"], 3], [".planet composition"]], ["telluric planet"]);
		new thing("medieval planet",		[["medieval continent", 4, 2], ["ancient continent", 3, 0], ["ocean", 7, 1], ["sky"], [".planet composition"]], ["telluric planet"]);
		new thing("ancient planet",			[["ancient continent", 7, 2], ["ocean", 7, 1], ["sky"], [".planet composition"]], ["telluric planet"]);
		new thing("planet composition",		[["planet core"], [["moon"], 3], [["moon"], 5], [["moon"], 10]], ["planet"]);
		new thing("moon",					[[["ghost"], 100], ["rock"], ["planet core"]], [["young"], ["old"], ["large"], ["small"], ["pale"], ["white"], ["dark"], ["black"], ["old"], [" moon"]]);
		new thing("terraformed moon",		[[".planet composition"], ["continent", 4, 1], ["ocean", 4, 1], ["sky"]], ["young moon", "old moon", "large moon", "small moon", "pale moon", "white moon", "dark moon", "black moon", "old moon", "green moon", "lush moon", "blue moon", "city moon", "colonized moon", "life moon"]);
		new thing("asteroid belt",			[[["galactic life"], 5], ["asteroid", 30, 10]]);
		new thing("earth",					[[".asteroid belt"]], ["Earth"]);
		new thing("asteroid",				[[["space animal"], 500], ["rock"], [["ice"], 3]], ["asteroid"]);
		new thing("gas giant",				[["gas giant atmosphere"], [["planet core"], 2], ["moon", 3, 0], [["terraformed moon"], 5], [["terraformed moon"], 10]]);
		new thing("gas giant atmosphere",	[[["galactic life"], 10], ["helium"], ["hydrogen"], [["water"], 2], [["ammonia"], 2], [["methane"], 2]], ["atmosphere"]);
		new thing("planet core",			[[["space monster"], 500], ["iron"], ["rock"], [["diamond"], 50], ["magma"]], ["core"]);

		new thing("black hole",				[["inside the black hole"]]);
		new thing("inside the black hole",	[[["end of universe note"], 200], [["crustacean"], 500], ["white hole"]]);
		new thing("white hole",				[["universe"]]);
		new thing("everything",				[["universe"]]);
		new thing("end of universe note",	[["pasta"], 100], ["Help! I'm trapped in a universe factory!", "Okay, you can stop clicking now.", "I want to get off Mr Orteil's Wild Ride", "my sides"]);
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
				if (typeof(item[1]) != "number" || typeof(item[2]) != "number") throw new TypeError("invalid min/max amount");
				result = jarr(result, starr(item[0], rint(item[1], item[2])));
			} else {
				if (typeof(item[1]) != "number" && item[1] != undefined) throw new TypeError("invalid amount");
				result = jarr(result, starr(item[0], item[1] ? item[1] : 1));
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
