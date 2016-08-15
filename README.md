# Overlay.js
A JavaScript libary to add a watermark or sticker to your images. Currently under development. All suggestions/criticisms welcome
<html>
<body>
<h2>Current Version (1.0)</h2>
Version 1.0 is brand new and has the most basic features. It allows the input of two images and then scales the second image to fit into the bottom corner of the other. This is the only feature currently implemented and more are in development.
<h2>What this library is.</h2>
1. A way to watermark your images
2. A way to create stickers for images (sort of like you see on Facebook)<br>
3. A work in progress
4. A personal project
5. Totally free

<h2>What this library isn't.</h2>

1. A fully-featured financially supported library
2. A professional library (at least not yet)

<h2>How to use the library.</h2>

1. Create variables in JavaScript that contain your images and the canvas. For an example of the HTML, see below<br>
  The HTML for the images and canvas
  `<img id="firstImage" src="someImage.jpg" />`<br>
   `<img id="secondImage" src="someOtherImage.png" />`<br>
   `<canvas id="imagecanvas"></canvas>`<br><br>
2. The JavaScript for creating JavaScript variables and then creating your Overlay.js image
`var image = document.getElementById('firstImage');`<br>
		`var otherImage = document.getElementById('secondImage');`<br>
		`var canvasFromPage = document.getElementById('imagecanvas');`<br>
    `var overlayTest = new OverlayImages(image, otherImage, canvasFromPage);`<br>
	  `overlayTest.overlay();`<br><br>
So simply create a new OverlayImages object with the three variables and call overlayTest.overlay() to fill your canvas with the new image.
<h2>Can I see this in action?</h2><br>
To see an example of this library in action, please visit <a href="http://www.repealthe9th.com">repealthe9th.com</a> and see the menu.
</body>
</html>
