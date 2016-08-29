function OverlayImages(image, position, dimensions) {
    this.image = image,
	this.position = position || {
		position: {
		xAxis: '100',
		yAxis: '100'
		}
	},
	this.dimensions = dimensions || {
			dimensions: {
					height: '-1',
					width: '-1'
			}
	}
	this.overlay = function(){
			if(dimensions.dimensions.height == undefined && dimensions.dimensions.width != '-1'){
					dimensions.dimensions.height = '-1';
			}
			if(dimensions.dimensions.width == undefined && dimensions.dimensions.height != '-1'){
					dimensions.dimensions.width = '-1';
			}
		createOverlay(image.images.firstImage, image.images.secondImage, image.images.canvas, this.position, this.dimensions);
	}
}

var createOverlay = function(image1, image2, canvas, position, dimensions){
	
canvas.width = image1.width;
canvas.height = image1.height;

var dimensionsForSecondImage = getResizedSecondImage(image1, image2, dimensions);

var newPosition = calculateAdjustedPositionData(image1, dimensionsForSecondImage[0], dimensionsForSecondImage[1], position);

var context = canvas.getContext('2d');

context.globalAlpha = 1.0;
context.drawImage(image1, 0, 0);
context.drawImage(image2, newPosition[0] / 100 * position.position.xAxis, newPosition[1] / 100 * position.position.yAxis, dimensionsForSecondImage[0], dimensionsForSecondImage[1]);

}

var calculateAdjustedPositionData = function(image1, imageTwoWidth, imageTwoHeight, position){
	
	var imageOneWidth = image1.width;
	var imageOneHeight = image1.height;
	
	var newWidth = imageOneWidth - imageTwoWidth;
	var newHeight = imageOneHeight - imageTwoHeight;
	
	var newWidthAndHeight = [newWidth, newHeight];
	return newWidthAndHeight;
}

var getResizedSecondImage = function(image1, image2, dimensions){
	
	if(dimensions.dimensions.height == '-1' && dimensions.dimensions.width == '-1'){
			alert('Both are -1');
			alert(dimensions.dimensions.height);
	var imageOneWidth = image1.width;
	var imageOneHeight = image1.height;
	
	var imageTwoWidth = image2.width;
	var imageTwoHeight = image2.height;
	
	while(imageTwoWidth > (imageOneWidth / 100 * 35)){
		imageTwoWidth = imageTwoWidth * .5;
		imageTwoHeight = imageTwoHeight * .5;	
	}
	
	var resizedImageTwo = [imageTwoWidth, imageTwoWidth];
	
	return resizedImageTwo;
	} else if(dimensions.dimensions.height == '-1' && dimensions.dimensions.width != '-1'){
		alert('Height is -1');
		var imageOneWidth = image1.width;
		var imageOneHeight = image1.height;
		
		var imageTwoWidth = (image2.width / 100) * parseInt(dimensions.dimensions.width);
		var imageTwoHeight = (image2.height / 100) * parseInt(dimensions.dimensions.width);
		
		
		var resizedImageTwo = [imageTwoWidth, imageTwoHeight];
		
		return resizedImageTwo;
	} else if(dimensions.dimensions.height != '-1' && dimensions.dimensions.width == '-1'){
		alert('Width is -1');
		var imageOneWidth = image1.width;
		var imageOneHeight = image1.height;
		
		var imageTwoWidth = (image2.width / 100) * parseInt(dimensions.dimensions.height);
		var imageTwoHeight = (image2.height / 100) * parseInt(dimensions.dimensions.height);
		
		
		var resizedImageTwo = [imageTwoWidth, imageTwoHeight];
		
		return resizedImageTwo;
		}else if(dimensions.dimensions.height != '-1' && dimensions.dimensions.width != '-1'){
		alert('Neither is -1');
		var imageOneWidth = image1.width;
		var imageOneHeight = image1.height;
		
		var imageTwoWidth = (image2.width / 100) * parseInt(dimensions.dimensions.width);
		var imageTwoHeight = (image2.height / 100) * parseInt(dimensions.dimensions.height);
		
		
		var resizedImageTwo = [imageTwoWidth, imageTwoHeight];
		
		return resizedImageTwo;
	} 
}