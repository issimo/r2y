    Template.body.events({
        'change .myFileInput' : function(event, template) {
            alert("Clicked");
            //var image = event.target.files;   
            FS.Utility.eachFile(event, function(file) {
                Images.insert(file, function(err, fileObj) {
                   //New doc with ID: fileObj._id and sent off the data upload using HTTP 
                    alert("Uploaded");
                });
            });
        }
    });