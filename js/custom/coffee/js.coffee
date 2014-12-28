

width = verge.viewportW()
height = verge.viewportH()

if $("#mainPage").length > 0
	$("#page-wrapper div.top").css('height', String(height+'px'));
	buildTess(width,height)
	Grid.init()
	applyClickEvent();
	closeNavMenu();
	scrollEvents();
	







