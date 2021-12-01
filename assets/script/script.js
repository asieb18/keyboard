// NOTE: referenced WWD HW 10 lightbox and Week 10 lecture as reference for popups :)

// unhides the overlay and shows the pop-up corresponding to the id parameter
 function unhidePopup(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	lightboxID.classList.remove('hidden');

    // hides the about button
    let abt = document.getElementById("about");
    abt.classList.add('hidden');
}

// Brings up popup about case when corresponding image is clicked
function unhideCase() {
	let caseimg = document.getElementById("case1");
	unhidePopup(caseimg);
}
document.getElementById("case").onclick = unhideCase;

// Brings up popup about pcb when corresponding image is clicked
 function unhidePcb() {
	let pcb = document.getElementById("pcb1");
	unhidePopup(pcb);
}
document.getElementById("pcb").onclick = unhidePcb;

// Brings up popup about plate when corresponding image is clicked
 function unhidePlate() {
	let plate = document.getElementById("plate1");
	unhidePopup(plate);
}
document.getElementById("plate").onclick = unhidePlate;

// Brings up popup about keycap when corresponding image is clicked
function unhideKeycap() {
	let keycap = document.getElementById("keycaps1");
	unhidePopup(keycap);
}
document.getElementById("keycaps").onclick = unhideKeycap;

// Brings up popup about switches when corresponding image is clicked
function unhideSwitch() {
	let swch = document.getElementById("switches1");
	unhidePopup(swch);
}
document.getElementById("switch").onclick = unhideSwitch;

// Brings up popup about stabilizers when corresponding image is clicked
function unhideStabilizer() {
	let stabilizers = document.getElementById("stabs1");
	unhidePopup(stabilizers);
}
document.getElementById("stabs").onclick = unhideStabilizer;

// Brings up popup about menu when clicked
function unhideAbout() {
	let about = document.getElementById("about1");
	unhidePopup(about);
}
document.getElementById("about").onclick = unhideAbout;


function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');

	let img1 = document.getElementById(lightboxID);

	img1.classList.add('hidden');

    // unhides the about button
    let abt = document.getElementById("about");
    abt.classList.remove('hidden');
}

// calls closeLightbox() on every .lightbox div
function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
// closes all lightboxes when the overlay is clicked on
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
