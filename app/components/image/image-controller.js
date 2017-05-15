function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	//var ic = this;
	var imageService = new ImageService();

imageService.getImage(function(image){
	
	draw(image)
})

//resize fx here?

function draw(image){
	document.getElementById("body").style.backgroundImage =`url(${image.url})`
}

}