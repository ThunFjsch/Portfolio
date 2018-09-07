let projectLayer = {

    collapse: function(layer){
        const $body = $('body');

        layer.addClass('is-hidden');
        $body.find('.layer').addClass('is-hidden');
    },

    unfold: function(layer){
        const $body = $('body');

        layer.children().removeClass('is-hidden');
        $body.find('.layer-closer').removeClass('is-hidden');
    }

}