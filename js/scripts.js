jQuery(document).ready(function(){
    jQuery('.slider-container').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        items:1,
        navText : ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
    });
    jQuery('.clients-logo').owlCarousel({
        loop:true,
        nav:true,
        margin:30,
        dots:false,
        responsiveClass:true,
        navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        navContainer: '#slider-controls',
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            767:{
                items:4,
                nav:false
            },
            992:{
                items:5,
                nav:false
            },
            1200:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });
});