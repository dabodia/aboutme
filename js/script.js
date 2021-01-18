let root = document.documentElement;
root.style.setProperty('--sec-color', "#252120");

function toggleTheme() {
    if (root.style.getPropertyValue('--sec-color') == "#252120") {
        root.style.setProperty('--sec-color', "#FFF");
        root.style.setProperty('--sec-var', "#DDD");
        root.style.setProperty('--p-color', "#252120");
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "initial";
    } else {
        root.style.setProperty('--sec-color', "#252120");
        root.style.setProperty('--sec-var', "#574E4C");
        root.style.setProperty('--p-color', "#DDD");
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "initial";
    }
}