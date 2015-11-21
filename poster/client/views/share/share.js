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
