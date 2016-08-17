# Overlay.js
A JavaScript libary to add a watermark or sticker to your images. Currently under development. All suggestions/criticisms welcome
<html>
<body>
<h2>Current Version (1.1)</h2>
Version 1.1 allows the user to specify the positioning on the background image by way of percentages. The syntax for Overlay creation has also changed to accomodate future change. See the how to section for information on how to use it.
<h2>Version 1.0</h2>
Version 1.0 has the most basic features. It allows the input of two images and then scales the second image to fit into the bottom corner of the other. This is the only feature currently implemented and more are in development. This version, along with its readme can be found in the older_versions folder.
<h2>What this library is.</h2>
1. A way to watermark your images
2. Written in pure JavaScript (no external libraries necessary)
3. A way to create stickers for images (sort of like you see on Facebook)<br>
4. A work in progress
5. A personal project
6. Totally free

<h2>What this library isn't.</h2>

1. A fully-featured financially supported library
2. A professional library (at least not yet)

<h2>How to use the library.</h2>

1. Create variables in JavaScript that contain your images and the canvas. For an example of the HTML, see below

  The HTML for the images and canvas
  
  `<img id="firstImage" src="someImage.jpg" />`<br>
   `<img id="secondImage" src="someOtherImage.png" />`<br>
   `<canvas id="imagecanvas"></canvas>`<br><br>
   
2. The JavaScript for creating JavaScript variables and then creating your Overlay.js image

`var image = document.getElementById('firstImage');`<br>
		`var otherImage = document.getElementById('secondImage');`<br>
		`var canvasFromPage = document.getElementById('imagecanvas');`<br><br>
   `var overlayTest = new OverlayImages({`<br>
			`	images: {`<br>
				`		firstImage: image,`<br>
				`		secondImage: otherImage,`<br>
				`		canvas: canvasFromPage`<br>
			`		},`<br>
		`	},`<br>
		`	{`<br>
			`		position: {`<br>
				`			xAxis: '20',`<br>
				`			yAxis: '50'`<br>
			`		}`<br>
		`	});`<br>
	  `overlayTest.overlay();`<br><br>
	  
So simply create a new OverlayImages object with the three variables and call overlayTest.overlay() to fill your canvas with the new image.
<h2>Can I see this in action?</h2><br>
To see an example of this library in action, please visit <a href="http://www.repealthe9th.com">repealthe9th.com</a> and see the menu.

Alternatively, there is a folder (basic_example) that contains a working HTML page, a version of Overlay.js and a test script that will allow you to see what it does and may also aid you in writing your own code.
</body>
</html>
