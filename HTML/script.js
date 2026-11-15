/* =========================================
   1. EQUIPMENT & STORY DATA
   Add or edit equipment and its information here.
========================================= */

const D = {

	// Moon equipment
	moon: {
		items: [
			{
				n: 'Lunar Reconnaissance Orbiter',
				e: '<img src="images/LunarReconnaisance.JPG" alt="Lunar Reconnaissance Orbiter">',
				story: 'Lunar Reconnaissance Orbiter (2009): Take a trip around the Moon with this space explorer as it searches for hidden treasures!',
				info: [
					"The Orbiter has been measuring things like the moon's temperature, radiation levels and environment up close for almost 20 years.",
					"It helps to identify the moon's resources, such as water and sunlight.",
					'It also maps sites for further landing missions.'
				]
			},
			{
				n: 'Lunar Roving Vehicles',
				e: '<img src="images/LunarRovingVehicle.JPG" alt="Lunar Roving Vehicle">',
				story: 'Lunar Roving Vehicles (1971): Hop aboard! These space buggies helped astronauts explore much more of the Moon.',
				info: [
					'Think of them as space buggies. They drove astronauts around the moon on missions Apollo 15, 16 and 17.',
					'There are 3 rovers parked permanently on the moon.',
					'They helped to expand exploration of the moon from walking to travelling greater distances.'
				]
			},
			{
				n: 'Surveyor 3',
				e: '<img src="images/Surveyor3.JPG" alt="Surveyor 3">',
				story: 'Surveyor 3 (1967): Find out how this little spacecraft helped scientists discover what Moon dust is really like!',
				info: [
					'Surveyor 3 was able to perform tasks on the moon that caused scientists to conclude that lunar soil was like wet sand.',
					'In 1969, Apollo 12 astronauts recovered parts of the Surveyor.',
					'This meant that scientists could explore the effects of longer-term moon exposure.'
				]
			},
			{
				n: 'Ranger 7',
				e: '<img src="images/ranger7.JPG" alt="Ranger 7">',
				story: 'Ranger 7 (1964): Meet the spacecraft that took pictures of the Moon all the way down to its crash landing!',
				info: [
					"The Ranger was designed to take photos to investigate whether the moon's surface was safe enough for a smooth landing.",
					'The only other photos available before this were low resolution ones from the Soviet 3 Luna.',
					'It took over 4300 photos before a planned crash.'
				]
			},
			{
				n: 'Laser Retroreflective Arrays',
				e: '<img src="images/Laser%20retroreflector.JPG" alt="Laser retroreflective array">',
				story: 'Laser Retroreflective Arrays (1969): Discover how a tiny device left on the Moon helps us measure the distance between Earth and the Moon!',
				info: [
					'These small, lightweight devices are used to reflect laser light, providing precise scaling of the distance between the earth and the moon.',
					'They were left on the moon by Apollo 11, 14 and 15.',
					'They prove the distance at which the moon moves away from the earth as well as providing opportunities to test the theory of gravity.'
				]
			}
		]
	},

	// Mars equipment
	mars: {
		items: [
			{
				n: 'Viking 1',
				e: '<img src="images/Viking1.JPG" alt="Viking 1">',
				story: 'Viking 1 (1976): Meet the spacecraft that gave us our first long look at the mysterious red planet!',
				info: [
					'Viking 1 was the first of two landers that worked to form the first long term weather record of Mars.',
					'It also sent back colored photos of its surface.',
					'It measured things like soil chemistry and biology tests.'
				]
			},
			{
				n: 'Mars Climate Orbiter',
				e: '<img src="images/Marsclimateorbiter.JPG" alt="Mars Climate Orbiter">',
				story: 'Mars Climate Orbiter (1999): What happened to this Mars explorer? Discover the mission that got lost on its way!',
				info: [
					'The Mars Climate Orbiter was designed to better understand Martian weather.',
					'It was lost on arrival.',
					'This happened after there was a mix up in navigation data.'
				]
			},
			{
				n: 'Spirit',
				e: '<img src="images/Spirit.JPG" alt="Spirit rover">',
				story: "Spirit (2004): Follow Spirit as it explores Mars and uncovers clues about the planet's watery past!",
				info: [
					'Contact was lost with Spirit in 2010.',
					'It discovered that there was silica rich soil on Mars.',
					'It also found suspected signs of previous water activity.'
				]
			},
			{
				n: 'Ingenuity',
				e: '<img src="images/Ingenuity.JPG" alt="Ingenuity helicopter">',
				story: 'Ingenuity (2021): Meet the little helicopter that made a BIG leap by flying through the skies of Mars!',
				info: [
					'Ingenuity was designed for up to 5 flights on Mars.',
					'The actual number of flights it powered was over 14 times this.',
					'It proved that aerial scouting could work on the red planet.'
				]
			},
			{
				n: 'EDL Debris',
				e: '<img src="images/EDLdebris.JPG" alt="EDL debris">',
				story: 'EDL Debris: Find out what gets left behind when a spacecraft lands on Mars!',
				info: [
					'EDL stands for Entry, Descent and Landing. It is the risky trip from space down to the surface of Mars, and it only takes about 7 minutes.',
					'To land safely, spacecraft drop parts along the way, like heat shields, parachutes and backshells. These parts end up scattered across the surface of Mars.',
					'The parachute used to land the Perseverance rover even had a secret message hidden in its pattern: "Dare Mighty Things"!'
				]
			}
		]
	}

};


