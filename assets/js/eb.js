/*******************************************************************************
************************************************************************ "Índex"
#
*******************************************************************************/
$("nav a#eb").addClass("active");

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function reFirstImg (){
  window.location.replace("guideline1.1.1.1.html#section1");
}

function tempsExipre (){
  alert("En 20 segons expira la cookie, espitja enter per cancelar");
}

$(document).ready(function(){
    $("#start").click(function(){
        $("#panel").slideDown(7000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
    $("#up").click(function(){
        $("#panel").slideUp(7000);
    });
});
