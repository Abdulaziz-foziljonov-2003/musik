//Responsive nav
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });


   <section id="gift-cards" class="section bg-light">
  <div class="container">
  <div class="gift-cards">
      <div>
          <img src="../foto/cards.png" alt="">
      </div>
      <div>
          <h2>Gift Cards</h2>
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque expedita tempore quasi omnis a aut
              et totam illo fuga accusamus
              dolorum vero, ut harum consectetur. Minima molestias officiis culpa non sed dicta itaque. Et
              aliquam illo obcaecati
              molestias veritatis porro.
          </p>
          <p>Already have an Orange MyTunes Music Gift Card?</p>
          <hr>
          <a href="#" class="text-secondary">
              <i class="fas fa-chevron-right"></i> Redeem
          </a>
      </div>
  </div>
</div>
</section>
