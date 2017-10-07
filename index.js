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
    'fr': 'Pellentesque fermentum ante sed nisi placerat convallis. Etiam id tempus est. Pellentesque dictum risus quis neque feugiat, ut suscipit nisi viverra. In aliquet dolor a elit pulvinar interdum. Donec fermentum ipsum vitae orci vehicula interdum. Ut egestas velit vehicula, lacinia justo quis, cursus quam. Proin accumsan leo augue, ut hendrerit tellus scelerisque a. Mauris ac posuere ipsum. Maecenas ex metus, porta et ipsum et, gravida pellentesque sem. Pellentesque porta cursus velit, vitae bibendum nulla. Vestibulum dignissim pulvinar pretium. Pellentesque scelerisque lectus vitae eros consequat, sit amet gravida orci vestibulum. Morbi facilisis sem vel porttitor efficitur. Pellentesque pharetra maximus augue, at scelerisque est egestas non.',
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
