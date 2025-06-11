/* global AFRAME */
AFRAME.registerComponent("info-panel", {
	init: function () {
		var buttonEls = document.querySelectorAll(".menu-button");
		var fadeBackgroundEl = (this.fadeBackgroundEl =
			document.querySelector("#fadeBackground"));

		this.movieTitleEl = document.querySelector("#movieTitle");
		this.movieDescriptionEl = document.querySelector("#movieDescription");

		this.movieInfo = {
			tetrisButton: {
				imgEl: document.querySelector("#tetrisMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
			kazetachinuButton: {
				imgEl: document.querySelector("#kazetachinuMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
			ponyoButton: {
				imgEl: document.querySelector("#ponyoMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
			newCard1Button: {
				imgEl: document.querySelector("#ponyoMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
			newCard2Button: {
				imgEl: document.querySelector("#ponyoMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
		};

		this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
		this.onBackgroundClick = this.onBackgroundClick.bind(this);
		this.backgroundEl = document.querySelector("#background");
		for (var i = 0; i < buttonEls.length; ++i) {
			buttonEls[i].addEventListener("click", this.onMenuButtonClick);
		}
		this.backgroundEl.addEventListener("click", this.onBackgroundClick);
		this.el.object3D.renderOrder = 2;
		this.el.object3D.depthTest = false;
		fadeBackgroundEl.object3D.renderOrder = 1;
		fadeBackgroundEl.getObject3D("mesh").material.depthTest = false;
	},

	onMenuButtonClick: function (evt) {
		var movieInfo = this.movieInfo[evt.currentTarget.id];

		if (movieInfo && movieInfo.url) {
			window.open(movieInfo.url, "_blank");
		}
	},

	onBackgroundClick: function (evt) {
		this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
		this.el.object3D.scale.set(0.001, 0.001, 0.001);
		this.el.object3D.visible = false;
		this.fadeBackgroundEl.object3D.visible = false;
	},
});
