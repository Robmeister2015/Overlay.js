function OverlayImages(image1, image2, canvas) {
    this.image1 = image1;  
    this.image2 = image2;
	this.canvas = canvas;
	this.overlay = function(){
		simpleOverlay(image1, image2, canvas);
	}
}

var simpleOverlay = function(image1, image2, canvas){
	
canvas.width = image1.width;
canvas.height = image1.height;

var context = canvas.getContext('2d');

context.globalAlpha = 1.0;

context.drawImage(image1, 0, 0);
context.drawImage(image2, image1.width - (image1.height / 100 * 35) / 100 * 125, image1.height / 100 * 65, (image1.height / 100 * 35) / 100 * 125, image1.height / 100 * 35);

}