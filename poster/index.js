savePoster = function(imgSrc) {
	if (imgSrc) {
	    return Pics.insert({
	      image: imgSrc
	    });
	}
}