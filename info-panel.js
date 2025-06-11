/* global AFRAME */
AFRAME.registerComponent("info-panel", {
	init: function () {
		var buttonEls = document.querySelectorAll(".menu-button");
		var fadeBackgroundEl = (this.fadeBackgroundEl =
			document.querySelector("#fadeBackground"));

		this.movieTitleEl = document.querySelector("#movieTitle");
		this.movieDescriptionEl = document.querySelector("#movieDescription");

		this.projectInfo = {
			tetrisButton: {
				imgEl: document.querySelector("#tetrisMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
			antonRocketButton: {
				imgEl: document.querySelector("#antonRocketMovieImage"),
				url: "https://ant-rocket-launch.glitch.me/",
			},
			jodButton: {
				imgEl: document.querySelector("#jodMovieImage"),
				url: "https://maybejod.github.io/webxr-type-shi/",
			},
			newCard1Button: {
				imgEl: document.querySelector("#jodMovieImage"),
				url: "https://dstjp.github.io/a-frameTest/",
			},
			newCard2Button: {
				imgEl: document.querySelector("#jodMovieImage"),
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
		var projectInfo = this.projectInfo[evt.currentTarget.id];

		if (projectInfo && projectInfo.url) {
			window.open(projectInfo.url, "_blank");
		}
	},

	onBackgroundClick: function (evt) {
		this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
		this.el.object3D.scale.set(0.001, 0.001, 0.001);
		this.el.object3D.visible = false;
		this.fadeBackgroundEl.object3D.visible = false;
	},
});
