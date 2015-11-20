Template.home.events({
    'click #newPost':function(){
    Router.go('/capture');
}
});

Template.home.helpers({
	images: function() {
		return Images.find();
	}
});
