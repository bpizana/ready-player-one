$(document).ready(function(){
  $('.zoom').hover(function() {
    $(this).addClass('zoom-more');
  }, function() {
      $(this).removeClass('zoom-more');
  });


  var coll = document.getElementsByClassName("more");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
