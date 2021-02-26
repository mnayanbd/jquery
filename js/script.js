$(document).ready(function(){

	// hide
	$('#hide').click(function(){
		$('h2').fadeOut("3000");
	});

	// show
	$('#show').click(function(){
		$('h2').fadeIn("2000");
	});
	// toggle
	$('#toggle').click(function(){
		$('h2').fadeToggle("3000");
	});


	$('.panel').click(function(){
		$('.content').slideToggle(1000);
	});
    
    // dragable
	$( "#drag" ).draggable();

	// acordion
	$( "#accordion" ).accordion({
		collapsible: true
	});

	// drag and drop
	$( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // progressbar
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );



});



