var j = $.noConflict(true); // $.noConflict(true) �� ����ؼ� $ -> ������ ������ j�� �ٲ�
j(document).ready(function(){ 
    var main = j('.bxslider').bxSlider({ 
    mode: 'fade', 
    auto: true,	//�ڵ����� �����̵� 
    controls : true,	//�¿� ȭ��ǥ	
    autoControls: true,	//stop,play 
    pager: true,	//����¡ 
    pause: 3000, 
    autoDelay: 0,	
    slideWidth: 1150, 
    speed: 1000, //�̹��� �Ѿ�� �ӵ� 
    stopAutoOnclick: false,
    autoHover: false
}); 

j(".bx-stop").click(function(){	// ������ư
    main.stopAuto(); 
    j(".bx-stop").hide(); 
    j(".bx-start").show(); 

    return false; 
}); 

j(".bx-start").click(function(){	//���۹�ư
    main.startAuto(); 
    j(".bx-start").hide(); 
    j(".bx-stop").show(); 

    return false; 
}); 

j(".bx-start").hide();	//onload�� ���۹�ư ����. 

}); 