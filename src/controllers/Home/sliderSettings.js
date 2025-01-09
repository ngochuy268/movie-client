export const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const settings2 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    draggable:true,
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        }
    ]
};
