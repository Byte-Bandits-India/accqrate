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
    fr: 'Gagnez du temps, économisez de l’argent',
    nl: 'Bespaar tijd, bespaar geld'
  },
  'Want the latest on Peppol updates, fresh product insights, and exclusive Company editorials?': {
    fr: 'Vous souhaitez les dernières mises à jour Peppol, des informations produit inédites et des éditoriaux exclusifs de l’entreprise ?',
    nl: 'Wilt u het laatste nieuws over Peppol-updates, nieuwe productinzichten en exclusieve bedrijfsartikelen?'
  },
  'Get fresh product insights and exclusive company editorials delivered straight to your inbox. Subscribe now to never miss a beat!': {
    fr: 'Recevez des informations produit inédites et des éditoriaux exclusifs directement dans votre boîte de réception. Abonnez-vous maintenant pour ne rien manquer !',
    nl: 'Ontvang nieuwe productinzichten en exclusieve bedrijfsartikelen rechtstreeks in uw inbox. Abonneer u nu en mis niets meer!'
  },
  'Recent Blog Posts from Accqrate': {
    fr: 'Articles de blog récents d’Accqrate',
    nl: 'Recente blogberichten van Accqrate'
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