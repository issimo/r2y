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

Template.registerHelper('isIOS',function(){
  return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
});