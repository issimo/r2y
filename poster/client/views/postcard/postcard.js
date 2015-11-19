Template.postcard.events({
	'click .deletePoster':function(){
		Posters.remove(this._id);
		console.log(this._id);
		/*
		Cloudinary.delete @response.public_id, (err,res) ->
            console.log "Upload Error: #{err}"
            console.log "Upload Result: #{res}"
        */
    }
});

Meteor.call("cloudinary_delete","public_id",function(e,r){
    if(!e){
        console.log(r);
    }
});