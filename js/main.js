$( document ).ready( function()
{
  $( '#printBtn' ).click(
    function()
    {
      var sectionStatus = [ $( 'section#experience' ).attr( 'class' ),
        $( 'section#skills' ).attr( 'class' ),
        $( 'section#hobbies' ).attr( 'class' ) ], notOpen;

      $.each( sectionStatus,
        function( i, val ) {
          if ( val === 'close' ) {
            notOpen = true;
          }else {
            notOpen = false;
          }
        } );

      if ( notOpen === true ) {
        sweetAlert( {
        title: 'Warning',
        text: 'Open tabs before printing.',
        type: 'warning',
        confirmButtonColor: '#e75425' } );
      } else {
        window.print();
      }

    } );

    $( '#downloadBtn' ).click( function(){
        window.open( '../img/resume.pdf' );
    } );

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
