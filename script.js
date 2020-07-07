$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");


    // $('.carousel').carousel({
    //     interval: 4000
    // })
});


function hideMenu() {
    menu.classList.remove('show');
}

var liElement = document.getElementsByClassName('nav-item');
var menu = document.getElementById('navbarNav');
for (var i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("click", hideMenu);
}