// =========================================
// 2. GLOBAL VARIABLES
// =========================================

const b = document.body;

let hist = [];      // Previous screens
let cur = 'home';   // Current screen
let P = 'moon';     // Selected planet
let I = 0;          // Selected equipment index
let sel = false;    // Whether equipment has been selected


// =========================================
// 3. BACKGROUND EFFECTS
// =========================================

// Generate 70 background stars
for (let k = 0; k < 70; k++) {

	const s = document.createElement('div');
	s.className = 'star';

	const z = Math.random() * 3 + 1;

	s.style.cssText = `
		width: ${z}px;
		height: ${z}px;
		left: ${Math.random() * 100}vw;
		top: ${Math.random() * 100}vh;
		animation-delay: ${Math.random() * 3}s;
	`;

	b.appendChild(s);
}

// Generate a shooting star every 7 seconds
setInterval(() => {

	const s = document.createElement('div');
	s.className = 'shoot';

	s.style.left = Math.random() * 60 + 'vw';
	s.style.top = Math.random() * 40 + 'vh';

	b.appendChild(s);

	// Remove the shooting star after its animation
	setTimeout(() => {
		s.remove();
	}, 1300);

}, 7000);


// =========================================
// 4. SCREEN NAVIGATION
// =========================================

// Display a particular screen
function go(id, isBack) {

	// Save the current screen unless going backwards
	if (!isBack) {
		hist.push(cur);
	}

	cur = id;

	// Show the selected screen and hide the others
	document.querySelectorAll('.screen').forEach(s => {
		s.classList.toggle('on', s.id == id);
	});

	// Close the dropdown menu
	document.getElementById('dd').classList.remove('open');

	// Return to the top of the page
	window.scrollTo(0, 0);
}

// Return to the previous screen
function goBack() {
	if (hist.length) {
		go(hist.pop(), true);
	}
}


// =========================================
// 5. PLANET SELECTION
// =========================================

// Open the equipment selection screen for a planet
function explore(p) {

	P = p;
	I = 0;
	sel = false;

	const s = document.getElementById('sel');

	// Apply the correct planet background
	s.classList.remove('moon-bg', 'mars-bg');
	s.classList.add(p + '-bg');

	// Set the destination for the travel button
	const o = p == 'moon' ? 'mars' : 'moon';
	const t = document.getElementById('trv');

	t.textContent = o == 'mars'
		? "Let's travel to Mars!"
		: "Let's travel to the Moon!";

	t.onclick = () => explore(o);

	// Display the equipment
	draw();

	go('sel');
}


// =========================================
// 6. EQUIPMENT SELECTION
// =========================================

// Move to the previous or next equipment item
function mv(n) {

	const L = D[P].items.length;

	// Cycle through the equipment list
	I = (I + n + L) % L;

	sel = false;

	draw();
}

// Select the currently displayed equipment
function pick() {
	sel = true;
	draw();
}


// =========================================
// 7. EQUIPMENT DISPLAY
// =========================================

function draw() {

	const items = D[P].items;

	// Generate the equipment cards and navigation arrows
	document.getElementById('st').innerHTML =

		'<button class="arrow" onclick="mv(-1)">◀</button>' +

		items.map((it, k) => `

			<div class="card ${k == I ? 'on' : ''} ${sel && k != I ? 'gone' : ''}">

				<div class="eq">${it.e}</div>

				${it.n}

				${k == I ? '<button class="btn" onclick="pick()">Select</button>' : ''}

			</div>

		`).join('') +

		'<button class="arrow" onclick="mv(1)">▶</button>';

	// Display the speech bubble and Next button after selection
	const sp = document.getElementById('sp');
	const nx = document.getElementById('nx');

	sp.style.display = nx.style.display = sel ? 'block' : 'none';

	// Show the selected equipment's introduction
	sp.textContent = items[I].story +
		' Want to find out more? Click Next';
}


// =========================================
// 8. EQUIPMENT STORY
// =========================================

function story(s) {

	const it = D[P].items[I];

	// Generate the story page
	document.getElementById('storybox').innerHTML = `

		<h1 class="center">${it.e} ${it.n}</h1>

		<div class="infobox">
			${it.info[s]}
		</div>

		<div class="btns">

			<button class="btn" onclick="${s > 0 ? `story(${s - 1})` : "go('sel')"}">
				← Back
			</button>

			<button class="btn" onclick="go('sel')">
				Choose equipment
			</button>

			<button class="btn" onclick="${s < 2 ? `story(${s + 1})` : "go('sel')"}">
				Next →
			</button>

		</div>

		<p class="center">
			Box ${s + 1} of 3
		</p>

	`;

	// Open the story screen
	go('story');
}