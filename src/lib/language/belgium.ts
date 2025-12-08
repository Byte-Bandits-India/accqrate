export type LanguageCode = 'en' | 'fr' | 'nl';
export const currentLang = { lang: 'en' as LanguageCode };
const translations = {
  // Blogs: Credit Notes in Belgium
  'Credit Notes in Belgium': {
    fr: 'Notes de crédit en Belgique',
    nl: 'Creditnota’s in België'
  },
  'Updated On : Nov 25th, 2024 | 16 min read': {
    fr: 'Mis à jour le : 25 nov. 2024 | Lecture de 16 minutes',
    nl: 'Bijgewerkt op: 25 nov. 2024 | 16 minuten leestijd'
  },
  'Meaning, Purpose, Rules and How to Issue Them Correctly': {
    fr: 'Signification, objectif, règles et manière de les émettre correctement',
    nl: 'Betekenis, doel, regels en hoe ze correct uit te geven'
  },
  'Credit notes play a central role in Belgian accounting and VAT administration. They ensure that businesses can rectify previously issued invoices without creating inconsistencies in financial records. Whether the adjustment involves incorrect pricing, returned goods, or VAT recalculation, Belgian law requires that credit notes follow strict documentation standards.': {
    fr: 'Les notes de crédit jouent un rôle central dans la comptabilité belge et l’administration de la TVA. Elles permettent aux entreprises de rectifier des factures déjà émises sans créer d’incohérences dans les registres financiers. Qu’il s’agisse d’ajustements liés à un prix incorrect, à un retour de marchandises ou à un recalcul de TVA, la législation belge exige que les notes de crédit respectent des normes strictes de documentation.',
    nl: 'Creditnota’s spelen een centrale rol in de Belgische boekhouding en btw-administratie. Ze zorgen ervoor dat bedrijven eerder uitgegeven facturen kunnen rechtzetten zonder inconsistenties in de financiële administratie te creëren. Of de aanpassing nu betrekking heeft op een foutieve prijs, geretourneerde goederen of een herberekening van de btw, de Belgische wet vereist dat creditnota’s strikte documentatievereisten volgen.'
  },
  'This guide explains what credit notes are, when they must be issued, what they must contain and how they differ from debit notes. It also outlines the steps required to issue a compliant credit note under Belgian regulations.': {
    fr: 'Ce guide explique ce que sont les notes de crédit, quand elles doivent être émises, ce qu’elles doivent contenir et en quoi elles diffèrent des notes de débit. Il décrit également les étapes nécessaires pour émettre une note de crédit conforme à la réglementation belge.',
    nl: 'Deze gids legt uit wat creditnota’s zijn, wanneer ze moeten worden uitgegeven, welke informatie ze moeten bevatten en hoe ze verschillen van debetnota’s. Daarnaast worden de stappen beschreven die nodig zijn om een conforme creditnota uit te geven volgens de Belgische regelgeving.'
  },
  'What Is a Credit Note in Belgium': {
    fr: 'Qu’est-ce qu’une note de crédit en Belgique ?',
    nl: 'Wat is een creditnota in België?'
  },
  'A credit note is an official document issued by a seller to correct or reverse part of an earlier invoice. It acknowledges that the buyer no longer owes the full amount stated on the original invoice. Credit notes often arise from pricing errors, product returns or adjustments to VAT.': {
    fr: 'Une note de crédit est un document officiel émis par un vendeur pour corriger ou annuler une partie d’une facture antérieure. Elle reconnaît que l’acheteur ne doit plus le montant total indiqué sur la facture originale. Les notes de crédit découlent souvent d’erreurs de prix, de retours de produits ou d’ajustements de TVA.',
    nl: 'Een creditnota is een officieel document dat door een verkoper wordt uitgegeven om een eerdere factuur geheel of gedeeltelijk te corrigeren of te herroepen. Het bevestigt dat de koper het oorspronkelijk gefactureerde bedrag niet langer volledig verschuldigd is. Creditnota’s ontstaan vaak door prijsfouten, retourzendingen of btw-aanpassingen.'
  },
  'A valid credit note in Belgium must:': {
    fr: 'Une note de crédit valable en Belgique doit :',
    nl: 'Een geldige creditnota in België moet:'
  },
  'Mirror the original invoice key details': {
    fr: 'Reproduire les principales données de la facture originale',
    nl: 'De kerngegevens van de oorspronkelijke factuur weerspiegelen'
  },
  'Clearly reference the invoice that is being corrected': {
    fr: 'Faire clairement référence à la facture corrigée',
    nl: 'Duidelijk verwijzen naar de factuur die wordt gecorrigeerd'
  },
  'Contain its own unique sequential number': {
    fr: 'Comporter son propre numéro unique et séquentiel',
    nl: 'Een eigen uniek en opeenvolgend nummer bevatten'
  },
  'State the adjusted amounts using a minus sign': {
    fr: 'Indiquer les montants ajustés avec un signe négatif',
    nl: 'De aangepaste bedragen weergeven met een minteken'
  },
  'Credit notes form part of a company \'s legal accounting records and must be stored for VAT audit purposes.': {
    fr: 'Les notes de crédit font partie des registres comptables légaux d’une entreprise et doivent être conservées à des fins de contrôle TVA.',
    nl: 'Creditnota’s maken deel uit van de wettelijke boekhoudkundige documenten van een bedrijf en moeten worden bewaard voor btw-controles.'
  },
  'When a Credit Note Must Be Issued': {
    fr: 'Quand une note de crédit doit-elle être émise ?',
    nl: 'Wanneer moet een creditnota worden uitgegeven?'
  },
  'Credit notes are issued in Belgium whenever the original invoice no longer reflects the correct payable amount. Common scenarios include:': {
    fr: 'Les notes de crédit sont émises en Belgique lorsque la facture originale ne reflète plus le montant exact à payer. Les situations courantes incluent :',
    nl: 'In België worden creditnota’s uitgegeven wanneer de oorspronkelijke factuur niet langer het juiste te betalen bedrag weerspiegelt. Veelvoorkomende situaties zijn:'
  },
  'Incorrect pricing or quantity on the original invoice': {
    fr: 'Prix ou quantité incorrects sur la facture originale',
    nl: 'Onjuiste prijs of hoeveelheid op de oorspronkelijke factuur'
  },
  'Goods returned by the customer': {
    fr: 'Marchandises retournées par le client',
    nl: 'Goederen geretourneerd door de klant'
  },
  'Cancellation of services after invoicing': {
    fr: 'Annulation de services après facturation',
    nl: 'Annulering van diensten na facturatie'
  },
  'Discounts or rebates granted after the invoice was created': {
    fr: 'Remises ou réductions accordées après l’émission de la facture',
    nl: 'Kortingen of rabatten die na de factuur zijn toegekend'
  },
  'Errors in VAT calculation': {
    fr: 'Erreurs dans le calcul de la TVA',
    nl: 'Fouten in de btw-berekening'
  },
  'Full cancellation of the original sale': {
    fr: 'Annulation totale de la vente initiale',
    nl: 'Volledige annulering van de oorspronkelijke verkoop'
  },
  'Debtor insolvency or non-payment (for VAT correction on bad debts)': {
    fr: 'Insolvabilité ou non-paiement du débiteur (pour correction TVA sur créances irrécouvrables)',
    nl: 'Faillissement of niet-betaling door de schuldenaar (voor btw-correctie op oninbare vorderingen)'
  },
  'Credit notes cannot be issued once the original invoice has expired or is no longer legally adjustable.': {
    fr: 'Les notes de crédit ne peuvent plus être émises une fois que la facture originale est échue ou n’est plus légalement ajustable.',
    nl: 'Creditnota’s kunnen niet meer worden uitgegeven zodra de oorspronkelijke factuur is vervallen of wettelijk niet meer kan worden aangepast.'
  },
  'Credit Note vs Debit Note': {
    fr: 'Note de crédit vs note de débit',
    nl: 'Creditnota vs debetnota'
  },
  'Credit notes reduce the amount owed by the buyer, while debit notes increase it. Their purpose and accounting impact differ.': {
    fr: 'Les notes de crédit réduisent le montant dû par l’acheteur, tandis que les notes de débit l’augmentent. Leur objectif et leur impact comptable diffèrent.',
    nl: 'Creditnota’s verlagen het bedrag dat de koper verschuldigd is, terwijl debetnota’s het verhogen. Hun doel en boekhoudkundige impact verschillen.'
  },
  'Comparison Table': {
    fr: 'Tableau comparatif',
    nl: 'Vergelijkingstabel'
  },
  'Aspect': {
    fr: 'Aspect',
    nl: 'Aspect'
  },
  'Credit Note': {
    fr: 'Note de crédit',
    nl: 'Creditnota'
  },
  'Debit Note': {
    fr: 'Note de débit',
    nl: 'Debetnota'
  },
  'Purpose': {
    fr: 'Objectif',
    nl: 'Doel'
  },
  'Reduces or cancels part of an existing invoice': {
    fr: 'Réduit ou annule une partie d’une facture existante',
    nl: 'Vermindert of annuleert een deel van een bestaande factuur'
  },
  'Increases the value of an existing invoice': {
    fr: 'Augmente la valeur d’une facture existante',
    nl: 'Verhoogt de waarde van een bestaande factuur'
  },
  'Amount Display': {
    fr: 'Affichage du montant',
    nl: 'Weergave van het bedrag'
  },
  'Shown with a minus sign': {
    fr: 'Indiqué avec un signe négatif',
    nl: 'Weergegeven met een minteken'
  },
  'Shown with a plus sign': {
    fr: 'Indiqué avec un signe positif',
    nl: 'Weergegeven met een plusteken'
  },
  'Reference': {
    fr: 'Référence',
    nl: 'Referentie'
  },
  'Must be linked to the original invoice': {
    fr: 'Doit être liée à la facture originale',
    nl: 'Moet gekoppeld zijn aan de oorspronkelijke factuur'
  },
  'Must also reference the original invoice': {
    fr: 'Doit également faire référence à la facture originale',
    nl: 'Moet ook verwijzen naar de oorspronkelijke factuur'
  },
  'Accounting Impact': {
    fr: 'Impact comptable',
    nl: 'Boekhoudkundige impact'
  },
  'Reduction in revenue or receivables': {
    fr: 'Réduction des revenus ou des créances',
    nl: 'Daling van de omzet of vorderingen'
  },
  'Increase in receivables or revenue': {
    fr: 'Augmentation des créances ou des revenus',
    nl: 'Stijging van de vorderingen of omzet'
  },
  'Both documents must comply with Belgian accounting standards and VAT rules.': {
    fr: 'Les deux documents doivent être conformes aux normes comptables belges et aux règles de TVA.',
    nl: 'Beide documenten moeten voldoen aan de Belgische boekhoudnormen en btw-regels.'
  },
  'How to Issue a Credit Note in Belgium': {
    fr: 'Comment émettre une note de crédit en Belgique',
    nl: 'Hoe een creditnota uitgeven in België'
  },
  'Creating a compliant credit note requires careful attention to detail. The document must clearly indicate that it modifies an earlier invoice and must contain all required VAT information.': {
    fr: 'Établir une note de crédit conforme nécessite une attention minutieuse aux détails. Le document doit indiquer clairement qu’il modifie une facture antérieure et contenir toutes les informations requises en matière de TVA.',
    nl: 'Het opstellen van een conforme creditnota vereist nauwgezette aandacht voor detail. Het document moet duidelijk aangeven dat het een eerdere factuur wijzigt en moet alle vereiste btw-informatie bevatten.'
  },
  'Steps to Prepare a Credit Note': {
    fr: 'Étapes pour préparer une note de crédit',
    nl: 'Stappen om een creditnota voor te bereiden'
  },
  'Clearly title the document as a "Credit Note".': {
    fr: 'Intituler clairement le document « Note de crédit ». ',
    nl: 'Het document duidelijk aanduiden als “Creditnota”.'
  },
  'Cite the original invoice number and date.': {
    fr: 'Indiquer le numéro et la date de la facture originale.',
    nl: 'Het nummer en de datum van de oorspronkelijke factuur vermelden.'
  },
  'Assign a new unique credit note number.': {
    fr: 'Attribuer un nouveau numéro unique à la note de crédit.',
    nl: 'Een nieuw uniek nummer voor de creditnota toekennen.'
  },
  'Include the supplier and customer details.': {
    fr: 'Inclure les informations du fournisseur et du client.',
    nl: 'De gegevens van leverancier en klant opnemen.'
  },
  'Specify the reason for issuing the credit.': {
    fr: 'Préciser la raison de l’émission de la note de crédit.',
    nl: 'De reden voor het uitgeven van de creditnota vermelden.'
  },
  'Present the corrected amount using a minus sign.': {
    fr: 'Présenter le montant corrigé en utilisant un signe négatif.',
    nl: 'Het gecorrigeerde bedrag weergeven met een minteken.'
  },
  'Include account numbers or payment references if applicable.': {
    fr: 'Inclure les numéros de compte ou les références de paiement si applicable.',
    nl: 'Rekeningnummers of betalingsreferenties opnemen indien van toepassing.'
  },
  'Include VAT adjustments where required. For example: "VAT to be refunded to the state to the extent originally deducted".': {
    fr: 'Inclure les ajustements de TVA lorsque requis. Par exemple : « TVA à rembourser à l’État dans la mesure initialement déduite ».',
    nl: 'Btw-aanpassingen opnemen waar nodig. Bijvoorbeeld: “Btw terug te betalen aan de staat voor het oorspronkelijk afgetrokken gedeelte”.'
  },
  'These elements ensure both the seller and the buyer can maintain proper accounting records.': {
    fr: 'Ces éléments permettent au vendeur comme à l’acheteur de maintenir des registres comptables appropriés.',
    nl: 'Deze elementen zorgen ervoor dat zowel verkoper als koper correcte boekhoudkundige registraties kunnen behouden.'
  },
  'Mandatory Details Required on a Belgian Credit Note': {
    fr: 'Informations obligatoires sur une note de crédit belge',
    nl: 'Verplichte gegevens op een Belgische creditnota'
  },
  'A Belgian credit note must contain the following information:': {
    fr: 'Une note de crédit belge doit contenir les informations suivantes :',
    nl: 'Een Belgische creditnota moet de volgende informatie bevatten:'
  },
  'Title: "Credit Note"': {
    fr: 'Titre : « Note de crédit »',
    nl: 'Titel: “Creditnota”'
  },
  'Name, address and VAT ID of both supplier and customer': {
    fr: 'Nom, adresse et numéro de TVA du fournisseur et du client',
    nl: 'Naam, adres en btw-nummer van zowel leverancier als klant'
  },
  'Credit note date': {
    fr: 'Date de la note de crédit',
    nl: 'Datum van de creditnota'
  },
  'Unique credit note number': {
    fr: 'Numéro unique de la note de crédit',
    nl: 'Uniek nummer van de creditnota'
  },
  'Reference to the original invoice': {
    fr: 'Référence à la facture originale',
    nl: 'Referentie naar de oorspronkelijke factuur'
  },
  'Reason for issuing the credit': {
    fr: 'Raison de l’émission de la note de crédit',
    nl: 'Reden voor uitgifte van de creditnota'
  },
  'Corrected amounts with a minus sign': {
    fr: 'Montants corrigés avec un signe négatif',
    nl: 'Gecorrigeerde bedragen met een minteken'
  },
  'Applicable VAT rate and VAT adjustment': {
    fr: 'Taux de TVA applicable et ajustement de TVA',
    nl: 'Toepasselijk btw-tarief en btw-aanpassing'
  },
  'Description of goods or services being corrected': {
    fr: 'Description des biens ou services corrigés',
    nl: 'Beschrijving van de gecorrigeerde goederen of diensten'
  },
  'Incomplete credit notes can create problems during audits or VAT reconciliations.': {
    fr: 'Des notes de crédit incomplètes peuvent poser des problèmes lors des audits ou des rapprochements de TVA.',
    nl: 'Onvolledige creditnota’s kunnen problemen veroorzaken tijdens audits of btw-controles.'
  },
  'Sample Structure of a Belgian Credit Note': {
    fr: 'Structure type d’une note de crédit belge',
    nl: 'Voorbeeldstructuur van een Belgische creditnota'
  },
  'A compliant credit note generally includes the following fields:': {
    fr: 'Une note de crédit conforme comprend généralement les champs suivants :',
    nl: 'Een conforme creditnota bevat doorgaans de volgende velden:'
  },
  'Supplier information and VAT ID': {
    fr: 'Informations du fournisseur et numéro de TVA',
    nl: 'Gegevens van de leverancier en btw-nummer'
  },
  'Buyer information and VAT ID': {
    fr: 'Informations de l’acheteur et numéro de TVA',
    nl: 'Gegevens van de koper en btw-nummer'
  },
  'Credit note number': {
    fr: 'Numéro de la note de crédit',
    nl: 'Nummer van de creditnota'
  },
  'Original invoice reference': {
    fr: 'Référence à la facture originale',
    nl: 'Referentie van de oorspronkelijke factuur'
  },
  'Description of adjustment': {
    fr: 'Description de l’ajustement',
    nl: 'Beschrijving van de aanpassing'
  },
  'Quantity or service details': {
    fr: 'Détails de la quantité ou du service',
    nl: 'Details van hoeveelheid of dienst'
  },
  'Corrected amounts': {
    fr: 'Montants corrigés',
    nl: 'Gecorrigeerde bedragen'
  },
  'VAT rate and VAT amount': {
    fr: 'Taux de TVA et montant de TVA',
    nl: 'Btw-tarief en btw-bedrag'
  },
  'Final total displayed as a negative amount': {
    fr: 'Total final affiché en montant négatif',
    nl: 'Eindtotaal weergegeven als een negatief bedrag'
  },
  'This model ensures clarity for both accounting and VAT purposes.': {
    fr: 'Ce modèle assure une clarté optimale pour la comptabilité et la TVA.',
    nl: 'Dit model zorgt voor duidelijkheid voor zowel boekhouding als btw-doeleinden.'
  },
  'Credit Notes for Bad Debts': {
    fr: 'Notes de crédit pour créances irrécouvrables',
    nl: 'Creditnota’s voor oninbare vorderingen'
  },
  'Belgian VAT rules allow suppliers to issue a credit note when a customer becomes insolvent or refuses payment. Issuing a credit note in such situations enables the supplier to:': {
    fr: 'Les règles de TVA belges permettent aux fournisseurs d’émettre une note de crédit lorsqu’un client devient insolvable ou refuse de payer. L’émission d’une note de crédit dans ces situations permet au fournisseur de :',
    nl: 'Volgens de Belgische btw-regels mogen leveranciers een creditnota uitreiken wanneer een klant insolvent wordt of betaling weigert. Het opstellen van een creditnota in dergelijke gevallen stelt de leverancier in staat om:'
  },
  'Reverse revenue that will never be collected': {
    fr: 'Annuler des revenus qui ne seront jamais perçus',
    nl: 'Omzet terug te draaien die nooit zal worden geïnd'
  },
  'Reclaim VAT previously paid to the treasury': {
    fr: 'Récupérer la TVA précédemment versée au Trésor',
    nl: 'Btw terug te vorderen die eerder aan de schatkist werd betaald'
  },
  'Maintain clean and transparent accounting records': {
    fr: 'Maintenir des registres comptables clairs et transparents',
    nl: 'Schone en transparante boekhouding te behouden'
  },
  'Without a credit note, businesses would absorb the loss entirely and remain liable for VAT on unpaid invoices.': {
    fr: 'Sans note de crédit, les entreprises absorberaient entièrement la perte et resteraient redevables de la TVA sur les factures impayées.',
    nl: 'Zonder creditnota zouden bedrijven het volledige verlies dragen en btw verschuldigd blijven op onbetaalde facturen.'
  },
  'Impact of Belgium\'s E Invoicing Mandate': {
    fr: 'Impact du mandat belge de facturation électronique',
    nl: 'Impact van de Belgische e-factureringsplicht'
  },
  'Belgium will require structured e invoicing from 1 January 2026. This mandate applies to invoices and credit notes. Businesses must ensure that:': {
    fr: 'La Belgique exigera la facturation électronique structurée à partir du 1er janvier 2026. Ce mandat s’applique aux factures et aux notes de crédit. Les entreprises doivent s’assurer que :',
    nl: 'België zal vanaf 1 januari 2026 gestructureerde e-facturatie verplicht stellen. Deze verplichting geldt voor facturen en creditnota’s. Bedrijven moeten ervoor zorgen dat:'
  },
  'Credit notes are generated in a structured, compliant digital format': {
    fr: 'Les notes de crédit sont générées dans un format numérique structuré et conforme',
    nl: 'Creditnota’s worden opgesteld in een gestructureerd en conform digitaal formaat'
  },
  'They follow the Peppol BIS standard or another accepted EN 16931 format': {
    fr: 'Elles suivent le standard Peppol BIS ou un autre format accepté EN 16931',
    nl: 'Ze voldoen aan de Peppol BIS-standaard of een ander aanvaard EN 16931-formaat'
  },
  'All references and VAT adjustments remain traceable within the electronic document': {
    fr: 'Toutes les références et ajustements de TVA restent traçables dans le document électronique',
    nl: 'Alle referenties en btw-aanpassingen traceerbaar blijven binnen het elektronische document'
  },
  'This change reinforces the importance of accuracy, traceability and consistency when preparing credit notes.': {
    fr: 'Ce changement renforce l’importance de la précision, de la traçabilité et de la cohérence lors de la préparation des notes de crédit.',
    nl: 'Deze verandering benadrukt het belang van nauwkeurigheid, traceerbaarheid en consistentie bij het opstellen van creditnota’s.'
  },
  'Conclusion': {
    fr: 'Conclusion',
    nl: 'Conclusie'
  },
  'Credit notes are an essential part of financial and VAT compliance in Belgium. They allow businesses to correct invoices, adjust VAT amounts and maintain transparent accounting records. As Belgium moves toward mandatory structured e invoicing in 2026, companies must ensure their credit note processes meet the new documentation requirements and integrate smoothly into their invoicing systems.': {
    fr: 'Les notes de crédit constituent un élément essentiel de la conformité financière et TVA en Belgique. Elles permettent aux entreprises de corriger des factures, d’ajuster les montants de TVA et de maintenir des registres comptables transparents. Alors que la Belgique se dirige vers la facturation électronique structurée obligatoire en 2026, les entreprises doivent veiller à ce que leurs processus liés aux notes de crédit répondent aux nouvelles exigences documentaires et s’intègrent parfaitement à leurs systèmes de facturation.',
    nl: 'Creditnota’s zijn een essentieel onderdeel van de financiële en btw-naleving in België. Ze stellen bedrijven in staat facturen te corrigeren, btw-bedragen aan te passen en transparante boekhoudkundige registraties te behouden. Nu België in 2026 overstapt op verplichte gestructureerde e-facturatie, moeten bedrijven ervoor zorgen dat hun processen rond creditnota’s voldoen aan de nieuwe documentatievereisten en naadloos integreren in hun factureringssystemen.'
  },
  'Many organizations are strengthening their digital invoicing workflows to prepare for this shift. Platforms such as Accqrate, designed to support structured invoicing and automated compliance, can help businesses manage credit notes and invoice adjustments with accuracy and confidence.': {
    fr: 'De nombreuses organisations renforcent leurs flux de facturation numérique pour se préparer à cette transition. Des plateformes telles qu’Accqrate, conçues pour prendre en charge la facturation structurée et la conformité automatisée, peuvent aider les entreprises à gérer les notes de crédit et les ajustements de factures avec précision et confiance.',
    nl: 'Veel organisaties versterken hun digitale facturatieprocessen om zich op deze verandering voor te bereiden. Platformen zoals Accqrate, ontworpen voor gestructureerde facturatie en geautomatiseerde naleving, helpen bedrijven creditnota’s en factuuraanpassingen nauwkeurig en betrouwbaar te beheren.'
  },
  // footer
  'Save time, save money': {
    fr: 'Gagnez du temps, économisez de l\'argent',
    nl: 'Bespaar tijd, bespaar geld'
  },
  'Want the latest on': {
    fr: 'Vous souhaitez les dernières mises à jour',
    nl: 'Wilt u het laatste nieuws over'
  },
  'updates, fresh product insights, and exclusive Company editorials?': {
    fr: 'des informations produit inédites et des éditoriaux exclusifs de l\'entreprise ?',
    nl: 'nieuwe productinzichten en exclusieve bedrijfsartikelen?'
  },
  'Want the latest on Peppol updates, fresh product insights, and exclusive Company editorials?': {
    fr: 'Vous souhaitez les dernières mises à jour Peppol, des informations produit inédites et des éditoriaux exclusifs de l\'entreprise ?',
    nl: 'Wilt u het laatste nieuws over Peppol-updates, nieuwe productinzichten en exclusieve bedrijfsartikelen?'
  },
  'Get fresh product insights and exclusive company editorials delivered straight to your inbox. Subscribe now to never miss a beat!': {
    fr: 'Recevez des informations produit inédites et des éditoriaux exclusifs directement dans votre boîte de réception. Abonnez-vous maintenant pour ne rien manquer !',
    nl: 'Ontvang nieuwe productinzichten en exclusieve bedrijfsartikelen rechtstreeks in uw inbox. Abonneer u nu en mis niets meer!'
  },
  'Recent Blog Posts from Accqrate': {
    fr: 'Articles de blog récents d’Accqrate',
    nl: 'Recente blogberichten van Accqrate'
  },

  // Belgium VAT Registration Number content
  'Belgium VAT Registration Number': {
    fr: 'Numéro d\'enregistrement à la TVA en Belgique',
    nl: 'Btw-registratienummer in België'
  },
  'What It Is, Why You Need It, and How to Obtain One': {
    fr: 'Qu\'est-ce que c\'est, pourquoi en avez-vous besoin et comment l\'obtenir',
    nl: 'Wat het is, waarom u het nodig heeft en hoe u er een krijgt'
  },
  'Any business that performs taxable activities in Belgium is required to register for VAT. Once registered, the company receives a VAT identification number, which is essential for invoicing, reporting, and participating in domestic or EU trade. This guide explains what a Belgian VAT number is, when registration becomes mandatory, how to obtain it, and how to verify validity through official systems.': {
    fr: 'Toute entreprise exerçant des activités imposables en Belgique doit s\'enregistrer à la TVA. Une fois enregistrée, l\'entreprise reçoit un numéro d\'identification TVA, essentiel pour la facturation, la déclaration et la participation au commerce national ou européen. Ce guide explique ce qu\'est un numéro de TVA belge, quand l\'enregistrement devient obligatoire, comment l\'obtenir et comment en vérifier la validité via les systèmes officiels.',
    nl: 'Elk bedrijf dat belastbare activiteiten in België verricht, moet zich registreren voor de btw. Na registratie krijgt het bedrijf een btw-identificatienummer, dat essentieel is voor facturering, aangifte en deelname aan binnenlandse of EU-handel. Deze gids legt uit wat een Belgisch btw-nummer is, wanneer registratie verplicht wordt, hoe u het kunt verkrijgen en hoe u de geldigheid kunt verifiëren via officiële systemen.'
  },
  '1. Understanding Belgium\'s VAT Registration Number': {
    fr: '1. Comprendre le numéro d\'enregistrement à la TVA en Belgique',
    nl: '1. Het btw-registratienummer in België begrijpen'
  },
  'A Belgian VAT registration number is a unique tax identifier issued to businesses that register for VAT. The number consists of ten digits linked to the companys enterprise number in the Crossroads Bank for Enterprises. When the prefix "BE" is added, this becomes the official VAT identification number used on invoices, returns, and EU trade documents.': {
    fr: 'Un numéro d\'enregistrement à la TVA belge est un identifiant fiscal unique délivré aux entreprises qui s\'inscrivent à la TVA. Le numéro se compose de dix chiffres liés au numéro d\'entreprise dans la Banque-Carrefour des Entreprises. Lorsque le préfixe "BE" est ajouté, cela devient le numéro d\'identification TVA officiel utilisé sur les factures, déclarations et documents commerciaux de l\'UE.',
    nl: 'Een Belgisch btw-registratienummer is een unieke fiscale identificatie die wordt uitgegeven aan bedrijven die zich registreren voor de btw. Het nummer bestaat uit tien cijfers die zijn gekoppeld aan het ondernemingsnummer van het bedrijf in de Kruispuntbank van Ondernemingen. Wanneer het voorvoegsel "BE" wordt toegevoegd, wordt dit het officiële btw-identificatienummer dat wordt gebruikt op facturen, aangiften en EU-handelsdocumenten.'
  },
  'VAT Number Format in Belgium': {
    fr: 'Format du numéro de TVA en Belgique',
    nl: 'Formaat van het btw-nummer in België'
  },
  'Component': {
    fr: 'Composant',
    nl: 'Onderdeel'
  },
  'Description': {
    fr: 'Description',
    nl: 'Beschrijving'
  },
  'Prefix': {
    fr: 'Préfixe',
    nl: 'Voorvoegsel'
  },
  'BE': {
    fr: 'BE',
    nl: 'BE'
  },
  'Structure': {
    fr: 'Structure',
    nl: 'Structuur'
  },
  'BE followed by ten digits': {
    fr: 'BE suivi de dix chiffres',
    nl: 'BE gevolgd door tien cijfers'
  },
  'Examples': {
    fr: 'Exemples',
    nl: 'Voorbeelden'
  },
  'BE0999999999 or BE1999999999': {
    fr: 'BE0999999999 ou BE1999999999',
    nl: 'BE0999999999 of BE1999999999'
  },
  'The number becomes active only after VAT activation is completed through the Federal Public Service Finance.': {
    fr: 'Le numéro ne devient actif qu\'après l\'activation de la TVA effectuée via le Service Public Fédéral Finances.',
    nl: 'Het nummer wordt pas actief na voltooiing van de btw-activering via de Federale Overheidsdienst Financiën.'
  },
  '2. Why a VAT Number Is Required': {
    fr: '2. Pourquoi un numéro de TVA est-il requis',
    nl: '2. Waarom een btw-nummer vereist is'
  },
  'A VAT registration number is mandatory for businesses that supply goods or services subject to VAT. It enables compliance with Belgian and EU VAT rules and is required for several core functions.': {
    fr: 'Un numéro d\'enregistrement à la TVA est obligatoire pour les entreprises qui fournissent des biens ou services soumis à la TVA. Il permet de se conformer aux règles de TVA belges et européennes et est requis pour plusieurs fonctions essentielles.',
    nl: 'Een btw-registratienummer is verplicht voor bedrijven die goederen of diensten leveren die onderhevig zijn aan btw. Het maakt naleving van de Belgische en EU-btw-regels mogelijk en is vereist voor verschillende kernfuncties.'
  },
  'Key Purposes of the VAT Number': {
    fr: 'Objectifs clés du numéro de TVA',
    nl: 'Belangrijkste doelen van het btw-nummer'
  },
  'Requirement': {
    fr: 'Exigence',
    nl: 'Vereiste'
  },
  'Invoicing': {
    fr: 'Facturation',
    nl: 'Facturatie'
  },
  'Must be shown on all invoices for taxable transactions': {
    fr: 'Doit figurer sur toutes les factures pour les transactions imposables',
    nl: 'Moet op alle facturen voor belastbare transacties worden vermeld'
  },
  'VAT Returns': {
    fr: 'Déclarations de TVA',
    nl: 'Btw-aangiften'
  },
  'Used to declare collected VAT and claim input VAT': {
    fr: 'Utilisé pour déclarer la TVA collectée et réclamer la TVA déductible',
    nl: 'Gebruikt om geïnde btw aan te geven en voorbelasting terug te vorderen'
  },
  'EU Trade': {
    fr: 'Commerce de l\'UE',
    nl: 'EU-handel'
  },
  'Required for intra-EU supplies, acquisitions, and reverse charge transactions': {
    fr: 'Requis pour les livraisons intra-UE, les acquisitions et les transactions en reverse charge',
    nl: 'Vereist voor intra-EU-leveringen, verwervingen en reverse charge-transacties'
  },
  'Compliance': {
    fr: 'Conformité',
    nl: 'Naleving'
  },
  'Allows Belgian authorities to identify, audit, and verify VAT-liable businesses': {
    fr: 'Permet aux autorités belges d\'identifier, d\'auditer et de vérifier les entreprises assujetties à la TVA',
    nl: 'Staat Belgische autoriteiten toe btw-plichtige bedrijven te identificeren, te controleren en te verifiëren'
  },
  'Without a valid VAT number, invoices may be considered non-compliant, which affects input VAT recovery and exposes businesses to penalties.': {
    fr: 'Sans numéro de TVA valide, les factures peuvent être considérées comme non conformes, ce qui affecte le remboursement de la TVA déductible et expose les entreprises à des pénalités.',
    nl: 'Zonder geldig btw-nummer kunnen facturen als niet-conform worden beschouwd, wat de terugvordering van voorbelasting beïnvloedt en bedrijven blootstelt aan boetes.'
  },
  '3. When VAT Registration Becomes Mandatory': {
    fr: '3. Quand l\'enregistrement à la TVA devient obligatoire',
    nl: '3. Wanneer btw-registratie verplicht wordt'
  },
  'A business must register for VAT in Belgium if it regularly performs taxable activities defined in the Belgian VAT Code. Registration applies regardless of whether the business is Belgian or foreign.': {
    fr: 'Une entreprise doit s\'inscrire à la TVA en Belgique si elle exerce régulièrement des activités imposables définies dans le Code de la TVA belge. L\'enregistrement s\'applique que l\'entreprise soit belge ou étrangère.',
    nl: 'Een bedrijf moet zich registreren voor de btw in België als het regelmatig belastbare activiteiten verricht zoals gedefinieerd in de Belgische btw-wetgeving. Registratie is van toepassing ongeacht of het bedrijf Belgisch of buitenlands is.'
  },
  'Conditions Triggering VAT Registration': {
    fr: 'Conditions déclenchant l\'enregistrement à la TVA',
    nl: 'Voorwaarden die btw-registratie activeren'
  },
  'Condition': {
    fr: 'Condition',
    nl: 'Voorwaarde'
  },
  'Explanation': {
    fr: 'Explication',
    nl: 'Uitleg'
  },
  'Regular supply of goods or services': {
    fr: 'Fourniture régulière de biens ou services',
    nl: 'Regelmatige levering van goederen of diensten'
  },
  'Activities performed on a recurring basis': {
    fr: 'Activités réalisées de manière récurrente',
    nl: 'Activiteiten die regelmatig worden uitgevoerd'
  },
  'Independent activity': {
    fr: 'Activité indépendante',
    nl: 'Onafhankelijke activiteit'
  },
  'Not performed as an employee': {
    fr: 'Non réalisée en tant que salarié',
    nl: 'Niet uitgevoerd als werknemer'
  },
  'Profit motive irrelevant': {
    fr: 'Motif de profit non pertinent',
    nl: 'Winstmotief irrelevant'
  },
  'VAT applies even if not intended to generate profit': {
    fr: 'La TVA s\'applique même si l\'activité n\'est pas destinée à générer un profit',
    nl: 'Btw is van toepassing zelfs als het niet de bedoeling is winst te genereren'
  },
  'Primary or secondary activity': {
    fr: 'Activité principale ou secondaire',
    nl: 'Primaire of secundaire activiteit'
  },
  'Applies to both main and side business activities': {
    fr: 'S\'applique aux activités commerciales principales et secondaires',
    nl: 'Van toepassing op zowel hoofd- als nevenactiviteiten'
  },
  'Location-neutral rule': {
    fr: 'Règle neutre en matière de localisation',
    nl: 'Locatie-neutrale regel'
  },
  'Applies even if work is performed outside the business\'s primary location': {
    fr: 'S\'applique même si le travail est effectué en dehors du lieu principal de l\'entreprise',
    nl: 'Van toepassing zelfs als het werk buiten de primaire locatie van het bedrijf wordt uitgevoerd'
  },
  'Exceptions for Foreign Companies': {
    fr: 'Exceptions pour les entreprises étrangères',
    nl: 'Uitzonderingen voor buitenlandse bedrijven'
  },
  'Some foreign businesses may not need to register for VAT if:': {
    fr: 'Certaines entreprises étrangères peuvent ne pas avoir besoin de s\'enregistrer à la TVA si :',
    nl: 'Sommige buitenlandse bedrijven hoeven zich mogelijk niet te registreren voor de btw als:'
  },
  'Their Belgian activities fall under the reverse charge mechanism, or': {
    fr: 'Leurs activités belges relèvent du mécanisme d\'autoliquidation, ou',
    nl: 'Hun Belgische activiteiten vallen onder het reverse charge-mechanisme, of'
  },
  'They have no taxable output in Belgium but only incur Belgian input VAT.': {
    fr: 'Elles n\'ont pas de production imposable en Belgique mais ne supportent que de la TVA déductible belge.',
    nl: 'Ze hebben geen belastbaar resultaat in België, maar hebben alleen Belgische voorbelasting.'
  },
  'EU businesses may also register voluntarily if they need to recover Belgian VAT exceeding 10,000 euros in a calendar year.': {
    fr: 'Les entreprises de l\'UE peuvent également s\'inscrire volontairement si elles ont besoin de récupérer une TVA belge supérieure à 10 000 euros par an civile.',
    nl: 'EU-bedrijven kunnen zich ook vrijwillig registreren als ze Belgische btw willen terugvorderen die meer bedraagt dan 10.000 euro per kalenderjaar.'
  },
  '4. How to Obtain a VAT Registration Number in Belgium': {
    fr: '4. Comment obtenir un numéro d\'enregistrement à la TVA en Belgique',
    nl: '4. Hoe een btw-registratienummer in België te verkrijgen'
  },
  'VAT registration requires an enterprise number from the Crossroads Bank for Enterprises (CBE). Only after this number is issued can a business activate its VAT identification.': {
    fr: 'L\'enregistrement à la TVA nécessite un numéro d\'entreprise de la Banque-Carrefour des Entreprises (BCE). Ce n\'est qu\'après l\'obtention de ce numéro qu\'une entreprise peut activer son identification TVA.',
    nl: 'Btw-registratie vereist een ondernemingsnummer van de Kruispuntbank van Ondernemingen (KBO). Pas nadat dit nummer is afgegeven kan een bedrijf zijn btw-identificatie activeren.'
  },
  'Step-by-Step Process to Get a VAT Number': {
    fr: 'Processus étape par étape pour obtenir un numéro de TVA',
    nl: 'Stapsgewijs proces om een btw-nummer te krijgen'
  },
  'Obtain an enterprise number – Register the business with the CBE.': {
    fr: 'Obtenir un numéro d\'entreprise – Inscrire l\'entreprise à la BCE.',
    nl: 'Verkrijg een ondernemingsnummer – Registreer het bedrijf bij de KBO.'
  },
  'Wait at least two days – VAT activation requests cannot be submitted immediately after CBE registration.': {
    fr: 'Attendre au moins deux jours – Les demandes d\'activation de la TVA ne peuvent pas être soumises immédiatement après l\'inscription à la BCE.',
    nl: 'Wacht minstens twee dagen – Btw-activeringsverzoeken kunnen niet onmiddellijk na KBO-registratie worden ingediend.'
  },
  'Submit VAT Registration Form 604A through MyMinfin or via an accountant or accredited business counter. Provide:': {
    fr: 'Soumettre le formulaire d\'enregistrement à la TVA 604A via MyMinfin ou via un comptable ou un guichet d\'entreprise agréé. Fournir :',
    nl: 'Dien btw-registratieformulier 604A in via MyMinfin of via een accountant of erkend bedrijvenloket. Verstrek:'
  },
  'Registered business address': {
    fr: 'Adresse commerciale enregistrée',
    nl: 'Geregistreerd bedrijfsadres'
  },
  'Bank account details': {
    fr: 'Coordonnées bancaires',
    nl: 'Bankrekeninggegevens'
  },
  'Description of activities': {
    fr: 'Description des activités',
    nl: 'Beschrijving van activiteiten'
  },
  'Contact information': {
    fr: 'Informations de contact',
    nl: 'Contactgegevens'
  },
  'Activation by FPS Finance – Once approved, the VAT identification number tied to the enterprise number becomes active.': {
    fr: 'Activation par le SPF Finances – Une fois approuvé, le numéro d\'identification TVA lié au numéro d\'entreprise devient actif.',
    nl: 'Activering door FOD Financiën – Na goedkeuring wordt het btw-identificatienummer dat aan het ondernemingsnummer is gekoppeld actief.'
  },
  'Notification Methods': {
    fr: 'Méthodes de notification',
    nl: 'Notificatiemethoden'
  },
  'Digital notification through the business\'s eBox': {
    fr: 'Notification numérique via la eBox de l\'entreprise',
    nl: 'Digitale notificatie via de eBox van het bedrijf'
  },
  'Registered mail if the eBox notification was not accessed': {
    fr: 'Lettre recommandée si la notification eBox n\'a pas été consultée',
    nl: 'Aangetekende brief als de eBox-notificatie niet werd geopend'
  },
  '5. How to Verify a Belgian VAT Number': {
    fr: '5. Comment vérifier un numéro de TVA belge',
    nl: '5. Hoe een Belgisch btw-nummer te verifiëren'
  },
  'Businesses trading within the EU must validate VAT numbers to comply with VAT exemption rules and reduce risk of fraud.': {
    fr: 'Les entreprises commercialisant au sein de l\'UE doivent valider les numéros de TVA pour se conformer aux règles d\'exemption de TVA et réduire le risque de fraude.',
    nl: 'Bedrijven die binnen de EU handel drijven, moeten btw-nummers valideren om te voldoen aan de btw-vrijstellingsregels en het risico op fraude te verminderen.'
  },
  'Verification Process': {
    fr: 'Processus de vérification',
    nl: 'Verificatieproces'
  },
  'Confirm that the number is in the correct Belgian format.': {
    fr: 'Confirmer que le numéro est au format belge correct.',
    nl: 'Bevestig dat het nummer in het juiste Belgische formaat is.'
  },
  'Use the VIES (VAT Information Exchange System) provided by the European Commission.': {
    fr: 'Utiliser le système VIES (VAT Information Exchange System) fourni par la Commission européenne.',
    nl: 'Gebruik VIES (VAT Information Exchange System) van de Europese Commissie.'
  },
  'Visit the VIES website': {
    fr: 'Visiter le site web VIES',
    nl: 'Bezoek de VIES-website'
  },
  'Select Belgium': {
    fr: 'Sélectionner la Belgique',
    nl: 'Selecteer België'
  },
  'Enter the VAT number': {
    fr: 'Entrer le numéro de TVA',
    nl: 'Voer het btw-nummer in'
  },
  'Check validity in real time': {
    fr: 'Vérifier la validité en temps réel',
    nl: 'Controleer de geldigheid in realtime'
  },
  'If VIES cannot confirm the number or is temporarily unavailable, companies may contact the Belgian Federal Public Service Finance for manual verification.': {
    fr: 'Si VIES ne peut pas confirmer le numéro ou est temporairement indisponible, les entreprises peuvent contacter le Service Public Fédéral Finances pour une vérification manuelle.',
    nl: 'Als VIES het nummer niet kan bevestigen of tijdelijk niet beschikbaar is, kunnen bedrijven contact opnemen met de Federale Overheidsdienst Financiën voor handmatige verificatie.'
  },
  '6. Responsibilities After VAT Registration': {
    fr: '6. Responsabilités après l\'enregistrement à la TVA',
    nl: '6. Verantwoordelijkheden na btw-registratie'
  },
  'Once registered, businesses must follow Belgian VAT rules and maintain accurate documentation. Failure to comply may lead to administrative penalties, interest charges, and restrictions during audits.': {
    fr: 'Une fois enregistrées, les entreprises doivent suivre les règles de TVA belges et conserver une documentation précise. Le non-respect peut entraîner des pénalités administratives, des intérêts de retard et des restrictions lors des audits.',
    nl: 'Na registratie moeten bedrijven de Belgische btw-regels volgen en nauwkeurige documentatie bijhouden. Niet-naleving kan leiden tot administratieve boetes, rentevergoedingen en beperkingen tijdens controles.'
  },
  'Core Obligations of VAT-Registered Businesses': {
    fr: 'Obligations principales des entreprises enregistrées à la TVA',
    nl: 'Kernverplichtingen van btw-geregistreerde bedrijven'
  },
  'VAT Obligation': {
    fr: 'Obligation TVA',
    nl: 'Btw-verplichting'
  },
  'Apply correct VAT rates': {
    fr: 'Appliquer les taux de TVA corrects',
    nl: 'Juiste btw-tarieven toepassen'
  },
  'Use 6, 12 or 21 percent depending on the goods or services': {
    fr: 'Utiliser 6, 12 ou 21 pour cent selon les biens ou services',
    nl: 'Gebruik 6, 12 of 21 procent afhankelijk van de goederen of diensten'
  },
  'Issue compliant invoices': {
    fr: 'Émettre des factures conformes',
    nl: 'Conforme facturen uitgeven'
  },
  'Include VAT number, rate applied, and invoice details': {
    fr: 'Inclure le numéro de TVA, le taux appliqué et les détails de la facture',
    nl: 'Btw-nummer, toegepast tarief en factuurgegevens opnemen'
  },
  'Submit VAT returns': {
    fr: 'Soumettre les déclarations de TVA',
    nl: 'Btw-aangiften indienen'
  },
  'Monthly or quarterly depending on turnover': {
    fr: 'Mensuellement ou trimestriellement selon le chiffre d\'affaires',
    nl: 'Maandelijks of driemaandelijks afhankelijk van de omzet'
  },
  'Maintain records': {
    fr: 'Conserver les registres',
    nl: 'Administratie bijhouden'
  },
  'Keep invoices and VAT documentation for at least seven years': {
    fr: 'Conserver les factures et la documentation TVA pendant au moins sept ans',
    nl: 'Facturen en btw-documentatie minstens zeven jaar bewaren'
  },
  'Submit EU declarations': {
    fr: 'Soumettre les déclarations UE',
    nl: 'EU-aangiften indienen'
  },
  'File Intrastat and European Sales Listings when required': {
    fr: 'Déposer les déclarations Intrastat et les listes des ventes européennes lorsque requis',
    nl: 'Intrastat- en Europese verkooplijsten indienen wanneer vereist'
  },
  'Verify partner VAT numbers': {
    fr: 'Vérifier les numéros de TVA des partenaires',
    nl: 'Btw-nummers van partners verifiëren'
  },
  'Mandatory for intra-EU supplies': {
    fr: 'Obligatoire pour les livraisons intra-UE',
    nl: 'Verplicht voor intra-EU-leveringen'
  },
  'Notify changes': {
    fr: 'Notifier les changements',
    nl: 'Wijzigingen melden'
  },
  'Report updates to business name, address, or activity to FPS Finance': {
    fr: 'Signaler les modifications du nom, de l\'adresse ou de l\'activité de l\'entreprise au SPF Finances',
    nl: 'Wijzigingen in bedrijfsnaam, adres of activiteit melden aan FOD Financiën'
  },
  'Compliance ensures uninterrupted business operations and protects against fines or challenges during audits.': {
    fr: 'La conformité assure la continuité des opérations commerciales et protège contre les amendes ou les contestations lors des audits.',
    nl: 'Naleving zorgt voor ononderbroken bedrijfsvoering en beschermt tegen boetes of problemen tijdens controles.'
  },
  'A Belgian VAT registration number is a fundamental requirement for any business conducting taxable activities. It ensures valid invoicing, accurate VAT reporting, and access to VAT exemptions within the EU. Whether operating in Belgium or abroad, maintaining compliance with VAT registration, filing and verification rules is essential to avoid significant financial penalties. As more processes move online, businesses benefit from organized financial systems that help maintain accuracy and meet regulatory obligations. Solutions like Accqrate, which support structured invoicing and VAT-related workflows, can help companies stay compliant and operate confidently within Belgium\'s evolving tax environment.': {
    fr: 'Un numéro d\'enregistrement à la TVA belge est une exigence fondamentale pour toute entreprise exerçant des activités imposables. Il garantit une facturation valide, une déclaration de TVA précise et l\'accès aux exemptions de TVA au sein de l\'UE. Qu\'elle opère en Belgique ou à l\'étranger, maintenir la conformité avec les règles d\'enregistrement, de déclaration et de vérification de la TVA est essentiel pour éviter des pénalités financières importantes. Alors que de plus en plus de processus passent en ligne, les entreprises bénéficient de systèmes financiers organisés qui aident à maintenir l\'exactitude et à respecter les obligations réglementaires. Des solutions comme Accqrate, qui prennent en charge la facturation structurée et les workflows liés à la TVA, peuvent aider les entreprises à rester conformes et à opérer avec confiance dans l\'environnement fiscal belge en évolution.',
    nl: 'Een Belgisch btw-registratienummer is een fundamentele vereiste voor elk bedrijf dat belastbare activiteiten uitvoert. Het zorgt voor geldige facturatie, nauwkeurige btw-aangifte en toegang tot btw-vrijstellingen binnen de EU. Of het nu in België of in het buitenland opereert, het handhaven van naleving van btw-registratie-, aangifte- en verificatieregels is essentieel om aanzienlijke financiële boetes te vermijden. Naarmate meer processen online gaan, profiteren bedrijven van georganiseerde financiële systemen die helpen bij het handhaven van nauwkeurigheid en het nakomen van regelgevingsverplichtingen. Oplossingen zoals Accqrate, die gestructureerde facturatie en btw-gerelateerde workflows ondersteunen, kunnen bedrijven helpen compliant te blijven en met vertrouwen te opereren binnen het evoluerende fiscale landschap van België.'
  }
}

export const setLanguage = (l: LanguageCode) => {
  currentLang.lang = l;
};

type TranslationKey = keyof typeof translations;
type Translations = Record<TranslationKey, Record<LanguageCode, string>>;

export const t = (text: string): string => {
  const translation = (translations as Translations)[text as TranslationKey];
  return translation?.[currentLang.lang] || text;
};
