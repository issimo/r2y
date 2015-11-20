Template.capture.events({
    'change .myFileInput' : function(event,template) {

         FS.Utility.eachFile(event, function(file) {
            alert("Uploading. Please Wait...");
            console.log(file);

          Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
             alert("Error"+err);
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = { "relLink": "/cfs/files/images/" + fileObj._id };

            Session.set('imgUrl',imagesURL);
            alert("Image Ready. Click Continue");

            //alert(imagesURL.relLink);
            //Meteor.users.update(userId, {$set: imagesURL});
          }
        });
          //Router.go('confirm');
     });
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


      //Router.go('confirm');
    },
    'click .captureContinue' :function(event,template){
        event.preventDefault();
        //alert("Clicked");
        Router.go('confirm');

    },
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    }
});

