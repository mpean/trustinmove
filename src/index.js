import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";


"use strict";

let content = {
  "menuOffres": {
    "fr": "Vous"
  },
  "menuResponsablesCommerciaux": {
    "fr": "Responsable commercial·e"
  },
  "menuTechnicauxCommerciaux": {
    "fr": "Technico-commercial·e"
  },
  "menuIndependants": {
    "fr": "Indépendants"
  },
  "menuMonApproche": {
    "fr": "Mon approche"
  },
  "menuTrustInMove": {
    "fr": "Trust in Move"
  },
  "menuQuiSuisJe": {
    "fr": "Qui suis-je?"
  },
  "menuMentionsLegales": {
    "fr": "Mentions légales"
  },
  "accueilPunshLine": {
    "fr": "Osez Vendez Souriez&nbsp;!"
  },
  "accueilRelationsHumaines": {
    "fr": "La Vente c'est avant tout des relations humaines...<br>Autant y mettre de la joie&nbsp;!"
  },
  "accueilMesOffres": {
    "fr": "Mes solutions pour vous"
  },
  "technicoCommerciauxCardTitle": {
    "fr": "Technico-commercial·e"
  },
  "technicoCommerciauxCardText": {
    "fr": "Magnifiez votre expertise technique en réveillant l'âme commerciale qui sommeille en vous"
  },
  "technicoCommerciauxCardButton": {
    "fr": "En savoir plus"
  },
  "responsablesCommerciauxCardTitle": {
    "fr": "Responsable commercial·e"
  },
  "responsablesCommerciauxCardText": {
    "fr": "Dynamisez, formez et rassemblez votre équipe au service de votre stratégie commerciale"
  },
  "responsablesCommerciauxCardButton": {
    "fr": "En savoir plus"
  },
  "independantsCardTitle": {
    "fr": "Indépendant·e"
  },
  "independantsCardText": {
    "fr": "Découvrez la joie de vendre vos prestations et développez votre activité pour en vivre mieux"
  },
  "independantsCardButton": {
    "fr": "En savoir plus"
  },
  "ilsMeFontDejaConfiance": {
    "fr": "Ils me font déjà confiance"
  },
  "responsablesCommerciauxTitle": {
    "fr": "Responsable commercial·e"
  },
  "equipeCommercialeEssoufle": {
    "fr": "Vous sentez que votre équipe commerciale s'essouffle&nbsp;?"
  },
  "seConcentrerPilotage": {
    "fr": "Vous aimeriez ne pas avoir à intervenir au quotidien sur de l'opérationnel et vous concentrer sur le pilotage de l'activité commerciale&nbsp;?"
  },
  "developperNouveauSecteur": {
    "fr": "Vous aimeriez développer vos ventes sur un nouveau secteur ou tout simplement améliorer vos marges sur votre marché actuel&nbsp;?"
  },
  "jePeuxVousAider": {
    "fr": "Je peux vous aider&nbsp;!"
  },
  "forte15ansExperience": {
    "fr": "Forte de plus de 15 ans d'expérience en vente de produits et de services techniques en France et à l'international, je suis experte du process de vente conseil. Rompue aux échanges avec des grands groupes comme avec des TPE, je vous partage mon savoir-faire commercial acquis dans des domaines industriels très divers."
  },
  "jeVousAccompagne": {
    "fr": "Je vous accompagne pour que votre équipe vende mieux afin d'assurer la pérennité et le développement de votre activité. Comment&nbsp;? En adoptant concrètement un rôle de conseil auprès de la clientèle, en valorisant vos services de façon juste et surtout en (re)trouvant du plaisir à vendre."
  },
  "temoignage": {
    "fr": "Il en parle mieux que moi"
  },
  "jaiConfieMonEquipeDeVentes": {
    "fr": "J'ai confié mon équipe de ventes (managers commerciaux en région & ingénieurs d'application) à Sylvie sur 2 sessions de 2 jours à 1 mois d'intervalle. Préparation très pro et très structurée, supports variés et intéressants, et animation au top avec toute l'énergie de Sylvie qui a pratiqué la vente technique pendant 17 ans... et ça change tout&nbsp;! On est dans le concret, dans la réalité de la vente technique. Les participants sont ravis, on apprend et on renforce l'esprit d'équipe. Je recommande vivement!"
  },
  "jaiConfieMonEquipeDeVentes": {
    "fr": "J'ai confié mon équipe de ventes (managers commerciaux en région & ingénieurs d'application) à Sylvie sur 2 sessions de 2 jours à 1 mois d'intervalle."
  },
  "preparationTresPro": {
    "fr": "Préparation très pro et très structurée, supports variés et intéressants, et animation au top avec toute l'énergie de Sylvie qui a pratiqué la vente technique pendant 17 ans... et ça change tout&nbsp;!"
  },
  "onEstDansLeConcret": {
    "fr": "On est dans le concret, dans la réalité de la vente technique. Les participants sont ravis, on apprend et on renforce l'esprit d'équipe. Je recommande vivement!"
  },
  "francoisDirecteurDeFiliafe": {
    "fr": "François, Directeur de filiale France - 2022"
  },
  "technicauxCommerciauxTitle": {
    "fr": "Technico-commercial·e"
  },
  "passerExpertTechniqueCommercial": {
    "fr": "Vous venez de passer d'un rôle d'expert technique à celui de commercial&nbsp;?"
  },
  "vousSavezConseillerVosClients": {
    "fr": "Vous savez très bien conseiller vos clients mais peinez à transformer le conseil en vente&nbsp;?"
  },
  "duMalAOrganiserVotreDemarche": {
    "fr": "Vous avez du mal à organiser votre démarche commerciale pour qu'elle soit réellement efficace&nbsp;? "
  },
  "tousLaCapaciteAVendre": {
    "fr": "Mon parcours m'a enseigné qu'on a tous la capacité à vendre et qu'il suffit de réveiller le commercial qui sommeille en nous&nbsp;!"
  },
  "formationsCommercialesLink": {
    "fr": "Les formations commerciales"
  },
  "formationsCommercialesQueJePropose": {
    "fr": " que je propose permettent donc à des experts de devenir des vendeurs, tout en restant eux-mêmes et en y prenant du plaisir."
  },
  "ecoutezLesIlsEnParlent": {
    "fr": "Ils et elles en parlent mieux que moi"
  },
  "excellenteFormatriceTechnique": {
    "fr": "Sylvie est une excellente formatrice en technique de vente, je la recommande."
  },
  "nhesitezPas": {
    "fr": "N'hésitez pas et faites lui confiance."
  },
  "merciAToiSylvie": {
    "fr": "Merci à toi Sylvie."
  },
  "guillaumeTechnicoCommercial": {
    "fr": "Guillaume, technico-commercial itinérant formé en 2020"
  },
  "formatriceAuTop": {
    "fr": "Une formatrice au top&nbsp;!"
  },
  "dynamiqueSouriante": {
    "fr": "Dynamique, souriante et qui a toujours des exemples concrets liés à son passé professionnel."
  },
  "lesDeuxFormations": {
    "fr": "Les deux formations reçues liées à la vente m'ont vraiment permis de découvrir de nouvelles techniques."
  },
  "thomasTechnicoCommercial": {
    "fr": "Thomas, technico-commercial itinérant formé en 2020 et 2021"
  },
  "merciPourCes3Jours": {
    "fr": "Encore merci pour ces 3 jours intéressants et instructifs."
  },
  "pourMaPart": {
    "fr": "Pour ma part j'ai pu appliquer aujourd'hui quelques-uns des points d'amélioration soulevés pendant la formation, et je constate déjà que ça m'est bénéfique&nbsp;!"
  },
  "doncEncoreMerci": {
    "fr": "Donc encore merci pour tes précieux conseils, qui me permettent de mieux travailler et d'être plus efficace&nbsp;!&nbsp;:)."
  },
  "agatheIngenieureCommerciale": {
    "fr": "Agathe, ingénieure commerciale itinérante formée en 2022"
  },
  "IndependantsTitle": {
    "fr": "Indépendants"
  },
  "impressionVendreAme": {
    "fr": "Vous avez l'impression de vendre votre âme au diable dès qu'il s'agit de parler du prix de vos prestations&nbsp;?"
  },
  "aimeriezFaireVotreMetier": {
    "fr": "Vous aimeriez tellement faire juste votre métier, mener les missions dans lesquelles vous excellez, sans avoir besoin de les vendre&nbsp;?"
  },
  "pasDeBaguetteMagique": {
    "fr": "Je vous comprends. Et je n'ai pas de baguette magique pour faire pleuvoir les contrats."
  },
  "voirLaVenteAutrement": {
    "fr": "En revanche je permets à mes clients de voir la vente autrement et d'y prendre du plaisir en restant eux-mêmes sans avoir l'impression de se trahir."
  },
  "mettezJoieDemarcheCommerciale": {
    "fr": "Mettez de la joie dans votre démarche commerciale&nbsp;!"
  },
  "jePeuxVousAiderA": {
    "fr": "Je peux vous aider à"
  },
  "poserVotreStrategieCommerciale": {
    "fr": "Poser votre stratégie commerciale."
  },
  "choisirVosCibles": {
    "fr": "Choisir vos cibles."
  },
  "ecrireVotrePlanDAction": {
    "fr": "Ecrire votre plan d'action."
  },
  "definirDesTarifs": {
    "fr": "Définir des tarifs qui vous permettront de bien vivre de votre activité."
  },
  "jeSuisConvaincueQueNousAvonsTous": {
    "fr": "Je suis convaincue que nous avons tous une facette commerciale en nous et qu'il suffit d'y travailler pour la révéler et la faire briller."
  },
  "plaisirAVendre": {
    "fr": "C'est pourquoi j'accompagne et je forme des indépendants pour qu'ils aient du plaisir à vendre. Pour qu'ils aient du plaisir à vivre de leur expertise."
  },  
  "ilsEnParlent": {
    "fr": "Ils en parlent mieux que moi"
  },
  "javaisBesoinDeStructurerMonOffre": {
    "fr": "J'avais besoin de structurer mon offre, devenue très riche, et je n'arrivais pas à démêler mes idées."
  },
  "sylvieAProposeLaBonneApproche": {
    "fr": "Sylvie a proposé la bonne approche pour moi, et s'est montrée très encourageante&nbsp;; son accompagnement très humain et sa faculté à rebondir sur mes propos ont été très précieux pour m'aider dans le processus&nbsp;!"
  },
  "marieBaudrelle": {
    "fr": "Marie, Coach'ultante indépendante, septembre 2021"
  },
  "hierJetaisAvecSylvie": {
    "fr": "Hier, j'étais avec Sylvie Péan durant deux heures. Hier, j'entrai dans mon sixième mois d'existence en tant que formateur consultant. Hier, j'avais besoin de faire le point, et surtout: savoir où je vais. Il y a eu de nombreux échanges, des infos, des conseils, des stratégies."
  },
  "ilYaEuDeLaBienveillance": {
    "fr": "Il y a eu de la bienveillance, de l'efficacité, du sérieux, des outils. Hier, j'étais avec Sylvie Péan durant deux heures."
  },
  "aujourdhuiJaiUnPlan": {
    "fr": "Aujourd'hui, j'ai un plan."
  },
  "julienLeon": {
    "fr": "Julien, formateur indépendant, février 2022"
  },
  "monApprocheTitle": {
    "fr": "Mon Approche"
  },
  "vendezOsezSouriez": {
    "fr": "Osez Vendez Souriez&nbsp;!"
  },
  "prendreDuPlaisirAVendreCestPossible": {
    "fr": "Prendre du plaisir à vendre, c'est possible&nbsp;!"
  },
  "cestCeSurQuoiJeTravaille": {
    "fr": "C'est ce sur quoi je travaille auprès de ma clientèle depuis que j'ai créé Trust in Move en 2017. Car je suis convaincue qu'on ne fait vraiment bien (longtemps) que ce que l'on aime faire. Par de la formation et de l'accompagnement individuel ou d'équipe, je permets donc aujourd'hui à des personnes qui exercent en PME ou à leur compte <b>de prendre du plaisir à vendre tout en restant en phase avec leurs valeurs et leur expertise.</b>"
  },
  "vousFormerEfficacement": {
    "fr": "Vous former efficacement et joyeusement"
  },
  "detentriceDuTitreDeFormatrice": {
    "fr": "Détentrice du titre de Formatrice Professionnelle pour Adultes, je propose des formations basées sur la pédagogie active pour faciliter la mise en œuvre des acquis de formation. "
  },
  "jeVarieLEsOutils": {
    "fr": "Je varie les outils et techniques pour répondre aux besoins de chaque apprenant."
  },
  "jaiDailleursACoeur": {
    "fr": "J'ai d'ailleurs à cœur de toujours continuer à me former pour diversifier et améliorer ma boîte à outils."
  },
  "jaiPuVoirCombienOnRetienMieux": {
    "fr": "J'ai pu voir combien on retient mieux ce qu'on expérimente soi même et encore mieux quand on l'expérimente dans la bonne humeur."
  },
  "cestPourquoiJaimeUtiliser": {
    "fr": "C'est pourquoi j'aime utiliser des jeux ou des outils ludiques en formation."
  },
  "jeProposeQuandCestPossible": {
    "fr": "Je propose quand c'est possible de se former en marchant ou en bougeant. "
  },
  "lesPlusPlus": {
    "fr": "Les Plus-Plus, la musique et le photolangage par exemple font souvent partie de mes outils d'animation en présentiel."
  },
  "jUtiliseAussi": {
    "fr": "J'utilise aussi des jeux d'improvisation théâtrale et des techniques inspirées du "
  },
  "funnyLearning": {
    "fr": "Funny Learning."
  },
  "janimeAussiBienEnPresentiel": {
    "fr": "J'anime aussi bien en présentiel qu'à distance en adaptant mes méthodes pédagogiques."
  },  
  "monBagageTechniqueAcquis": {
    "fr": "Mon bagage technique acquis dans ma formation d'ingénieure et pendant mon expérience de plus de 15 ans dans des industries très diverses me permet de parler le langage de mes clients, même ceux qui sont actifs sur un secteur pointu ou de niche technique."
  },
  "cestPourquoiJaffectionne": {
    "fr": "C'est pourquoi j'affectionne tout particulièrement les univers complexes qui nécessitent une acculturation."
  },
  "jeConcoisDesFormations": {
    "fr": "Je conçois d'ailleurs des formations sur mesure pour être au plus proche de la réalité des apprenants."
  },
  "unAppercuDuCatalogue": {
    "fr": "Voir le catalogue"
  },
  "vousAccompagnerAMieuxVendre": {
    "fr": "Vous accompagner à mieux vendre"
  },
  "praticienneDISC": {
    "fr": "Praticienne DISC, j'utilise le profil DISC et différents outils de connaissance de soi et donc des autres pour aider mes clients à améliorer leur communication et donc leur capacité à convaincre pour vendre&nbsp;: forces motrices, communication bienveillante, …"
  },
  "formeeALintelligenceCollective": {
    "fr": "Formée à l'intelligence collective et à l'accompagnement au changement, j'aide des équipes à formaliser puis mettre en œuvre leur stratégie commerciale pour atteindre leurs objectifs."
  },
  "amoureuseDesLanguesEtrangeres": {
    "fr": "Amoureuse des langues étrangères, je travaille aujourd'hui en allemand, anglais, espagnol ou français, selon les besoins de mes clients."
  },
  "membreActiveDeLaCooperative": {
    "fr": "Membre active de la Coopérative d'Activité et d'Emploi "
  },
  "ouvreBoites44": {
    "fr": "l'Ouvre-Boîtes"
  },
  "jeTravailleAussiAvecMesClients": {
    "fr": ", je travaille aussi avec mes clients pour que la coopération soit vivante au sein des équipes commerciales."
  },
  "enEffetSelonMonExperience": {
    "fr": "En effet, selon mon expérience, l'équipe commerciale est plus efficace quand elle travaille collectivemnet au succès commercial de l'entreprise."
  },
  "lIncitationFinanciere": {
    "fr": "L'incitation financière peut motiver mais la coopération, ça paye&nbsp;!"
  },
  "mesClientsParlentDeMesPratiques": {
    "fr": "Ils en parlent mieux que moi"
  },
  "formatriceALecoute": {
    "fr": "Formatrice à l'écoute et beaucoup de bienveillance et surtout professionnalisme."
  },
  "innaEntrepreneure": {
    "fr": "Inna, entrepreneure formée en décembre 2021."
  },
  "laMethodePedagogiqueUtilisee": {
    "fr": "La méthodologie utilisée par Sylvie m'a permis d'atteindre les objectifs que je souhaitais et j'ai vraiment apprécié tout au long de la journée les exemples soit à partir de mes situations de vente ou les siennes pour mieux illustrer et mettre en pratique. Elle est très dynamique et les échanges sont très faciles&nbsp;!"
  },
  "ericResponsableCommercial": {
    "fr": "Eric, responsable commercial formé en janvier 2021."
  },
  "tresBonneFormatriceQuiSaitInteresser": {
    "fr": "Très bonne formatrice qui sait intéresser son public et qui sait le faire participer … Maitrise son sujet."
  },
  "stephaneManager": {
    "fr": "Stéphane, manager d'une équipe formée en juin 2022."
  },
  "monReseau": {
    "fr": "Mon réseau"
  },
  "jeTravailleAMonCompte": {
    "fr": "Je travaille à mon compte mais m'appuie quotidiennement sur mon réseau pour mener à bien mes missions. Voici quelques collectifs de professionnels dont je fais partie et des partenaires réguliers&nbsp;:"
  },
  "quiSuiJeTitle": {
    "fr": "Qui suis-je&nbsp;?"
  },
  "fanDeMaths": {
    "fr": "Fan de maths (si si …😉), j'aurais pu être chercheuse en maths&nbsp;! Les maths, c'est factuel, parfait, il n'y a pas d'approximation. Mais moi, ce que j'aime, justement, c'est cette recherche d'équilibre dans l'humain, les nuances, la diversité qui nous rassemble, … J'ai donc beaucoup voyagé pour rencontrer des personnes de tous horizons, de tous les continents."
  },
  "ingenieureGeneraliste": {
    "fr": " Ingénieure généraliste, j'ai d'abord exercé différents métiers de la vente de produits ou de services techniques en France et à l'international. Ingénieure commerciale, commerciale terrain, responsable de zone, chargée d'affaires, responsable commerciale, … ces métiers ont tous eu un point commun pour moi&nbsp;: rendre service à des personnes en leur <b>conseillant des solutions</b> qui seront utiles à leur entreprise."
  },
  "unJourJaiEuEnvieDeTransmettre": {
    "fr": "Un jour, j'ai eu envie de transmettre le savoir-faire que j'avais acquis au cours de ces 17 premières années de ma carrière. Trust in Move est né de cette envie. Je me suis alors d'abord formée pour devenir formatrice (si si le métier de formatrice s'apprend&nbsp;!) et je continue toujours à me former régulièrement… car j'aime ça&nbsp;!"
  },
  "nantaiseDadoption": {
    "fr": "Nantaise d'adoption, mère de 2 enfants, comédienne amateure de longue date, j'ai vécu et travaillé 4 ans à l'étranger (Allemagne, Espagne, Angleterre). Je travaille donc en français, anglais, allemand, espagnol selon les besoins de mes clients."
  },
  "contactezMoi": {
    "fr": "Contactez-moi pour en savoir plus&nbsp;:"
  },
  "sylviePean": {
    "fr": "Sylvie Péan"
  },
  "numeroTelephoneMobile": {
    "fr": "+33698247832"
  },
  "emailSylviePean": {
    "fr": "sylvie@trustinmove.com"
  },
  "linkedinSylviePean": {
    "fr": "https://www.linkedin.com/in/sylviepean/"
  },
  "mentionsLegalesTitle": {
    "fr": "Mentions Légales"
  },
  "etAutresInformations": {
    "fr": "Et autres informations nécessaires (même si parfois un peu rabat-joie…)."
  },
  "nb": {
    "fr": "NB"
  },
  "pourSimplifierLaRedaction": {
    "fr": "Pour simplifier la rédaction de ce site, j'ai utilisé le masculin-neutre mais il est évident pour moi que je m'adresse à des êtres humains, hommes ou femmes sans distinction…"
  },
  "statutAdministratifEtFacturation": {
    "fr": "Statut administratif et facturation"
  },
  "trustInMoveEstMembreDeLaCooperative": {
    "fr": "Trust in Move est membre de la coopérative d'activité et d'emploi "
  },
  "ouvreBoites44MentionsLegales": {
    "fr": "Ouvre-Boîtes"
  },
  "quiAssureLaGestionAdministrative": {
    "fr": " qui assure la gestion administrative de son activité et dont les coordonnées sont&nbsp;: SCOP Ouvre-Boîtes, 20 Allée de la Maison Rouge, 44000 Nantes, France, tel&nbsp;: +33228216510."
  },
  "ouvreBoites44EstUneSCOPSA": {
    "fr": "Ouvre-Boîtes est une S.C.O.P S.A à capital variable, inscrite au RCS de NANTES sous le N° 449.989.573"
  },
  "numTVASIRET": {
    "fr": "N° TVA&nbsp;: FR40449989573 - SIRET 44998957300026."
  },
  "lesFacturesSerontEnConsequence": {
    "fr": "Les factures seront en conséquence établies au nom de Ouvre-Boîtes. Sylvie Péan est seule responsable de la bonne exécution de sa prestation et des services qu'elle propose."
  },
  "activiteFormation": {
    "fr": "Activité formation"
  },
  "trustInMoveFaitPartieDeCorymbe": {
    "fr": "Trust in Move fait fièrement partie de "
  },
  "corymbeMentionsLegales": {
    "fr": "Corymbe"
  },
  "quiEstLorganismeDeFormationReunissant": {
    "fr": " qui est l'organisme de formation réunissant les formateurs et formatrices de l'Ouvre-Boîtes. L'Ouvre-Boîtes est certifié Qualiopi depuis octobre 2020. La certification qualité a été délivrée au titre de la catégorie d'action suivante&nbsp;: actions de formation."
  },
  "numDeDeclarationDactiviteFormation": {
    "fr": "N° de déclaration d'activité formation&nbsp;: 52 44 04429 44 enregistré auprès du Préfet de la Région Pays de la Loire. Cet enregistrement ne vaut pas agrément de l'Etat. Organisme de formation enregistré au sein du Datadock."
  },
  "siteInternetSurLequel": {
    "fr": "Site internet sur lequel vous surfez actuellement"
  },
  "proprietaireCreatriceResponsable": {
    "fr": "Propriétaire, créatrice et responsable de publication du site: Sylvie Péan – rue de la Michaudière, 44300 Nantes, France"
  },
  "webmasterMaximePean": {
    "fr": "Webmaster: Maxime Péan un énorme merci à lui&nbsp;!)"
  },
  "hebergeurHostPapa": {
    "fr": "Hébergeur: HostPapa - 68 King William Street London EC4N 7DZ United Kingdom"
  },
  "proprieteIntellectuelleEtCreditTitle": {
    "fr": "Propriété intellectuelle et crédits"
  },
  "SylviePeanProprietaireTrustInMove": {
    "fr": "Sylvie Péan est propriétaire de la marque Trust in Move, déposée à l'INPI le 12 février 2018 sous le N° 18 4 427 868 et enregistrée dans les classes N° 35, 41 et 42."
  },
  "leNomDeDomaine": {
    "fr": "Le nom de domaine trustinmove.com appartient à Sylvie Péan."
  },
  "touteReproductionRepresentation": {
    "fr": "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Sylvie Péan."
  },
  "leLogoDeTrustInMoveAEte": {
    "fr": "Le logo de Trust in Move a été initialement conçu par Frédéric Bernier – "
  },
  "kumorfosLink": {
    "fr": "Kumorfos"
  },
  "puisReinventePar": {
    "fr": " puis réinventé par Leslie Dumont – "
  },
  "atelierLeslieDumontLink": {
    "fr": "atelier Leslie Dumont"
  },
  "doubleMerci": {
    "fr": ". Double merci&nbsp;!"
  },
  "cEst": {
    "fr": "C'est "
  },
  "maudBoreLink": {
    "fr": "Maud Boré"
  },
  "quiMaAideeAMettreEnMots": {
    "fr": " qui m'a aidée à mettre en mots mes pratiques. Merci à elle&nbsp;!"
  },
  "creditsPhotos": {
    "fr": "Crédits photos&nbsp;:  Sylvie Cordenner – "
  },
  "couteauSuisseProductionLink": {
    "fr": "Couteau Suisse Production"
  },
  "etSylviePean": {
    "fr": ", François Landais et Sylvie Péan."
  },
  "droitApplicableTitle": {
    "fr": "Droit applicable et attribution de juridiction"
  },
  "toutLitigeEnRelation": {
    "fr": "Tout litige en relation avec l'utilisation du site www.trustinmove.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Nantes, France."
  },
  "donneesPersonnellesTitle": {
    "fr": "Données personnelles"
  },
  "soucieuseDuRespectDelaVie": {
    "fr": "Soucieuse du respect de la vie privée, la société Trust in Move s'engage à mettre en œuvre toutes les mesures nécessaires à la protection des données à caractère personnel conformément au Règlement Européen sur la Protection des Données (UE) 2016/679 et à la loi Informatique et Libertés N°2018-493 du 20 juin 2018."
  },
  "ceSiteNeCollectePas": {
    "fr": "Ce site ne collecte pas de données à caractère personnel, cependant Trust in Move peut collecter et traiter certaines données telles que&nbsp;: noms, prénoms, numéros de téléphone professionnels, adresses de messagerie professionnelles. Ces dernières sont regroupées dans un fichier « clients/prospects » et dans une liste de contacts professionnels gérée par l'outil de messagerie de Trust in Move. Ces données à caractère personnel sont collectées pour la gestion de la relation commerciale de nos clients et prospects et sont conservées aussi longtemps que nécessaire à l'activité de Trust in Move. Les bonnes pratiques de sécurité sont appliquées pour assurer un niveau de protection cohérent. Parmi les mesures de sécurité en production, citons&nbsp;: accès sécurisés aux applications par des mots de passe personnels solides, renouvelés régulièrement, sauvegarde des données, attentions particulières lors de l'usage des ordinateurs portables et smartphones en dehors des locaux de l'entreprise. Les personnes concernées sont en mesure de faire valoir leurs droits d'accès, d'opposition, de rectification, de suppression, de limitation et de portage de leurs données à caractère personnel en écrivant par courriel à sylvie[@]trustinmove.com ou par courrier postal à l'adresse&nbsp;: Trust in Move c/o Ouvre-Boîtes, 20 Allée de la Maison Rouge, 44000 Nantes, France."
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


let sections = document.getElementsByClassName("section");
let sec = "accueil";

if(window.location.hash.length > 1){
  sec = window.location.hash.slice(1);
}

function displaySection (section) {
  sec = section;

  for (var i = 0; i < sections.length; i++) {
    let element = sections[i];
    if ( element.id == section) {
      element.hidden = false;
    } else
    {
      element.hidden = true;
    }
  }      
}

window.displaySection = displaySection;

displayLanguage(lang);
displaySection(sec);

function setText (id) {
  document.getElementById(id).innerHTML = content[ id ][ lang ];
}
