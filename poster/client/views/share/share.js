Template.share.rendered = function() {
  var dwnUrl = Session.get('pngRes');
  console.log(dataURItoBlob(dwnUrl));

imgBlob =  dataURItoBlob(dwnUrl);
  $("#dwnld").attr('href',dwnUrl);

      var dwnBlob = dataURItoBlob(dwnUrl);
      dwnBlob = dwnUrl;
      var shrUrl;

      Cloudinary._upload_file(dwnBlob, {}, function(err, res) {
        if (err){
          console.log(err);
          return;
        }

        shrUrl = res.secure_url;
        savePoster(shrUrl);
        Session.set('shareUrl',shrUrl);
      });

}

Template.share.destroyed = function() {
}

Template.share.events({
    'click .back' : function(){
         event.preventDefault();
          Router.go('/'); 
    },
    
    'click #dwnld' : function(){
    return Session.get('shareUrl');
    }
}); 
if (Meteor.isClient) {
  ShareIt.init({
    siteOrder: ['twitter', 'facebook'],
    sites: {
        'facebook': {
        'buttonText': 'Share on Facebook'
      },
        'twitter': {
        'buttonText': 'Share on Twitter'
      }
    },
    iconOnly: true,
    applyColors: true
  });
} 


Template.share.helpers({
  shareData: function() {
      shareLink = Session.get('shareUrl');

    return {

        title: 'My R2Y Poster from r2y.herokuapp.com #RoadToYesterdayPoster',
        author: '3WP',
        excerpt:'I just made my own R2Y poster at r2y.herokuapp.com!!',
        url: shareLink,

  }
},
  poster: function() { 
    var url = Session.get('pngRes');
    return url;
    },
});
