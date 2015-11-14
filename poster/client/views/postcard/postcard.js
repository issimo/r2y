Template.postcard.events({
	'click .deletePoster':function(){
		Images.remove(this._id);
		Cloudinary.delete @response.public_id, (err,res) ->
            console.log "Upload Error: #{err}"
            console.log "Upload Result: #{res}"	}
});

Meteor.call("cloudinary_delete","public_id",function(e,r){
    if(!e){
        console.log(r);
    }
});