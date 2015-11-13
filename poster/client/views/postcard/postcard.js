Template.postcard.events({
	'click .deletePoster':function(){
		Images.remove(this._id);
	}
});