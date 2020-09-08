//Navbar -> Para que se oculte y aparezca

let ubicacionPrincipal = window.pageYOffset;
let barraNavegacion = document.getElementById("content-Header");

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;
    //  if (ubicacionPrincipal >= desplazamientoActual) {
    //    barraNavegacion.style.top = "0px";
    //  } else {
    //    barraNavegacion.style.top = "-100px";
    //}

    if (ubicacionPrincipal >= barraNavegacion.clientHeight) {
        transformarBarraNavegación();
    } else {
        retornarBarraNavegacion();
    }

    ubicacionPrincipal = desplazamientoActual;
})

//Funcion para que se cambie la barra de navegación
let logo = document.getElementsByClassName("logo");
let navMenu = document.getElementsByClassName("navMenu ");
let navMenu_li = document.getElementsByClassName("navMenu li");
let navMenu_li_first_child = document.getElementsByClassName("navMenu li:first-child");
let navMenu_li_a = document.getElementsByClassName("navMenu li a");
let contentMedia = document.getElementsByClassName("contentMedia");
let contentMedia_h5 = document.getElementsByClassName("contentMedia h5");
let social_Media_a = document.getElementsByClassName("social-Media a");

function transformarBarraNavegación() {
    $('.content-Header').addClass('little-content-Header');
    $('.logo').addClass('little-logo');
    $('.navMenu').addClass('little-navMenu');
    $('.navMenu li').addClass('little-navMenu-li');
    $('.p_navMenu_li').addClass('little-navMenu-li-first-child');
    $('.navMenu_li_a').addClass('little-navMenu-li-a');
    $('.contentMedia').addClass('little-contentMedia');
    $('.contentMedia h5').addClass('little-contentMedia-h5 ');
    $('.social-Media a').addClass('little-social-Media-a');
    $('.social-Media a i ').addClass('little-social-Media-a-i');
}

function retornarBarraNavegacion() {
    $('.content-Header').removeClass('little-content-Header');
    $('.logo').removeClass('little-logo');
    $('.navMenu').removeClass('little-navMenu');
    $('.navMenu li').removeClass('little-navMenu-li');
    $('.p_navMenu_li').removeClass('little-navMenu-li-first-child');
    $('.navMenu_li_a').removeClass('little-navMenu-li-a');
    $('.contentMedia').removeClass('little-contentMedia');
    $('.contentMedia h5').removeClass('little-contentMedia-h5 ');
    $('.social-Media a').removeClass('little-social-Media-a');
    $('.social-Media a i ').removeClass('little-social-Media-a-i');
}