let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

//dark mode
let darkmode=document.querySelector('#darkmode');

darkmode.onclick=()=>{
    if(darkmode.classList.contains('bi-moon-stars-fill')){
        darkmode.classList.replace('bi-moon-stars-fill','bi-brightness-high-fill');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bi-brightness-high-fill','bi-moon-stars-fill');
        document.body.classList.remove('active');
    }
}