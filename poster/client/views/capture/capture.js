Template.capture.events({
    'change .myFileInput' : function(event,template) {

        var file, fileReader;

file = event.target.files[0];

fileReader = new FileReader();

fileReader.onload = function(e) {
  var lastImage;
  Session.set('imgUrl',e.target.result);
  //$('#userImages').append("<img src='" + e.target.result + "' onclick='$(this).remove()' />");
  console.log(e.target.result);
  return lastImage = e.target.result;
};

fileReader.readAsDataURL(file);

({
  'click #addFile': function() {
    if (lastImage) {
      return Pics.insert({
        image: lastImage
      });
    }
  },
  'click .storedImage': function() {
    return Pics.remove({
      _id: this._id
    });
  }
});

        /*
         FS.Utility.eachFile(event, function(file) {
            //alert("Uploading. Please Wait...");

          Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
             alert("Error"+err);
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = { "relLink": "/cfs/files/images/" + fileObj._id };

            Session.set('imgUrl',imagesURL);
              console.log(imagesURL);
            //alert("Image Ready. Click Continue");

            //alert(imagesURL.relLink);
            //Meteor.users.update(userId, {$set: imagesURL});
          }
        });
          //Router.go('confirm');
     });

*/



        /*
        var files;

        files = event.currentTarget.files;

        Cloudinary.upload(files, {
          folder: "secret",
          type: "private"
        }, function(err, res) {
          console.log("Upload Error: " + err);
          return console.log(res);
        });
        */
        $('#capMod').modal('show');

    },
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    },
    'click #capOk' : function(event, template) {
        event.preventDefault();
        $('body').removeClass('modal-open');
        $('.modal-backdrop.fade.in').hide();
        $("#xIssimo").fadeIn("fast");
        function gerrarraheremehn(){Router.go('confirm');}
        setTimeout(gerrarraheremehn,2100);
    }
});

Template.capture.helpers ({
 pics: function() {
    return Pics.find();
  }
});
