(function($){
    $.fn.extend({ 
        //plugin name - sayit
        sayit: function(options) {
 
            var defaults = {
                say:"HeeeY",
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  alert(o.say);
            });
        }
    });
})(jQuery);