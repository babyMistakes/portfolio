type="text/javascript">
  $(document).ready(function() {
    $('.carousel').carousel({interval: 8000});
  });


$('.mainLogoButton').on('click',function() {
if($('#navContainer').css('top')=='-2000px'){
    $('#navContainer').animate({top: '-19em'}, 700);        
}else{
    $('#navContainer').animate({top:'-2000px'}, 600); 
}
});

$('.mainLogoButton').on('click',function() {
if($('#navInnerCircle').css('top')=='2700px'){
    $('#navInnerCircle').animate({top: '2.4em'}, 650);        
}else{
    $('#navInnerCircle').animate({top:'2700px'}, 900); 
}    
});
