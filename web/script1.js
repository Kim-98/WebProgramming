var j = $.noConflict(true); // $.noConflict(true) 를 사용해서 $ -> 변수로 선언한 j로 바꿈
j(document).ready(function(){ 
    var main = j('.bxslider').bxSlider({ 
    mode: 'fade', 
    auto: true,	//자동으로 슬라이드 
    controls : true,	//좌우 화살표	
    autoControls: true,	//stop,play 
    pager: true,	//페이징 
    pause: 3000, 
    autoDelay: 0,	
    slideWidth: 1150, 
    speed: 1000, //이미지 넘어가는 속도 
    stopAutoOnclick: false,
    autoHover: false
}); 

j(".bx-stop").click(function(){	// 중지버튼
    main.stopAuto(); 
    j(".bx-stop").hide(); 
    j(".bx-start").show(); 

    return false; 
}); 

j(".bx-start").click(function(){	//시작버튼
    main.startAuto(); 
    j(".bx-start").hide(); 
    j(".bx-stop").show(); 

    return false; 
}); 

j(".bx-start").hide();	//onload시 시작버튼 숨김. 

}); 