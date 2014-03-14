#Leaflet TileLayer Padded Canvas


[Leaflet](https://github.com/Leaflet/Leaflet) canvas layer plugin that enables you to draw elements on the edge of the
canvas that normally are cutted.

Usually When you draw points that reside on the edge of a tile,


##Requirements


It requires Leaflet 0.7.x.


##Usage


	var padding = 30;

	//create a new paddedCanvas layer with tilePadding option
    var paddedCanvas = L.tileLayer.paddedCanvas({tilePadding: padding})

    paddedCanvas.drawTile = function (canvas, tilePoint, zoom) {

    // remember to pad always to your coordinates
    var x = 125 + padding,
        y = 255 + padding;

    	var ctx = canvas.getContext('2d');
    	ctx.beginPath();
    	ctx.arc(x, y, 20, 0, 2 * Math.PI);
    	ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    	ctx.fill();
    	ctx.lineWidth = 2;
    	ctx.strokeStyle = 'black';
    	ctx.stroke();
    };
    paddedCanvas.addTo(map);

##Demo


An example can be found within the `examples` subdirectory of the repository: [Zero or Padded Layer example](//accurat.github.io/Leaflet.TileLayer.PaddedCanvas)

