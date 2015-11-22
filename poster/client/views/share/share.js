Template.share.rendered = function() {
    $('#shrDiv').append($('#svdImg'));
    $('#svdImg').show().addClass('img-responsive');
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
    siteOrder: ['facebook', 'twitter'],
    sites: {
        'facebook': {
        'appId': null,
        'version': 'v2.3',
        'buttonText': 'Share on Facebook'
      },
        'twitter': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3',
        'buttonText': 'Share on Twitter'
      }
    },
    iconOnly: true,
    applyColors: false
  });
} 

Template.share.helpers({
  shareData: function() {
    return {
      title: 'My R2Y Poster',
      author: '3WP'
  }
});