var area = $( "#area" );
$( "#area" ).on("keydown", function(e) {
  console.log( "" );
  console.log( "e.metaKey: " + e.metaKey );
  console.log( "e.ctrlKey: " + e.ctrlKey );
  console.log( "e.altKey: " + e.altKey );

  var lang = window.navigator.userLanguage || window.navigator.language;

  if (LocalKeyboard.isLocalDiacritic(e) && lang == 'pl') {
    console.log( "--- normal PL diacritics => " + "letter '" + ((e.shiftKey) ? ("capital " + String.fromCharCode(e.keyCode)) : ("small " + String.fromCharCode(e.keyCode))) + " with accute" + "' --- " );
  }

  if (LocalKeyboard.isLocalDiacritic(e) && lang == 'de') {
    console.log( "--- normal DE diacritics => " + "letter with umlaut" + " --- " );
  }

  if ((e.metaKey || (e.ctrlKey && !e.altKey)) && e.keyCode == goog.events.KeyCodes.S) {
    console.log( "--- DO THE 'SAVE' ACTION --- " );
    e.preventDefault();
  } 

  if ((e.metaKey || (e.ctrlKey && !e.altKey)) && e.keyCode == goog.events.KeyCodes.N) {
    console.log( "--- DO THE 'NEW' ACTION --- " );
    e.preventDefault();
  } 

  console.log( "Key '" + e.keyCode + "' pressed." );
});