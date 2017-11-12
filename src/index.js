import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap';
import './index.css';

"use strict";

var content = {
  'bienvenue': {
    'en': 'TODO',
    'fr': 'Bienvenue chez Trust in Move',
    'de': 'TODO',
    'sp': 'TODO',
  },
  'construction': {
    'en': 'TODO',
    'fr': 'Ce site est en construction',
    'de': 'TODO',
    'sp': 'TODO',
  },
  'intro': {
    'en': 'TODO',
    'fr': 'Trust in Move accompagne les entreprises vers demain : internationalisation, export, efficacité commerciale, facilitation du changement. Parce' +
    ' que nous vivons dans un monde en mouvement et savoir en tirer bénéfice est une des clefs du succès.',
    'de': 'Trust in Move begleitet Unternehmen in die Welt von morgen: Internationalisierung, Export, Vertriebseffizienz, Veränderungsmanagement. Weil wir' +
    ' in einer Welt in Bewegung leben, und das Beste daraus zu ziehen führt uns zum Erfolg!',
    'sp': 'TODO'
  },
  'contact': {
    'en': 'TODO',
    'fr': 'Contactez-nous pour plus d’informations : contact@trustinmove.com',
    'de': 'Kontaktieren Sie uns für mehr Informationen: contact@trustinmove.com',
    'sp': 'TODO',
  }
};

var lang = 'en';

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
