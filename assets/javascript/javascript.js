var nav = document.querySelector('nav');
let text = document.getElementById('text');
let logo = document.getElementById('logo');
logo.style.display = "none";

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 75) {
        nav.classList.add('bg-dark', 'navbar-light', 'shadow');
        brand.classList.add('text-light');
        logo.style.display = "block";   
    } else {
        nav.classList.remove('bg-dark', 'navbar-light', 'shadow');
        brand.classList.remove('text-light');
        logo.style.display = "none";
    }
});

function back(){
    document.getElementById("image").style.display = "none";
}

function back2(){
    document.getElementById("image2").style.display = "none";
}

function back3(){
    document.getElementById("map").style.display = "none";
}