import * as $ from 'jquery';

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "bulb-off.png"
  } else {
    pic = "bulb-on.png"
  }
    $('#myImage').src = pic;
  }