---
layout: default
<!-- permalink: / -->
title: "Luiz Neves"
--- 
<!-- <h1>Main Page</h1> -->

<div class="top">
	<div class="name">
		<h1>Luiz Neves</h1>
	</div>
	<a class="arrow" href="#About"><span class="glyphyicon"></span></a>
</div>
<div id="mainPage" class="inner-wrapper">
	<div id="About" class="container">
		<div  class="info section">
			<h1>Hi, there.</h1>
			<p class="teaser">I'm a creative full-stack web developer</p>
			<hr>
			<div class="text">
				<h2>About Me</h2>
				<p>I specacalize in data-centric web applications. Everything from scraping, transforming, to visualizing data. I also enjoy getting creative with code like the fancy visualization you see above.</p>
			</div>
			<div class="image">
				<img src="images/me.png" alt="">
			</div> 
			<div class="details">
				<h2>Details</h2>
				<p>
				<strong>Name:</strong><br>
				Luiz Neves<br>
				<strong>Age:</strong><br>
				25<br>
				<strong>Current Location:</strong><br>
				Chicago		</p>
			</div>
		</div>
	</div> 
	<div  id="Projects" class="container">
		{% include grid.html %}
	</div>

	<div id="Skills" class="container">
		<div class="skills section">
			<h1>Skills</h1>
			<p class="teaser">Coming soon...</p>
			<hr>
			<div class="images">
				<img src="images/stackedChart.png" alt="">
				<img src="images/radarChart.png" alt="">
			</div>
		</div>
	</div>
	<div id="Contact" class="container">
		<div class="contact section">
			<h1>Contact</h1>
			<p class="teaser">You can find me here</p>
			<hr>
			<div class="links clearfix">
				<div class="col1">
					<ul class="no-bullets">
						<li>
							<a href="http://twitter.com/hey_luiz" target="_blank">
								<span class="icon icon-twitter"></span></a>
						</li>
						<li>
							<a href="linkedin.nl/in/luizneves7/" target="_blank">
								<span class="icon icon-linkedin"></span></a>
						</li>
					</ul>
				</div>
				<div class="col2">
					<ul class="no-bullets">
						<li>
							<a href="https://github.com/Luiz-N" target="_blank">
								<span class="icon icon-github"></span>
								</a>
						</li>
						<li>
							<a href="mailto:email@luizneves.com">
								<span class="icon icon-email"></span>
								<span style=""></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<hr>
		</div>
	</div>
</div>


<!-- <iframe src='http://koalastothemax.com' frameborder="0"></iframe> -->

<!-- <div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div>  --> 