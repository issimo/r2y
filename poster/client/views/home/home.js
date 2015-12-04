Template.home.events({
    'click #newPost':function(){
      var iOS = /iPad|iPhone|iPod/.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    var ver;
    ver = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    alert(ver);
    return ver;
  }



    Router.go('/capture');

}
});

Template.home.helpers({
	pics: function() {
		return Pics.find();
	}
});
