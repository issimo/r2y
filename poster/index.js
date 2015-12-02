savePoster = function(imgSrc) {
	    return Pics.insert({
	      image: imgSrc
	    });
}
mobilecheck = function() {
  var check = false;
  (function(a){
 if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

dataURItoBlob = function(dataURI) {
  var binary = atob(dataURI.split(',')[1]);
  var array = [];
  var i = 0;
  var l = binary.length;
  
  for ( ; i < l; i++) {
    array.push(binary.charCodeAt(i));
  }
  
  return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

xIssimo = function(){
    $('#xIssimo').show().addClass('fxPos');
    beforeload = (new Date()).getTime();
        afterload = (new Date()).getTime();
        secondes = (afterload-beforeload);
        console.log(secondes);
        setTimeout(function(){$('#xIssimo').hide().removeClass('fxPos')},secondes);
}

svgToPng = function() {
  var svg = document.querySelector("svg");
  var svgData = new XMLSerializer().serializeToString( svg );
  console.log(svgData);

  var canvas = document.getElementById( "canvas" );
   var svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
  var ctx = canvas.getContext( "2d" );

var DOMURL = self.URL || self.webkitURL || self;

  var img = document.createElement( "img" );
  img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );

  img.onload = function() {
  var imgWidth=img.width;
  var imgHeight=img.height;
  canvas.width= imgWidth;
  canvas.height=imgHeight;

        //context.drawImage(img, 0, 0, 100, 100 * 565 / 400);
        //ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
  var png = canvas.toDataURL("image/png");
  DOMURL.revokeObjectURL(png);
  document.getElementById('posterPng').innerHTML = '<img src="'+png+'"/>';

renderPoster = function() {

}

  // Now is done
  console.log( png );
  return png;
  }

}

isDataURL = function (s) {
    return !!s.match(isDataURL.regex);
}
isDataURL.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;


renderPoster = function() {

  /**
 * Detecting vertical squash in loaded image.
 * Fixes a bug which squash image vertically while drawing into canvas for some images.
 * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
 * 
 */
function detectVerticalSquash(img) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, ih).data;
    // search image edge pixel position in case it is squashed vertically.
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
            ey = py;
        } else {
            sy = py;
        }
        py = (ey + sy) >> 1;
    }
    var ratio = (py / ih);
    alert(ratio);
    return (ratio===0)?1:ratio;
}

/**
 * A replacement for context.drawImage
 * (args are for source and destination).
 */
function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio = detectVerticalSquash(img);
 // Works only if whole image is displayed:
 // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
 // The following works correct also when only a part of the image is displayed:
    ctx.drawImage(img, sx * vertSquashRatio, sy * vertSquashRatio, 
                       sw * vertSquashRatio, sh * vertSquashRatio, 
                       dx, dy, dw, dh );
}

function drawImageRot(img,x,y,width,height,deg){

    //Convert degrees to radian 
    var rad = deg * Math.PI / 180;

    //Set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    //Rotate the canvas around the origin
    ctx.rotate(rad);

    //draw the image    
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    //reset the canvas  
    ctx.rotate(rad * ( -1 ) );
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}
   var canvas = document.getElementById("canvas3");
    var ctx = canvas.getContext("2d");
    var image = new Image();
    var image2 = document.getElementById("bgPoster");
    //var image3 = document.getElementById("uName");
    image.onload = function() {
      var DOMURL = self.URL || self.webkitURL || self;
    if (document.getElementById("userImage").src) {
      var userImg = document.getElementById("userImage");
    }
    canvas.width = 365;
    canvas.height = 515;

    var x = userImg.width;
    var y = userImg.height;

    var imgRatio = userImg.width / userImg.height;
    var canRatio = canvas.width / canvas.height;

    var scaledWidth = userImg.width * (canvas.height / userImg.height);
    var scaledHeight = userImg.height * (canvas.width / userImg.height);

    if (y > x) {
      var scale = y/x;
    }
    else {
      var scale = x/y;

    }
    console.log(scale);
    //var userName = $('svg #uName').val();
    destWidth = canvas.width/1.1;

    if (y > x) {
    destHeight = destWidth * scale;
    console.log("height");
    }
    else {
    destHeight = destWidth / scale;
        console.log("width");
    }

    var destX = canvas.width / 8;
    var destY = canvas.height / 21;
    var rotDeg = Session.get('currentDeg');
        
    var iOS = /iPad|iPhone|iPod/.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS){var rotDeg = 90; console.log("ios");}
        
    var posterScale = 515/365;

    //  Draw the users image on the canvas first
//    ctx.drawImage(image, destX,destY,destWidth,destHeight,canvas.width/2,canvas.height/4,40,85);
    //  Draw the poster   
    ctx.save();
    ctx.globalAlpha = 0.7; 
    // Draw user image and apply rotation if any
    //drawImageRot(image,10, destY, destWidth, destHeight,rotDeg);
    ctx.restore();
    //drawImageIOSFix(ctx,image2,0, 0,365*posterScale,515*posterScale, 0, 0, 365, 515);

  if (iOS) {
      alert("iOS");
      if (imgRatio > canRatio){
        drawImageIOSFix(ctx,image,0, 0,x*2,y*2, destX, destY, canvas.width, scaledHeight);
      }
      else {
        drawImageIOSFix(ctx,image,0, 0,x,y, destX, destY, scaledWidth, canvas.height);

      }
  }
  else {
    drawImageRot(image,10, destY, destWidth, destHeight,rotDeg);
  }
    ctx.drawImage(image2, 0, 0, 365, 515);


    var png = canvas.toDataURL("image/png");
    DOMURL.revokeObjectURL(png);
    Session.set('pngRes',png);
    }
    image.src = document.getElementById("userImage").src;



}




