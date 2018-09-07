let mobileNavCollapserUnfolder = {

    collapse: function(){
        const body= $('body');

        body.find('.mobile-nav-layer').addClass('is-hidden');
        body.find('.mobile-nav-layer-exit').addClass('is-hidden');
        body.find('nav').removeClass('is-hidden');
    },

    unfold: function(){
        const body= $('body')

        body.find('.mobile-nav-layer').removeClass('is-hidden');
        body.find('.mobile-nav-layer-exit').removeClass('is-hidden');
        body.find('nav').addClass('is-hidden');
    }
}