function changeText(id) {
  document.getElementById("changeable-text").innerHTML = id + ".fps";
}

function restoreText() {
  document.getElementById("changeable-text").innerHTML = "23.fps";
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
   $('.column').hover(
     function() {
       // Check if the screen height is higher than 1500px
       if ($(window).height() > 1500) {
         $(this).css('flex', '17'); 
       } else if ($(window).height() > 1000) {
         $(this).css('flex', '13.5');
       } 
       else {
         $(this).css('flex', '11'); $(this).css('mix-blend-mode', 'difference'); 
       }
     }, 
     function() {
       $(this).css('flex', '1');$(this).css('transform', 'translateX(0%)'); $(this).css('mix-blend-mode', 'exclusion'); 
     }
   );
});


 

