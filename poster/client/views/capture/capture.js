Template.capture.events({
    'change .myFileInput' : function(event, template) {
        //var image = event.target.files;   
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function(err, fileObj) {
               //New doc with ID: fileObj._id and sent off the data upload using HTTP 
                alert("Uploaded");
            });
        });
    },

    'click .delete': function() {
    	Images.remove(this._id);
    }

});

Template.capture.helpers({
	images: function() {
		return Images.find();
	}
});
