function show_menu() {
    document.getElementById('quick_info').classList.add('quick-info-show');
}
function hide_menu() {
    document.getElementById('quick_info').classList.remove('quick-info-show');
}

function fadeElementIn(target, dis, className) {
    target.style.display = dis;
    setTimeout(function () {
        target.classList.add(className);
    }, 100);
}

function fadeElementOut(target, className) {
    target.classList.remove(className);
    setTimeout(function () {
        target.style.display = "none";
    }, 500);
}

let menuToggle = document.querySelector('.hamburger');
let menu = document.querySelector('.top-links');

menuToggle.addEventListener('click', function () {
    this.classList.toggle('is-active');
    if (menu.classList.contains('active')) {
        fadeElementOut(menu, 'active');
        document.body.style.cssText = "";
    } else {
        fadeElementIn(menu, "flex", 'active');
        document.body.style.cssText = "overflow: hidden; height: 100vh;";
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        document.body.style.cssText = "";
    }
});