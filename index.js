window.addEventListener('load', function(){

    const status = document.getElementsByClassName("navi")
    const current = document.getElementsByClassName("content_status")

    status.forEach(function(list){
        list.addEventListener('click', function(){
            value = list.innerHTML
            current.innerHTML = value
        })
    })


})


function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop;
  }