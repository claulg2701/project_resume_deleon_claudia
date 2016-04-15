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

/* Determine page layout in terms of view port*/

initialLayout();
$( window ).resize( initialLayout );

} );

function initialLayout() {
  if ( $( window ).width() > '1024' ) {
    $( '#education' ).removeClass( 'close' );
    $( '#education .bar .fa' ).removeClass( 'fa-plus' );
    $( '#education .bar .fa' ).addClass( 'fa-minus' );

  }else {
    $( '#education' ).addClass( 'close' );
    $( '#education .bar .fa' ).addClass( 'fa-plus' );
    $( '#education .bar .fa' ).removeClass( 'fa-minus' );
  }
}
