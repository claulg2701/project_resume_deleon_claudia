$( document ).ready( function() {

function progress( percent, $element )
{
  var spaces = $element.width() - $element.text().length;
  console.log( spaces );
  $element.find( 'div' ).animate( { width: percent + '%' }, 500 );
}

  progress( 90, $( '#html' ) );
  progress( 80, $( '#css3' ) );
  progress( 50, $( '#javascript' ) );
  progress( 60, $( '#jquery' ) );
  progress( 90, $( '#photoshop' ) );
  progress( 95, $( '#illustrator' ) );
  progress( 85, $( '#indesign' ) );
} );
