function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial height
setVH();

// Reset height on resize and orientation change
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);

let count = 0;
let lastEntry = 0;  // Store only the last entry
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    if (count > 0) {
        lastEntry = count;  // Save only the last count
        saveEl.textContent = "Previous Entries: " + lastEntry;
        count = 0;
        countEl.textContent = count;
    }
}

function reset() {
    count = 0;
    countEl.textContent = count;
}
