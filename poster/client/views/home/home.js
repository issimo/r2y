Template.home.events({
    'click #newPost':function(){
    Router.go('/capture');
}
});

Template.home.helpers({
	posters: function() {
		return Posters.find();
	}
});
