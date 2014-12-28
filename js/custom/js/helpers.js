scrollEvents = function(){

  $stickyNavLocation = $('a.arrow').offset().top + 12;
  $navPanel = $("nav.sidePanel");
  $button = $("button.sliding-menu-button")

  $(window).on('scroll', function(event) {
    highlightNav();

    if ($(window).scrollTop() > $stickyNavLocation) {
      $navPanel.addClass("fixed");
      $button.addClass('fixed');
    } else{
      $navPanel.removeClass("fixed");
      $button.removeClass('fixed');
    }

  });
};

highlightNav = function(){
    sections = typeof sections !== 'undefined' ? sections : {};
    // var _height  = height,
    var i = 0,
    $this = $(this),
    pos   = $this.scrollTop();
    $navLinks = $('nav a');
    
    // Grab positions of our sections
    if (sections['About'] == undefined) {
      $('.container').each(function(){
        sections[this.id] = $(this).offset().top;
      });
    }
            
    for(i in sections){
       if(sections[i] <= pos ){
           $navLinks.removeClass('active');
           $('nav a[href=#' + i+']').addClass('active');
       }  
    }
};

applyClickEvent = function()
{
  var extraScroll = 0;
  if (width <= 480){
    extraScroll = 0;
  }
  var container = $('html');
  $('a[href*=#]').on('click', function(e)
  {
    e.preventDefault();
    
    if( $( $.attr(this, 'href') ).length > 0 )
    {
      $('html, body').animate(
      {
        scrollTop: $("#"+this.href.split("#")[1]).offset().top + extraScroll
      }, 400);
    }
    return false;
  });
};

closeNavMenu = function(){
  $("a.title").on('click', function(event) {
    // event.preventDefault();
    $("nav.is-visible").removeClass("is-visible");
    $("div.is-visible").removeClass("is-visible");
    $("button.close").removeClass("close slide");
    $("#page-wrapper").removeClass('slide');
    $("#masthead").removeClass('slide');
    $("body").removeClass('no-scroll');
  });
};