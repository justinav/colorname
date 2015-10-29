$(document).ready(function() {
  

  // 	pick any color you like
  $(".box").click(function() {
    $(this).clone().appendTo("#colors");
  });
  
  //  startover
	$("button").click(function() {
    $("#colors").empty();
  });
  

  
  //   function by jave.web on stackoverflow
  function getHexColor( color ){
    //if color is already in hex, just return it...
    if( color.indexOf('#') != -1 ) return color;

    //leave only "R,G,B" :
    color = color
                .replace("rgb", "")
                .replace("rgba", "")
                .replace("(", "")
                .replace(")", "");
    color = color.split(","); // get Array["R","G","B"]

    // 0) add leading #
    // 1) add leading zero, so we get 0XY or 0X
    // 2) append leading zero with parsed out int value of R/G/B
    //    converted to HEX string representation
    // 3) slice away 2 last chars => we get XY from 0XY and 0X stays the same
    return  "#"
            + ( '0' + parseInt(color[0], 10).toString(16) ).slice(-2)
            + ( '0' + parseInt(color[1], 10).toString(16) ).slice(-2)
            + ( '0' + parseInt(color[2], 10).toString(16) ).slice(-2);
  }
  
  //   appends hex & rgb values  
  $('.box').each(function(){
    var getRGB = $(this).closest('.box').css('background-color');
    var getHex = getHexColor($(this).closest('.box').css('background-color'));
    $(this).append(
      '<p>' + getRGB + '</p>' + 
      '<p>' + getHex + '</p>'
    );
  }); 

});