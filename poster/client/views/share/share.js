Template.share.rendered = function() {
  var dwnUrl = Session.get('pngRes');
  $("#dwnld").attr('href',dwnUrl);


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
        'buttonText': 'Share on Facebook',
        'appId':'1708182292726496',
        'version':'v2.5'
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
    link: function() {
      Session.get('pngRes');
    }
});
