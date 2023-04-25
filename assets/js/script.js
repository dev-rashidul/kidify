// Blog Slider JavaScript

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>']
})