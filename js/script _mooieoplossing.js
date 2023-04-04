var bevestiging = document.querySelector(".bevestiging");
var suitekamer = document.querySelector("#suiteImg");
var standaardKamer = document.querySelector("#reserveerBtn");
var familieKamer = document.querySelector("#mooieKnop");
var annuleerKamer = document.querySelector("#annuleren");

standaardKamer.onclick = function () {
  showConfirmation("standaard");
};

familieKamer.onclick = function () {
  showConfirmation("familie");
};

suitekamer.onclick = function () {
  showConfirmation("suite");
};

annuleerKamer.onclick = function () {
  reset();
};

function showConfirmation(type) {
  bevestiging.style.display = "block";
  if (type === "standaard") {
    document.querySelector("#familie").style.display = "none";
    document.querySelector("#suite").style.display = "none";
    standaardKamer.style.display = "none";
  }
  if (type === "familie") {
    document.querySelector("#standaard").style.display = "none";
    document.querySelector("#suite").style.display = "none";
    familieKamer.style.display = "none";
  }
  if (type === "suite") {
    document.querySelector("#familie").style.display = "none";
    document.querySelector("#standaard").style.display = "none";
    suitekamer.style.display = "none";
  }
}
function reset() {
  bevestiging.style.display = "none";

  document.querySelector("#standaard").style.display = "block";
  document.querySelector("#suite").style.display = "block";
  document.querySelector("#familie").style.display = "block";

  standaardKamer.style.display = "block";
  familieKamer.style.display = "block";
  suitekamer.style.display = "block";
}
