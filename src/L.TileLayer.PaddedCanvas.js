L.TileLayer.PaddedCanvas = L.TileLayer.Canvas.extend({

	options: {
		tilePadding: 10
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	_addTile: function (tilePoint, container) {
		var tilePos = this._getTilePos(tilePoint);

		// get unused tile - or create a new tile
		var tile = this._getTile();

		//adding tilepadding to positioning
		tile.style.left = (tilePos.x - this.options.tilePadding) + 'px';
		tile.style.top = (tilePos.y - this.options.tilePadding) + 'px';

		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

		this._loadTile(tile, tilePoint);

		if (tile.parentNode !== this._tileContainer) {
			container.appendChild(tile);
		}
	},
	_createTile: function () {
		var tile = L.DomUtil.create('canvas', 'leaflet-tile');
		//add tilepadding to dimensions
		tile.width = tile.height = this.options.tileSize + this.options.tilePadding * 2;
		tile.onselectstart = tile.onmousemove = L.Util.falseFn;
		return tile;
	}
});


L.tileLayer.paddedCanvas = function (options) {
	return new L.TileLayer.PaddedCanvas(options);
};
