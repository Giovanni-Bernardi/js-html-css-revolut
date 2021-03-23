function dropDisplay() {
    var ulHeader = $(".nav-header > li");
    ulHeader.hover(function(){
        
    //DROPDOWN DISPLAY
      $(".drop").removeClass("block");
      $(this).find(".drop").addClass("block");
    });
  }

    //DROPDOWN RETURN
  function dropReturn() {
    $("body").click(function(){
      $(this).find(".drop").removeClass("block");
    });
  }
  function init() {
    dropReturn();
    dropDisplay();
  }
  $(document).ready(init);