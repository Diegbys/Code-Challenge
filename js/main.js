//HEADER------------------------------------------------------------------------
//para transformar la barra de navegación

let ubicacionPrincipal = window.pageYOffset;
let barraNavegacion = document.getElementById("content-Header");

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= barraNavegacion.clientHeight - 50) {
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
//BODDY---------------------------------------------------------
var div1 = $('.p_content_1');
var div2 = $('.p_content_2');
var div3 = $('.p_content_3');
var div4 = $('.p_content_4');
var btn_div1 = $('#btn-Volver1');
var btn_div2 = $('#btn-Volver2');
var btn_div3 = $('#btn-Volver3');
var btn_div4 = $('#btn-Volver4');


//Funcion para calcular si hay un div activo


//Para mostrar el primer div
div1.children('div').children('h5').on('click', function() {
    div1.removeClass('l3').removeClass('m6');
    div1.children('div').addClass('activeDiv');
    div2.addClass('ocultarDiv');
    div3.addClass('ocultarDiv');
    div4.addClass('ocultarDiv');

    $('.btn-Div1').removeClass('ocultarBoton');
});

//Para mostrar el segundo div
div2.children('div').children('h5').on('click', function() {
    div2.removeClass('l3').removeClass('m6');
    div2.children('div').addClass('activeDiv');
    div1.addClass('ocultarDiv');
    div3.addClass('ocultarDiv');
    div4.addClass('ocultarDiv');

    $('.btn-Div2').removeClass('ocultarBoton');
});

//Para mostrar el tercer div
div3.children('div').children('h5').on('click', function() {
    div3.removeClass('l3').removeClass('m6');
    div3.children('div').addClass('activeDiv');
    div1.addClass('ocultarDiv');
    div2.addClass('ocultarDiv');
    div4.addClass('ocultarDiv');

    $('.btn-Div3').removeClass('ocultarBoton');
});

//para mostrar el cuarto div
div4.children('div').children('h5').on('click', function() {
    div4.removeClass('l3').removeClass('m6');
    div4.children('div').addClass('activeDiv');
    div1.addClass('ocultarDiv');
    div2.addClass('ocultarDiv');
    div3.addClass('ocultarDiv');

    $('.btn-Div4').removeClass('ocultarBoton');
});

//para volver todo a la normalidad
btn_div1.on('click', function() {
    volver();
});
btn_div2.on('click', function() {
    volver();
});
btn_div3.on('click', function() {
    volver();
});
btn_div4.on('click', function() {
    volver();
});

function volver() {
    div1.removeClass('ocultarDiv').addClass('l3').addClass('m6');
    div1.children('div').removeClass('activeDiv');

    div2.removeClass('ocultarDiv').addClass('l3').addClass('m6');
    div2.children('div').removeClass('activeDiv');

    div3.removeClass('ocultarDiv').addClass('l3').addClass('m6');
    div3.children('div').removeClass('activeDiv');

    div4.removeClass('ocultarDiv').addClass('l3').addClass('m6');
    div4.children('div').removeClass('activeDiv');

    $('.btn-Div').addClass('ocultarBoton');
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



//Para rellenar el modal con la información correspondiente del navegador y el sistema operativo
$(document).ready(function() {
    let info = calcularInfo();
    document.getElementById('modal-Text').innerHTML = "El navegador que usted esta utilizando actualmente es " + info.Browser +
        " en la versión " + info.b_Version + " y el sistema operativo de su computador es " + info.SO;
});



//Función para calcular el nombre del sistema operativo y del navegador
function calcularInfo() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
        (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    //SO

    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    return inf_Navegator_So = {
        Browser: browserName,
        b_Version: fullVersion,
        SO: OSName
    };
}