/**
 * Created by nikolay_smeh on 05.03.16.
 * Email: nikolay@nikolay.ws
 * www.nikolay.ws
 */


(function ($) {
    var methods = {
        init: function (obj, options) {

            var $this = $(this),
                data = $this.data('colorPresenter');

            if (!data) {
                $(this).data('colorPresenter', {
                    target: obj
                });
            }
            methods.renderPresenter(obj, options);

            return this;
        },

        renderPresenter: function (obj, options) {
            if (Array.isArray(options.colors)) {
                for (var i in options.colors) {
                    if (Array.isArray(options.colors[i])) {
                        var h = obj.height() / (options.colors.length);
                        var row = $('<div>').css('height', h + 'px');
                        var w = obj.width() / (options.colors[i].length);
                        for (var j in options.colors[i]) {
                            var block = $('<div/>');
                            if (Array.isArray(options.colors[i][j])){
                                block.css('background', options.colors[i][j][0])
                                    .css('background', '-webkit-linear-gradient(left, '+options.colors[i][j][0]+', '+options.colors[i][j][1]+')')
                                    .css('background', '-o-linear-gradient(right, '+options.colors[i][j][0]+', '+options.colors[i][j][1]+')')
                                    .css('background', '-moz-linear-gradient(right, '+options.colors[i][j][0]+', '+options.colors[i][j][1]+')')
                                    .css('background', 'linear-gradient(to right, '+options.colors[i][j][0]+', '+options.colors[i][j][1]+')');
                            }
                            else{
                                block.css('float', 'left').css('background-color', options.colors[i][j]);
                            }
                            block.css('height', '100%').css('width', w + 'px').css('float', 'left');
                            row.append(block);
                        }
                        if (Array.isArray(options.colors[i][j])){
                            row.css('background', options.colors[i][j][1]);
                        }
                        else{
                            row.css('background', options.colors[i][j]);
                        }
                        obj.append(row);
                    } else {
                        var w = obj.width() / (options.colors.length);
                        var block = $('<div/>').css('float', 'left').css('background-color', options.colors[i]).css('height', '100%').css('width', w + 'px');
                        obj.append(block);
                        obj.css('background-color', options.colors[i]);
                    }
                    if (options.rounded != undefined && options.rounded == true) {
                        obj.css('border-radius', '50%');
                        obj.css('overflow', 'hidden');
                    }
                }
            }else {
                return false;
            }
        }

    };


    $.fn.colorPresenter = function (options) {
        var settings = $.extend({
            'colors': []
        }, options);
        return methods.init(this, settings);
    }
})(jQuery);
