Template.confirm.rendered = function() { 
    $('.uName').hide();
    $('#svgHome').show();
    $('svg').hide();

    var dUrl = Session.get('imgUrl');
    //var url = Session.get('imgUrl');
    //console.log(url.relLink);
    //alert("Poster being created. Please Wait...");
    var loadedImage = $('img#userImage');
    loadedImage.load( function() {
        if(typeof dUrl !=='undefined'){
        $("#xIssimo").fadeOut("slow");
    }   
        
    } );
    var flWt = (window.innerWidth > 0) ? window.innerWidth : screen.width;;var flHt=screen.height;
            var myWt = flWt * 0.5;var myWtAnd = flWt * 0.8;
            //var mChk = mobilecheck();alert(mChk);
            //console.log(mChk);console.log(myWt);
    var isMobile; if (window.matchMedia) {isMobile = window.matchMedia('(max-device-width: 960px)').matches;} else {isMobile = screen.width <= 960;}
            if(isMobile==true){$('#userImage').width(myWt);}
    var isAndy; if (window.matchMedia) {isAndy = window.matchMedia('(max-device-width: 365px)').matches;} else {isAndy = screen.width <= 365;}
            if(isAndy==true){$('#userImage').width(myWtAnd);}

}

Template.confirm.events ({
    'click #saveBtn' : function(e,t){
        e.preventDefault();
                var html = d3.select("svg")
                .attr("version", 1.1)
                .attr("xmlns", "http://www.w3.org/2000/svg")
                .node().parentNode.innerHTML;

                //console.log(html);
                var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
                var img = '<img src="'+imgsrc+'">'; 
                d3.select("#svgdataurl").html(img);


                var canvas = document.querySelector("canvas2"),
                context = canvas.getContext("2d");

                var image = new Image;
                image.src = imgsrc;

                image.onload = function() {
                    context.drawImage(image, 0, 0);

                    var canvasdata = canvas.toDataURL("image/png");

                    var pngimg = '<img src="'+canvasdata+'">'; 
                    d3.select("#posterPng").html(pngimg);

                    var a = document.createElement("a");
                    a.download = "sample.png";
                    a.href = canvasdata;
                    a.click();
                }

    },
    'click #cap' : function(e,t){
        e.preventDefault();
        var data = document.querySelector('svg').outerHTML;

          console.log(data);
          var imgsrc = 'data:image/svg+xml;base64,'+ btoa(data);
          var img = '<img src="'+imgsrc+'">'; 
          console.log(img);
          d3.select("#posterCapture").html(img);
    }
});

Template.registerHelper('isIOS',function(){
  return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
});

Template.registerHelper('isAndroid',function(){
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
});

Template.confirm.helpers({
    link: function() { 
    var url = Session.get('imgUrl');
    return url;
    },
    imgLoaded: function() {
        var ready = document.getElementById("userImage").complete;
        return ready;
    }
});

Template.confirm.events({
  
    'click #posDel' : function(){
        $('#delMod').modal('hide');
        $('#delMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/');}, 1000);
        $('svg').remove();
        Session.set('setSvg',false);
        });
    },
    'click .accept' : function(){

            //$('.uName').show();
        if($('svg .uName').val()>2)
            { 
                $('#svgHome').hide();
                $('svg').show();
                //$(".delete,.accept,.retake").hide();
                //insert iphone image css rotate stuff here
                var ioS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if(ioS==true){$('#xIssimo').show();$('#userImage').addClass('rotate90R');}
                //$('.uName').hide();
                //SVG CODE SHOULD GO HERE

                savePoster();
                Session.set('setSvg',false);
                //document.ge
            
        setTimeout(function(){ $('#accMod').modal('hide');}, 5000);
        $('#accMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/share');}, 1700);
            
        });
            }else{
                $('#svgHome').hide();
                $('svg').show();
                $('#naMod').modal('show');
                return false;
                $('uName').focusin();
            }
    },
    'click #posRe' : function(){
        $('#reMod').modal('hide');
        $('#reMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/capture');}, 800);
        $('svg').remove();
        Session.set('setSvg',false);

        });
    }
});

