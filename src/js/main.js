(function() {
  var mainNav = document.querySelector(".main-nav");
  var mainNavToggle = document.querySelector(".main-nav__toggle");

  mainNavToggle.addEventListener("click", function(e) {
    e.preventDefault();
    mainNav.classList.toggle("main-nav--closed");
    mainNavToggle.classList.toggle("main-nav__toggle--close");
  });

  mainNav.classList.remove('main-nav--nojs');

  if(document.querySelector(".index-content")) {
    var myBox = document.querySelector(".index-content");
    var myBoxHeight = myBox.offsetHeight;
    var headerHeight = document.querySelector(".page-header").offsetHeight; 

    function boxCenter() {  
    if (((document.documentElement.clientHeight - myBox.offsetHeight)/2) > headerHeight) {
    myBox.style.marginTop = ((document.documentElement.clientHeight - myBox.offsetHeight)/2) - headerHeight + "px";
    }
  }
    boxCenter();
    window.onresize = boxCenter;
  }  

  function supportCSS(prop) {
    var yes = false;
    if('Moz'+prop in document.body.style) {
        yes = true;
    }
    if('webkit'+prop in document.body.style) {
        yes = true;
    }
    if('ms'+prop in document.body.style) {
        yes = true;
    }
    if(prop in document.body.style) {
        yes = true;
    }
    return yes; // возращаем ответ
  }

  if(!supportCSS("transform")) {
    document.body.classList.add("no-css3");
  }
})();
