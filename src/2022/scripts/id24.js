window.addEventListener("load", function() {
  /* add aria-current to the page */
  var links = document.querySelectorAll("a[href]");
  for(i=0; i<links.length; i++) {
    if(links[i].href == location.href) {
      links[i].setAttribute('aria-current', 'page');
    }
  }
});