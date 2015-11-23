Template.share.rendered = function() {
    $('#shrDiv').append($('#svdImg'));
    $('#svdImg').show();
    var dwnUrl = document.getElementById('svdImg').src;
    $("#dwnld").attr('href',dwnUrl);
}
Template.share.events({
    'click .back':function(){
        Router.go('/');
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
      var dwnUrl = document.getElementById('svdImg').src;
      console.log(dwnUrl);
    return {
        title: 'My R2Y Poster',
        author: '3WP',
        excerpt:'I just made my own R2Y poster at r2y.herokuapp.com!!',
        url:'http://r2y.herokuapp.com',
        thumbnail: dwnUrl
  }
}
});
