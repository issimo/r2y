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
            Session.set('publicId',img.public_id)
            Session.set('url',img.url)
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
      Router.go('confirm');
        //var image = event.target.files;   
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function(err, fileObj) {
               //New doc with ID: fileObj._id and sent off the data upload using HTTP 
                console.log(file);
                console.log(fileObj);
            });
        });
    },
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    }
});

Template.capture.helpers({
	images: function() {
		return Images.find();
	}
});

