jQuery(document).ready(function () {
	
	var $hero = jQuery('#hero'),
	    $isiq = $hero.find('.isiq');

     $isiq.removeClass('isiq');
	function scan()
	{

	    $hero.removeClass('idle').addClass('attack');
	    $isiq.addClass('isiq');

	    setInterval(function() {
	      $hero.removeClass('attack').addClass('idle');
	      $isiq.removeClass('isiq');
	    }, 3000);

	}
    // scan();
	setInterval(scan, 10000);
});