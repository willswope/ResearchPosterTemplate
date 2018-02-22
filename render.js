var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 5184, height: 3456 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 0, left: 0, width: 5184, height: 3456 };
//the rest of the code is the same as the previous example
page.open('file:///C:/Users/Will/poster/poster.html', function() {
  page.render('poster.png');
  phantom.exit();
});