Template.home.events({
    'click #newPost':function(){
    Router.go('/capture');
}
});

Template.home.helpers({
	pics: function() {
		return Pics.find();
	}
});
