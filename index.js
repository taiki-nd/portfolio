

function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop;
  }

const hedderAnimation = document.getElementById("header")
hedderAnimation.addEventListener('scroll', function(){
    console.log("ok")
})

