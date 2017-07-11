$(function() {

    setTimeout(function() {
        $('.head').removeClass('hidden1');
     }, 500);

    setTimeout(function() {
        $('.head').removeClass('fly-in-text1');
    }, 2000);
    
    setTimeout(function() {
        $('.fly-in-text2').removeClass('hidden2');
    }, 500);

    var scroll = setTimeout(function(){
        $('#about').show();
        $('#projects').show();
        $('#btmmdl').hide();   
        $('#toprgt').show();            

        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 300);
        
        setTimeout(function(){
            $('#banner').hide();
        }, 500);

    }, 9000);

    // FLOATING BUTTONS

    $('#toprgt').click(function(){

        $('#contact').fadeIn();
        $('#contactback').fadeIn();
        
        $('#toplft').slideUp();
        $('#toprgt2').slideDown();
        $(this).slideUp();
    });

    $('#toprgt2').click(function(){

        $('#contact').fadeOut();
        $('#contactback').fadeOut();
        
        $('#toplft').slideDown();
        $('#toprgt').slideDown();
        $(this).slideUp();
    });
    
    $('#toplft').hover(function(){
        
        $('#about').show();
        $('#projects').show();
      
        setTimeout(function() {
            $('.projectinfo').hide();
            $('#contact').hide();
        }, 500);

        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 300);

        $('#toprgt').slideDown();
        $(this).slideUp();
    });

    $('#btmmdl').hover(function(){
        
        $('#about').show();
        $('#projects').show();
      
        setTimeout(function() {
            $('#banner').hide();
        }, 1000);

        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 300);
        
        $('#toprgt').slideDown();
        $(this).slideUp();

        clearTimeout(scroll);
    });


    $('#skillbtn').click(function(){
        
        $('#skills').slideToggle();
       
    });

    //ABOUT AREA
    $('.infobtn').click(function (){
        $('.info').animate({right: '0'});
        $('.info').show();    
        $('.skills').animate({right: '-150vw'});    
        $('.expo').animate({right: '-300vw'});    
        setTimeout(function() {
            $('.skills').hide(); 
        }, 300);
        setTimeout(function() {
            $('.expo').hide(); 
        }, 300);

    });
   
    $('.skillbtn').click(function (){
        $('.info').animate({right: '150vw'});
        $('.skills').animate({right: '0'});    
        $('.skills').show();    
        $('.expo').animate({right: '-150vh'});  
        
        setTimeout(function() {
            $('.info').hide(); 
        }, 300);
        setTimeout(function() {
            $('.expo').hide(); 
        }, 300); 

   });
   
   $('.expobtn').click(function (){
        $('.info').animate({right: '300vw'});
        $('.skills').animate({right: '150vw'});    
        $('.expo').animate({right: '0'}); 
        $('.expo').show();   

        setTimeout(function() {
            $('.skills').hide(); 
        }, 300);
        setTimeout(function() {
            $('.expo').hide(); 
        }, 300);  
   });



   // PORTFOLIO AREA
    $('.nr1').hover( 
        function(){  $('.select').toggleClass('hover1');
    });
    $('.nr2').hover( 
        function(){  $('.select').toggleClass('hover2');
    });
    $('.nr3').hover( 
        function(){  $('.select').toggleClass('hover3');
    });
    $('.nr4').hover( 
        function(){  $('.select').toggleClass('hover4');
    });

    $('.nr1').click( function(){ 

        $('.projectinfo').slideDown();
    
        setTimeout(function() {
            $('#banner').hide();
            $('#about').hide();
            $('#skills').hide();
        }, 500);
      
        $('#toplft').slideDown();

        $('.project2').hide();
        $('.project3').hide();
        $('.project4').hide();
        $('.project1').show();

        $('html, body').animate({
            scrollTop: $('.project1').offset().top
        }, 300);

    });

    $('.nr2').click( function(){ 

        $('.projectinfo').slideDown();
        
        setTimeout(function() {
            $('#banner').hide();
            $('#about').hide();
            $('#skills').hide();
        }, 500);

        $('#toplft').slideDown();

        $('.project1').hide();
        $('.project3').hide();
        $('.project4').hide();
        $('.project2').show();
        
        $('html, body').animate({
            scrollTop: $('.projectinfo').offset().top
        }, 300);

    });

    $('.nr3').click( function(){ 

        $('.projectinfo').slideDown();

        setTimeout(function() {
            $('#banner').hide();
            $('#about').hide();
             $('#skills').hide();
       }, 500);
 
        $('#toplft').slideDown();
   
        $('.project1').hide();
        $('.project2').hide();
        $('.project4').hide();
        $('.project3').show();

        $('html, body').animate({
            scrollTop: $('.projectinfo').offset().top
        }, 300);

    });

    $('.nr4').click( function(){ 

        $('.projectinfo').slideDown();
   
        setTimeout(function() {
            $('#banner').hide();
            $('#about').hide();
             $('#skills').hide();
       }, 500);

        $('#toplft').slideDown();

        $('.project1').hide();
        $('.project2').hide();
        $('.project3').hide();
        $('.project4').show();
        
        $('html, body').animate({
            scrollTop: $('.projectinfo').offset().top
        }, 300);

    });



});


















