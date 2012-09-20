(function($){
    $.fn.extend({ 
        //plugin name - sayit
        clickhelper: function(options) {
 
            var defaults = {
                linkSelector:null,
                hoverClass: "hover"
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {

                var o =options;
                var obj = $(this); 
                
                obj.click(function() {
                    console.log(obj.find(o.linkSelector).length);
                    
                    document.location = obj.find(o.linkSelector)[0].href;

                });

                obj.hover(
                    function() {
                        obj.addClass(o.hoverClass);
                    },
                    function() {
                        obj.removeClass(o.hoverClass);
                    }
                );
            });
        }
    });
})(jQuery);