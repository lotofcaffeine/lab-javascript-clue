var mrGreen = {
	first_name: "Jacob",
	last_name: "Green",
	color: "green",
	description: "He has a lot of connections",
	age: 45,
	image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
	occupation: "Entrepreneur"
};
var drOrchid = {
	first_name: "Doctor",
	last_name: "Orchid",
	color: "white",
	description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
	age: 26,
	image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
	ocupation: "Scientist"
};

var profPlum = {
	first_name: "Victor",
	last_name: "Plum",
	color: "purple",
	description: "Billionare video game designer",
	age: 22,
	image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
	occupation: "Designer"
};

var missScarlet = {
	first_name: "Kasandra",
	last_name: "Scarlet",
	color: "red",
	description: "She is an A-list movie star with a dark past",
	age: 31,
	image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
	occupation: "Actor"
};

var mrsPeacock = {
	first_name: "Eleanor",
	last_name: "Peacock",
	color: "blue",
	description: "She is from a wealthy family and uses her status and money to earn popularity",
	age: 36,
	image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
	occupation: "Socialité"
}

var mrMustard = {
	first_name: "Jack",
	last_name: "Mustard",
	color: "yellow",
	description: "He is a former football player who tries to get by on his former glory",
	age: 62,
	image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
	occupation: "Retired Football player"
}

var rope = {
	name: "rope",
	weight: 10
};
var knife = {
	name: "knife",
	weight: 8
};
var candlestick = {
	name: "candlestick",
	weight: 2
};
var dumbbell = {
	name: "dumbbell",
	weight: 30
};
var poison = {
	name: "poison",
	weight: 2
};
var axe = {
	name: "axe",
	weight: 15
};
var bat = {
	name: "bat",
	weight: 13
};
var trophy = {
	name: "trophy",
	weight: 25
};
var pistol = {
	name: ", pistol",
	weight: 20
};


var dinning_room = {
	name: "Dinning Room"
};
var conservatory = {
	name: "Conservatory"
};

var kitchen = {
	name: "Kitchen"
};
var study = {
	name: "Study"
};
var library = {
	name: "Library"
};
var billiard_room = {
	name: "Billiard Room"
};
var lounge = {
	name: "Lounge"
};
var ballroom = {
	name: "Ballroom"
};
var hall = {
	name: "Hall"
};
var spa = {
	name: "Spa"
};
var living_room = {
	name: "Living Room"
};
var observatory = {
	name: "Observatory"
};
var theater = {
	name: "Theater"
};
var guest_house = {
	name: "Guest House"
};
var patio = {
	name: "Patio"
};

var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [dinning_room, conservatory, kitchen, study, library, billiard_room, lounge, ballroom, hall, spa, living_room, observatory, theater, guest_house, patio];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

function randomSelector(array) {
	let randomNumber = Math.floor(Math.random() * array.length);
	return (array.length == 0) ? undefined : array[randomNumber];
}

function pickMistery(){
	let character = randomSelector(charactersArray);
	let room = randomSelector(roomsArray);
	let weapon = randomSelector(weaponsArray);
	var misteryEnvelope = [character,weapon, room ];
	return misteryEnvelope;
}

function getName(array){
	return array[0].first_name + " "+array[0].last_name; 
}
function getWeapon(array){
	return array[1].name; 
}
function getPlace(array){
	return array[2].name;
}

function revealMistery(array){
	let name = getName(array);  
	let weapon = getWeapon(array);
	let place = getPlace(array);

  return `${name} killed Mr.Boddy using the ${weapon} in the ${place}!!!!`
}