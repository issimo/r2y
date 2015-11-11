

if (Meteor.isClient) {

  // counter starts at 0
Template.body.events({
  'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
              ClippingMagic.edit({
    "image" : {
      "id" : 14153642,
      "secret" : "d17lltskflpi1uoop61dmpac7orojuc02tmd92oa962m5mlvb2sk"
    }
  }, callback);
      });
    });
  }
});
    
Template.body.helpers({
  images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }
});
    
Template.userPosters.events ({
   "click .delete": function () {
        Images.remove(this._id);   
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
