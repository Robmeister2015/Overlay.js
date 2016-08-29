window.onload = function(){
	document.getElementById('createImage').onclick = function(){
		var image = document.getElementById('previewImage');
		var otherImage = document.getElementById('previewImage2');
		var canvasFromPage = document.getElementById('imagecanvas');
		
		var overlayTest = new OverlayImages({
			images: {
				firstImage: image,
				secondImage: otherImage,
				canvas: canvasFromPage
			},
		},
		{
			position: {
				xAxis: '20',
				yAxis: '50'
			}
		},
		{
			dimensions: {
				width: '100',
				height: '50'
			}
		});
		
		overlayTest.overlay();
		
	}
}