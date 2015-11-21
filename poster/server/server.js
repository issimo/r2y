Cloudinary.config({
	cloud_name: 'sargent',
	api_key: '492125787396832',
	api_secret: 'SyGDrsgwHaFTvCpcRNBb_ta8Zo8'
});

Pics = new Mongo.Collection('pics');
Meteor.publish("pics", function() {
	return Pics.find();
});

Pics.allow({
 insert: function(){
 return true;
 },
 remove: function(){
 return true;
 }
});

Meteor.publish("images", function() {
	return Images.find();
});

Meteor.publish("posters", function () {
    return Posters.find();
  });