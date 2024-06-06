
function openDrawer() {
    document.getElementById("drawer").style.width = "50%";
}

function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
}

function setLightTheme() {
    localStorage.removeItem('theme');
    localStorage.currentTheme = "light";
    document.documentElement.style.setProperty('--cor-sombra', 'white');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-background1', 'white');
    document.documentElement.style.setProperty('--cor-background2', '#0a5a9b');
}

function setDarkTheme() {
    localStorage.removeItem('theme');
    localStorage.currentTheme = "dark";
    document.documentElement.style.setProperty('--cor-sombra', 'black');
    document.documentElement.style.setProperty('--cor-text', 'white');
    document.documentElement.style.setProperty('--cor-background1', '#191e23');
    document.documentElement.style.setProperty('--cor-background2', '#064b79');
}

var theme = window.localStorage.currentTheme;

if (theme === "dark") {
    setDarkTheme();
} else {
    setLightTheme();
}
