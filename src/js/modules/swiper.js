(function () {
    new Swiper('.swiper', {

        navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev'
        },

        keyboard: {
            enablded: true,
            onlyInViewport: true
        },

        speed: 800,
        effect: 'flip',

        flipflowEffect: {
            slideShadows: true,
            limitRotation: true
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
    });

    new Swiper('.swiper-phones', {
        navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev'
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        touchRatio: 0,

        keyboard: {
            enablded: true,
            onlyInViewport: true
        },

        speed: 800,
        effect: 'flip',

        flipflowEffect: {
            slideShadows: true,
            limitRotation: true
        }
    })
}());
