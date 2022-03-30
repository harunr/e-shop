
(function($){
	$(function(){

        // Phone nav click function
        $('.hamburger').click(function() {
            $('body').toggleClass('nav-shown');
        })

        // Phone nav click function
        if ($("select.styled-select").length) {	
            $("select.styled-select").selectric({	

            });	
        }

            $('.products-tab-triger li').click(function(){
                $('.products-tab-triger li').removeClass('active');
                $(this).addClass('active');
                $('.products-tab-item-wrap .products-item-wrap').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false;
            });
            
            if ($('.hero-item-wrap').length) {
                $('.hero-item-wrap').slick({
                    arrows:false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    navigation:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    centerMode: false,
                    focusOnSelect: true,
                    
                })
            }


      /*  product page */
        if($('.slider-wrap').length){
            $('.slider-wrap').slick({
                dots: false,
                arrows:true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 1000,
                slidesToShow:1,
                slidesToScroll: 1,
                asNavFor: '.shoes-thumb-item-wrap',
                responsive: [
                  
                    {
                        breakpoint: 768,
                        settings: {
                            dots:true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },
					
					  {
                        breakpoint: 767,
                        settings: {
                            dots:true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('.slider-wrap').slick('resize');

            });
        }  

		
    if($('.shoes-thumb-item-wrap').length){
            $('.shoes-thumb-item-wrap').slick({

                arrows:true,
                infinite: true,
                navigation:false,
                /*  speed: 500,*/
                slidesToShow:3,
                slidesToScroll: 1,
                asNavFor: '.slider-wrap',
                dots:false,
                centerMode: false,
                focusOnSelect: true

            });
            $(window).on('resize', function () {
                $('.shoes-thumb-item-wrap').slick('resize');

            });
        }  
        




	})// End ready function.
   
    
  
    

	

})(jQuery)

