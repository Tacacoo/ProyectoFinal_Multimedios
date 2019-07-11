
function add(ths, sno) {


    for (var i = 1; i <= 5; i++) {
        var cur = document.getElementById("star" + i)
        cur.className = "fa fa-star fa-2x"
    }

    for (var i = 1; i <= sno; i++) {
        var cur = document.getElementById("star" + i)
        if (cur.className == "fa fa-star fa-2x") {
            cur.className = "fa fa-star fa-2x checked"
        }
    }

}

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 500) {
            $(".fa-star").removeClass("fa-2x");
    }
});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 500) {
            $(".fa-star").addClass("fa-2x");
    }
});