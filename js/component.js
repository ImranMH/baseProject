
'use strict';


/*alert button*/

(function() {
	$.fn.alert = function () {
		return this.each(function() {
			var self = $(this);
			self.on('click','.close', function () {
				self.addClass('vanish');
			});
			self.on('transitionend', function() {
				self.remove();
			});
		});
	};
}(jQuery))