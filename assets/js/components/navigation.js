Vue.component("page-header-sub", {
	template: `
	<nav class="navbar navbar-expand-lg bg-upland fixed-top">
		<div class="container">
			<div class="navbar-translate">				
				<a class="navbar-brand" href="../index.html" rel="tooltip"
					title="Upland Reviews" data-placement="bottom" target="_blank">
					Upland Reviews
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
					aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-bar bar1"></span>
					<span class="navbar-toggler-bar bar2"></span>
					<span class="navbar-toggler-bar bar3"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" data-nav-image="../assets/img/blurred-image-1.jpg"
				data-color="orange">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
					</li>

					<li class="dropdown nav-item">
						<a href="#" class="dropdown-toggle nav-link" id="navbarDropdownMenuLink"
							data-toggle="dropdown">
							Reviews
						</a>
						<div class="dropdown-menu dropdown-menu-right dropdown-danger"
							aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" data-scroll="true" data-id="#headers"
								href="./vests.html">
								<i class="nc-icon nc-compass-05"></i>
								Upland Vests
							</a>
							<a class="dropdown-item" data-scroll="true" data-id="#features"
								href="./dog-training.html">
								<i class="nc-icon nc-watch-time"></i>
								Dog Training
							</a>
							<a class="dropdown-item" data-scroll="true" data-id="#blogs"
								href="./outerwear.html">
								<i class="nc-icon nc-settings-gear-65"></i>
								Outerwear
							</a>							
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    `,

	data() { },

	mounted() {
		var self = this;
		self.init;
	},

	methods: {
		init: function () { },
	},
});

Vue.component("page-header-main", {
	template: `
	<nav class="navbar navbar-expand-lg nav-down navbar-absolute navbar-transparent">
		<div class="container">
			<div class="navbar-translate">				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
					aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-bar bar1"></span>
					<span class="navbar-toggler-bar bar2"></span>
					<span class="navbar-toggler-bar bar3"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
			<ul class="navbar-nav ml-auto">		

			<li class="dropdown nav-item">
				<a href="#" class="dropdown-toggle nav-link" id="navbarDropdownMenuLink"
					data-toggle="dropdown">
					Reviews
				</a>
				<div class="dropdown-menu dropdown-menu-right dropdown-danger"
					aria-labelledby="navbarDropdownMenuLink">
					<a class="dropdown-item" data-scroll="true" data-id="#headers"
						href="./reviews/vests.html">
						<i class="nc-icon nc-compass-05"></i>
						Upland Vests
					</a>
					<a class="dropdown-item" data-scroll="true" data-id="#features"
						href="./reviews/dog-training.html">
						<i class="nc-icon nc-watch-time"></i>
						Dog Training
					</a>
					<a class="dropdown-item" data-scroll="true" data-id="#blogs"
						href="./reviews/outerwear.html">
						<i class="nc-icon nc-map-big"></i>
						Outerwear
					</a>									
				</div>
			</li>
		</ul>
			</div>
		</div>
	</nav>
    `,

	data() { },

	mounted() {
		var self = this;
		self.init;
	},

	methods: {
		init: function () { },
	},
});

Vue.component("page-footer", {
	template: `
	<footer class="footer footer-gray footer-white">
		<div class="container">
			<div class="row">
				<nav class="footer-nav">
					<ul>
						<li>
							<a href="http://uplandreviews.com/index.html" target="_blank">Home</a>
						</li>
						<li>
							<a href="http://uplandreviews.com/reviews/vests.html" target="_blank">Upland Vests</a>
						</li>
						<li>
							<a href="http://uplandreviews.com/reviews/dog-training.html" target="_blank">Dog Training</a>
						</li>
						<li>
							<a href="http://uplandreviews.com/reviews/outerwear.html" target="_blank">Outerwear</a>
						</li>
					</ul>
				</nav>
				<div class="credits ml-auto">
					<span class="copyright">
						©
						<script>
							document.write(new Date().getFullYear());
						</script>
						uplandreviews.com
					</span>
				</div>
			</div>
		</div>
	</footer>
    `,

	data() {
		return {};
	},

	mounted() {
		var self = this;
		self.init;
	},

	methods: {
		init: function () { },
	},
});
