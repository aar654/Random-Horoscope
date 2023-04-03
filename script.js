//horoscope buttons
const aqu = document.querySelector(".aqu");
const ari = document.querySelector(".ari");
const can = document.querySelector(".can");
const cap = document.querySelector(".cap");
const gem = document.querySelector(".gem");
const leo = document.querySelector(".leo");
const lib = document.querySelector(".lib");
const pis = document.querySelector(".pis");
const sag = document.querySelector(".sag");
const sco = document.querySelector(".sco");
const tau = document.querySelector(".tau");
const vir = document.querySelector(".vir");

//horoscope divs
const aqua = document.querySelector("#aqua");
const arie = document.querySelector("#arie");
const canc = document.querySelector("#canc");
const capr = document.querySelector("#capr");
const gemi = document.querySelector("#gemi");
const leo2 = document.querySelector("#leo");
const libr = document.querySelector("#libr");
const pisc = document.querySelector("#pisc");
const sagi = document.querySelector("#sagi");
const scor = document.querySelector("#scor");
const taur = document.querySelector("#taur");
const virg = document.querySelector("#virg");

//close out button and div holding buttons
const closeBtn = document.querySelectorAll(".close");
const hbox = document.querySelector(".h-box")

//hides buttons and displays the horoscope div
function displayModal() {
    hbox.style.display = "hidden";

    if (aqu.isPressed === true) {
        aqua.style.display = "block";
    } else if (ari.isPressed === true) {
        arie.style.display = "block";
    } else if (can.isPressed === true) {
        canc.style.display = "block";
    } else if (cap.isPressed === true) {
        capr.style.display = "block";
    } else if (gem.isPressed === true) {
        gemi.style.display = "block";
    } else if (leo.isPressed === true) {
        leo2.style.display = "block";
    } else if (lib.isPressed === true) {
        libr.style.display = "block";
    } else if (pis.isPressed === true) {
        pisc.style.display = "block";
    } else if (sag.isPressed === true) {
        sagi.style.display = "block";
    } else if (sco.isPressed === true) {
        scor.style.display = "block";
    } else if (tau.isPressed === true) {
        taur.style.display = "block";
    } else if (vir.isPressed === true) {
        virg.style.display = "block";
    } 
}

//close out divs and set isPressed to false for all buttons
    function closeModal() {
        aqua.style.display = "none";
        aqu.isPressed = false;

        arie.style.display = "none";
        ari.isPressed = false;

        canc.style.display = "none";
        can.isPressed = false;

        capr.style.display = "none";
        cap.isPressed = false;

        gemi.style.display = "none";
        gem.isPressed = false;

        leo2.style.display = "none";
        leo.isPressed = false;

        libr.style.display = "none";
        lib.isPressed = false;

        pisc.style.display = "none";
        pis.isPressed = false;

        sagi.style.display = "none";
        sag.isPressed = false;

        scor.style.display = "none";
        sco.isPressed = false;

        taur.style.display = "none";
        tau.isPressed = false;

        virg.style.display = "none";
        vir.isPressed = false;
    }

    aqu.addEventListener("click", () => {
        aqu.isPressed = true;
        displayModal();
    });

    ari.addEventListener("click", () => {
        ari.isPressed = true;
        displayModal();
    });

    can.addEventListener("click", () => {
        can.isPressed = true;
        displayModal();
    });

    cap.addEventListener("click", () => {
        cap.isPressed = true;
        displayModal();
    });

    gem.addEventListener("click", () => {
        gem.isPressed = true;
        displayModal();
    });

    leo.addEventListener("click", () => {
        leo.isPressed = true;
        displayModal();
    });

    lib.addEventListener("click", () => {
        lib.isPressed = true;
        displayModal();
    });

    pis.addEventListener("click", () => {
        pis.isPressed = true;
        displayModal();
    });

    sag.addEventListener("click", () => {
        sag.isPressed = true;
        displayModal();
    });

    sco.addEventListener("click", () => {
        sco.isPressed = true;
        displayModal();
    });

    tau.addEventListener("click", () => {
        tau.isPressed = true;
        displayModal();
    });

    vir.addEventListener("click", () => {
        vir.isPressed = true;
        displayModal();
    });

    closeBtn.forEach(function(button) {
        button.addEventListener('click', function () {
            closeModal();
        });
    });

