if (Meteor.isClient) {
  // counter starts at 0

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

}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
    });

    Images.allow({
        'insert': function () {
        // add custom authentication code here
        return true;
        }
    });

}

Router.configure({
    layoutTemplate: 'main'
});
Router.route('/',{name:'home',template:'home',layoutTemplate: 'home'});
Router.route('/capture');