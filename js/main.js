//HEADER------------------------------------------------------------------------
//para transformar la barra de navegación

let ubicacionPrincipal = window.pageYOffset;
let barraNavegacion = document.getElementById("content-Header");

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= barraNavegacion.clientHeight) {
        transformarBarraNavegación();
    } else {
        retornarBarraNavegacion();
    }

    ubicacionPrincipal = desplazamientoActual;
})

//Funciones para que se cambie la barra de navegación
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

//FOOTER------------------------------------------------------------------------
$('.show-Hide button').on('click', function(e) {
    e.preventDefault();
    $('.footer').toggleClass('showFooter');

    if (document.querySelector("#footer.showFooter")) {
        document.getElementById('btn-Show-Hide').textContent = ' ';
        document.getElementById('btn-Show-Hide').textContent = 'Ocultar';

        $('html, body').animate({
            scrollTop: $(document).height(),
        }, 'slow');
    } else {
        document.getElementById('btn-Show-Hide').innerHTML = " ";
        document.getElementById('btn-Show-Hide').innerHTML = "Mostrar";
    }

});