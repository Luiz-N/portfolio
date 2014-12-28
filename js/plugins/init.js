// Off Canvas Sliding

$(document).ready(function(){
	$('.js-menu-trigger').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu, .js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead, #page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
	$('.js-menu-screen').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu, .js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead, #page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
	$("#main").fitVids();
// console.log("plugins");

	// $("#main").fitVids(); 
}); 
// FitVids
// $(document).ready(function(){
// Target your .container, .wrapper, .post, etc.
// });  