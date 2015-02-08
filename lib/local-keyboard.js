var area = $( "#area" );
$( "#area" ).on("keydown", function(e) {
  console.log( "" );
  console.log( "e.metaKey: " + e.metaKey );
  console.log( "e.ctrlKey: " + e.ctrlKey );
  console.log( "e.altKey: " + e.altKey );

  if ((!e.metaKey && (!e.ctrlKey && e.altKey)) && e.keyCode == goog.events.KeyCodes.S) {
    console.log( "--- normal diacritics " + "letter '" + ((e.shiftKey) ? "Ś" : "ś") + "' --- " );
  }

  if ((e.metaKey || (e.ctrlKey && !e.altKey)) && e.keyCode == goog.events.KeyCodes.S) {
    console.log( "--- DO THE SAVE ACTION --- " );
    e.preventDefault();
  } 

  console.log( "Key '" + e.keyCode + "' pressed." );
});