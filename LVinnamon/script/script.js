let width = 1536;
let tempWidth = 0;

window.onload = function(){
    tempWidth = innerWidth;
    if(tempWidth != width){
        width = tempWidth;
    }
}

//onreize digunakan supaya size dari variabel 'WIDTH' sesuai dengan ukuran screen (diexecute setiap kali ukuran screen berubah/resized) Size awalnya
window.onresize = function(){
    tempWidth = innerWidth;

    if(tempWidth != width){
        width = tempWidth;
    }
}


$(function(){
    let $slider = $('#slider-con')

    $('.right').click(()=>{
        $slider.animate({left:-width}, 'slow', ()=>{
            $('#slider-con :first-child').appendTo($slider)
            $slider.css('left', '0')
        })
    })

    $('.left').click(()=>{
        $slider.animate({left:width}, 'slow', ()=>{
            $('#slider-con :last-child').prependTo($slider)
            $slider.css('left', '0')
        })
    })

})