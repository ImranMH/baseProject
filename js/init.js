


$(function () {
	//this function for contact form (contact-ddynamic.html)
	$('.awesome-form .input-group input').focusout(function () {
		var text_val = $(this).val();
		if(text_val== "") {
			$(this).removeClass('hav_val');
		} else {
			$(this).addClass('hav_val');
		}
	});
});