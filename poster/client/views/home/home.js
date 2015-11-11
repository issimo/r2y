Template.home.events({
    'click #newPost':function(){
    Router.go('/capture');
},
'click .delete': function() {
    	Images.remove(this._id);
    }
});

Template.home.helpers({
	images: function() {
		return Images.find();
	}
});
