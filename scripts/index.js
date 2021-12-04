$(document).ready(function() {
    $('#scroll-up').hide();
    function windowSize(){
        $(".filters-container .drop").each(function(){
            var w = $(this).parent().width();
            var p = parseInt($($(this).parent()).css("padding"));
            
            $(this).width(w+p);
        });
        if ($(window).width() > '992'){
            $('.cross').css('display','none');
        }
        else {
            if($('.menu').css('display')==='flex')
                $('.cross').css('display','flex');
        }
    }
    $(window).on('load resize',windowSize);

    $(window).scroll(function() {     
        if ($(window).scrollTop() > 300) {
            $('#scroll-up').fadeIn();
         } else {
            $('#scroll-up').fadeOut();
         }
    });
    $('#scroll-up').click( function() {
        $('html, body').animate({scrollTop:0}, '200');
        return false;
    });

    $(".burger").click(function() {
        $(".cross").css('display',"flex");
        
        $(this).css('display','none');
        $('.menu').slideToggle(300, function(){
            
        });
        $(".menu").toggleClass('d-flex');
    });
    $(".cross").click(function() {
        $(".burger").css('display',"flex");
        $('.burger').removeAttr('style'); 
        $(this).css('display','none');
        
        $('.menu').slideToggle(300,function(){
           $(".menu").removeClass('d-flex');        
      });
        
    });
        
    
   /* $(".filter-block").hover(
        function(){
        $(".filters-container .drop").each(function(){
            var w = $(this).parent().width();
            var p = parseInt($($(this).parent()).css("padding-left"));
            $(this).width(w+p);
        });

            $('.drop',this).slideDown(300);
            
        //$('.drop').slideToggle(300, function(){
            

           // if($('.drop').css('display') === "none"){
             //   $(".drop",this).toggleClass('d-flex');;
           // }
           // $(".drop",this).toggleClass('d-none');
         // });
    },()=>{$('.drop',this).slideUp(300)});*/
    
    $(".filter-block p").click(function(){
        $(".filters-container .drop").each(function(){
            var w = $(this).parent().width();
            var p = parseInt($($(this).parent()).css("padding-left"));
            $(this).width(w+p);
        });
        $(this).closest('.filter-block').find('.drop').slideToggle(300, function(){
            
             if($(this).css('display') === "none"){
                 $(this).removeAttr('style');
             }
          });
    });

    $(" .register-button").click(e=>{
        var form = $('.register-window');
        if(form.css('display')==='none')
        {
            form.css('z-index','1000');
            form.fadeIn();
        }
        else{
            form.fadeOut();             
        }
        
        
    });

    /*$('.play-stop-button').hover(function(){
        var w_in, w_out;
        w_in = $('.play-stop-button .in').width();
        w_out = $('.play-stop-button .out').width();
        h_in = $('.play-stop-button .in').height();
        h_out = $('.play-stop-button .out').height();
        $('.play-stop-button .in'  ).css({
            width:w_in+w_in*0.1,
            height: h_in+h_in*0.1,
            transition: '.3s'
          });
        $('.play-stop-button .out'  ).css({
            width:w_out+w_out*0.1,
            height: h_out+h_out*0.1,
            transition: '.3s'
        });
    })
    $('.play-stop-button').before(function(){
        var w_in, w_out;
        w_in = $('.play-stop-button .in').width();
        w_out = $('.play-stop-button .out').width();
        h_in = $('.play-stop-button .in').height();
        h_out = $('.play-stop-button .out').height();
        $('.play-stop-button .in'  ).css({
            width:w_in-w_in*0.1,
            height: h_in-h_in*0.1,
            transition: '.3s'
          });
        $('.play-stop-button .out'  ).css({
            width:w_out-w_out*0.1,
            height: h_out-h_out*0.1,
            transition: '.3s'
        });
    })*/
    $('.locations').slick({
        arrow:true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<button class="btn-arrow left "><div class="arrowleft "></div></button>',
        nextArrow:'<button class="btn-arrow right"><div class="arrowright "></div></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 470,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
      });
      $('.insta-images').slick({
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            centerMode:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 470,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }]
          });
      
   

})

    