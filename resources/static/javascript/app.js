const button = document.querySelector('span');

button.addEventListener('click', _ => {
  document.getElementById('sidebar').classList.toggle('collapsed');
})

var carousel = document.getElementById('carousel');
var slides = 3;
var speed = 7000; // 5 seconds
function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity=0;
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity=1;
}

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');
            
            carouselHide(i);
        }

        // Set defined slide as active
        indicators[slide].setAttribute('data-state', 'active');
        slides[slide].setAttribute('data-state', 'active');
        carouselShow(slide);

        // Stop the auto-switcher
        clearInterval(switcher);
    };
}

function switchSlide() {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
            nextSlide = i + 1;
        }

        // Remove all active states & hide
        carouselHide(i);
    }

    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}

if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var indicators = carousel.querySelectorAll('.indicator');

    var switcher = setInterval(function() {
        switchSlide();
    }, speed);

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


}
var button1 = document.querySelector('#menu-button1');
var menu1 = document.querySelector('#menu1');
button1.addEventListener('click', function (event) {
      if (menu1.style.display == "") {
          menu1.style.display = "none";
          button1.innerHTML = "Show Menu";
      } else {
          menu1.style.display = "";
          button1.innerHTML = "Hide Menu";
      }
    }
  );
var button2 = document.querySelector('#menu-button2');
var menu2 = document.querySelector('#menu2');
button2.addEventListener('click', function (event) {
      if (menu2.style.display == "") {
          menu2.style.display = "none";
          button2.innerHTML = "Show Menu";
      } else {
          menu2.style.display = "";
          button2.innerHTML = "Hide Menu";
      }
    }
  );
var button3 = document.querySelector('#menu-button3');
var menu3 = document.querySelector('#menu3');
button3.addEventListener('click', function (event) {
      if (menu3.style.display == "") {
          menu3.style.display = "none";
          button3.innerHTML = "Show Menu";
      } else {
          menu3.style.display = "";
          button3.innerHTML = "Hide Menu";
      }
    }
  );
module.exports = {
        btn.onclick,
        span.onclick
}
