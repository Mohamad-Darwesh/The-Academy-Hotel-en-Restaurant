
// Oplossing simpel
document.getElementById("reserveerBtn").onclick = function () {
    document.getElementById("familie").style.display = "none";
    document.getElementById("suite").style.display = "none";
    document.querySelector(".bevestiging").style.display = "block";
};

document.getElementById("mooieKnop").onclick = function () {
    document.getElementById("standaard").style.display = "none";
    document.getElementById("suite").style.display = "none";
    document.querySelector(".bevestiging").style.display = "block";
};

document.getElementById("suiteBtn").onclick = function () {
    document.getElementById("familie").style.display = "none";
    document.getElementById("standaard").style.display = "none";
    document.querySelector(".bevestiging").style.display = "block";
};

document.getElementById("annuleren").onclick = function () {
    document.getElementById("standaard").style.display = "block";
    document.getElementById("suite").style.display = "block";
    document.getElementById("familie").style.display = "block";
    document.querySelector(".bevestiging").style.display = "none";
};
