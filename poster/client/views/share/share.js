Template.share.events({
    'click .back':function(){
        Router.go('/');
    }
});
Template.share.rendered = function() {
    $('#shrDiv').append($('#svdImg'));
    $('#svdImg').show().addClass('img-responsive');
}