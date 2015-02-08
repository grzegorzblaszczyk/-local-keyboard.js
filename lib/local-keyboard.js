// Copyright 2015 local-keyboard.js Grzegorz Błaszczyk, goodylabs.com. All Rights Reserved.

var LocalKeyboard = {
  name: 'LocalKeyboard',
  
  _init: function() {
    common.log('info', 'Initializing local-keyboard.js');
    var lang = window.navigator.userLanguage || window.navigator.language;
  },

  isLocalDiacritic: function(e) {
    var lang = window.navigator.userLanguage || window.navigator.language;
    var langPrefix = lang.toUpperCase();
    if ( eval("this.is" + langPrefix + "Diacritic(e)") ) {
      return true;
    }
    return false;
  },

  isPLDiacritic: function(e) {
    var PL_DIACRITICS = [ 
      goog.events.KeyCodes.A, 
      goog.events.KeyCodes.C, 
      goog.events.KeyCodes.E, 
      goog.events.KeyCodes.L, 
      goog.events.KeyCodes.N, 
      goog.events.KeyCodes.O, 
      goog.events.KeyCodes.S, 
      goog.events.KeyCodes.Z 
    ];
    if ((!e.metaKey && (!e.ctrlKey && e.altKey))) {
      if ($.inArray( e.keyCode, PL_DIACRITICS ) != -1) {
        return true;
      }
    }
    return false;
  },

  isDEDiacritic: function(e) {
    var DE_DIACRITICS = [ 
      229
    ];
    if ((!e.metaKey && (!e.ctrlKey && e.altKey))) {
      if ($.inArray( e.keyCode, DE_DIACRITICS ) != -1) {
        return true;
      }
    }
    return false;
  }
}
