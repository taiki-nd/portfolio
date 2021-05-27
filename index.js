

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

const scrollEvent = function(){
    window.addEventListener("scroll", function(){
        let scrollvalue = window.pageYOffset;
        let scrollEle = document.querySelectorAll(".work");
        let scrollTop = scrollEle.getBoundingClientRect().top + scrollvalue;
        let windowHeight = window.innerHeight;
        let value = 150;
        if(scrollvalue > scrollTop - windowHeight + value){
            scrollEle.classList.add("scroll_in");
        }    
    });
};

scrollEvent();