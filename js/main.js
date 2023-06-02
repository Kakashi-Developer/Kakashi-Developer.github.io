document.addEventListener("DOMContentLoaded", function () {
  var homeLink = document.getElementById("homeLink");
  if (homeLink) {
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "index.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var termsLink = document.querySelector("a[href='privacy']");
  if (termsLink) {
    termsLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "privacy.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var termsLink = document.querySelector("a[href='terms']");
  if (termsLink) {
    termsLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "terms.html";
    });
  }
});
$(document).ready(function () {
  $(".open").click(function () {
    var container = $(this).parents(".topic")
    var answer = container.find(".answer")
    var trigger = container.find(".faq-t")

    answer.slideToggle(200);

    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o")
    } else {
      trigger.addClass("faq-o")
    }

    if (container.hasClass("expanded")) {
      container.removeClass("expanded")
    } else {
      container.addClass("expanded")
    }
  })
  $(".question").each(function () {
    $(this).attr(
      "data-search-term",
      $(this).text().toLowerCase() + $(this).find("ptag").text().toLowerCase()
    )
  })

  $(".live-search-box").on("keyup", function () {
    var searchTerm = $(this).val().toLowerCase()

    $(".question").each(function () {
      if (
        $(this).filter("[data-search-term *= " + searchTerm + "]").length > 0 ||
        searchTerm.length < 1
      ) {
        $(this).parent().parent().show()
      } else {
        $(this).parent().parent().hide()
      }
    })
  })
})
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 150

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}
