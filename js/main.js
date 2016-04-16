$( document ).ready( function()
{

  /* Skills */
  function progress( percent, $element )
  {
    $element.find( 'div' ).animate( { width: percent + '%' }, 500 );
  }
  progress( 90, $( '#html' ) );
  progress( 80, $( '#css3' ) );
  progress( 50, $( '#javascript' ) );
  progress( 60, $( '#jquery' ) );
  progress( 90, $( '#photoshop' ) );
  progress( 95, $( '#illustrator' ) );
  progress( 85, $( '#indesign' ) );

  initialLayout();

  $( '.minimized' ).click(
    function() {
      $( this ).parent().parent().removeClass( 'close' ).addClass( 'open' );
      $( this ).remove();
  } );

} );

function initialLayout() {

    $( '#education' ).addClass( 'open' );
    $( '#education .bar button[name="button"]' ).addClass( 'maximized' );

  var sections = [ 'experience', 'skills', 'hobbies' ];
  $.each( sections, function( i, val ) {
    $( '#' + val ).addClass( 'close' );
    $( '#' + val + ' .bar button[name="button"]' ).addClass( 'minimized' );
  } );
}
