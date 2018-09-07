$(function () {

    mobileNavCollapserUnfolder = mobileNavCollapserUnfolder;
    projectLayer = projectLayer;

    //mobile Nav
    $('body').find('.navLayer-exit').each(function () {
        $(this).on('click', function () {
            mobileNavCollapserUnfolder.collapse();
        })
    });

    $('body').find('nav').each(function () {
        $(this).on('click', function () {
            mobileNavCollapserUnfolder.unfold();
        })
    });

    //layer
    $('body').find('.layer-closer').each(function () {
        $(this).on('click', function () {
            const layer = $(this);
            projectLayer.collapse(layer);
        })
    });

    $('body').find('.thumbnail').each(function () {
        $(this).on('click', function () {
            const layer = $(this);
            projectLayer.unfold(layer);
        })
    });

    //Scroll Animation
    $('body').find('a').each(function () {
        let anchor = this;
        anchor.addEventListener('click', function () {
            anchorScrollAnimator.scrollAnimator();
        });
    });

    //Slider
    $('.slider').bxSlider();

});