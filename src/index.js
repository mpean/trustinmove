import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

"use strict";

let content = {
  "acceuilTitle": {
    "en": "Why Trust in Move?",
    "fr": "Pourquoi Trust in Move ?",
    "de": "Warum Trust in Move?",
    "sp": "Pourquoi Trust in Move ?",
  },
  "acceuilTexte1": {
    "en": "Because we live in a moving world, enjoying the most of it leads to success.<br>That is why Trust in Move helps companies to move towards tomorrow: internationalisation, export, sales efficiency, change management.",
    "fr": "Parce que nous vivons dans un monde en mouvement et que savoir en tirer bénéfice est une des clefs du succès.<br>Trust in Move accompagne donc les entreprises vers demain : internationalisation, export, efficacité commerciale, facilitation du changement.",
    "de": "In unserer ständig bewegenden Welt, Vorteil davon ziehen zu können, führt zum Erfolg.<br>Deshalb hilft Trust in Move Betriebe, sich auf dem Weg Richtung Morgen zu machen: Internationalisierung, Export, Vertriebseffizienz, Veränderungserleichterung.",
    "sp": "Parce que nous vivons dans un monde en mouvement et que savoir en tirer bénéfice est une des clefs du succès.<br>Trust in Move accompagne donc les entreprises vers demain : internationalisation, export, efficacité commerciale, facilitation du changement."
  },
  "acceuilQuestion": {
    "en": "How can Trust in Move help me?",
    "fr": "Que peut Trust in Move pour moi ?",
    "de": "Wie kann Trust in Move mir helfen?",
    "sp": "Que peut Trust in Move pour moi ?"
  },
  "acceuilTexte2": {
    "en": "Develop my business worldwide ",
    "fr": "Développer mon entreprise à l’international",
    "de": "Mein Geschäft im Ausland zu entwickeln",
    "sp": "Développer mon entreprise à l’international"
  },
  "acceuilTexte3": {
    "en": "Training in international specifics",
    "fr": "Formation à l’internationalisation des PME",
    "de": "Schulung in Besonderheiten des Aussenhandels",
    "sp": "Formation à l’internationalisation des PME"
  },
  "acceuilTexte4": {
    "en": "Change management",
    "fr": "Accompagnement au changement",
    "de": "Veränderungserleichterung",
    "sp": "Accompagnement au changement"
  },

  "a1Title": {
    "en": "Export consultancy",
    "fr": "Conseil stratégie et opérationnel export",
    "de": "Exportberatung",
    "sp": "Conseil stratégie et opérationnel export"
  },
  "a1Texte1": {
    "en": "Trust in Move makes France easy for you.<br><br>For <strong>strategic advices</strong>, audit or <strong>operational support</strong> on your markets, externalisation of your sales team or to help you <strong>choosing the perfect local partner in France</strong> (with both technical and sales capabilities to develop your business), Trust in Move is here for you.",
    "fr": "Trust in Move vous facilite l'international.<br><br>Que ce soit pour du <strong>conseil stratégique</strong> ou un audit, de <strong>l'appui opérationnel</strong> sur vos marchés, de l'externalisation de votre équipe commerciale ou pour vous aider à <strong>choisir le bon partenaire à l'étranger</strong> (qui allie compétences techniques et efficacité commerciale), Trust in Move est là pour vous.",
    "de": "Trust in Move macht Frankreich einfach für Sie.<br><br>Für <strong>strategische interkulturelle Beratungen</strong>, Audit oder <strong>operative Unterstützung auf Ihre Märkte</strong>, Externalisierung von Ihrer Vertriebsteam, oder um Ihnen dabei zu helfen, den perfekten Geschäftspartner in Frankreich (stark sowohl in Technik als auch Vertrieb) zu finden, Trust in Move ist für Sie da.",
    "sp": "Trust in Move vous facilite l'international.<br><br>Que ce soit pour du <strong>conseil stratégique</strong> ou un audit, de <strong>l'appui opérationnel</strong> sur vos marchés, de l'externalisation de votre équipe commerciale ou pour vous aider à <strong>choisir le bon partenaire à l'étranger</strong> (qui allie compétences techniques et efficacité commerciale), Trust in Move est là pour vous."
  },
  "a1Texte2": {
    "en": "Based in Western France (vibrant city of Nantes, close to Paris, Brittany and Atlantic Ocean), Trust in Move works for international small and medium industries focused on <strong>technical niche markets</strong>.",
    "fr": "Basé à Nantes, Trust in Move travaille pour des <strong>PME industrielles</strong> françaises qui cherchent à s'internationaliser (Europe, Amériques, Asie, Moyen Orient…) et aide aussi des entreprises étrangères à trouver les bons partenaires en France.",
    "de": "Basiert in Westfrankreich (in der lebhaften Stadt von Nantes, nah von Paris, der Bretagne, und auch der Atlantischen Küste), Trust in Move arbeitet für auf Nischenmärkten tätige internationale kleine und mittlere Betriebe.",
    "sp": "Basé à Nantes, Trust in Move travaille pour des <strong>PME industrielles</strong> françaises qui cherchent à s'internationaliser (Europe, Amériques, Asie, Moyen Orient…) et aide aussi des entreprises étrangères à trouver les bons partenaires en France."
  },
  "a1Texte3": {
    "en": "Our added value is our capability to push commercially your technical products. For this you can make use of our triple competence: technical, sales and intercultural.<br>We work for you when you need it and at your path.",
    "fr": "Notre plus-value est l'accompagnement à la valorisation commerciale de produits techniques.<br>Nous intervenons quand vous le décidez et à votre rythme.",
    "de": "Unser Mehrwert liegt in unserer Fähigkeit, Ihnen dabei zu helfen, am besten Ihre technischen Produkte zu bewirtschaften. Unsere dreifache Kompetenz: Technik, Vertrieb und International steht für Sie dafür zur Verfügung.<br>Wir arbeiten für Sie, wenn Sie wollen und an Ihrem Rhythmus.",
    "sp": "Notre plus-value est l'accompagnement à la valorisation commerciale de produits techniques.<br>Nous intervenons quand vous le décidez et à votre rythme."
  },
  "a1Contact": {
    "en": "Contact us now to know more about how we can help you!",
    "fr": "Contactez-nous aujourd'hui pour en savoir plus !",
    "de": "Kontaktieren Sie uns heute!",
    "sp": "Contactez-nous aujourd'hui pour en savoir plus !"
  },

  "a2Title": {
    "en": "Training into international ",
    "fr": "Formation à l'international",
    "de": "Schulung ins International",
    "sp": "Formation à l'international"
  },
  "a2Texte1": {
    "en": "Trust in Move trains in all specifics of international trade: <strong>negotiation</strong> in <strong>multicultural</strong> context, ex/import administrative techniques, sales management, <strong>export</strong> specifics…",
    "fr": "Trust in Move forme dans tous les aspects spécifiques de la vente à l'international : <strong>négociation</strong> dans un contexte <strong>interculturel</strong>, techniques administratives export, management commercial, fondamentaux de <strong>l'export</strong>…",
    "de": "Trust in Move schult in allen Hinsichten des Aussenhandels: <strong>Verhandlung</strong> in <strong>multikultureller</strong> Umgebung, Ex-/Importverwaltung, Vertriebsmanagement, <strong>Exportsbesonderheiten</strong>…",
    "sp": "Trust in Move forme dans tous les aspects spécifiques de la vente à l'international : <strong>négociation</strong> dans un contexte <strong>interculturel</strong>, techniques administratives export, management commercial, fondamentaux de <strong>l'export</strong>…"
  },
  "a2Texte2": {
    "en": "Our <strong>customized</strong> training programs are dedicated for all learners who work in an international environment: executive managers, sales persons, as well as project managers, technicians or engineers…",
    "fr": "Nos formations <strong>sur mesure</strong> s'adressent à tous les publics d'apprenants qui travaillent dans un contexte international : commerciaux, managers, administratifs, chefs de projets…",
    "de": "Unsere <strong>kundenspezifischen</strong> Schulungsprogramme sind allen in internationaler Umgebung tätigen Fachleute gewidmet: Führungskräften, Vertriebsleute, sowie Projektleitern, Ingenieuren oder Technikern …",
    "sp": "Nos formations <strong>sur mesure</strong> s'adressent à tous les publics d'apprenants qui travaillent dans un contexte international : commerciaux, managers, administratifs, chefs de projets…"
  },
  "a2Texte3": {
    "en": "Keen on <strong>innovative</strong> teaching methods (blended learning, role play and learning games…) and reviewing all supports regularly in order to keep being on the cutting edge, Trust in Move develops high quality training sessions for its customers.",
    "fr": "Adepte de modalités pédagogiques <strong>innovantes</strong> (blended learning, jeux pédagogiques, …) et revisitant régulièrement ses supports pour toujours être à la pointe, Trust in Move développe des formations de qualité pour ses clients.",
    "de": "Fan von <strong>innovativen</strong> Schulungsarten (Blended Learning, Spielpädagogik, Rollenspiel…) und ständig dabei, ihre Schulungen auf dem neuesten Stand zu bringen, Trust in Move entwickelt hochwertige Schulungen für ihre Kunden.",
    "sp": "Adepte de modalités pédagogiques innovantes (blended learning, jeux pédagogiques, …) et revisitant régulièrement ses supports pour toujours être à la pointe, Trust in Move développe des formations de qualité pour ses clients."
  },
  "a2Texte4": {
    "en": "All our services can be 100% provided in English, French, German or Spanish.",
    "fr": "Toutes nos prestations peuvent être réalisées entièrement en Français, Anglais, Allemand ou Espagnol.",
    "de": "Alle unsere Dienstleistungen können 100% auf Deutsch, Englisch, Französisch, oder Spanisch geleistet werden.",
    "sp": "Toutes nos prestations peuvent être réalisées entièrement en Français, Anglais, Allemand ou Espagnol."
  },
  "a2Contact": {
    "en": "Contact us now to know more about how we can help you!",
    "fr": "Contactez-nous dès aujourd'hui pour en savoir plus !",
    "de": "Kontaktieren Sie uns heute!",
    "sp": "Contactez-nous dès aujourd'hui pour en savoir plus !"
  },

  "a3Title": {
    "en": "Change management",
    "fr": "Accompagnement au changement",
    "de": "Veränderungserleichterung",
    "sp": "Accompagnement au changement"
  },
  "a3Texte1": {
    "en": "Because internationalisation means often <strong>deep changes</strong> in organisations, Trust in Move has developed solutions of change management.",
    "fr": "Parce que l'international nécessite parfois des <strong>transformations en profondeur</strong> des organisations, Trust in Move a développé des solutions d'accompagnement au changement.",
    "de": "Da Internationalisierung häufig zu tiefen Organisationsveränderung führt, hat Trust in Move spezifische Lösungen entwickelt, um diese Veränderung zu begleiten und vereinfachen.",
    "sp": "Parce que l'international nécessite parfois des <strong>transformations en profondeur</strong> des organisations, Trust in Move a développé des solutions d'accompagnement au changement."
  },
  "a3Texte2": {
    "en": "With different techniques of <strong>collective intelligence</strong>, meeting facilitation, co-development, or improvisation theater, Trust in Move helps your teams to change so that your strategy for tomorrow gets true already today.",
    "fr": "A l'aide de différentes solutions d'<strong>intelligence collective</strong>, de facilitation de réunion, de co-développement, ou de techniques d'improvisation théâtrale, Trust in Move aide vos équipes à changer pour que votre stratégie pour demain devienne réalité dès aujourd'hui.",
    "de": "Dank verschiedenen Techniken wie <strong>Kollektive Intelligenz</strong>, Besprechungserleichterung, oder Improtheater, hilft Trust in Move Ihren Mitarbeitern bei der Veränderung, so dass Ihre Strategie für Morgen schon heute sich bauen lässt.",
    "sp": "A l'aide de différentes solutions d'<strong>intelligence collective</strong>, de facilitation de réunion, de co-développement, ou de techniques d'improvisation théâtrale, Trust in Move aide vos équipes à changer pour que votre stratégie pour demain devienne réalité dès aujourd'hui."
  },
  "a3Texte3": {
    "en": "Based in Western France (vibrant city of Nantes, close to Paris, Brittany and Atlantic Ocean), Trust in Move works for any kind of organisation.",
    "fr": "Basé à Nantes, Trust in Move travaille pour tout type de structures en France ou à l'étranger.",
    "de": "Basiert in Westfrankreich (pulsierende Stadt von Nantes, nah von Paris, Britanie und Atlantischen Küste), arbeitet Trust in Move für allen in Europa oder weltweit ansässigen Organisationen.",
    "sp": "Basé à Nantes, Trust in Move travaille pour tout type de structures en France ou à l'étranger."
  },
  "a3Texte4": {
    "en": "Our added value is based on <strong>listening</strong> to your specific project and your team in order to make one matching with the reality of the others.",
    "fr": "Notre plus-value est l'<strong>écoute</strong> de votre projet et de vos équipes pour mieux faire coïncider l'un avec la réalité de celles-ci.",
    "de": "Unser Mehrwert liegt in dem sorgfältigen <strong>Zuhören</strong> von einerseits Ihrer spezifischen Vision, andererseits Ihren Mitarbeitern, um die erste mit der Wirklichkeit der Anderen zusammenpassen zu lassen.",
    "sp": "Notre plus-value est l'<strong>écoute</strong> de votre projet et de vos équipes pour mieux faire coïncider l'un avec la réalité de celles-ci."
  },
  "a3Texte5": {
    "en": "One shot or long-term service, you decide how we help you.",
    "fr": "Accompagnement ponctuel ou sur la durée, nous intervenons quand vous le décidez et à votre rythme.",
    "de": "Punktuelle oder langdauernde Dienstleistung: Sie entscheiden, wie wir Ihnen helfen.",
    "sp": "Accompagnement ponctuel ou sur la durée, nous intervenons quand vous le décidez et à votre rythme."
  },
  "a3Contact": {
    "en": "Contact us now to know more about how we can help you!",
    "fr": "Contactez-nous dès aujourd'hui pour en savoir plus !",
    "de": "Kontaktieren Sie uns heute!",
    "sp": "Contactez-nous dès aujourd'hui pour en savoir plus !"
  },

  "qTitle": {
    "en": "Who are we?",
    "fr": "Qui sommes-nous ?",
    "de": "Wer sind wir?",
    "sp": "Qui sommes-nous ?"
  },
  "qTexte1": {
    "en": "Trust in Move is a <strong>freelance</strong> consulting company founded in 2017 by Sylvie Péan in Nantes to help small and medium industries to become international.",
    "fr": "Trust in Move est un cabinet <strong>indépendant</strong> de conseil fondé en 2017 par Sylvie Péan à Nantes pour aider des <strong>PME industrielles</strong> à s'<strong>internationaliser</strong>.",
    "de": "Trust in Move ist eine 2017 von Sylvie Péan gegründete selbstständige Unternehmensberatung, die kleinen und mittleren Betrieben, dabei hilft, sich weltweit zu entwickeln.",
    "sp": "Trust in Move est un cabinet <strong>indépendant</strong> de conseil fondé en 2017 par Sylvie Péan à Nantes pour aider des <strong>PME industrielles</strong> à s'<strong>internationaliser</strong>."
  },
  "qTexte2": {
    "en": "Trust in Move is more than 17 years of industrial experience in international sales (mostly Europe, Asia, North and South America) of machines and technical products in several industries: plastics, fans, welding, chemistry, food industry…",
    "fr": "Trust in Move, c'est plus de 17 ans d'expérience industrielle dans la commercialisation à l'international (Europe, Asie, Amériques) de machines et produits de niche technique (dans la plasturgie, la ventilation industrielle, l'agroalimentaire, la chimie, le soudage…) pour les PME.",
    "de": "Trust in Move ist mehr als 17 Jahre Erfahrung im weltweiten Vertrieb von Maschinen und technischen Produkten in verschiedenen Industrien: Kunststoff-, Ventilatoren-, Schweiss-, Chemie-, Lebensmittelindustrie...",
    "sp": "Trust in Move, c'est plus de 17 ans d'expérience industrielle dans la commercialisation à l'international (Europe, Asie, Amériques) de machines et produits de niche technique (dans la plasturgie, la ventilation industrielle, l'agroalimentaire, la chimie, le soudage…) pour les PME."
  },
  "qTexte3": {
    "en": "But why training and consultancy today?",
    "fr": "Mais pourquoi la formation et le conseil au juste ?",
    "de": "Aber warum Beratung und Schulung heute?",
    "sp": "Mais pourquoi la formation et le conseil au juste ?"
  },
  "qTexte4": {
    "en": "Being a <strong>multilingual Engineer</strong> (English, French, German and Spanish), Sylvie has been very quickly put in position to sell machines worldwide. But international sales negotiation or export contracts need some solid and specific expertise. This is exactly what Sylvie shares today with Trust in Move's customers after thorough training and experience.",
    "fr": "<strong>Ingénieur</strong> parlant 4 langues, Sylvie a été mise très vite en situation de vendre des machines à l'international. Sauf que la négociation commerciale à l'international ou les contrats export requièrent une expertise spécifique. C'est justement cela que, riche de son expérience terrain consolidée par de nombreuses formations dans ces domaines, Sylvie transmet aujourd'hui à ses clients.",
    "de": "Als <strong>mehrsprachigen Ingenieurin</strong> (Deutsch, Englisch, Französisch und Spanisch), war Sylvie sehr schnell in Position gebracht, Maschinen weltweit zu verkaufen. Aber internationale Verhandlung oder Exportsverträge brauchen ein spezifisches Know-How. Genau das teilt heute Sylvie mit Trust in Moves Kunden.",
    "sp": "<strong>Ingénieur</strong> parlant 4 langues, Sylvie a été mise très vite en situation de vendre des machines à l'international. Sauf que la négociation commerciale à l'international ou les contrats export requièrent une expertise spécifique. C'est justement cela que, riche de son expérience terrain consolidée par de nombreuses formations dans ces domaines, Sylvie transmet aujourd'hui à ses clients."
  },
  "qContact": {
    "en": "To know more about Sylvie",
    "fr": "Pour en savoir plus sur Sylvie",
    "de": "Um mehr über Sylvie zu erfahren",
    "sp": "Pour en savoir plus sur Sylvie"
  },
  "qTexte5": {
    "en": "go to LinkedIn",
    "fr": "allez sur LinkedIn",
    "de": "gehen Sie auf LinkedIn",
    "sp": "allez sur LinkedIn"
  },
  "qTexte6": {
    "en": "or contact her!",
    "fr": "ou contactez-la !",
    "de": "oder kontaktieren Sie sie!",
    "sp": "ou contactez-la !"
  },

  "rTitle": {
    "en": "Our references",
    "fr": "Nos références",
    "de": "Unsere Referenzen",
    "sp": "Nos références"
  },
  "rTexte1": {
    "en": "They already Trust in Move:",
    "fr": "Ils nous font confiance :",
    "de": "Sie vertrauen uns schon:",
    "sp": "Ils nous font confiance :"
  },
  "rTexte2": {
    "en": "Trust in Move is a member of or participates to:",
    "fr": "Trust in Move est membre ou participe à :",
    "de": "Trust in Move ist Mitglied oder nimmt zu Folgenden teil:",
    "sp": "Trust in Move est membre ou participe à :"
  },
  "rContact": {
    "en": "Contact us now to know more about how we can help you!",
    "fr": "Contactez nous dès aujourd’hui pour en savoir plus",
    "de": "Kontaktieren Sie uns heute!",
    "sp": "Contactez nous dès aujourd’hui pour en savoir plus"
  },

  "cTitle": {
    "en": "Contact us!",
    "fr": "Contactez-nous !",
    "de": "Kontaktieren Sie uns!",
    "sp": "Contactez-nous !"
  },
  "cTexte1": {
    "en": "Sylvie Péan founder of Trust in Move",
    "fr": "Sylvie Péan fondatrice de Trust in Move",
    "de": "Sylvie Péan Gründerin von Trust in Move",
    "sp": "Sylvie Péan fondatrice de Trust in Move"
  },
  "cTexte2": {
    "en": "Contact us now to know more about how we can help you:",
    "fr": "Contactez-nous dès aujourd'hui pour plus d’informations :",
    "de": "Kontaktieren Sie uns heute, um zu erfahren, wie wir Ihnen helfen können:",
    "sp": "Contactez-nous dès aujourd'hui pour plus d’informations :"
  },
  "cTexte3": {
    "en": " 44300 Nantes - France",
    "fr": " 44300 Nantes - France",
    "de": " 44300 Nantes - France",
    "sp": " 44300 Nantes - France"
  },

  "lTitle": {
    "en": "Legal Notices",
    "fr": "Mentions légales",
    "de": "Rechtliche Hinweise",
    "sp": "Mentions légales"
  },
  "lTexte1": {
    "en": "Administrative status and invoicing",
    "fr": "Statut administratif et facturation",
    "de": "Verwaltung und Status",
    "sp": "Statut administratif et facturation"
  },
  "lTexte2": {
    "en": "Trust in Move belongs to the cooperative society of freelance workers Ouvre-Boites 44 who manages all administrative work of its activity and who is based at following address: SCOP Ouvre-Boites 44, 8 Avenue des Thébaudières, 44800 St Herblain, France, tel : +33228216510.",
    "fr": "Trust in Move est membre de la coopérative d'activité et d'emploi Ouvre-Boites 44 qui assure la gestion administrative de son activité et dont les coordonnées sont : SCOP Ouvre-Boites 44, 8 Avenue des Thébaudières, 44800 St Herblain, France, tel : +33228216510.",
    "de": "Trust in Move ist Mitglied der Selbstständigengenossenschaft Ouvre-Boites 44, die die Verwaltung der Aktivität erledigt, und die folgende Adresse hat: SCOP Ouvre-Boites 44, 8 Avenue des Thébaudières, 44800 St Herblain, Frankreich, tel : +33228216510.",
    "sp": "Trust in Move est membre de la coopérative d'activité et d'emploi Ouvre-Boites 44 qui assure la gestion administrative de son activité et dont les coordonnées sont : SCOP Ouvre-Boites 44, 8 Avenue des Thébaudières, 44800 St Herblain, France, tel : +33228216510."
  },
  "lTexte3": {
    "en": "Ouvre-Boites 44 is a French S.C.O.P S.A with variable capital, registered at RCS in NANTES under N° 449.989.573 - VAT N°: FR40449989573 - SIRET 44998957300026.",
    "fr": "Ouvre-Boites 44 est une S.C.O.P S.A à capital variable, inscrite au RCS de NANTES sous le N° 449.989.573 - N° TVA : FR40449989573 - SIRET 44998957300026.",
    "de": "Ouvre-Boites 44 ist eine Französische S.C.O.P S.A mit veränderlichem Grundkapital  in NANTES unter Nr 449.989.573 registriert VAT Nr: FR40449989573 - SIRET 44998957300026.",
    "sp": "Ouvre-Boites 44 est une S.C.O.P S.A à capital variable, inscrite au RCS de NANTES sous le N° 449.989.573 - N° TVA : FR40449989573 - SIRET 44998957300026."
  },
  "lTexte4": {
    "en": "All invoices will be issued under the name of Ouvre-Boites 44. Sylvie Péan is the sole accountable for the proper execution of the offered services.",
    "fr": "Les factures seront en conséquence établies au nom de Ouvre-Boites 44. Sylvie Péan est seule responsable de la bonne exécution de sa prestation et des services qu'elle propose.",
    "de": "Alle Rechnungen werden unter der Namen Ouvre-Boites 44 erzeugt. Sylvie Péan verantwortet allein für die  Qualität der angeboten Dienstleistungen.",
    "sp": "Les factures seront en conséquence établies au nom de Ouvre-Boites 44. Sylvie Péan est seule responsable de la bonne exécution de sa prestation et des services qu'elle propose."
  },
  "lTexte5": {
    "en": "For more details",
    "fr": "Plus d’informations",
    "de": "Mehr darüber erfahren",
    "sp": "Plus d’informations"
  },
  "lTexte6": {
    "en": "Training activity",
    "fr": "Activité formation",
    "de": "Schulungsaktivität",
    "sp": "Activité formation"
  },
  "lTexte7": {
    "en": "Training registration number: 52 44 04429 44 (Région Pays de la Loire).",
    "fr": "N° de déclaration d'activité formation : 52 44 04429 44 enregistré auprès du Préfet de la Région Pays de la Loire. Cet enregistrement ne vaut pas agrément de l'Etat. Organisme de formation enregistré au sein du Datadock.",
    "de": "Schulungsregistrierungsnummer: 52 44 04429 44 (Région Pays de la Loire).",
    "sp": "N° de déclaration d'activité formation : 52 44 04429 44 enregistré auprès du Préfet de la Région Pays de la Loire. Cet enregistrement ne vaut pas agrément de l'Etat. Organisme de formation enregistré au sein du Datadock."
  },
  "lTexte8": {
    "en": "Website presentation",
    "fr": "Présentation du site",
    "de": "Webseite",
    "sp": "Présentation du site"
  },
  "lTexte9": {
    "en": "<strong>Owner, creator, responsible of this website content:</strong> Sylvie Péan – boulevard des Poilus, 44300 Nantes, France",
    "fr": "<strong>Propriétaire, créateur et reponsable de publication du site:</strong> Sylvie Péan – boulevard des Poilus, 44300 Nantes, France",
    "de": "<strong>Eigentümerin, Autorin und für den Inhalt Verantwortliche:</strong> Sylvie Péan – boulevard des Poilus, 44300 Nantes, France",
    "sp": "<strong>Propriétaire, créateur et reponsable de publication du site:</strong> Sylvie Péan – boulevard des Poilus, 44300 Nantes, France"
  },
  "lTexte10": {
    "en": "<strong>Webmaster:</strong> Maxime Péan",
    "fr": "<strong>Webmaster:</strong> Maxime Péan",
    "de": "<strong>Webmaster:</strong> Maxime Péan",
    "sp": "<strong>Webmaster:</strong> Maxime Péan"
  },
  "lTexte11": {
    "en": "<strong>Hosted by:</strong> HostPapa – 68 King William Street London EC4N 7DZ United Kingdom",
    "fr": "<strong>Hébergeur:</strong> HostPapa – 68 King William Street London EC4N 7DZ United Kingdom",
    "de": "<strong>WebHosting:</strong> HostPapa – 68 King William Street London EC4N 7DZ United Kingdom",
    "sp": "<strong>Hébergeur:</strong> HostPapa – 68 King William Street London EC4N 7DZ United Kingdom"
  },
  "lTexte12": {
    "en": "Intellectual property and credits",
    "fr": "Propriété intellectuelle et crédits",
    "de": "Urheberrecht",
    "sp": "Propriété intellectuelle et crédits"
  },
  "lTexte13": {
    "en": "Sylvie Péan owns Trust in Move trademark, registered at INPI on 12th February 2018 under n°18 4 427 868 and registered in classes n°35, 41 and 42.",
    "fr": "Sylvie Péan est propriétaire de la marque Trust in Move, déposée à l'INPI le 12 février 2018 sous le N° 18 4 427 868 et enregistrée dans les classes N° 35, 41 et 42.",
    "de": "Sylvie Péan besitzt Trust in Move Marke, registriert bei INPI am 12. Februar 2018 unter Nr 18 4 427 868 und in Klassen Nr 35, 41 und 42.",
    "sp": "Sylvie Péan est propriétaire de la marque Trust in Move, déposée à l'INPI le 12 février 2018 sous le N° 18 4 427 868 et enregistrée dans les classes N° 35, 41 et 42."
  },
  "lTexte14": {
    "en": "Website domain name trustinmove.com belongs to Sylvie Péan.",
    "fr": "Le nom de domaine trustinmove.com appartient à Sylvie Péan.",
    "de": "Webseitenname trustinmove.com gehört zu Sylvie Péan.",
    "sp": "Le nom de domaine trustinmove.com appartient à Sylvie Péan."
  },
  "lTexte15": {
    "en": "Photo credit: Sylvie Cordenner - Couteau suisse production",
    "fr": "Crédit photos : Sylvie Cordenner - Couteau suisse production",
    "de": "Foto : Sylvie Cordenner - Couteau suisse production",
    "sp": "Crédit photos : Sylvie Cordenner - Couteau suisse production"
  },
  "lTexte16": {
    "en": "Logo: Thank you Frédéric Bernier – Kumorfos",
    "fr": "Logo : merci à Frédéric Bernier – Kumorfos",
    "de": "Logo : Danke Frédéric Bernier – Kumorfos",
    "sp": "Logo : merci à Frédéric Bernier – Kumorfos"
  },
  "lTexte17": {
    "en": "Any total or partial representation or reproduction, translation, adaptation or transformation of this site and its contents by whomever, without the formal permission of Sylvie Péan, is forbidden.",
    "fr": "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Sylvie Péan.",
    "de": "Jegliche (auch partielle) Darstellung oder Abbildung, Übersetzung, Anpassung oder Veränderung dieser Webseite ohne schriftliches Erlaubnis durch Sylvie Péan wird untersagt.",
    "sp": "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Sylvie Péan."
  },
  "lTexte18": {
    "en": "Applicable law",
    "fr": "Droit applicable et attribution de juridiction",
    "de": "Anwendbarer Recht",
    "sp": "Droit applicable et attribution de juridiction"
  },
  "lTexte19": {
    "en": "Any disputes relating to the use of www.trustinmove.com website shall be subject to French law. The user recognizes the exclusive jurisdiction of the courts in Nantes, France.",
    "fr": "Tout litige en relation avec l'utilisation du site www.trustinmove.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Nantes, France.",
    "de": "Alle Streitigkeiten zur Anwendung von www.trustinmove.com Webseite unabhängig vom Standort des Nutzers, unterliegen dem französischen Gesetz und der Gerichtsbarkeit von Nantes, Frankreich.",
    "sp": "Tout litige en relation avec l'utilisation du site www.trustinmove.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Nantes, France."
  },
};

let lang = "fr";

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
