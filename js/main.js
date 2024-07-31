$(function(){

    $('h1').on('click',function(){
        $(this).css({color:'red'})
    })


})

let title = document.getElementById("tit");
console.log(title)

title.addEventListener('click',function(){
    this.style.color="blue"
})