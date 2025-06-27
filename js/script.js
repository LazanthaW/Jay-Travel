javascript
$(document).ready(function () {
  // Smooth scroll to anchor links
  $("a.nav-link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // Example: Alert on form submission
  $("form").on("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    this.reset();
  });
});

