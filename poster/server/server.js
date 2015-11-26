
Meteor.startup(function () {
    // The correct way
Cloudinary.config({
	cloud_name: 'sargent',
	api_key: '492125787396832',
	api_secret: 'SyGDrsgwHaFTvCpcRNBb_ta8Zo8'
});
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


Posters = new Mongo.Collection('posters');
Meteor.publish("posters", function() {
	return Posters.find();
});

Posters.allow({
 insert: function(){
 return true;
 },
 remove: function(){
 return true;
 }
});

