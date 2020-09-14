// Get current year for the copyright
$('#year').text(new Date().getFullYear())

$('#ex-year').text(
  Math.abs(new Date().getFullYear() - new Date("2016-1-1").getFullYear())
)

$('#ex-month').text(
  Math.abs(new Date().getMonth() - new Date("2016-3-1").getMonth())
)

$(document).ready(function () {
  $('.collapse')
    .on('shown.bs.collapse', function () {
      $(this)
        .parent()
        .find(".fa-plus")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on('hidden.bs.collapse', function () {
      $(this)
        .parent()
        .find(".fa-minus")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});

$(document).ready(function () {
  $('.collapse')
    .on('shown.bs.collapse', function () {
      $(this)
        .parent()
        .find("#headingOne,#headingTwo")
        .addClass("bg-primary");
    })
    .on('hidden.bs.collapse', function () {
      $(this)
        .parent()
        .find("#headingOne,#headingTwo")
        .removeClass("bg-primary")
    });
});

function sidebar_open() {
  $("#left-bar").toggleClass("showNav hideNav");
  document.getElementById("left-bar").style.display = "block";
}

function sidebar_close() {
  $("#left-bar").toggleClass("showNav hideNav");
  // document.getElementById("left-bar").style.display = "none";
}