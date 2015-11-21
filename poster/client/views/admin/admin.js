Template.admin.events({
    'click #newPost':function(){
    Router.go('/capture');
}
});

Template.admin.helpers({
	pics: function() {
		return Pics.find();
	}
});