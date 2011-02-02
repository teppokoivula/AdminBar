
jQuery(document).ready(function($) {

	//prepare all js-enhanced functions
	$('body').addClass('editbar-jsready');

	//prepare variable shortcuts
	var $a			= $('#adminbar'),
			$m			= $a.find('.main'),
			$s			= $('<div class="collapse-switch"></div>').appendTo($m.find('.logged-in')),
			$sc			= $a.find('ul.shortcuts:eq(0)'),
      $ml         = $('<div id="ab-modal" />'), //
      $mlLink		= $a.find('.modal'), // Links that should open in modal
      $mlBg		= $('<div id="ab-modal-bg" />'); // Modal bg

	//various variables to save states, values, i.e.
	var eb_width = parseInt($a.css('width')),
			mlGenerated  = false,
			main_height = $m.height();

	//prepare animating & fx functions
	function showShortcuts(){
		$sc.stop().animate({opacity:1});
	}

	function collapse(){
		$m.toggleClass('collapsed');
		if ($m.hasClass('collapsed')){
			$m.stop().animate({ height: '39px'},250);
			$a.stop().animate({ left: '-'+(eb_width-60)+'px'},250, function(){showShortcuts();});
		}else{
			$sc.stop().animate({opacity:0},100);
			$m.stop().animate({ height: main_height+'px'},250);
			$a.stop().animate({ left: '0px'},250);
		}
	}

	//CSS manipulation and FX/event handlers
	//hide 'collapse' icon overlay and set hover
	$s.css({opacity: 0})
		.hover(function(){$(this).animate({opacity: 1},150);},
			function(){$(this).animate({opacity: 0},150);});

	//hide shortcuts
	$sc.css({display:'block', opacity: 0});
	if ($m.hasClass('collapsed')) { //if collapsed
		$m.css({ height: '39px' });
		$a.css({ left: '-'+(eb_width-60)+'px' });
		$sc.css({opacity: 1});
	}

	$s.click(function(){ collapse(); });

	$sc.find('.hide').click(function(e){
		e.preventDefault();
		$a.hide('fast');
	});

	// Bind custom events for modal background (open, close & click)
	$mlBg.
	bind('open', function(e) {
		var $this = $(this);
		$ml.removeClass('ab-modal-closed').addClass('ab-modal-open');
		$this.removeClass('ab-modal-bg-closed');
		$this.css('height', $(document).height());
	}).
	bind('close', function(e) {
		var $this = $(this);
		$this.addClass('ab-modal-bg-closed');
	}).
	bind('click', function(e) {
		var $this = $(this);
		$this.trigger('close');
	});

	// If there is pagesaved notification, hide it after a moment
	$('#ab-pagesaved-cont').delay(2400).slideUp("slow");

	// Click event for links that are supposed to open in modal
	$mlLink.click(function(e) {
		e.preventDefault();

		$(document).scrollTop(0)
		if (!$m.hasClass('collapsed')) {
			collapse();
		}

		// If modal has been generated at least once, but we now click different
		// action than before, then we will remove current iFrame and re-create it later
		if (mlGenerated && $ml.data('activeState') != e.target.className) {
			mlGenerated = false;
			$iframe.remove();
		}

		// If modal has not been generated before or state chanced in last if
		if (!mlGenerated) {
			mlGenerated = true;
			$mlBg.prependTo('body');
			$ml.appendTo($mlBg);

			// We save the class of the link as the modal active state (modal edit or modal add)
			$ml.data('activeState', e.target.className);

			// Create iFrame for admin page
			$iframe = $('<iframe name="ab_modal_iframe" id="ab_modal_iframe" frameborder="0" src="'+ $(this).attr('href') +'"></iframe>')
			.css('width', '100%')
			.css('height', $(window).height() - 120)
			.appendTo($ml);

			$mlBg.trigger('open');
		} else {
			$mlBg.trigger('open');
		}
  })

});
