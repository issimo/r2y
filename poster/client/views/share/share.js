Template.share.rendered = function() {
    $('#shrDiv').append($('#svdImg'));
    $('#svdImg').show().addClass('scaled');
    var dwnUrl = document.getElementById('svdImg').src;

    $("#dwnld").attr('href',dwnUrl);

      //var dwnBlob = dataURItoBlob(dwnUrl);
      dwnBlob = dwnUrl;
      var shrUrl;

      Cloudinary._upload_file(dwnBlob, {}, function(err, res) {
        if (err){
          console.log(err);
          return;
        }
        shrUrl = res.secure_url;
        Session.set('shareUrl',shrUrl);
        console.log(res);
        console.log(shrUrl);
      });

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
      var fileReader = new FileReader();
      shareLink = fileReader.readAsDataURL(dwnUrl);
      console.log(shareLink);

    return {
        title: 'My R2Y Poster from r2y.herokuapp.com #RoadToYesterdayPoster',
        author: '3WP',
        excerpt:'I just made my own R2Y poster at r2y.herokuapp.com!!',
        url:Session.get('shareUrl'),
  }
}
});
