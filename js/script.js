if (location.protocol !== 'file:' && location.protocol != 'https:')
{
 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

function changeFunction(){
    $(".logo").removeClass("hidden");
    $(".links-container").removeClass("hidden");
    $(".coin-1").removeClass("hidden");
    $(".lg-container").removeClass("hidden");
}
setTimeout(changeFunction, 2000);

$(".team-link").click(function() {
  $('html, body').animate({
    scrollTop: $(".core-team").offset().top
  }, 1000);
});

$(".contributors-link").click(function() {
  $('html, body').animate({
    scrollTop: $(".contributors").offset().top
  }, 1000);
});

$(".investors-link").click(function() {
  $('html, body').animate({
    scrollTop: $(".investors").offset().top
  }, 1000);
});

function letter(){
    $(".text-load-in-2").removeClass("opacity");
    $(".text-load-in-3").removeClass("opacity");
    $(".text-load-in-4").removeClass("opacity");
    $(".text-load-in-5").removeClass("opacity");
    $(".text-load-in-6").removeClass("opacity");
    $(".text-load-in-7").removeClass("opacity");
    $(".text-load-in-8").removeClass("opacity");
}

$(document).ready(function () {
  $(".name").hide();
  $('.nameFadein').hover(function() {
    $(this).find('.name').fadeIn();
  }, function() {
    $(this).find('.name').fadeOut();
  });
});

setTimeout(letter, 800);

const fadeInTime = 3000;

function inFade(el, i, className){
  if (el === " ") {
    return el
  } else {
  var time = (100 + 25*i).toString();
  return '<span class="text-load-in ' + className + '"style="opacity: 0; animation: text-fade-in ' + fadeInTime + 'ms cubic-bezier(.165,.84,.44,1) ' + time + 'ms">' + el + "</span"
  }
}

function wordText(word, existingCount){
  var emptyElement = $("<div class='text-load-in-word'></div>");
  $.each(word.split(""), function (i, el) {
    emptyElement.append(inFade(el, existingCount, ""));
    existingCount += 1;
  });
  return {html: emptyElement, count: existingCount}
}

function generateSpecialText(){
  var emptyElement = $("<div></div>");

  var existingCount = 1;

    $.each(["What ", "is", " BlockNation?"], function (iii, word) {
      var wordTextOutput = wordText(word, existingCount)
      emptyElement.append(wordTextOutput.html)
      existingCount = wordTextOutput.count
    })

  return emptyElement;
}

$(".withSpecialText").html(generateSpecialText());
setTimeout(function(){ $(".text-load-in").css('opacity', '1') }, fadeInTime - 100);


wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
};

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 3000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
