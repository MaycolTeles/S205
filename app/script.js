
function openDrawer() {
    document.getElementById("drawer").style.width = "50%";
}

function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
}

function setLightTheme() {
    document.documentElement.style.setProperty('--cor-sombra', 'white');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-background1', 'white');
    document.documentElement.style.setProperty('--cor-background2', '#3a9bdc59');
}

function setDarkTheme() {
    document.documentElement.style.setProperty('--cor-sombra', 'black');
    document.documentElement.style.setProperty('--cor-text', 'white');
    document.documentElement.style.setProperty('--cor-background1', 'black');
    document.documentElement.style.setProperty('--cor-background2', 'black');
}
