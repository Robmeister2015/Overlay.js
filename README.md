# Overlay.js
A JavaScript libary to add a watermark or sticker to your images. Currently under development. All suggestions/criticisms welcome
<html>
<body>
<h2>Current Version (2.0)</h2>
Version 2.0 allows the user to specify the height and width of the image to be overlaid. If one variable is set and the other isn't, then the image is automatically resized based on the variable present. It is best to use only one (height or width) as unless you know the exact dimensions, the image will become skewed.
<h2>Version 1.1</h2>
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
   
2. The JavaScript for creating JavaScript variables and then creating your Overlay.js image:

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
		The following can be added directly after the previous section, where the numbers indicate a percentage position on the x and y axes of the background image. This is entirely optional, and the default position (if you choose not to use this section) will sit the image in the bottom right corner of your background image.<br><br>
		`	{`<br>
			`		position: {`<br>
				`			xAxis: '20',`<br>
				`			yAxis: '50'`<br>
			`		},`<br>
	  <br><br>
	  The following can be added after the position section, where the numbers indicate a percentage for height and width of the image to be overlaid on to the background image. This is optional and will sit the image in the bottom right corner at 35% of it's current height and width. If only one of these variables is set, the other is automatically set and prevents any stretching or skewing. If the user sets both, the image may appear stretched or squeezed if the user doesn't know the exact dimensions required.<br><br>
		`	{`<br>
			`		dimensions: {`<br>
				`			height: '100',`<br>
				`			width: '100'`<br>
			`		}`<br>
		`	});`<br>
	  `overlayTest.overlay();`<br><br>
	  
So simply create a new OverlayImages object with the three variables and call overlayTest.overlay() to fill your canvas with the new image. Position data is entirely optional, as stated.
<h2>Can I see this in action?</h2><br>
To see an example of this library in action, please visit <a href="http://www.repealthe9th.com">repealthe9th.com</a> and see the menu.

Alternatively, there is a folder (basic_example) that contains a working HTML page, a version of Overlay.js and a test script that will allow you to see what it does and may also aid you in writing your own code.
</body>
</html>
