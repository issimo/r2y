// For local
var imageStore = new FS.Store.FileSystem("images", {
  path: "~/app-files/images", //optional, default is "/cfs/files" path within app container
  maxTries: 3 //optional, default 5
});

/* For web
var imageStoreWeb = new FS.Store.FileSystem("imagesWeb");
*/

Images = new FS.Collection("images", {
  stores: [imageStore]
});