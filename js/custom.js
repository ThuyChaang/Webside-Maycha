// JavaScript Document
$('#banner').owlCarousel({
    loop:true,
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
   	autoplayTimeout:4000,  // thời gian chờ khi chuyển ảnh khi chạy tự động

    margin:10,
//    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})