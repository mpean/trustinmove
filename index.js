"use strict";

var content = {
  'bienvenue': {
    'fr': 'Bienvenue Maxime en Français',
    'en': 'Welcome Maxime in English'
  },
  'texte': {
    'fr': 'Ceci est un texte.',
    'en': 'This is a text.'
  },
  'lorem': {
    'fr': 'Trust in Move accompagne les entreprises vers demain : internationalisation, export, efficacité commerciale, facilitation du changement. Parce que nous vivons dans un monde en mouvement et savoir en tirer bénéfice est une des clefs du succès. ',
    'en': 'Mauris vitae bibendum arcu. Donec et mi rutrum, euismod felis vel, varius sem. Phasellus efficitur rhoncus purus in suscipit. Integer quis blandit est, eu eleifend est. Sed molestie purus ex, sed sagittis leo aliquam quis. Aenean et tincidunt orci, vel efficitur mi. Vestibulum placerat mi diam, eu lacinia augue posuere et. Maecenas dictum ullamcorper aliquam. Sed non ligula quam. Suspendisse libero augue, ullamcorper ac placerat vitae, dignissim ac mauris.'
  }
};

var lang = 'en';
displayLanguage(lang);

function displayLanguage (language) {
  lang = language;

  for(var item in content){
    setText(item);
  }
}

function setText (id) {
  document.getElementById(id).innerHTML = content[id][lang];
}
