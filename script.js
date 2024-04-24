function changeText(id) {
  document.getElementById("changeable-text").innerHTML = id + "FPS";
}

function restoreText() {
  document.getElementById("changeable-text").innerHTML = "23FPS";
}

function triggerTextChange(id) {
  changeText(id);
}



document.addEventListener('DOMContentLoaded', function () {
  const cursorLine = document.getElementById('cursor-line');

  document.addEventListener('mousemove', function (event) {
      const mouseX = event.clientX;
      cursorLine.style.left = mouseX + 'px';
  });
});



$(document).ready(function() {
  $('.column').click(function() {
     $(this).css('mix-blend-mode', 'normal');
     
     
     
  });
});


$(document).ready(function() {
  // Check if the device is a desktop
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    // Code to execute only on desktops
    $('.column').on('click', function() {
      var flexValue;
      var windowHeight = $(window).height();

      console.log("Window Height:", windowHeight); // Debug statement

      if (windowHeight > 1500) {
        console.log("Window height is greater than 1500");
        flexValue = '100';
      } else if (windowHeight >= 1000 && windowHeight <= 1500) {
        console.log("Window height is between 1000 and 1500");
        flexValue = '25';
      } else {
        console.log("Window height is less than 1000");
        flexValue = '23';
      }

      console.log("Flex Value:", flexValue); // Debug statement

      $(this).css('flex', flexValue);
    });

    // Revert flex value to '1' when clicked elsewhere
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.column').length) {
        $('.column').css('flex', '1');
      }
    });
  }
});














//Sonst einfach löschen
$(document).ready(function() {
  // Check if the device is a desktop
  if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    // Code to execute only on desktops
    $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #21, #22, #23').hover(function() {
      var flexValue;
      if ($(window).height() > 1500) {
        flexValue = '3';
        $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #21, #22, #23').not(this).css('flex', '1');
      } else if ($(window).height() > 1000) {
        flexValue = '3';
        $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #21, #22, #23').not(this).css('flex', '1');
      } else {
        flexValue = '3';
        $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #21, #22, #23').not(this).css('flex', '1');
      }
      $(this).css('flex', flexValue);
    });
  }
});



document.addEventListener("DOMContentLoaded", function() {
  // Select all images within the .column class
  var images = document.querySelectorAll('.column img');

  // Function to change visibility of images with fadeIn animation after a delay
  function showImages() {
    images.forEach(function(img, index) {
      // Add fadeIn animation to each image
      img.style.visibility = 'visible';
     
    });
  }

  // Set a timeout to call the showImages function after a 500ms delay
  setTimeout(showImages, 500);
});



 

