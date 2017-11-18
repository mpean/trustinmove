import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

"use strict";

let content = {
  'bienvenue': {
    'en': 'Welcome to Trust in Move!',
    'fr': 'Bienvenue chez Trust in Move !',
    'de': 'Willkommen bei Trust in Move!',
    'sp': 'TODO',
  },
  'intro': {
    'en': 'Trust in Move helps organizations in moving towards future: internationalization, export, sales efficiency, change management.<br><br>Because we' +
    ' live' +
    ' in ' +
    'a moving world and enjoying the most of it leads to success!',
    'fr': 'Trust in Move accompagne les entreprises vers demain: internationalisation, export, efficacité commerciale, facilitation du' +
    ' changement.<br><br>Parce' +
    ' que nous vivons dans un monde en mouvement et savoir en tirer bénéfice est une des clefs du succès.',
    'de': 'Trust in Move begleitet Unternehmen in die Welt von morgen: Internationalisierung, Export, Vertriebseffizienz, Veränderungsmanagement.<br><br>Weil' +
    ' wir' +
    ' in einer Welt in Bewegung leben, und das Beste daraus zu ziehen führt uns zum Erfolg!',
    'sp': 'TODO'
  },
  'contact': {
    'en': 'Contact us for more details:',
    'fr': 'Contactez-nous pour plus d’informations :',
    'de': 'Kontaktieren Sie uns für mehr Informationen:',
    'sp': 'TODO',
  }
};

let lang = 'en';

function displayLanguage (language) {
  lang = language;

  for (var item in content) {
    setText(item);
  }
}

window.displayLanguage = displayLanguage;

displayLanguage(lang);

function setText (id) {
  document.getElementById(id).innerHTML = content[ id ][ lang ];
}
