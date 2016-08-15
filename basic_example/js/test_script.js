window.onload = function(){
	document.getElementById('createImage').onclick = function(){
		var image = document.getElementById('previewImage');
		var otherImage = document.getElementById('previewImage2');
		var canvasFromPage = document.getElementById('imagecanvas');
		
		var overlayTest = new OverlayImages(image, otherImage, canvasFromPage);
		
		overlayTest.overlay();
		
	}
}