Template.postcard.events({
	'click .deletePoster':function(){

		Posters.remove(this._id);
        Meteor.call("c.delete_by_public_id","public_id",function(e,r){
            if(!e){
                console.log(r);
            }
            else {
                console.log("error");
                console.log(e);
            }
        });
		console.log(this.imageId);
		}
});

		Images.remove(this._id);
	}
});
