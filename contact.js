  document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });

  $(document).ready(function(){
    $("#contactme").validate({
        rules:{
          name:{
            required: true,
            minlength: 2
          },
          email:{
            required: true,
            email: true
          },
          phone:{
            required: true,
            number: true,
            minlength: 10
    
          },
          message:{
            required:true,
            maximumLength: 100
          }
      },

         messages:{
          name:{
            required:"Please enter a name",
            required:"Enter a full name"
          },
          email:{
            required:"Please enter a valid email address",
          },
          phone:{
            required:"Please enter a valid phone number",
            minlength:"Phone number must be 10 digits long",
            number:"Please enter a valid phone number"
          },
          message:{
            required:"Please enter a message"
          },
          maximumLength:{
            required:"Please enter a message with maximum length of 2 characters"
          }
      }
    });

  
});
  


  $(document).ready(function () {
    // Page reload animation: Fade-in and slide up for the contact container
    $('.contact-container').css({ opacity: 0, transform: 'translateY(50px)' });
    $('.contact-container').animate(
      { opacity: 1, top: '0px' },
      {
        duration: 1000,
        step: function (now, fx) {
          if (fx.prop === 'top') {
            $(this).css('transform', 'translateY(' + (50 - now) + 'px)');
          }
        }.bind($('.contact-container')),
      }
    );

    // Hover animation for contact info boxes
    $('.info-box').hover(
      function () {
        $(this).css({
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
        });
      },
      function () {
        $(this).css({
          transform: 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
        });
      }
    );

    // Hover animation for social media links
    $('.social-media a').hover(
      function () {
        $(this).css({
          color: '#3498db',
          transition: 'color 0.3s ease-in-out',
        });
      },
      function () {
        $(this).css({
          color: '',
          transition: 'color 0.3s ease-in-out',
        });
      }
    );

    // Hover animation for submit button
    $('#submit').hover(
      function () {
        $(this).css({
          backgroundColor: '#2ecc71',
          color: '#fff',
          transition: 'all 0.3s ease-in-out',
        });
      },
      function () {
        $(this).css({
          backgroundColor: '',
          color: '',
          transition: 'all 0.3s ease-in-out',
        });
      }
    );
  });

