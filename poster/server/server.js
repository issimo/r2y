Cloudinary.config({
	cloud_name: 'sargent',
	api_key: '492125787396832',
	api_secret: 'SyGDrsgwHaFTvCpcRNBb_ta8Zo8'
});


Meteor.publish("images", function() {
	return Images.find();
})

Meteor.publish("posters", function () {
    return Posters.find();
  });