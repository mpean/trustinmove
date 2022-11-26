import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

"use strict";

let content = {
  "acceuilPunshLine": {
    "fr": "Osez – Vendez – Souriez !"
  },
  "acceuilRelationsHumaines": {
    "fr": "La Vente c'est avant tout des relations humaines... autant y mettre de la joie !"
  },
  "acceuilVentePlaisir": {
    "fr": "La vente peut être un vrai plaisir tout en étant efficace et Trust in Move accompagne pour cela des équipes technico-commerciales, des responsables commerciaux et des indépendants comme par exemple :"
  },
  "responsablesCommerciauxTitle": {
    "fr": "Responsables commerciaux"
  },
  "equipeCommercialeEssoufle": {
    "fr": "Vous sentez que votre équipe commerciale s’essouffle ?​"
  },
  "seConcentrerPilotage": {
    "fr": "Vous aimeriez ne pas avoir à intervenir au quotidien sur de l’opérationnel et vous concentrer sur le pilotage de l’activité commerciale ?​"
  },
  "developperNouveauSecteur": {
    "fr": "Vous aimeriez développer vos ventes sur un nouveau secteur ou tout simplement améliorer vos marges sur votre marché actuel ?​"
  },
  "jePeuxVousAider": {
    "fr": "Je peux vous aider !​"
  },
  "forte15ansExperience": {
    "fr": "Forte de plus de 15 ans d’expérience en vente de produits et de services techniques en France et à l’international, je suis experte du process de vente conseil. Rompue aux échanges avec des grands groupes comme avec des TPE, je vous partage mon savoir-faire commercial acquis dans des domaines industriels aussi divers que la plasturgie, la ventilation, l’agro-alimentaire ou le soudage.​"
  },
  "jeVousAccompagne": {
    "fr": "Je vous accompagne pour que votre équipe vende mieux : en adoptant réellement une posture de conseil du client tout en valorisant ce service de façon juste, vos technico-commerciaux assureront la pérennité et le développement de votre activité.​"
  },
  "ilEnParleMieuxQueMoi": {
    "fr": "Il en parle mieux que moi : «  J'ai confié mon équipe de ventes (responsables commerciaux en région & ingénieurs d'application) à Sylvie sur 2 sessions de 2 jours à 1 mois d'intervalle. Préparation très pro et très structurée, supports variés et intéressants, et animation au top avec toute l'énergie de Sylvie qui a pratiqué la vente technique pendant 17 ans... et ça change tout! On est dans le concret, dans la réalité de la vente technique. Les participants sont ravis, on apprend et on renforce l'esprit d'équipe. Je recommande vivement! » François Directeur de filiale France - 2022​​"
  },
  "technicauxCommerciauxTitle": {
    "fr": "Technico-commerciaux​"
  },
  "passerExpertTechniqueCommercial": {
    "fr": "Vous venez de passer d’un rôle d’expert technique à celui de commercial ?​"
  },
  "vousSavezConseillerVosClients": {
    "fr": "Vous savez très bien conseiller vos clients mais peinez à transformer le conseil en vente ?​​"
  },
  "duMalAOrganiserVotreDemarche": {
    "fr": "Vous avez du mal à organiser votre démarche commerciale pour qu’elle soit réellement efficace ? ​​"
  },
  "tousLaCapaciteAVendre": {
    "fr": "Mon parcours m’a enseigné qu’on a tous la capacité à vendre et qu’il suffit de réveiller le commercial qui sommeille en nous !​​​"
  },
  "formationsCommercialesQueJePropose": {
    "fr": "Les formations commerciales que je propose permettent donc à des experts de devenir des vendeurs, tout en restant eux-mêmes et en y prenant du plaisir.​​"
  },
  "ecoutezLesIlsEnParlent": {
    "fr": "D’ailleurs écoutez-les, ils en parlent mieux que moi :​​"
  },
  "excellenteFormatriceTechnique": {
    "fr": "Sylvie est une excellente formatrice en technique de vente, je la recommande. N'hésitez pas et faites lui confiance.​ Merci à toi Sylvie.​ Guillaume, technicocommercial itinérant formé en 2020"
  },
  "formatriceAuTop": {
    "fr": "Une formatrice au top! Dynamique, souriante et qui a toujours des exemples concrets liés à son passé professionnel. ​Les deux formations reçues liées à la vente m'ont vraiment permis de découvrir de nouvelles techniques. » Thomas technicocommercial itinérant formé en 2020 et 2021​"
  },
  "merciPourCes3Jours": {
    "fr": "Encore merci pour ces 3 jours intéressants et instructifs, pour ma part j’ai pu appliquer aujourd’hui quelques-uns des points d’amélioration soulevés pendant la formation, et je constate déjà que ça m’est bénéfique ! [ ] Donc encore merci pour tes précieux conseils, qui me permettent de mieux travailler et d’être plus efficace ! :). Agathe, ingénieure commerciale itinérante formée en 2022"
  },
  "IndependantsTitle": {
    "fr": "Indépendants"
  },
  "impressionVendreAme": {
    "fr": "Vous avez l’impression de vendre votre âme au diable dès qu’il s’agit de parler du prix de vos prestations ?"
  },
  "aimeriezFaireVotreMetier": {
    "fr": "Vous aimeriez tellement faire juste votre métier, les missions dans lesquelles vous excellez, sans avoir besoin de les vendre ?"
  },
  "pasDeBaguetteMagique": {
    "fr": "Je vous comprends. Et je n’ai pas de baguette magique pour faire pleuvoir les contrats."
  },
  "voirLaVenteAutrement": {
    "fr": "En revanche je permets à mes clients de voir la vente autrement et d'y prendre du plaisir en restant eux-mêmes sans avoir l'impression de se trahir.​"
  },
  "mettezJoieDemarcheCommerciale": {
    "fr": "Mettez de la joie dans votre démarche commerciale ! Je peux vous aider à poser votre stratégie commerciale, à choisir vos cibles, à écrire votre plan d’action et à définir des tarifs qui vous permettront de bien vivre de votre activité. Je suis convaincue que nous avons tous une facette commerciale en nous et qu’il suffit d’y travailler pour la révéler et la faire briller."
  },
  "plaisirAVendre": {
    "fr": "C’est pourquoi j’accompagne et je forme des indépendants pour qu’ils aient du plaisir à vendre. Pour qu’ils aient du plaisir à vivre de leur expertise."
  },  
  "ilsEnParlent": {
    "fr": "Ils en parlent mieux que moi :"
  },
  "javaisBesoinDeStructurerMonOffre": {
    "fr": "J'avais besoin de structurer mon offre, devenue très riche, et je n'arrivais pas à démêler mes idées. Sylvie a proposé la bonne approche pour moi, et s'est montrée très encourageante ; son accompagnement très humain et sa faculté à rebondir sur mes propos ont été très précieux pour m'aider dans le processus ! Marie Baudrelle, Coach’ultante indépendante, septembre 2021​"
  },
  "hierJetaisAvecSylvie": {
    "fr": "Hier, j'étais avec Sylvie Péan durant deux heures. Hier, j'entrai dans mon sixième mois d'existence en tant que formateur consultant. ​Hier, j'avais besoin de faire le point, et surtout: savoir où je vais. Il y a eu de nombreux échanges, des infos, des conseils, des stratégies. ​Il y a eu de la bienveillance, de l'efficacité, du sérieux, des outils. Hier, j'étais avec Sylvie Péan durant deux heures. ​Aujourd'hui, j'ai un plan. Julien Léon, formateur indépendant, février 2022​"
  },

  "acceuilTitle": {
    "fr": "Pourquoi Trust in Move ?"
  },
  "acceuilTexte1": {
    "fr": "Parce que nous vivons dans un monde en mouvement, savoir en tirer bénéfice est une des clefs du succès.<br><br>Trust in Move accompagne donc les entreprises vers demain : développement commercial, export, facilitation du changement."
  },
  "acceuilQuestion": {
    "fr": "Que peut Trust in Move pour moi ?"
  },
  "acceuilTexte2": {
    "fr": "Développer mon entreprise à l’international"
  },
  "acceuilTexte3": {
    "fr": "Formation au développement commercial, en France et à l'international"
  },
  "acceuilTexte4": {
    "fr": "Accompagnement au changement"
  },

  "a1Title": {
    "fr": "Conseil stratégique et opérationnel export"
  },
  "a1Texte1": {
    "fr": "Trust in Move vous facilite l'international.<br><br>Que ce soit pour du <strong>conseil stratégique</strong> ou un audit, de <strong>l'appui opérationnel</strong> sur vos marchés, de l'externalisation de votre équipe commerciale ou pour vous aider à <strong>choisir le bon partenaire à l'étranger</strong> (qui allie compétences techniques et efficacité commerciale), Trust in Move est là pour vous.<br>Nous permettons à nos clients de bénéficier des chèques relance export grâce à notre partenariat avec <strong><a href='https://www.fileatrade.com/fileatrade-operateur-agree-cheque-relance-export/' target='_blank'>Fileatrade</a></strong>."
  },
  "a1Texte2": {
    "fr": "Basé à Nantes, Trust in Move travaille pour des <strong>PME industrielles</strong> françaises qui cherchent à s'internationaliser (Europe, Amériques, Asie, Moyen Orient…) et aide aussi des entreprises étrangères à trouver les bons partenaires en France."
  },
  "a1Texte3": {
    "fr": "Notre plus-value est l'accompagnement à la valorisation commerciale de produits techniques.<br><br>Nous intervenons quand vous le décidez et à votre rythme."
  },
  "a1Contact": {
    "fr": "Contactez-nous aujourd'hui pour en savoir plus !"
  },

  "a2Title": {
    "fr": "Formation au développement commercial, en France et à l'international"
  },
  "a2Texte1": {
    "fr": "Trust in Move forme dans tous les aspects de la <strong>vente</strong> et plus spécfiquement de la vente à l'international : <strong>négociation</strong> dans un contexte <strong>interculturel</strong>, prospection, management commercial, fondamentaux de <strong>l'export</strong>…"
  },
  "a2Texte2": {
    "fr": "Nos formations <strong>sur mesure</strong> s'adressent à tous les publics d'apprenants qui travaillent dans un contexte commercial exigeant : commerciaux, managers, administratifs, chefs de projets…"
  },
  "a2Texte3": {
    "fr": "Adepte de modalités pédagogiques <strong>innovantes</strong> (blended learning, jeux pédagogiques, …) et revisitant régulièrement ses supports pour toujours être à la pointe, Trust in Move développe des formations de qualité pour ses clients."
  },
  "a2Texte4": {
    "fr": "Toutes nos prestations peuvent être réalisées entièrement en Français, Anglais, Allemand ou Espagnol.<br>Si vous voulez avoir un aperçu de quelques unes de nos formations, <strong><a href='https://corymbe.coop/membre/formatrice-en-developpement-commercial-france-et-international/' target='_blank'>cliquez ici</a></strong>."
  },
  "a2Contact": {
    "fr": "Contactez-nous dès aujourd'hui pour en savoir plus !"
  },

  "a3Title": {
    "fr": "Accompagnement au changement"
  },
  "a3Texte1": {
    "fr": "Parce que l'international nécessite parfois des <strong>transformations en profondeur</strong> des organisations, Trust in Move a développé des solutions d'accompagnement au changement."
  },
  "a3Texte2": {
    "fr": "A l'aide de différentes solutions d'<strong>intelligence collective</strong>, de facilitation de réunion, de co-développement, ou de techniques d'improvisation théâtrale, Trust in Move aide vos équipes à changer pour que votre stratégie pour demain devienne réalité dès aujourd'hui."
  },
  "a3Texte3": {
    "fr": "Basé à Nantes, Trust in Move travaille pour tout type de structures en France ou à l'étranger."
  },
  "a3Texte4": {
    "fr": "Notre plus-value est l'<strong>écoute</strong> de votre projet et de vos équipes pour mieux faire coïncider l'un avec la réalité de celles-ci."
  },
  "a3Texte5": {
    "fr": "Accompagnement ponctuel ou sur la durée, nous intervenons quand vous le décidez et à votre rythme."
  },
  "a3Contact": {
    "fr": "Contactez-nous dès aujourd'hui pour en savoir plus !"
  },

  "qTitle": {
    "fr": "Qui sommes-nous ?"
  },
  "qTexte1": {
    "fr": "Trust in Move est un cabinet <strong>indépendant</strong> de conseil fondé en 2017 par Sylvie Péan à Nantes pour aider des <strong>PME</strong> à se développer <strong>commercialement</strong> et/ou à s'internationaliser."
  },
  "qTexte2": {
    "fr": "Trust in Move, c'est plus de 17 ans d'expérience industrielle dans la commercialisation à l'<strong>international</strong> (Europe, Asie, Amériques) de machines, de produits de niche technique et de services (dans la plasturgie, la ventilation industrielle, la chimie, le soudage, ...) pour les PME."
  },
  "qTexte3": {
    "fr": "Mais pourquoi la formation et le conseil au juste ?"
  },
  "qTexte4": {
    "fr": "<strong>Ingénieure</strong> parlant 4 langues, Sylvie a été mise très vite en situation de vendre des machines à l'international. Sauf que la négociation commerciale à l'international ou les contrats export requièrent une expertise spécifique. C'est justement cela que Sylvie transmet aujourd'hui à ses clients, riche de son expérience terrain consolidée par de nombreuses formations dans ces domaines."
  },
  "qContact": {
    "fr": "Pour en savoir plus sur Sylvie"
  },
  "qTexte5": {
    "fr": "allez sur LinkedIn"
  },
  "qTexte6": {
    "fr": "ou contactez-la !"
  },

  "rTitle": {
    "fr": "Nos références"
  },
  "rTexte1": {
    "fr": "Ils nous font confiance :"
  },
  "rTexte2": {
    "fr": "Le réseau de Trust in Move :"
  },
  "rContact": {
    "fr": "Contactez nous dès aujourd’hui pour en savoir plus"
  },

  "cTitle": {
    "fr": "Contactez-nous !"
  },
  "cTexte1": {
    "fr": "Sylvie Péan fondatrice de Trust in Move"
  },
  "cTexte2": {
    "fr": "Contactez-nous dès aujourd'hui pour plus d’informations :"
  },
  "cTexte3": {
    "fr": " 44300 Nantes - France"
  },

  "lTitle": {
    "fr": "Mentions légales"
  },
  "lTexte1": {
    "fr": "Statut administratif et facturation"
  },
  "lTexte2": {
    "fr": "Trust in Move est membre de la coopérative d'activité et d'emploi Ouvre-Boites 44 qui assure la gestion administrative de son activité et dont les coordonnées sont : SCOP Ouvre-Boites 44, 20 Allée de la Maison Rouge, 44000 Nantes, France, tel : +33228216510."
  },
  "lTexte3": {
    "fr": "Ouvre-Boites 44 est une S.C.O.P S.A à capital variable, inscrite au RCS de NANTES sous le N° 449.989.573<br>N° TVA : FR40449989573 - SIRET 44998957300026."
  },
  "lTexte4": {
    "fr": "Les factures seront en conséquence établies au nom de Ouvre-Boites 44. Sylvie Péan est seule responsable de la bonne exécution de sa prestation et des services qu'elle propose."
  },
  "lTexte5": {
    "fr": "Plus d’informations"
  },
  "lTexte6": {
    "fr": "Activité formation"
  },
  "lTexte7": {
    "fr": "Trust in Move fait fièrement partie de l’organisme de formation l’Ouvre-Boites 44 qui est certifié Qualiopi depuis octobre 2020. La certification qualité a été délivrée au titre de la catégorie d’action suivante : actions de formation."
  },
  "lTexte72": {
    "fr": "N° de déclaration d'activité formation : 52 44 04429 44 enregistré auprès du Préfet de la Région Pays de la Loire. Cet enregistrement ne vaut pas agrément de l'Etat. Organisme de formation enregistré au sein du Datadock."
  },
  "lTexte8": {
    "fr": "Présentation du site"
  },
  "lTexte9": {
    "fr": "<strong>Propriétaire, créatrice et responsable de publication du site:</strong> Sylvie Péan – boulevard des Poilus, 44300 Nantes, France"
  },
  "lTexte10": {
    "fr": "<strong>Webmaster:</strong> Maxime Péan"
  },
  "lTexte11": {
    "fr": "<strong>Hébergeur:</strong> HostPapa – 68 King William Street London EC4N 7DZ United Kingdom"
  },
  "lTexte12": {
    "fr": "Propriété intellectuelle et crédits"
  },
  "lTexte13": {
    "fr": "Sylvie Péan est propriétaire de la marque Trust in Move, déposée à l'INPI le 12 février 2018 sous le N° 18 4 427 868 et enregistrée dans les classes N° 35, 41 et 42.",
  },
  "lTexte14": {
    "fr": "Le nom de domaine trustinmove.com appartient à Sylvie Péan."
  },
  "lTexte15": {
    "fr": "Crédit photos : Sylvie Cordenner - Couteau suisse production"
  },
  "lTexte16": {
    "fr": "Logo : merci à Frédéric Bernier – Kumorfos"
  },
  "lTexte17": {
    "fr": "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Sylvie Péan."
  },
  "lTexte18": {
    "fr": "Droit applicable et attribution de juridiction"
  },
  "lTexte19": {
    "fr": "Tout litige en relation avec l'utilisation du site www.trustinmove.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Nantes, France."
  },
  "lTexte20": {
    "fr": "Données personnelles"
  },
  "lTexte21": {
    "fr": "Soucieuse du respect de la vie privée, la société Trust in Move s’engage à mettre en oeuvre toutes les mesures nécessaires à la protection des données à caractère personnel conformément au Règlement Européen sur la Protection des Données (UE) 2016/679 et à la loi Informatique et Libertés N°2018-493 du 20 juin 2018."
  },
  "lTexte22": {
    "fr": "Ce site ne collecte pas de données à caractère personnel, cependant Trust in Move peut collecter et traiter certaines données telles que : noms, prénoms, numéros de téléphone professionnels, adresses de messagerie professionnelles. Ces dernières sont regroupées dans un fichier « clients/prospects » et dans une liste de contacts professionnels gérée par l’outil de messagerie de Trust in Move. Ces données à caractère personnel sont collectées pour la gestion de la relation commerciale de nos clients et prospects et sont conservées aussi longtemps que nécessaire à l’activité de Trust in Move. Les bonnes pratiques de sécurité sont appliquées pour assurer un niveau de protection cohérent. Parmi les mesures de sécurité en production, citons : accès sécurisés aux applications par des mots de passe personnels solides, renouvelés régulièrement, sauvegarde des données, attentions particulières lors de l’usage des ordinateurs portables et smartphones en dehors des locaux de l’entreprise. Les personnes concernées sont en mesure de faire valoir leurs droits d’accès, d’opposition, de rectification, de suppression, de limitation et de portage de leurs données à caractère personnel en écrivant par courriel à sylvie[@]trustinmove.com  ou par courrier postal à l’adresse : Trust in Move c/o Ouvre-Boites 44, 20 Allée de la Maison Rouge, 44000 Nantes, France."
  }
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
