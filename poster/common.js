Posters = new Mongo.Collection("posters");


imageStore = new FS.Store.GridFS("images", {
    //Put in optional parameters
        beforeWrite:function(fileObj){
      return {
            extension: 'jpeg',
            type: 'image/jpeg'
          };
    },
    /*
    transformWrite:function(fileObj, readStream, writeStream){
      // Aqui la convierte en una imagen segun de 10x10 seguuuun
      gm(readStream).resize(400).stream('PNG').pipe(writeStream); //resize depends your needs
    }
    */

    transformWrite: resizeImageStream({
        width: 400,
        height:400,
        format: 'image/jpeg',
        quality: 21
      })
});

Images = new FS.Collection("images" , {
    stores: [imageStore]
});

if (Meteor.isServer) {

Images.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});
}

