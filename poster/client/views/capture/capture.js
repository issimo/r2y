Template.capture.events({
    'change .myFileInput' : function(event,template) {

         FS.Utility.eachFile(event, function(file) {
          Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              "relLink": "/cfs/files/images/" + fileObj._id
            };
            Session.set('imgUrl',imagesURL)
            console.log(imagesURL);
            Meteor.users.update(userId, {$set: imagesURL});
            setTimeout( function(){Router.go('confirm');},4000)
          }
        });
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
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    }
});

