var Body = {
    setcolor: function(color){
        //document.querySelector('body').style.color=color;
        $('body').css('color', color)
    },
    setbackgroundcolor: function(color){
    //    document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color)
    }
}

var Links = {
    setcolor: function(color){
        // a tag 색상 변경
        // var i = 0;
        // var alist = document.querySelectorAll('a');
        // while(i < alist.length){
        //         alist[i].style.color = color
        //         i = i + 1
        //     }  
        // jquery로 컬러 태크를 바꿔보자
        $('a').css('color', color);
    }
}

function nightday_handler(self){
    var target = document.querySelector('body');

    if(self.value==='night'){
        Body.setbackgroundcolor('black');
        Body.setcolor('white');
        self.value='day';
        Links.setcolor('red')

    } else{
        Body.setbackgroundcolor('white');
        Body.setcolor('black');
        self.value='night';
        Links.setcolor('blue')
    }

}