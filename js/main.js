
function add(ths, sno) { //funcion para cambiar las estrellas cuando se clickean


    for (var i = 1; i <= 5; i++) { //repite segun el item clickeado
        var cur = document.getElementById("star" + i)
        cur.className = "fa fa-star fa-2x" //les regresa la clase a la normalidad
    }

    for (var i = 1; i <= sno; i++) {
        var cur = document.getElementById("star" + i)//obtiene el elemento
        if (cur.className == "fa fa-star fa-2x") { // si se cumple la condicion le asigna color naranja a la estrella mediante el css checked
            cur.className = "fa fa-star fa-2x checked"
        }
    }

}

$(window).resize(function () { // si la pantalla se hace pequeña se elimina la clase de la estrella para que se haga pequeña
    var viewportWidth = $(window).width();
    if (viewportWidth < 500) {
            $(".fa-star").removeClass("fa-2x");// quita la clase del elemento
    }
});

$(window).resize(function () { // si la pantalla se hace grande se agrega la clase  fa-2x a la estrella para que se haga grande
    var viewportWidth = $(window).width();
    if (viewportWidth > 500) { // es la pantalla mas grande que 500
            $(".fa-star").addClass("fa-2x"); // agrega la clase al elemento
    }
});
$(document).keypress(function (e) {
    if (e.which == 13) {
        alert('enter key is pressed');
    }
});