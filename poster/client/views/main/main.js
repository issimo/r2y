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
