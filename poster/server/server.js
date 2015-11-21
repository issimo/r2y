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
