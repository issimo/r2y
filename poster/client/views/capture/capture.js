Template.capture.events({
    'change .myFileInput' : function(event, template) {
        //var image = event.target.files;
        files = event.currentTarget.files;
        //file = files[0];
        //console.log(file);
      Cloudinary.upload(files,{}, function(err, img) {
        if (err) {
            console.log("error");
            console.log(err);
        }
        else {
            console.log("Success");
            console.log(img.public_id);
            console.log(img.url);
            Posters.insert({
                user: Meteor.userId(),
                imageId: img.public_id,
                imageUrl: img.url,
            });
            console.log("Uploaded to DB");
        }
      });
        Router.go('/confirm');
    },
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    }
});

