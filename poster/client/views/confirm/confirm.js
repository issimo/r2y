Template.confirm.rendered = function() { 
    Session.set('currentDeg',0);

    //$('.uName').hide();

    //$('.uName').css('z-index',-22);

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
        if(true)
            { 
                //$(".delete,.accept,.retake").hide();
                //insert iphone image css rotate stuff here
                var ioS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if(ioS==true){$('#xIssimo').show();$('#userImage').addClass('rotate90R');}

                var posterLink = savePoster();
                renderPoster(posterLink); //Save href to the Database
                console.log(posterLink);
                $('svg').hide();

                Session.set('lastImg',posterLink);
                //Session.set('setSvg',false);
                $('#accMod').on('hidden.bs.modal', function (e) {
                setTimeout(function(){ Router.go('/share');}, 1700);
                });

            }
            else{
                $('svg').show();
                $('#svgHome').hide();
                $('#naMod').modal('show');
                //$('uName').focusin();
                return false;
            }
    },
    'click #posRe' : function(){
        $('#reMod').modal('hide');
        $('#reMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/capture');}, 1200);
        $('#svgHome').show();
        savePoster(Session.get('setSvg'));

        Session.set('setSvg',false);

        });
    },
    'click #rotatePoster' : function() {
        currentDeg = Session.get('currentDeg');

        if (currentDeg == 0) {
            $('#userImage').addClass('rotate90');
            Session.set('currentDeg',90);
            console.log(currentDeg);
        }
        if (currentDeg == 90) {
            $('#userImage').removeClass('rotate90');

            $('#userImage').addClass('rotate180');
            Session.set('currentDeg',180);
            console.log(currentDeg);
        }
        if (currentDeg == 180) {
            $('#userImage').removeClass('rotate180');
            $('#userImage').addClass('rotate270');
            Session.set('currentDeg',270);
            console.log(currentDeg);
        }
        if (currentDeg == 270) {
            $('#userImage').removeClass('rotate270');

            Session.set('currentDeg',0);
            console.log(currentDeg);
        }
    }



});

