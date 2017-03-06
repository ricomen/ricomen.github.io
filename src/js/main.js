(function() {
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
})();
