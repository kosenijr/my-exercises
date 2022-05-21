/*

______________________________________________________________
*/
// abbrev logs to console, confirm readiness
const log = console.log;
log('ready to go!');
// ___________________________________________________________

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
// set up glideMixin
let glideMixin = function (obj) {
  obj.glide = function () { console.log('Watch us glide!') }
};

// apply function
glideMixin(bird);
glideMixin(boat);

// call glide methods
bird.glide();
boat.glide();