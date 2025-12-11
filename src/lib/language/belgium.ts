export type LanguageCode = "en" | "fr" | "nl"|"de";
export const currentLang = { lang: "en" as LanguageCode };
const translations = {
  "PEPPOL and the Mercurius Platform in Belgium: A Complete Guide for the 2026 E Invoicing Landscape": {
    fr: "PEPPOL et la plateforme Mercurius en Belgique : guide complet pour le paysage de la facturation électronique 2026",
    nl: "PEPPOL en het Mercurius-platform in België: een complete gids voor het e-facturatie-landschap van 2026",
    de: "PEPPOL und die Mercurius-Plattform in Belgien: Ein vollständiger Leitfaden für die E-Rechnungslandschaft 2026",
  },
  "Credit Notes in Belgium: Meaning, Purpose, Rules and How to Issue Them Correctly": {
    fr: "Notes de crédit en Belgique : signification, objectif, règles et comment les émettre correctement",
    nl: "Creditnota's in België: betekenis, doel, regels en hoe ze correct uit te geven",
    de: "Gutschriften in Belgien: Bedeutung, Zweck, Regeln und wie man sie korrekt ausstellt",
  },
  "A credit note is a commercial document issued by a seller to a buyer, reducing the amount owed on a previously issued invoice...": {
    fr: "Une note de crédit est un document commercial émis par un vendeur à un acheteur, réduisant le montant dû sur une facture précédemment émise...",
    nl: "Een creditnota is een commercieel document dat door een verkoper aan een koper wordt uitgegeven en het verschuldigde bedrag op een eerder uitgegeven factuur vermindert...",
    de: "Eine Gutschrift ist ein Handelsdokument, das vom Verkäufer an den Käufer ausgestellt wird und den auf einer zuvor ausgestellten Rechnung geschuldeten Betrag reduziert...",
  },
  "Belgium VAT Registration Number: What It Is, Why You Need It, and How to Obtain One": {
    fr: "Numéro d'enregistrement TVA belge : ce que c'est, pourquoi vous en avez besoin et comment l'obtenir",
    nl: "Belgisch btw-registratienummer: wat het is, waarom u het nodig hebt en hoe u er een krijgt",
    de: "Belgische Umsatzsteuer-Identifikationsnummer: Was sie ist, warum Sie sie benötigen und wie Sie sie erhalten",
  },
  "A Belgian VAT registration number is a unique identifier assigned to businesses registered for VAT in Belgium...": {
    fr: "Un numéro d'enregistrement TVA belge est un identifiant unique attribué aux entreprises immatriculées à la TVA en Belgique...",
    nl: "Een Belgisch btw-registratienummer is een unieke identificatie toegewezen aan bedrijven die voor de btw in België zijn geregistreerd...",
    de: "Eine belgische Mehrwertsteuer-Identifikationsnummer ist ein eindeutiger Identifikator, der Unternehmen, die in Belgien für die Mehrwertsteuer registriert sind, zugewiesen wird...",
  },
  "Belgium's personal income tax system is progressive, meaning higher earners pay a higher percentage...": {
    fr: "Le système d'impôt sur le revenu des personnes physiques en Belgique est progressif, ce qui signifie que les contribuables à revenu élevé paient un pourcentage plus élevé...",
    nl: "Het persoonlijke inkomstenbelastingsysteem van België is progressief, wat betekent dat hogere inkomens een hoger percentage betalen...",
    de: "Das persönliche Einkommensteuersystem Belgiens ist progressiv, was bedeutet, dass Höherverdiener einen höheren Prozentsatz zahlen...",
  },
  "Belgium operates a complex tax system administered primarily by the Federal Public Service Finance...": {
    fr: "La Belgique opère un système fiscal complexe administré principalement par le Service Public Fédéral Finances...",
    nl: "België hanteert een complex belastingsysteem dat hoofdzakelijk wordt beheerd door de Federale Overheidsdienst Financiën...",
    de: "Belgien verfügt über ein komplexes Steuersystem, das hauptsächlich vom Föderalen Öffentlichen Dienst Finanzen verwaltet wird...",
  },
  "Corporate income tax in Belgium applies to the worldwide income of Belgian resident companies...": {
    fr: "L'impôt sur les sociétés en Belgique s'applique aux revenus mondiaux des sociétés résidentes belges...",
    nl: "De vennootschapsbelasting in België is van toepassing op het wereldwijde inkomen van in België gevestigde vennootschappen...",
    de: "Die Körperschaftsteuer in Belgien gilt für die weltweiten Einkünfte in Belgien ansässiger Unternehmen...",
  },
  "Value Added Tax (VAT) in Belgium, known locally as BTW/TVA, is a consumption tax applied to most goods and services...": {
    fr: "La taxe sur la valeur ajoutée (TVA) en Belgique, connue localement sous le nom BTW/TVA, est une taxe à la consommation appliquée à la plupart des biens et services...",
    nl: "Belasting over de toegevoegde waarde (btw) in België, lokaal bekend als BTW/TVA, is een verbruiksbelasting die op de meeste goederen en diensten wordt toegepast...",
    de: "Die Mehrwertsteuer (MwSt.) in Belgien, lokal bekannt als BTW/TVA, ist eine Verbrauchssteuer, die auf die meisten Waren und Dienstleistungen angewendet wird...",
  },
  "PEPPOL is a standardized framework that enables businesses to exchange electronic documents securely...": {
    fr: "PEPPOL est un cadre standardisé qui permet aux entreprises d'échanger des documents électroniques en toute sécurité...",
    nl: "PEPPOL is een gestandaardiseerd kader waarmee bedrijven elektronische documenten veilig kunnen uitwisselen...",
    de: "PEPPOL ist ein standardisierter Rahmen, der Unternehmen den sicheren Austausch elektronischer Dokumente ermöglicht...",
  },
  "Belgium's e-invoicing framework is built on technical precision. Learn about the EN16931 standard...": {
    fr: "Le cadre belge de facturation électronique repose sur une précision technique. Découvrez la norme EN16931...",
    nl: "Het e-facturatiekader van België is gebaseerd op technische precisie. Leer meer over de EN16931-standaard...",
    de: "Das belgische E-Rechnungsframework basiert auf technischer Präzision. Erfahren Sie mehr über den Standard EN16931...",
  },
  "Belgium is implementing a comprehensive e-invoicing mandate that will transform how businesses handle invoicing...": {
    fr: "La Belgique met en œuvre un mandat complet de facturation électronique qui transformera la façon dont les entreprises gèrent la facturation...",
    nl: "België voert een uitgebreid e-facturatiemandaat in dat de manier waarop bedrijven factureren zal transformeren...",
    de: "Belgien führt ein umfassendes E-Rechnungsmandat ein, das die Art und Weise, wie Unternehmen Rechnungen bearbeiten, verändern wird...",
  },
  "Technical Rules for E Invoicing in Belgium: Standards, Formats, and Compliance Requirements": {
    fr: "Règles techniques pour la facturation électronique en Belgique : normes, formats et exigences de conformité",
    nl: "Technische regels voor e-facturatie in België: standaarden, formaten en nalevingsvereisten",
    de: "Technische Regeln für E-Rechnungen in Belgien: Standards, Formate und Compliance-Anforderungen",
  },
  "Belgium's e Invoicing Mandate: Complete Guide to Requirements, Timelines, Scope and Readiness": {
    fr: "Mandat belge de facturation électronique : guide complet des exigences, échéances, portée et préparation",
    nl: "Het Belgische e-facturatie-mandaat: complete gids voor vereisten, tijdlijnen, reikwijdte en gereedheid",
    de: "Belgische E-Rechnungs-Mandat: Vollständiger Leitfaden zu Anforderungen, Zeitplänen, Umfang und Bereitschaft",
  },
  // Blogs: Credit Notes in Belgium
  "Credit Notes in Belgium": {
    fr: "Notes de crédit en Belgique",
    nl: "Creditnota’s in België",
    de: "Gutschriften in Belgien",
  },
  "Updated On : Nov 25th, 2024 | 16 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 16 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 16 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | 16 Minuten Lesezeit",
  },
  "Meaning, Purpose, Rules and How to Issue Them Correctly": {
    fr: "Signification, objectif, règles et manière de les émettre correctement",
    nl: "Betekenis, doel, regels en hoe ze correct uit te geven",
    de: "Bedeutung, Zweck, Regeln und wie man sie korrekt ausstellt",
  },
  "Credit notes play a central role in Belgian accounting and VAT administration. They ensure that businesses can rectify previously issued invoices without creating inconsistencies in financial records. Whether the adjustment involves incorrect pricing, returned goods, or VAT recalculation, Belgian law requires that credit notes follow strict documentation standards.":
    {
      fr: "Les notes de crédit jouent un rôle central dans la comptabilité belge et l’administration de la TVA. Elles permettent aux entreprises de rectifier des factures déjà émises sans créer d’incohérences dans les registres financiers. Qu’il s’agisse d’ajustements liés à un prix incorrect, à un retour de marchandises ou à un recalcul de TVA, la législation belge exige que les notes de crédit respectent des normes strictes de documentation.",
      nl: "Creditnota’s spelen een centrale rol in de Belgische boekhouding en btw-administratie. Ze zorgen ervoor dat bedrijven eerder uitgegeven facturen kunnen rechtzetten zonder inconsistenties in de financiële administratie te creëren. Of de aanpassing nu betrekking heeft op een foutieve prijs, geretourneerde goederen of een herberekening van de btw, de Belgische wet vereist dat creditnota’s strikte documentatievereisten volgen.",
      de: "Gutschriften spielen eine zentrale Rolle in der belgischen Buchführung und der Mehrwertsteuerverwaltung. Sie ermöglichen es Unternehmen, zuvor ausgestellte Rechnungen zu korrigieren, ohne Unstimmigkeiten in den Finanzunterlagen zu verursachen. Ob es sich um Preisfehler, Warenrückgaben oder eine Neuberechnung der Mehrwertsteuer handelt – das belgische Recht verlangt, dass Gutschriften strengen Dokumentationsstandards folgen.",
    },
  "This guide explains what credit notes are, when they must be issued, what they must contain and how they differ from debit notes. It also outlines the steps required to issue a compliant credit note under Belgian regulations.":
    {
      fr: "Ce guide explique ce que sont les notes de crédit, quand elles doivent être émises, ce qu’elles doivent contenir et en quoi elles diffèrent des notes de débit. Il décrit également les étapes nécessaires pour émettre une note de crédit conforme à la réglementation belge.",
      nl: "Deze gids legt uit wat creditnota’s zijn, wanneer ze moeten worden uitgegeven, welke informatie ze moeten bevatten en hoe ze verschillen van debetnota’s. Daarnaast worden de stappen beschreven die nodig zijn om een conforme creditnota uit te geven volgens de Belgische regelgeving.",
      de: "Dieser Leitfaden erklärt, was Gutschriften sind, wann sie ausgestellt werden müssen, welche Angaben sie enthalten müssen und wie sie sich von Belastungsanzeigen unterscheiden. Er beschreibt außerdem die Schritte, die zur Ausstellung einer konformen Gutschrift gemäß den belgischen Vorschriften erforderlich sind.",
    },
  "What Is a Credit Note in Belgium": {
    fr: "Qu’est-ce qu’une note de crédit en Belgique ?",
    nl: "Wat is een creditnota in België?",
    de: "Was ist eine Gutschrift in Belgien?",
  },
  "A credit note is an official document issued by a seller to correct or reverse part of an earlier invoice. It acknowledges that the buyer no longer owes the full amount stated on the original invoice. Credit notes often arise from pricing errors, product returns or adjustments to VAT.":{
    fr: "Une note de crédit est un document officiel émis par un vendeur pour corriger ou annuler une partie d’une facture antérieure. Elle reconnaît que l’acheteur ne doit plus le montant total indiqué sur la facture originale. Les notes de crédit découlent souvent d’erreurs de prix, de retours de produits ou d’ajustements de TVA.",
    nl: "Een creditnota is een officieel document dat door een verkoper wordt uitgegeven om een eerdere factuur geheel of gedeeltelijk te corrigeren of te herroepen. Het bevestigt dat de koper het oorspronkelijk gefactureerde bedrag niet langer volledig verschuldigd is. Creditnota’s ontstaan vaak door prijsfouten, retourzendingen of btw-aanpassingen.",
    de: "Eine Gutschrift ist ein offizielles Dokument, das von einem Verkäufer ausgestellt wird, um einen Teil einer früheren Rechnung zu korrigieren oder rückgängig zu machen. Sie bestätigt, dass der Käufer den ursprünglich in Rechnung gestellten Betrag nicht mehr vollständig schuldet. Gutschriften entstehen häufig durch Preisfehler, Warenrücksendungen oder Mehrwertsteueranpassungen.",
  },
  "A valid credit note in Belgium must:": {
    fr: "Une note de crédit valable en Belgique doit :",
    nl: "Een geldige creditnota in België moet:",
    de: "Eine gültige Gutschrift in Belgien muss:",
  },
  "Mirror the original invoice key details": {
    fr: "Reproduire les principales données de la facture originale",
    nl: "De kerngegevens van de oorspronkelijke factuur weerspiegelen",
    de: "Die wesentlichen Angaben der Originalrechnung widerspiegeln",
  },
  "Clearly reference the invoice that is being corrected": {
    fr: "Faire clairement référence à la facture corrigée",
    nl: "Duidelijk verwijzen naar de factuur die wordt gecorrigeerd",
    de: "Deutlich auf die korrigierte Rechnung verweisen",
  },
  "Contain its own unique sequential number": {
    fr: "Comporter son propre numéro unique et séquentiel",
    nl: "Een eigen uniek en opeenvolgend nummer bevatten",
    de: "Eine eigene eindeutige und fortlaufende Nummer enthalten",
  },
  "State the adjusted amounts using a minus sign": {
    fr: "Indiquer les montants ajustés avec un signe négatif",
    nl: "De aangepaste bedragen weergeven met een minteken",
    de: "Die angepassten Beträge mit einem Minuszeichen angeben",
  },
  "Credit notes form part of a company 's legal accounting records and must be stored for VAT audit purposes.":
    {
      fr: "Les notes de crédit font partie des registres comptables légaux d’une entreprise et doivent être conservées à des fins de contrôle TVA.",
      nl: "Creditnota’s maken deel uit van de wettelijke boekhoudkundige documenten van een bedrijf en moeten worden bewaard voor btw-controles.",
      de: "Gutschriften sind Bestandteil der gesetzlichen Buchhaltungsunterlagen eines Unternehmens und müssen für Mehrwertsteuerprüfungen aufbewahrt werden.",
    },
  "When a Credit Note Must Be Issued": {
    fr: "Quand une note de crédit doit-elle être émise ?",
    nl: "Wanneer moet een creditnota worden uitgegeven?",
    de: "Wann eine Gutschrift ausgestellt werden muss",
  },
  "Credit notes are issued in Belgium whenever the original invoice no longer reflects the correct payable amount. Common scenarios include:":
    {
      fr: "Les notes de crédit sont émises en Belgique lorsque la facture originale ne reflète plus le montant exact à payer. Les situations courantes incluent :",
      nl: "In België worden creditnota’s uitgegeven wanneer de oorspronkelijke factuur niet langer het juiste te betalen bedrag weerspiegelt. Veelvoorkomende situaties zijn:",
      de: "In Belgien werden Gutschriften ausgestellt, wenn die ursprüngliche Rechnung nicht mehr den korrekten zu zahlenden Betrag widerspiegelt. Häufige Szenarien sind:",
    },
  "Incorrect pricing or quantity on the original invoice": {
    fr: "Prix ou quantité incorrects sur la facture originale",
    nl: "Onjuiste prijs of hoeveelheid op de oorspronkelijke factuur",
    de: "Falscher Preis oder falsche Menge auf der Originalrechnung",
  },
  "Goods returned by the customer": {
    fr: "Marchandises retournées par le client",
    nl: "Goederen geretourneerd door de klant",
    de: "Vom Kunden zurückgesandte Waren",
  },
  "Cancellation of services after invoicing": {
    fr: "Annulation de services après facturation",
    nl: "Annulering van diensten na facturatie",
    de: "Stornierung von Dienstleistungen nach Rechnungsstellung",
  },
  "Discounts or rebates granted after the invoice was created": {
    fr: "Remises ou réductions accordées après l’émission de la facture",
    nl: "Kortingen of rabatten die na de factuur zijn toegekend",
    de: "Nach Rechnungsstellung gewährte Rabatte oder Preisnachlässe",
  },
  "Errors in VAT calculation": {
    fr: "Erreurs dans le calcul de la TVA",
    nl: "Fouten in de btw-berekening",
    de: "Fehler bei der Mehrwertsteuerberechnung",
  },
  "Full cancellation of the original sale": {
    fr: "Annulation totale de la vente initiale",
    nl: "Volledige annulering van de oorspronkelijke verkoop",
    de: "Vollständige Annullierung des ursprünglichen Verkaufs",
  },
  "Debtor insolvency or non-payment (for VAT correction on bad debts)": {
    fr: "Insolvabilité ou non-paiement du débiteur (pour correction TVA sur créances irrécouvrables)",
    nl: "Faillissement of niet-betaling door de schuldenaar (voor btw-correctie op oninbare vorderingen)",
    de: "Insolvenz oder Nichtzahlung des Schuldners (für Mehrwertsteuerkorrekturen bei uneinbringlichen Forderungen)",
  },
  "Credit notes cannot be issued once the original invoice has expired or is no longer legally adjustable.":
    {
      fr: "Les notes de crédit ne peuvent plus être émises une fois que la facture originale est échue ou n’est plus légalement ajustable.",
      nl: "Creditnota’s kunnen niet meer worden uitgegeven zodra de oorspronkelijke factuur is vervallen of wettelijk niet meer kan worden aangepast.",
      de: "Gutschriften können nicht mehr ausgestellt werden, sobald die ursprüngliche Rechnung abgelaufen ist oder rechtlich nicht mehr angepasst werden darf.",
    },
  "Credit Note vs Debit Note": {
    fr: "Note de crédit vs note de débit",
    nl: "Creditnota vs debetnota",
    de: "Gutschrift vs. Belastungsanzeige",
  },
  "Credit notes reduce the amount owed by the buyer, while debit notes increase it. Their purpose and accounting impact differ.":
    {
      fr: "Les notes de crédit réduisent le montant dû par l’acheteur, tandis que les notes de débit l’augmentent. Leur objectif et leur impact comptable diffèrent.",
      nl: "Creditnota’s verlagen het bedrag dat de koper verschuldigd is, terwijl debetnota’s het verhogen. Hun doel en boekhoudkundige impact verschillen.",
      de: "Gutschriften reduzieren den vom Käufer geschuldeten Betrag, während Belastungsanzeigen ihn erhöhen. Ihr Zweck und ihre buchhalterischen Auswirkungen unterscheiden sich.",
    },
  "Comparison Table": {
    fr: "Tableau comparatif",
    nl: "Vergelijkingstabel",
    de: "Vergleichstabelle",
  },
  Aspect: {
    fr: "Aspect",
    nl: "Aspect",
    de: "Aspekt",
  },
  "Credit Note": {
    fr: "Note de crédit",
    nl: "Creditnota",
    de: "Gutschrift",
  },
  "Debit Note": {
    fr: "Note de débit",
    nl: "Debetnota",
    de: "Belastungsanzeige",
  },
  Purpose: {
    fr: "Objectif",
    nl: "Doel",
    de: "Zweck",
  },
  "Reduces or cancels part of an existing invoice": {
    fr: "Réduit ou annule une partie d’une facture existante",
    nl: "Vermindert of annuleert een deel van een bestaande factuur",
    de: "Reduziert oder storniert einen Teil einer bestehenden Rechnung",
  },
  "Increases the value of an existing invoice": {
    fr: "Augmente la valeur d’une facture existante",
    nl: "Verhoogt de waarde van een bestaande factuur",
    de: "Erhöht den Wert einer bestehenden Rechnung",
  },
  "Amount Display": {
    fr: "Affichage du montant",
    nl: "Weergave van het bedrag",
    de: "Betragsdarstellung",
  },
  "Shown with a minus sign": {
    fr: "Indiqué avec un signe négatif",
    nl: "Weergegeven met een minteken",
    de: "Mit einem Minuszeichen dargestellt",
  },
  "Shown with a plus sign": {
    fr: "Indiqué avec un signe positif",
    nl: "Weergegeven met een plusteken",
    de: "Mit einem Pluszeichen dargestellt",
  },
  Reference: {
    fr: "Référence",
    nl: "Referentie",
    de: "Referenz",
  },
  "Must be linked to the original invoice": {
    fr: "Doit être liée à la facture originale",
    nl: "Moet gekoppeld zijn aan de oorspronkelijke factuur",
    de: "Muss mit der Originalrechnung verknüpft sein",
  },
  "Must also reference the original invoice": {
    fr: "Doit également faire référence à la facture originale",
    nl: "Moet ook verwijzen naar de oorspronkelijke factuur",
    de: "Muss ebenfalls auf die Originalrechnung verweisen",
  },
  "Accounting Impact": {
    fr: "Impact comptable",
    nl: "Boekhoudkundige impact",
    de: "Buchhalterische Auswirkungen",
  },
  "Reduction in revenue or receivables": {
    fr: "Réduction des revenus ou des créances",
    nl: "Daling van de omzet of vorderingen",
    de: "Verringerung der Umsätze oder Forderungen",
  },
  "Increase in receivables or revenue": {
    fr: "Augmentation des créances ou des revenus",
    nl: "Stijging van de vorderingen of omzet",
    de: "Erhöhung der Umsätze oder Forderungen",
  },
  "Both documents must comply with Belgian accounting standards and VAT rules.":
    {
      fr: "Les deux documents doivent être conformes aux normes comptables belges et aux règles de TVA.",
      nl: "Beide documenten moeten voldoen aan de Belgische boekhoudnormen en btw-regels.",
      de: "Beide Dokumente müssen den belgischen Buchhaltungsstandards und Mehrwertsteuerregelungen entsprechen.",
    },
  "How to Issue a Credit Note in Belgium": {
    fr: "Comment émettre une note de crédit en Belgique",
    nl: "Hoe een creditnota uitgeven in België",
    de: "Wie man eine Gutschrift in Belgien ausstellt",
  },
  "Creating a compliant credit note requires careful attention to detail. The document must clearly indicate that it modifies an earlier invoice and must contain all required VAT information.":
    {
      fr: "Établir une note de crédit conforme nécessite une attention minutieuse aux détails. Le document doit indiquer clairement qu’il modifie une facture antérieure et contenir toutes les informations requises en matière de TVA.",
      nl: "Het opstellen van een conforme creditnota vereist nauwgezette aandacht voor detail. Het document moet duidelijk aangeven dat het een eerdere factuur wijzigt en moet alle vereiste btw-informatie bevatten.",
      de: "Die Erstellung einer konformen Gutschrift erfordert große Sorgfalt. Das Dokument muss eindeutig angeben, dass es eine frühere Rechnung ändert, und alle erforderlichen Mehrwertsteuerinformationen enthalten.",
    },
  "Steps to Prepare a Credit Note": {
    fr: "Étapes pour préparer une note de crédit",
    nl: "Stappen om een creditnota voor te bereiden",
    de: "Schritte zur Erstellung einer Gutschrift",
  },
  "Clearly title the document as a \"Credit Note\".": {
    fr: "Intituler clairement le document « Note de crédit ». ",
    nl: "Het document duidelijk aanduiden als “Creditnota”.",
    de: "Das Dokument eindeutig als „Gutschrift“ kennzeichnen.",
  },
  "Cite the original invoice number and date.": {
    fr: "Indiquer le numéro et la date de la facture originale.",
    nl: "Het nummer en de datum van de oorspronkelijke factuur vermelden.",
    de: "Die Nummer und das Datum der Originalrechnung angeben.",
  },
  "Assign a new unique credit note number.": {
    fr: "Attribuer un nouveau numéro unique à la note de crédit.",
    nl: "Een nieuw uniek nummer voor de creditnota toekennen.",
    de: "Eine neue eindeutige Gutschriftsnummer vergeben.",
  },
  "Include the supplier and customer details.": {
    fr: "Inclure les informations du fournisseur et du client.",
    nl: "De gegevens van leverancier en klant opnemen.",
    de: "Angaben zu Lieferanten und Kunden angeben.",
  },
  "Specify the reason for issuing the credit.": {
    fr: "Préciser la raison de l’émission de la note de crédit.",
    nl: "De reden voor het uitgeven van de creditnota vermelden.",
    de: "Den Grund für die Ausstellung der Gutschrift angeben.",
  },
  "Present the corrected amount using a minus sign.": {
    fr: "Présenter le montant corrigé en utilisant un signe négatif.",
    nl: "Het gecorrigeerde bedrag weergeven met een minteken.",
    de: "Den korrigierten Betrag mit einem Minuszeichen angeben.",
  },
  "Include account numbers or payment references if applicable.": {
    fr: "Inclure les numéros de compte ou les références de paiement si applicable.",
    nl: "Rekeningnummers of betalingsreferenties opnemen indien van toepassing.",
    de: "Gegebenenfalls Kontonummern oder Zahlungsreferenzen angeben.",
  },
  "Include VAT adjustments where required. For example: \"VAT to be refunded to the state to the extent originally deducted\".":
    {
      fr: "Inclure les ajustements de TVA lorsque requis. Par exemple : « TVA à rembourser à l’État dans la mesure initialement déduite ».",
      nl: "Btw-aanpassingen opnemen waar nodig. Bijvoorbeeld: “Btw terug te betalen aan de staat voor het oorspronkelijk afgetrokken gedeelte”.",
      de: "Erforderliche Mehrwertsteueranpassungen aufnehmen. Zum Beispiel: „Mehrwertsteuer ist in dem ursprünglich abgezogenen Umfang an den Staat zurückzuerstatten.“",
    },
  "These elements ensure both the seller and the buyer can maintain proper accounting records.":
    {
      fr: "Ces éléments permettent au vendeur comme à l’acheteur de maintenir des registres comptables appropriés.",
      nl: "Deze elementen zorgen ervoor dat zowel verkoper als koper correcte boekhoudkundige registraties kunnen behouden.",
      de: "Diese Elemente stellen sicher, dass sowohl Verkäufer als auch Käufer ordnungsgemäße Buchhaltungsunterlagen führen können.",
    },
  "Mandatory Details Required on a Belgian Credit Note": {
    fr: "Informations obligatoires sur une note de crédit belge",
    nl: "Verplichte gegevens op een Belgische creditnota",
    de: "Pflichtangaben auf einer belgischen Gutschrift",
  },
  "A Belgian credit note must contain the following information:": {
    fr: "Une note de crédit belge doit contenir les informations suivantes :",
    nl: "Een Belgische creditnota moet de volgende informatie bevatten:",
    de: "Eine belgische Gutschrift muss die folgenden Angaben enthalten:",
  },
  "Title: \"Credit Note\"": {
    fr: "Titre : « Note de crédit »",
    nl: "Titel: “Creditnota”",
    de: "Titel: „Gutschrift“",
  },
  "Name, address and VAT ID of both supplier and customer": {
    fr: "Nom, adresse et numéro de TVA du fournisseur et du client",
    nl: "Naam, adres en btw-nummer van zowel leverancier als klant",
    de: "Name, Adresse und USt-IdNr. von Lieferant und Kunde",
  },
  "Credit note date": {
    fr: "Date de la note de crédit",
    nl: "Datum van de creditnota",
    de: "Datum der Gutschrift",
  },
  "Unique credit note number": {
    fr: "Numéro unique de la note de crédit",
    nl: "Uniek nummer van de creditnota",
    de: "Eindeutige Gutschriftsnummer",
  },
  "Reference to the original invoice": {
    fr: "Référence à la facture originale",
    nl: "Referentie naar de oorspronkelijke factuur",
    de: "Referenz auf die Originalrechnung",
  },
  "Reason for issuing the credit": {
    fr: "Raison de l’émission de la note de crédit",
    nl: "Reden voor uitgifte van de creditnota",
    de: "Grund für die Ausstellung der Gutschrift",
  },
  "Corrected amounts with a minus sign": {
    fr: "Montants corrigés avec un signe négatif",
    nl: "Gecorrigeerde bedragen met een minteken",
    de: "Korrigierte Beträge mit einem Minuszeichen",
  },
  "Applicable VAT rate and VAT adjustment": {
    fr: "Taux de TVA applicable et ajustement de TVA",
    nl: "Toepasselijk btw-tarief en btw-aanpassing",
    de: "Anwendbarer Mehrwertsteuersatz und Mehrwertsteueranpassung",
  },
  "Description of goods or services being corrected": {
    fr: "Description des biens ou services corrigés",
    nl: "Beschrijving van de gecorrigeerde goederen of diensten",
    de: "Beschreibung der korrigierten Waren oder Dienstleistungen",
  },
  "Incomplete credit notes can create problems during audits or VAT reconciliations.":
    {
      fr: "Des notes de crédit incomplètes peuvent poser des problèmes lors des audits ou des rapprochements de TVA.",
      nl: "Onvolledige creditnota’s kunnen problemen veroorzaken tijdens audits of btw-controles.",
      de: "Unvollständige Gutschriften können bei Prüfungen oder Mehrwertsteuerabgleichen Probleme verursachen.",
    },
  "Sample Structure of a Belgian Credit Note": {
    fr: "Structure type d’une note de crédit belge",
    nl: "Voorbeeldstructuur van een Belgische creditnota",
    de: "Beispielaufbau einer belgischen Gutschrift",
  },
  "A compliant credit note generally includes the following fields:": {
    fr: "Une note de crédit conforme comprend généralement les champs suivants :",
    nl: "Een conforme creditnota bevat doorgaans de volgende velden:",
    de: "Eine konforme Gutschrift enthält in der Regel die folgenden Felder:",
  },
  "Supplier information and VAT ID": {
    fr: "Informations du fournisseur et numéro de TVA",
    nl: "Gegevens van de leverancier en btw-nummer",
    de: "Angaben zum Lieferanten und zur USt-IdNr.",
  },
  "Buyer information and VAT ID": {
    fr: "Informations de l’acheteur et numéro de TVA",
    nl: "Gegevens van de koper en btw-nummer",
    de: "Angaben zum Käufer und zur USt-IdNr.",
  },
  "Credit note number": {
    fr: "Numéro de la note de crédit",
    nl: "Nummer van de creditnota",
    de: "Nummer der Gutschrift",
  },
  "Original invoice reference": {
    fr: "Référence à la facture originale",
    nl: "Referentie van de oorspronkelijke factuur",
    de: "Referenz auf die Originalrechnung",
  },
  "Description of adjustment": {
    fr: "Description de l’ajustement",
    nl: "Beschrijving van de aanpassing",
    de: "Beschreibung der Anpassung",
  },
  "Quantity or service details": {
    fr: "Détails de la quantité ou du service",
    nl: "Details van hoeveelheid of dienst",
    de: "Angaben zur Menge of zur Leistung",
  },
  "Corrected amounts": {
    fr: "Montants corrigés",
    nl: "Gecorrigeerde bedragen",
    de: "Korrigierte Beträge",
  },
  "VAT rate and VAT amount": {
    fr: "Taux de TVA et montant de TVA",
    nl: "Btw-tarief en btw-bedrag",
    de: "Mehrwertsteuersatz und Mehrwertsteuerbetrag",
  },
  "Final total displayed as a negative amount": {
    fr: "Total final affiché en montant négatif",
    nl: "Eindtotaal weergegeven als een negatief bedrag",
    de: "Endbetrag, der als negativer Betrag ausgewiesen wird",
  },
  "This model ensures clarity for both accounting and VAT purposes.": {
    fr: "Ce modèle assure une clarté optimale pour la comptabilité et la TVA.",
    nl: "Dit model zorgt voor duidelijkheid voor zowel boekhouding als btw-doeleinden.",
    de: "Dieses Modell sorgt sowohl für die Buchführung als auch für Mehrwertsteuerzwecke für Klarheit.",
  },
  "Credit Notes for Bad Debts": {
    fr: "Notes de crédit pour créances irrécouvrables",
    nl: "Creditnota’s voor oninbare vorderingen",
    de: "Gutschriften für uneinbringliche Forderungen",
  },
  "Belgian VAT rules allow suppliers to issue a credit note when a customer becomes insolvent or refuses payment. Issuing a credit note in such situations enables the supplier to:":
    {
      fr: "Les règles de TVA belges permettent aux fournisseurs d’émettre une note de crédit lorsqu’un client devient insolvable ou refuse de payer. L’émission d’une note de crédit dans ces situations permet au fournisseur de :",
      nl: "Volgens de Belgische btw-regels mogen leveranciers een creditnota uitreiken wanneer een klant insolvent wordt of betaling weigert. Het opstellen van een creditnota in dergelijke gevallen stelt de leverancier in staat om:",
      de: "Die belgischen Mehrwertsteuervorschriften ermöglichen es Lieferanten, eine Gutschrift auszustellen, wenn ein Kunde insolvent wird oder die Zahlung verweigert. Die Ausstellung einer Gutschrift in solchen Fällen ermöglicht es dem Lieferanten:",
    },
  "Reverse revenue that will never be collected": {
    fr: "Annuler des revenus qui ne seront jamais perçus",
    nl: "Omzet terug te draaien die nooit zal worden geïnd",
    de: "Umsätze auszubuchen, die niemals vereinnahmt werden",
  },
  "Reclaim VAT previously paid to the treasury": {
    fr: "Récupérer la TVA précédemment versée au Trésor",
    nl: "Btw terug te vorderen die eerder aan de schatkist werd betaald",
    de: "Zuvor an die Staatskasse abgeführte Mehrwertsteuer zurückzufordern",
  },
  "Maintain clean and transparent accounting records": {
    fr: "Maintenir des registres comptables clairs et transparents",
    nl: "Schone en transparante boekhouding te behouden",
    de: "Eine ordentliche und transparente Buchführung aufrechtzuerhalten",
  },
  "Without a credit note, businesses would absorb the loss entirely and remain liable for VAT on unpaid invoices.":
    {
      fr: "Sans note de crédit, les entreprises absorberaient entièrement la perte et resteraient redevables de la TVA sur les factures impayées.",
      nl: "Zonder creditnota zouden bedrijven het volledige verlies dragen en btw verschuldigd blijven op onbetaalde facturen.",
      de: "Ohne Gutschrift würden Unternehmen den Verlust vollständig tragen und blieben weiterhin für die Mehrwertsteuer auf unbezahlte Rechnungen haftbar.",
    },
  "Impact of Belgium's E Invoicing Mandate": {
    fr: "Impact du mandat belge de facturation électronique",
    nl: "Impact van de Belgische e-factureringsplicht",
    de: "Auswirkungen der belgischen E-Rechnungspflicht",
  },
  "Belgium will require structured e invoicing from 1 January 2026. This mandate applies to invoices and credit notes. Businesses must ensure that:":
    {
      fr: "La Belgique exigera la facturation électronique structurée à partir du 1er janvier 2026. Ce mandat s’applique aux factures et aux notes de crédit. Les entreprises doivent s’assurer que :",
      nl: "België zal vanaf 1 januari 2026 gestructureerde e-facturatie verplicht stellen. Deze verplichting geldt voor facturen en creditnota’s. Bedrijven moeten ervoor zorgen dat:",
      de: "Belgien wird ab dem 1. Januar 2026 strukturierte E-Rechnungsstellung vorschreiben. Diese Verpflichtung gilt für Rechnungen und Gutschriften. Unternehmen müssen sicherstellen, dass:",
    },
  "Credit notes are generated in a structured, compliant digital format": {
    fr: "Les notes de crédit sont générées dans un format numérique structuré et conforme",
    nl: "Creditnota’s worden opgesteld in een gestructureerd en conform digitaal formaat",
    de: "Gutschriften in einem strukturierten, konformen digitalen Format erzeugt werden",
  },
  "They follow the Peppol BIS standard or another accepted EN 16931 format": {
    fr: "Elles suivent le standard Peppol BIS ou un autre format accepté EN 16931",
    nl: "Ze voldoen aan de Peppol BIS-standaard of een ander aanvaard EN 16931-formaat",
    de: "Sie dem Peppol-BIS-Standard oder einem anderen anerkannten EN-16931-Format entsprechen",
  },
  "All references and VAT adjustments remain traceable within the electronic document":
    {
      fr: "Toutes les références et ajustements de TVA restent traçables dans le document électronique",
      nl: "Alle referenties en btw-aanpassingen traceerbaar blijven binnen het elektronische document",
      de: "Alle Referenzen und Mehrwertsteueranpassungen innerhalb des elektronischen Dokuments nachvollziehbar bleiben",
    },
  "This change reinforces the importance of accuracy, traceability and consistency when preparing credit notes.":
    {
      fr: "Ce changement renforce l’importance de la précision, de la traçabilité et de la cohérence lors de la préparation des notes de crédit.",
      nl: "Deze verandering benadrukt het belang van nauwkeurigheid, traceerbaarheid en consistentie bij het opstellen van creditnota’s.",
      de: "Diese Änderung unterstreicht die Bedeutung von Genauigkeit, Nachvollziehbarkeit und Konsistenz bij der Erstellung von Gutschriften.",
    },
  Conclusion: {
    fr: "Conclusion",
    nl: "Conclusie",
    de: "Fazit",
  },
  "Credit notes are an essential part of financial and VAT compliance in Belgium. They allow businesses to correct invoices, adjust VAT amounts and maintain transparent accounting records. As Belgium moves toward mandatory structured e invoicing in 2026, companies must ensure their credit note processes meet the new documentation requirements and integrate smoothly into their invoicing systems.":
    {
      fr: "Les notes de crédit constituent un élément essentiel de la conformité financière et TVA en Belgique. Elles permettent aux entreprises de corriger des factures, d’ajuster les montants de TVA et de maintenir des registres comptables transparents. Alors que la Belgique se dirige vers la facturation électronique structurée obligatoire en 2026, les entreprises doivent veiller à ce que leurs processus liés aux notes de crédit répondent aux nouvelles exigences documentaires et s’intègrent parfaitement à leurs systèmes de facturation.",
      nl: "Creditnota’s zijn een essentieel onderdeel van de financiële en btw-naleving in België. Ze stellen bedrijven in staat facturen te corrigeren, btw-bedragen aan te passen en transparante boekhoudkundige registraties te behouden. Nu België in 2026 overstapt op verplichte gestructureerde e-facturatie, moeten bedrijven ervoor zorgen dat hun processen rond creditnota’s voldoen aan de nieuwe documentatievereisten en naadloos integreren in hun factureringssystemen.",
      de: "Gutschriften sind ein wesentlicher Bestandteil der Finanz- und Mehrwertsteuer-Compliance in Belgien. Sie ermöglichen es Unternehmen, Rechnungen zu korrigieren, Mehrwertsteuerbeträge anzupassen und transparente Buchhaltungsunterlagen zu führen. Da Belgien 2026 zur verpflichtenden strukturierten E-Rechnungsstellung übergeht, müssen Unternehmen sicherstellen, dass ihre Prozesse für Gutschriften die neuen Dokumentationsanforderungen erfüllen und sich nahtlos in ihre Fakturierungssysteme integrieren.",
    },
  "Many organizations are strengthening their digital invoicing workflows to prepare for this shift. Platforms such as Accqrate, designed to support structured invoicing and automated compliance, can help businesses manage credit notes and invoice adjustments with accuracy and confidence.":
    {
      fr: "De nombreuses organisations renforcent leurs flux de facturation numérique pour se préparer à cette transition. Des plateformes telles qu’Accqrate, conçues pour prendre en charge la facturation structurée et la conformité automatisée, peuvent aider les entreprises à gérer les notes de crédit et les ajustements de factures avec précision et confiance.",
      nl: "Veel organisaties versterken hun digitale facturatieprocessen om zich op deze verandering voor te bereiden. Platformen zoals Accqrate, ontworpen voor gestructureerde facturatie en geautomatiseerde naleving, helpen bedrijven creditnota’s en factuuraanpassingen nauwkeurig en betrouwbaar te beheren.",
      de: "Viele Unternehmen stärken ihre digitalen Rechnungsprozesse, um sich auf diesen Wandel vorzubereiten. Plattformen wie Accqrate, die für strukturierte Rechnungsstellung und automatisierte Compliance entwickelt wurden, können Unternehmen dabei unterstützen, Gutschriften und Rechnungsanpassungen präzise und zuverlässig zu verwalten.",
    },
  // footer
  "Save time, save money": {
    fr: "Gagnez du temps, économisez de l'argent",
    nl: "Bespaar tijd, bespaar geld",
    de: "Sparen Sie Zeit, sparen Sie Geld",
  },
  "Want the latest on": {
    fr: "Vous souhaitez les dernières mises à jour",
    nl: "Wilt u het laatste nieuws over",
    de: "Möchten Sie die neuesten Informationen zu",
  },
  "updates, fresh product insights, and exclusive Company editorials?": {
    fr: "des informations produit inédites et des éditoriaux exclusifs de l'entreprise ?",
    nl: "nieuwe productinzichten en exclusieve bedrijfsartikelen?",
    de: "Updates, neuen Produkteinblicken und exklusiven Unternehmensartikeln?",
  },
  "Want the latest on Peppol updates, fresh product insights, and exclusive Company editorials?":
    {
      fr: "Vous souhaitez les dernières mises à jour Peppol, des informations produit inédites et des éditoriaux exclusifs de l'entreprise ?",
      nl: "Wilt u het laatste nieuws over Peppol-updates, nieuwe productinzichten en exclusieve bedrijfsartikelen?",
      de: "Möchten Sie die neuesten Peppol-Updates, neue Produkteinblicke en exklusive Unternehmensartikel erhalten?",
    },
  "Get fresh product insights and exclusive company editorials delivered straight to your inbox. Subscribe now to never miss a beat!":
    {
      fr: "Recevez des informations produit inédites et des éditoriaux exclusifs directement dans votre boîte de réception. Abonnez-vous maintenant pour ne rien manquer !",
      nl: "Ontvang nieuwe productinzichten en exclusieve bedrijfsartikelen rechtstreeks in uw inbox. Abonneer u nu en mis niets meer!",
      de: "Erhalten Sie neue Produkteinblicke und exklusive Unternehmensartikel direkt in Ihren Posteingang. Abonnieren Sie jetzt, damit Sie nichts mehr verpassen!",
    },
  "Recent Blog Posts from Accqrate": {
    fr: "Articles de blog récents d’Accqrate",
    nl: "Recente blogberichten van Accqrate",
    de: "Aktuelle blogbeiträge von Accqrate",
  },
 
  "Updated On : Nov 25th, 2024 | 25 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 25 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 25 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | 25 Minuten Lesezeit",
  },
  "Belgium is accelerating its digital transformation agenda with one of the most significant reforms to its financial compliance landscape. Beginning January 1, 2026, structured electronic invoicing will become mandatory for nearly all B2B transactions between VAT liable Belgian entities. The mandate requires invoices to be exchanged in Peppol BIS UBL format over the Peppol network, while allowing alternative EN16931 compliant formats by mutual agreement. Traditional PDFs and paper invoices will no longer qualify as compliant B2B invoices.":
    {
      fr: "La Belgique accélère son agenda de transformation numérique avec l’une des réformes les plus importantes de son paysage de conformité financière. À partir du 1er janvier 2026, la facturation électronique structurée deviendra obligatoire pour la quasi-totalité des transactions B2B entre assujettis belges à la TVA. Le mandat exige que les factures soient échangées au format Peppol BIS UBL via le réseau Peppol, tout en autorisant, d’un commun accord, d’autres formats conformes à la norme EN16931. Les PDF traditionnels et les factures papier ne seront plus considérés comme des factures B2B conformes.",
      nl: "België versnelt zijn digitale transformatieagenda met een van de belangrijkste hervormingen van het financiële compliancelandschap. Vanaf 1 januari 2026 wordt gestructureerde elektronische facturatie verplicht voor vrijwel alle B2B-transacties tussen Belgische btw-plichtige entiteiten. De verplichting vereist dat facturen in Peppol BIS UBL-formaat via het Peppol-netwerk worden uitgewisseld, terwijl alternatieve EN16931-conforme formaten bij onderlinge overeenkomst worden toegestaan. Traditionele pdf’s en papieren facturen zullen niet langer als conforme B2B-facturen gelden.",
      de: "Belgien beschleunigt seine digitale Transformationsagenda mit einer der bedeutendsten Reformen seiner finanzrechtlichen Compliance-Landschaft. Ab dem 1. Januar 2026 wird strukturierte elektronische Rechnungsstellung für nahezu alle B2B-Transaktionen zwischen in Belgien mehrwertsteuerpflichtigen Unternehmen verpflichtend. Die Regelung verlangt, dass Rechnungen im Peppol-BIS-UBL-Format über das Peppol-Netzwerk ausgetauscht werden, erlaubt jedoch im gegenseitigen Einvernehmen auch andere EN16931-konforme Formate. Herkömmliche PDFs und Papierrechnungen gelten dann nicht mehr als konforme B2B-Rechnungen.",
    },
  "This transition reflects a broader EU wide effort to streamline tax administration and prepare for real time reporting. Belgium has already announced that a national e reporting system will follow in 2028, which will transmit structured invoice data directly to the Federal Public Service Finance for validation and audit retention.":
    {
      fr: "Cette transition s’inscrit dans un effort plus large à l’échelle de l’UE visant à rationaliser l’administration fiscale et à préparer le terrain pour le reporting en temps quasi réel. La Belgique a déjà annoncé qu’un système national de e-reporting suivra en 2028, qui transmettra les données de factures structurées directement au Service public fédéral Finances pour validation et conservation à des fins de contrôle.",
      nl: "Deze overgang maakt deel uit van een bredere EU-brede inspanning om de belastingadministratie te stroomlijnen en de weg te effenen voor near-real-time rapportage. België heeft al aangekondigd dat er in 2028 een nationaal e-rapportagesysteem zal volgen, dat gestructureerde factuurgegevens rechtstreeks naar de Federale Overheidsdienst Financiën zal sturen voor validatie en auditdoeleinden.",
      de: "Dieser Übergang ist Teil einer breiteren EU-weiten Initiative zur Straffung der Steuerverwaltung und zur Vorbereitung auf eine nahezu in Echtzeit erfolgende Meldung. Belgien hat bereits angekündigt, dass 2028 ein nationales E-Reporting-System folgen wird, das strukturierte Rechnungsdaten direkt an den Föderalen Öffentlichen Dienst Finanzen zur Validierung und revisionssicheren Aufbewahrung übermittelt.",
    },
  "Understanding e Invoicing in Belgium": {
    fr: "Comprendre la facturation électronique en Belgique",
    nl: "E-facturatie in België begrijpen",
    de: "E-Rechnungsstellung in Belgien verstehen",
  },
  "Electronic invoicing refers to issuing, transmitting, receiving, and processing invoices in a structured digital format. Structured invoices follow predefined schemas that information systems can read automatically. This eliminates manual entry, reduces errors, and enables full automation in financial workflows.":
    {
      fr: "La facturation électronique désigne l’émission, la transmission, la réception et le traitement de factures dans un format numérique structuré. Les factures structurées suivent des schémas prédéfinis que les systèmes d’information peuvent lire automatiquement. Cela élimine la saisie manuelle, réduit les erreurs et permet une automatisation complète des flux financiers.",
      nl: "Elektronische facturatie verwijst naar het uitreiken, verzenden, ontvangen en verwerken van facturen in een gestructureerd digitaal formaat. Gestructureerde facturen volgen vooraf gedefinieerde schema’s die informatiesystemen automatisch kunnen lezen. Dit elimineert handmatige invoer, vermindert fouten en maakt volledige automatisering van financiële processen mogelijk.",
      de: "Elektronische Rechnungsstellung bezeichnet das Ausstellen, Übermitteln, Empfangen und Verarbeiten von Rechnungen in einem strukturierten digitalen Format. Strukturierte Rechnungen folgen vordefinierten Schemas, die von Informationssystemen automatisch gelesen werden können. Dadurch entfallen manuelle Dateneingaben, Fehler werden reduziert und finanzielle Abläufe können vollständig automatisiert werden.",
    },
    "Browse Our Resources": {
  fr: "Parcourez nos ressources",
  nl: "Blader door onze bronnen",
  de: "Durchsuchen Sie unsere Ressourcen",
},
"Stay Updated With The Latest News And Updates From PEPPOL And Accurate E-Invoicing Enhancements For Seamless Business Operations.": {
  fr: "Restez informé des dernières actualités et mises à jour de PEPPOL ainsi que des améliorations d’e-facturation d’Accqrate pour des opérations commerciales fluides.",
  nl: "Blijf op de hoogte van het laatste nieuws en updates van PEPPOL en de Accqrate-verbeteringen voor e-facturatie voor soepele bedrijfsvoering.",
  de: "Bleiben Sie auf dem Laufenden über die neuesten Nachrichten und Aktualisierungen von PEPPOL sowie über die Accqrate-Verbesserungen der E-Rechnungsstellung für reibungslose Geschäftsabläufe.",
},
"If you have any other questions not addressed here": {
  fr: "Si vous avez d’autres questions qui ne sont pas abordées ici",
  nl: "Als u nog andere vragen heeft die hier niet worden besproken",
  de: "Wenn Sie weitere Fragen haben, die hier nicht behandelt werden",
},
"Advancing Digital Compliance & E-Invoicing for Belgium and the EU": {
  fr: "Faire progresser la conformité numérique et la facturation électronique pour la Belgique et l’UE",
  nl: "Digitale naleving en e-facturatie voor België en de EU bevorderen",
  de: "Digitale Compliance und elektronische Rechnungsstellung für Belgien und die EU voranbringen",
},

  "Belgium's model aligns with the European EN16931 standard. This standard defines the structure and required elements of an e invoice and is used across EU member states for cross border interoperability. Belgium uses the Peppol network to exchange invoices securely and consistently.":
    {
      fr: "Le modèle belge est aligné sur la norme européenne EN16931. Cette norme définit la structure et les éléments requis d’une facture électronique et est utilisée par les États membres de l’UE pour garantir l’interopérabilité transfrontalière. La Belgique utilise le réseau Peppol pour échanger les factures de manière sécurisée et uniforme.",
      nl: "Het Belgische model is afgestemd op de Europese EN16931-norm. Deze norm definieert de structuur en de verplichte elementen van een e-factuur en wordt in EU-lidstaten gebruikt voor grensoverschrijdende interoperabiliteit. België maakt gebruik van het Peppol-netwerk om facturen veilig en consistent uit te wisselen.",
      de: "Das belgische Modell orientiert sich am europäischen Standard EN16931. Dieser Standard definiert die Struktur und die erforderlichen Elemente einer E-Rechnung und wird in den EU-Mitgliedstaaten für die grenzüberschreitende Interoperabilität eingesetzt. Belgien nutzt das Peppol-Netzwerk, um Rechnungen sicher und einheitlich auszutauschen.",
    },
  "Key characteristics of Belgian e invoicing:": {
    fr: "Caractéristiques clés de la facturation électronique belge :",
    nl: "Belangrijkste kenmerken van e-facturatie in België:",
    de: "Wesentliche Merkmale der belgischen E-Rechnungsstellung:",
  },
  "Only structured formats are allowed for mandated transactions": {
    fr: "Seuls les formats structurés sont autorisés pour les transactions soumises à l’obligation",
    nl: "Alleen gestructureerde formaten zijn toegestaan voor verplichte transacties",
    de: "Für verpflichtende Transaktionen sind nur strukturierte Formate zulässig",
  },
  "Peppol BIS 3.0 UBL is the default format": {
    fr: "Peppol BIS 3.0 UBL est le format par défaut",
    nl: "Peppol BIS 3.0 UBL is het standaardformaat",
    de: "Peppol BIS 3.0 UBL ist das Standardformat",
  },
  "EN16931 is the minimum compliance standard": {
    fr: "EN16931 constitue le niveau minimal de conformité",
    nl: "EN16931 is de minimale compliancestandaard",
    de: "EN16931 ist der Mindest-Compliance-Standard",
  },
  "Peppol Access Points manage the secure exchange of invoices": {
    fr: "Les points d’accès Peppol gèrent l’échange sécurisé des factures",
    nl: "Peppol Access Points verzorgen de veilige uitwisseling van facturen",
    de: "Peppol Access Points übernehmen den sicheren Austausch von Rechnungen",
  },
  "The Mercurius platform is used for public sector invoicing": {
    fr: "La plateforme Mercurius est utilisée pour la facturation du secteur public",
    nl: "Het Mercurius-platform wordt gebruikt voor facturatie in de publieke sector",
    de: "Die Mercurius-Plattform wird für die Rechnungsstellung im öffentlichen Sektor genutzt",
  },
  " Belgium's E Invoicing Timeline": {
    fr: " Calendrier de la facturation électronique en Belgique",
    nl: " Tijdlijn van de e-facturatie in België",
    de: " Zeitplan für die E-Rechnungsstellung in Belgien",
  },
  "Belgium's transition follows a multi year roadmap focused on both B2G and B2B invoicing.":
    {
      fr: "La transition de la Belgique suit une feuille de route pluriannuelle axée à la fois sur la facturation B2G et B2B.",
      nl: "De Belgische overgang volgt een meerjarenroadmap die gericht is op zowel B2G- als B2B-facturatie.",
      de: "Der belgische Übergang folgt einer mehrjährigen Roadmap mit Fokus auf B2G- und B2B-Rechnungsstellung.",
    },
  "1 March 2024": {
    fr: "1er mars 2024",
    nl: "1 maart 2024",
    de: "1. März 2024",
  },
  "Mandatory e invoicing for all federal public contracts exceeding 3,000 euros.":
    {
      fr: "Facturation électronique obligatoire pour tous les marchés publics fédéraux de plus de 3 000 euros.",
      nl: "Verplichte e-facturatie voor alle federale overheidsopdrachten van meer dan 3.000 euro.",
      de: "Verpflichtende E-Rechnungsstellung für alle föderalen öffentlichen Aufträge mit einem Volumen von mehr als 3.000 Euro.",
    },
  "1 January 2026": {
    fr: "1er janvier 2026",
    nl: "1 januari 2026",
    de: "1. Januar 2026",
  },
  "Mandatory B2B e invoicing for nearly all transactions between Belgian VAT liable entities.":
    {
      fr: "Facturation électronique B2B obligatoire pour la quasi-totalité des transactions entre entités belges assujetties à la TVA.",
      nl: "Verplichte B2B-e-facturatie voor vrijwel alle transacties tussen Belgische btw-plichtige entiteiten.",
      de: "Verpflichtende B2B-E-Rechnungsstellung für nahezu alle Transaktionen zwischen in Belgien mehrwertsteuerpflichtigen Unternehmen.",
    },
  "2028": {
    fr: "2028",
    nl: "2028",
    de: "2028",
  },
  "Planned introduction of a near real time e reporting system. All structured invoices will be forwarded electronically to the tax authority for automated validation and storage.":
    {
      fr: "Introduction prévue d’un système de e-reporting en quasi temps réel. Toutes les factures structurées seront transmises électroniquement à l’administration fiscale pour validation automatisée et archivage.",
      nl: "Geplande invoering van een near-real-time e-rapportagesysteem. Alle gestructureerde facturen zullen elektronisch naar de belastingdienst worden doorgestuurd voor geautomatiseerde validatie en opslag.",
      de: "Geplante Einführung eines nahezu in Echtzeit arbeitenden E-Reportingsystems. Sämtliche strukturierten Rechnungen werden elektronisch an die Steuerbehörde übermittelt, wo sie automatisiert geprüft und archiviert werden.",
    },
  "1 July 2030": {
    fr: "1er juillet 2030",
    nl: "1 juli 2030",
    de: "1. Juli 2030",
  },
  "Belgium plans to adopt EU wide e reporting for cross border transactions under the VAT in the Digital Age (ViDA) program.":
    {
      fr: "La Belgique prévoit d’adopter un système d’e-reporting à l’échelle de l’UE pour les transactions transfrontalières dans le cadre du programme TVA à l’ère du numérique (ViDA).",
      nl: "België is van plan EU-brede e-rapportage voor grensoverschrijdende transacties in te voeren in het kader van het programma “btw in het digitale tijdperk” (ViDA).",
      de: "Belgien plant, im Rahmen des Programms „Mehrwertsteuer im digitalen Zeitalter“ (ViDA) ein EU-weites E-Reporting für grenzüberschreitende Transaktionen einzuführen.",
    },
  "The E Invoicing Process in Belgium": {
    fr: "Le processus de facturation électronique en Belgique",
    nl: "Het e-facturatieproces in België",
    de: "Der E-Rechnungsprozess in Belgien",
  },
  "Belgium uses the Peppol network and the Mercurius platform to enable structured invoice exchange. The workflow follows four primary stages:":
    {
      fr: "La Belgique utilise le réseau Peppol et la plateforme Mercurius pour permettre l’échange structuré de factures. Le flux de travail suit quatre étapes principales :",
      nl: "België gebruikt het Peppol-netwerk en het Mercurius-platform om gestructureerde factuuruitwisseling mogelijk te maken. De workflow omvat vier hoofdfasen:",
      de: "Belgien nutzt das Peppol-Netzwerk und die Mercurius-Plattform, um den Austausch strukturierter Rechnungen zu ermöglichen. Der Ablauf umfasst vier Hauptphasen:",
    },
  "Invoice Creation": {
    fr: "Création de la facture",
    nl: "Aanmaken van de factuur",
    de: "Rechnungserstellung",
  },
  "Businesses generate a structured e invoice in Peppol BIS 3.0 format using compliant software or ERP systems.":
    {
      fr: "Les entreprises génèrent une facture électronique structurée au format Peppol BIS 3.0 à l’aide de logiciels ou d’ERP conformes.",
      nl: "Bedrijven maken een gestructureerde e-factuur in Peppol BIS 3.0-formaat aan met behulp van conforme software of ERP-systemen.",
      de: "Unternehmen erstellen eine strukturierte E-Rechnung im Peppol-BIS-3.0-Format mithilfe konformer Software oder ERP-Systeme.",
    },
  "Sending the Invoice": {
    fr: "Envoi de la facture",
    nl: "Verzending van de factuur",
    de: "Versand der Rechnung",
  },
  "Invoices are transmitted through the Peppol network via certified Access Points that ensure secure delivery.":
    {
      fr: "Les factures sont transmises via le réseau Peppol par l’intermédiaire de points d’accès certifiés, qui garantissent une transmission sécurisée.",
      nl: "Facturen worden via het Peppol-netwerk verzonden via gecertificeerde Access Points, die een veilige aflevering garanderen.",
      de: "Rechnungen werden über das Peppol-Netzwerk über zertifizierte Access Points übermittelt, die eine sichere Zustellung gewährleisten.",
    },
  "Automated Processing": {
    fr: "Traitement automatisé",
    nl: "Geautomatiseerde verwerking",
    de: "Automatisierte Verarbeitung",
  },
  "The recipient's system imports the invoice and initiates automated validation, approval, and payment workflows.":
    {
      fr: "Le système du destinataire importe la facture et lance des workflows automatisés de validation, d’approbation et de paiement.",
      nl: "Het systeem van de ontvanger importeert de factuur en start geautomatiseerde workflows voor validatie, goedkeuring en betaling.",
      de: "Das System des Empfängers importiert die Rechnung und startet automatisierte Workflows für Prüfung, Freigabe und Zahlung.",
    },
  "Archiving and Compliance": {
    fr: "Archivage et conformité",
    nl: "Archivering en naleving",
    de: "Archivierung und Compliance",
  },
  "All invoices are retained in accordance with VAT retention rules. Mercurius provides tracking for public sector invoices.":
    {
      fr: "Toutes les factures sont conservées conformément aux règles de conservation applicables en matière de TVA. Mercurius assure le suivi des factures du secteur public.",
      nl: "Alle facturen worden bewaard in overeenstemming met de bewaartermijnen voor btw. Mercurius biedt tracering voor facturen aan de publieke sector.",
      de: "Alle Rechnungen werden gemäß den Aufbewahrungsvorschriften für die Mehrwertsteuer gespeichert. Mercurius ermöglicht die Nachverfolgung von Rechnungen im öffentlichen Sektor.",
    },
  "Regulatory Scope and Transaction Coverage": {
    fr: "Champ réglementaire et couverture des transactions",
    nl: "Regelgevend toepassingsgebied en transactiedekking",
    de: "Regulatorischer Umfang und erfasste Transaktionen",
  },
  "The mandate applies across several categories of invoicing. Below is the complete mapping.":
    {
      fr: "Le mandat s’applique à plusieurs catégories de facturation. Vous trouverez ci-dessous la cartographie complète.",
      nl: "De verplichting is van toepassing op meerdere categorieën van facturatie. Hieronder volgt de volledige mapping.",
      de: "Die Vorgabe gilt für mehrere Kategorien der Rechnungsstellung. Nachstehend ist die vollständige Zuordnung aufgeführt.",
    },
  " B2G Transactions (Business to Government)": {
    fr: " Transactions B2G (entreprises – pouvoirs publics)",
    nl: " B2G-transacties (business to government)",
    de: " B2G-Transaktionen (Business-to-Government)",
  },
  "Mandatory for all public contracts published after 1 March 2024": {
    fr: "Obligatoire pour tous les marchés publics publiés après le 1er mars 2024",
    nl: "Verplicht voor alle overheidsopdrachten die na 1 maart 2024 zijn gepubliceerd",
    de: "Verpflichtend für alle öffentlichen Aufträge, die nach dem 1. März 2024 veröffentlicht wurden",
  },
  "Applies to contracts above 3,000 euros": {
    fr: "S’applique aux marchés de plus de 3 000 euros",
    nl: "Van toepassing op contracten van meer dan 3.000 euro",
    de: "Gilt für Verträge mit einem Volumen von mehr als 3.000 Euro",
  },
  "Federal authorities may require e invoices even for smaller contract values":
    {
      fr: "Les autorités fédérales peuvent exiger des e-factures même pour des montants de marché inférieurs",
      nl: "Federale overheden kunnen zelfs voor lagere opdrachtbedragen e-facturen eisen",
      de: "Bundesbehörden können auch bei geringeren Auftragswerten E-Rechnungen verlangen",
    },
  " B2B Transactions (Business to Business)": {
    fr: " Transactions B2B (entreprises – entreprises)",
    nl: " B2B-transacties (business to business)",
    de: " B2B-Transaktionen (Business-to-Business)",
  },
  "Mandatory from 1 January 2026 for nearly all Belgian VAT registered companies. Exemptions include:":
    {
      fr: "Obligatoire à compter du 1er janvier 2026 pour la quasi-totalité des entreprises belges immatriculées à la TVA. Les exemptions incluent :",
      nl: "Verplicht vanaf 1 januari 2026 voor vrijwel alle in België btw-geregistreerde ondernemingen. Uitzonderingen zijn onder meer:",
      de: "Ab dem 1. Januar 2026 für nahezu alle in Belgien mehrwertsteuerlich registrierten Unternehmen verpflichtend. Ausnahmen umfassen unter anderem:",
    },
  "Entities engaged exclusively in VAT exempt activities under Article 44": {
    fr: "Entités exerçant exclusivement des activités exonérées de TVA en vertu de l’article 44",
    nl: "Entiteiten die uitsluitend btw-vrijgestelde activiteiten uitoefenen onder artikel 44",
    de: "Unternehmen, die ausschließlich mehrwertsteuerbefreite Tätigkeiten nach Artikel 44 ausüben",
  },
  "Businesses undergoing bankruptcy": {
    fr: "Entreprises en cours de faillite",
    nl: "Ondernemingen in faillissementsprocedure",
    de: "Unternehmen im laufenden Insolvenzverfahren",
  },
  "Foreign companies without a Belgian establishment": {
    fr: "Sociétés étrangères sans établissement en Belgique",
    nl: "Buitenlandse ondernemingen zonder vestiging in België",
    de: "Ausländische Unternehmen ohne Betriebsstätte in Belgien",
  },
  "Flat rate VAT payers until 1 January 2028": {
    fr: "Assujettis au régime forfaitaire de TVA jusqu’au 1er janvier 2028",
    nl: "Forfaitaire btw-plichtigen tot 1 januari 2028",
    de: "Pauschalbesteuerte Mehrwertsteuerzahler bis zum 1. Januar 2028",
  },
  "B2C Transactions (Business to Consumer)": {
    fr: "Transactions B2C (entreprise – consommateur)",
    nl: "B2C-transacties (business to consumer)",
    de: "B2C-Transaktionen (Business-to-Consumer)",
  },
  "No obligation to issue structured e invoices, but businesses must still be capable of receiving them from suppliers.":
    {
      fr: "Aucune obligation d’émettre des factures électroniques structurées, mais les entreprises doivent néanmoins être en mesure d’en recevoir de la part de leurs fournisseurs.",
      nl: "Geen verplichting om gestructureerde e-facturen uit te reiken, maar ondernemingen moeten ze wel van leveranciers kunnen ontvangen.",
      de: "Keine Verpflichtung zur Ausstellung strukturierter E-Rechnungen, aber Unternehmen müssen in der Lage sein, solche Rechnungen von ihren Lieferanten zu empfangen.",
    },
  " International Transactions": {
    fr: " Transactions internationales",
    nl: " Internationale transacties",
    de: " Internationale Transaktionen",
  },
  "Permitted by mutual agreement. Peppol is preferred for consistency and interoperability.":
    {
      fr: "Autorisées d’un commun accord. Peppol est privilégié pour garantir cohérence et interopérabilité.",
      nl: "Toegestaan op basis van wederzijds akkoord. Peppol heeft de voorkeur voor consistentie en interoperabiliteit.",
      de: "Zulässig auf Grundlage gegenseitiger Vereinbarung. Peppol wird zur Sicherstellung von Konsistenz und Interoperabilität bevorzugt.",
    },
  " Future E Reporting Obligations in Belgium": {
    fr: " Futures obligations de e-reporting en Belgique",
    nl: " Toekomstige e-rapportageverplichtingen in België",
    de: " Zukünftige E-Reporting-Pflichten in Belgien",
  },
  "Belgium will introduce a national e reporting mechanism from 2028. When this becomes effective:":
    {
      fr: "La Belgique mettra en place un mécanisme national de e-reporting à partir de 2028. Lorsqu’il entrera en vigueur :",
      nl: "België zal vanaf 2028 een nationaal e-rapportagemechanisme invoeren. Zodra dit van kracht wordt:",
      de: "Belgien wird ab 2028 einen nationalen E-Reporting-Mechanismus einführen. Sobald dieser wirksam ist:",
    },
  "All structured invoices for domestic B2B transactions must be transmitted to the tax authority in real time":
    {
      fr: "Toutes les factures structurées pour les transactions B2B nationales devront être transmises en temps quasi réel à l’administration fiscale",
      nl: "Alle gestructureerde facturen voor binnenlandse B2B-transacties moeten in quasi real time naar de belastingdienst worden verzonden",
      de: "Alle strukturierten Rechnungen für inländische B2B-Transaktionen müssen in Echtzeit an die Steuerbehörde übermittelt werden",
    },
  "Data will be validated automatically and stored for audit purposes": {
    fr: "Les données seront automatiquement validées et conservées à des fins de contrôle",
    nl: "De gegevens worden automatisch gevalideerd en opgeslagen voor auditdoeleinden",
    de: "Die Daten werden automatisch validiert und für Prüfungszwecke gespeichert",
  },
  "The model will rely on the same EN16931 and Peppol BIS standards used for e invoicing":
    {
      fr: "Le modèle s’appuiera sur les mêmes normes EN16931 et Peppol BIS que celles utilisées pour la facturation électronique",
      nl: "Het model zal steunen op dezelfde EN16931- en Peppol BIS-standaarden als voor e-facturatie",
      de: "Das Modell stützt sich auf dieselben EN16931- und Peppol-BIS-Standards, die auch für die E-Rechnungsstellung verwendet werden",
    },
  "Cross border invoices will shift to the EU ViDA model by mid 2030, ensuring alignment across EU member states":
    {
      fr: "Les factures transfrontalières basculeront vers le modèle européen ViDA d’ici mi-2030, garantissant un alignement entre les États membres de l’UE",
      nl: "Grensoverschrijdende facturen zullen tegen medio 2030 overschakelen naar het EU-ViDA-model, waardoor afstemming tussen de EU-lidstaten wordt gewaarborgd",
      de: "Grenzüberschreitende Rechnungen werden bis Mitte 2030 auf das EU-ViDA-Modell umgestellt, um eine Angleichung zwischen den EU-Mitgliedstaaten sicherzustellen",
    },
  "Benefits for Belgian Enterprises": {
    fr: "Avantages pour les entreprises belges",
    nl: "Voordelen voor Belgische ondernemingen",
    de: "Vorteile für belgische Unternehmen",
  },
  "The shift to structured e invoicing brings significant operational, financial, and compliance related advantages:":
    {
      fr: "Le passage à la facturation électronique structurée apporte des avantages opérationnels, financiers et de conformité significatifs :",
      nl: "De overstap naar gestructureerde e-facturatie biedt aanzienlijke operationele, financiële en compliancerelateerde voordelen:",
      de: "Der Wechsel zur strukturierten E-Rechnungsstellung bringt erhebliche operative, finanzielle und compliancebezogene Vorteile mit sich:",
    },
  "Reduced processing costs due to elimination of paper, printing, and manual data entry":
    {
      fr: "Réduction des coûts de traitement grâce à la suppression du papier, de l’impression et de la saisie manuelle",
      nl: "Lagere verwerkingskosten door het wegvallen van papier, drukwerk en handmatige gegevensinvoer",
      de: "Gesunkene Verarbeitungskosten durch Wegfall von Papier, Druck und manueller Datenerfassung",
    },
  "Faster cycle times and quicker approvals leading to improved cash flow": {
    fr: "Cycles de traitement plus courts et validations plus rapides, améliorant ainsi la trésorerie",
    nl: "Kortere doorlooptijden en snellere goedkeuringen, wat leidt tot een betere cashflow",
    de: "Kürzere Durchlaufzeiten und schnellere Freigaben, was zu einer verbesserten Liquidität führt",
  },
  "Lower error rates through automated validation and data consistency": {
    fr: "Taux d’erreur réduits grâce à la validation automatisée et à la cohérence des données",
    nl: "Lagere foutenmarges door geautomatiseerde validatie en consistente data",
    de: "Niedrigere Fehlerraten durch automatisierte Validierung und konsistente Daten",
  },
  "Stronger compliance with structured data, audit trails, and secure transport":
    {
      fr: "Renforcement de la conformité grâce à des données structurées, des pistes d’audit et un transport sécurisé",
      nl: "Sterkere naleving dankzij gestructureerde data, audit trails en veilige overdracht",
      de: "Stärkere Compliance durch strukturierte Daten, Prüfpfade und gesicherten Datentransport",
    },
  "Improved vendor relationships and payment predictability": {
    fr: "Amélioration des relations fournisseurs et de la prévisibilité des paiements",
    nl: "Verbeterde leveranciersrelaties en voorspelbaarheid van betalingen",
    de: "Verbesserte Lieferantenbeziehungen und höhere Vorhersehbarkeit von Zahlungen",
  },
  "A measurable reduction in environmental impact through reduced paper usage":
    {
      fr: "Réduction mesurable de l’impact environnemental grâce à une moindre utilisation du papier",
      nl: "Een meetbare vermindering van de milieu-impact door minder papierverbruik",
      de: "Messbare Verringerung der Umweltauswirkungen durch reduzierten Papierverbrauch",
    },
  "Technical Requirements Companies Must Follow": {
    fr: "Exigences techniques auxquelles les entreprises doivent se conformer",
    nl: "Technische vereisten waaraan bedrijven moeten voldoen",
    de: "Technische Anforderungen, die Unternehmen erfüllen müssen",
  },
  "Belgium enforces several technical rules to ensure invoice integrity and compliance:":
    {
      fr: "La Belgique impose plusieurs règles techniques afin de garantir l’intégrité des factures et la conformité :",
      nl: "België hanteert verschillende technische regels om de integriteit van facturen en naleving te waarborgen:",
      de: "Belgien setzt mehrere technische Regeln durch, um die Integrität von Rechnungen und die Compliance sicherzustellen:",
    },
  "Any modification must refer directly to the original invoice and use a structured format":
    {
      fr: "Toute modification doit se référer directement à la facture originale et utiliser un format structuré",
      nl: "Elke wijziging moet rechtstreeks verwijzen naar de oorspronkelijke factuur en een gestructureerd formaat gebruiken",
      de: "Jede Änderung muss direkt auf die Originalrechnung Bezug nehmen und ein strukturiertes Format verwenden",
    },
  "The authenticity of the issuer must be verifiable by both parties": {
    fr: "L’authenticité de l’émetteur doit être vérifiable par les deux parties",
    nl: "De authenticiteit van de opsteller moet door beide partijen verifieerbaar zijn",
    de: "Die Echtheit des Ausstellers muss für beide Parteien nachprüfbar sein",
  },
  "Invoice content must remain unchanged throughout the retention period": {
    fr: "Le contenu de la facture doit rester inchangé pendant toute la durée de conservation",
    nl: "De inhoud van de factuur moet ongewijzigd blijven gedurende de volledige bewaartermijn",
    de: "Der Inhalt der Rechnung muss während der gesamten Aufbewahrungsfrist unverändert bleiben",
  },
  "Invoices must remain readable and accessible for VAT audits": {
    fr: "Les factures doivent rester lisibles et accessibles en cas de contrôle TVA",
    nl: "Facturen moeten leesbaar en toegankelijk blijven voor btw-controles",
    de: "Rechnungen müssen für Mehrwertsteuerprüfungen lesbar und zugänglich bleiben",
  },
  "A complete audit trail must be maintained to connect an invoice to its transaction path":
    {
      fr: "Une piste d’audit complète doit être conservée pour relier la facture à son flux de transactions",
      nl: "Er moet een volledige audit trail worden bijgehouden die de factuur koppelt aan haar transactiestroom",
      de: "Es muss ein vollständiger Audit Trail geführt werden, der die Rechnung mit ihrem Transaktionsablauf verknüpft",
    },
  "These rules ensure reliability, traceability, and compliance throughout the invoice lifecycle.":
    {
      fr: "Ces règles garantissent fiabilité, traçabilité et conformité tout au long du cycle de vie de la facture.",
      nl: "Deze regels waarborgen betrouwbaarheid, traceerbaarheid en naleving gedurende de volledige levenscyclus van de factuur.",
      de: "Diese Regeln gewährleisten Zuverlässigkeit, Nachvollziehbarkeit und Compliance während des gesamten Lebenszyklus einer Rechnung.",
    },
  "Preparing for the 2026 Mandate: Business Readiness Checklist": {
    fr: "Préparer l’échéance 2026 : checklist de préparation pour les entreprises",
    nl: "Voorbereiden op de verplichting van 2026: checklist voor bedrijfsbereidheid",
    de: "Vorbereitung auf die Vorgaben 2026: Checkliste zur Unternehmensbereitschaft",
  },
  "To comply with Belgium's e invoicing framework, businesses should begin preparation well ahead of the deadline.":
    {
      fr: "Pour se conformer au cadre belge de facturation électronique, les entreprises doivent se préparer bien avant l’échéance.",
      nl: "Om te voldoen aan het Belgische e-facturatiekader, moeten ondernemingen ruim vóór de deadline met de voorbereidingen beginnen.",
      de: "Um den belgischen Vorgaben zur E-Rechnungsstellung zu entsprechen, sollten Unternehmen sich lange vor Ablauf der Frist vorbereiten.",
    },
  "System and Infrastructure Readiness": {
    fr: "Préparation des systèmes et de l’infrastructure",
    nl: "Gereedheid van systemen en infrastructuur",
    de: "System- und Infrastrukturbereitschaft",
  },
  "Assess whether your accounting or ERP platform supports Peppol BIS 3.0": {
    fr: "Évaluer si votre logiciel comptable ou votre ERP prend en charge Peppol BIS 3.0",
    nl: "Beoordeel of uw boekhoud- of ERP-systeem Peppol BIS 3.0 ondersteunt",
    de: "Prüfen, ob Ihr Buchhaltungs- oder ERP-System Peppol BIS 3.0 unterstützt",
  },
  "Validate EN16931 compatibility": {
    fr: "Vérifier la compatibilité avec la norme EN16931",
    nl: "Bevestig compatibiliteit met EN16931",
    de: "Die Kompatibilität mit EN16931 sicherstellen",
  },
  "Upgrade systems if needed to automate invoice ingestion and processing": {
    fr: "Mettre à niveau les systèmes si nécessaire afin d’automatiser la réception et le traitement des factures",
    nl: "Systemen indien nodig upgraden om het inlezen en verwerken van facturen te automatiseren",
    de: "Systeme bei Bedarf aufrüsten, um den Eingang und die Verarbeitung von Rechnungen zu automatisieren",
  },
  " Software Selection": {
    fr: " Sélection des logiciels",
    nl: " Softwareselectie",
    de: " Softwareauswahl",
  },
  "Expansion and Growth in EU": {
  fr: "Expansion et croissance dans l’UE",
  nl: "Uitbreiding en groei in de EU",
  de: "Expansion und Wachstum in der EU",
},
"Accqrate has experienced remarkable growth and innovation, marked by significant achievements:": {
  fr: "Accqrate a connu une croissance et une innovation remarquables, marquées par des réalisations significatives :",
  nl: "Accqrate heeft een opmerkelijke groei en innovatie doorgemaakt, gekenmerkt door belangrijke prestaties:",
  de: "Accqrate hat ein bemerkenswertes Wachstum und Innovation erlebt, geprägt von bedeutenden Erfolgen:",
},
"Get a Free Proof of Concept": {
  fr: "Obtenez une preuve de concept gratuite",
  nl: "Ontvang een gratis proof of concept",
  de: "Erhalten Sie einen kostenlosen Proof of Concept",
},

"Subscribe for Updates": {
  fr: "Abonnez-vous pour recevoir des mises à jour",
  nl: "Abonneer u voor updates",
  de: "Für Updates abonnieren",
},

"Talk to Sales": {
  fr: "Parler à l’équipe commerciale",
  nl: "Praat met het verkoopteam",
  de: "Mit dem Vertrieb sprechen",
},


  "Choose a Peppol certified solution provider": {
    fr: "Choisir un prestataire de solutions certifié Peppol",
    nl: "Kies een Peppol-gecertificeerde oplossingaanbieder",
    de: "Einen Peppol-zertifizierten Lösungsanbieter auswählen",
  },
  "Confirm support for structured formats used in Belgium": {
    fr: "Confirmer la prise en charge des formats structurés utilisés en Belgique",
    nl: "Bevestig ondersteuning voor de gestructureerde formaten die in België worden gebruikt",
    de: "Sicherstellen, dass die in Belgien verwendeten strukturierten Formate unterstützt werden",
  },
  "Ensure the software integrates with Mercurius for B2G transactions": {
    fr: "Veiller à ce que le logiciel s’intègre à Mercurius pour les transactions B2G",
    nl: "Zorg ervoor dat de software integreert met Mercurius voor B2G-transacties",
    de: "Sicherstellen, dass die Software für B2G-Transaktionen mit Mercurius integriert ist",
  },
  " Process Integration": {
    fr: " Intégration des processus",
    nl: " Procesintegratie",
    de: " Prozessintegration",
  },
  "Work with IT and finance teams to map internal workflows": {
    fr: "Travailler avec les équipes IT et financières pour cartographier les workflows internes",
    nl: "Werk samen met IT- en financiële teams om interne workflows in kaart te brengen",
    de: "Mit IT- und Finanzteams zusammenarbeiten, um interne Workflows zu dokumentieren",
  },
  "Ensure invoice data flows seamlessly between systems": {
    fr: "Veiller à une circulation fluide des données de facturation entre les systèmes",
    nl: "Zorg ervoor dat factuurgegevens naadloos tussen systemen stromen",
    de: "Sicherstellen, dass Rechnungsdaten nahtlos zwischen den Systemen fließen",
  },
  "Establish automated validation and approval processes": {
    fr: "Mettre en place des processus automatisés de validation et d’approbation",
    nl: "Geautomatiseerde validatie- en goedkeuringsprocessen opzetten",
    de: "Automatisierte Prüf- und Genehmigungsprozesse einführen",
  },
  " Supplier and Customer Coordination": {
    fr: " Coordination avec fournisseurs et clients",
    nl: " Afstemming met leveranciers en klanten",
    de: " Koordination mit Lieferanten und Kunden",
  },
  "Align with partners on structured invoice exchange": {
    fr: "S’aligner avec les partenaires sur l’échange de factures structurées",
    nl: "Stem met partners af over de uitwisseling van gestructureerde facturen",
    de: "Mit Geschäftspartnern die Nutzung des strukturierten Rechnungsaustauschs abstimmen",
  },
  "Confirm readiness on both sides to send and receive Peppol BIS invoices": {
    fr: "Confirmer la capacité des deux parties à envoyer et recevoir des factures Peppol BIS",
    nl: "Bevestig dat beide partijen klaar zijn om Peppol BIS-facturen te verzenden en te ontvangen",
    de: "Die Bereitschaft beider Seiten bestätigen, Peppol-BIS-Rechnungen zu senden und zu empfangen",
  },
  "Set up self billing arrangements where applicable": {
    fr: "Mettre en place des accords d’auto-facturation lorsque c’est approprié",
    nl: "Richt waar nodig self-billingregelingen in",
    de: "Selbstfakturierungsvereinbarungen einrichten, wo dies sinnvoll ist",
  },
  "Governance and Internal Controls": {
    fr: "Gouvernance et contrôles internes",
    nl: "Governance en interne controles",
    de: "Governance und interne Kontrollen",
  },
  "Define invoice approval workflows": {
    fr: "Définir des workflows d’approbation des factures",
    nl: "Definieer workflows voor factuurgoedkeuring",
    de: "Workflows für die Rechnungsfreigabe festlegen",
  },
  "Maintain audit trails that connect invoices to their source transactions": {
    fr: "Maintenir des pistes d’audit reliant les factures à leurs transactions sources",
    nl: "Behoud audit trails die facturen koppelen aan de onderliggende transacties",
    de: "Audit Trails pflegen, die Rechnungen mit den zugrunde liegenden Transaktionen verknüpfen",
  },
  "Train finance teams on structured data formats and new processes": {
    fr: "Former les équipes financières aux formats de données structurées et aux nouveaux processus",
    nl: "Leid financiële teams op in gestructureerde dataformaten en nieuwe processen",
    de: "Finanzteams in strukturierten Datenformaten und neuen Prozessen schulen",
  },
  "Common Challenges Companies Face": {
    fr: "Principaux défis rencontrés par les entreprises",
    nl: "Veelvoorkomende uitdagingen voor bedrijven",
    de: "Häufige Herausforderungen für Unternehmen",
  },
  "Although e invoicing brings long term efficiencies, many businesses encounter:":
    {
      fr: "Bien que la facturation électronique apporte des gains d’efficacité à long terme, de nombreuses entreprises rencontrent :",
      nl: "Hoewel e-facturatie op lange termijn efficiëntie oplevert, worden veel bedrijven geconfronteerd met:",
      de: "Obwohl E-Rechnungsstellung langfristige Effizienzgewinne bringt, sehen sich viele Unternehmen mit folgenden Themen konfrontiert:",
    },
  "Upfront investment in technology upgrades": {
    fr: "Des investissements initiaux dans la mise à niveau technologique",
    nl: "Aanvankelijke investeringen in technologie-upgrades",
    de: "Anfangsinvestitionen in Technologie-Upgrades",
  },
  "Complexity in understanding structured data requirements": {
    fr: "La complexité liée à la compréhension des exigences en matière de données structurées",
    nl: "Complexiteit bij het begrijpen van de vereisten voor gestructureerde data",
    de: "Komplexität beim Verständnis der Anforderungen an strukturierte Daten",
  },
  "Change management issues involving finance and operations teams": {
    fr: "Des enjeux de conduite du changement pour les équipes financières et opérationnelles",
    nl: "Verandermanagementproblemen bij financiële en operationele teams",
    de: "Herausforderungen im Change Management bei Finanz- und Operativteams",
  },
  "Additional training needs for staff": {
    fr: "Des besoins de formation supplémentaires pour le personnel",
    nl: "Extra opleidingsbehoeften voor medewerkers",
    de: "Zusätzlichen Schulungsbedarf für Mitarbeitende",
  },
  "Early preparation significantly reduces the intensity of these challenges.":
    {
      fr: "Une préparation anticipée réduit considérablement l’ampleur de ces difficultés.",
      nl: "Vroegtijdige voorbereiding vermindert de impact van deze uitdagingen aanzienlijk.",
      de: "Frühzeitige Vorbereitung verringert die Schwere dieser Herausforderungen erheblich.",
    },
  " Penalties for Non Compliance": {
    fr: " Sanctions en cas de non-conformité",
    nl: " Sancties bij niet-naleving",
    de: " Sanktionen bei Nichtbefolgung",
  },
  "VAT liable businesses must be capable of issuing and receiving structured e invoices. Penalties apply when companies fail to meet these obligations:":
    {
      fr: "Les entreprises assujetties à la TVA doivent être en mesure d’émettre et de recevoir des factures électroniques structurées. Des sanctions s’appliquent lorsqu’elles ne respectent pas ces obligations :",
      nl: "Btw-plichtige ondernemingen moeten gestructureerde e-facturen kunnen uitreiken en ontvangen. Bij niet-naleving gelden de volgende sancties:",
      de: "Mehrwertsteuerpflichtige Unternehmen müssen in der Lage sein, strukturierte E-Rechnungen auszustellen und zu empfangen. Bei Nichterfüllung dieser Pflichten gelten folgende Sanktionen:",
    },
  "First violation results in a fine of 1,500 euros": {
    fr: "Une première infraction entraîne une amende de 1 500 euros",
    nl: "Bij een eerste overtreding volgt een boete van 1.500 euro",
    de: "Beim ersten Verstoß wird ein Bußgeld von 1.500 Euro verhängt",
  },
  "Second violation increases the fine to 3,000 euros": {
    fr: "Une deuxième infraction porte l’amende à 3 000 euros",
    nl: "Bij een tweede overtreding wordt de boete verhoogd tot 3.000 euro",
    de: "Beim zweiten Verstoß erhöht sich das Bußgeld auf 3.000 Euro",
  },
  "Any further violation leads to a fine of 5,000 euros": {
    fr: "Toute infraction supplémentaire entraîne une amende de 5 000 euros",
    nl: "Bij elke verdere overtreding volgt een boete van 5.000 euro",
    de: "Jeder weitere Verstoß führt zu einem Bußgeld von 5.000 Euro",
  },
  "Penalties escalate only when prior violations have been officially recorded and at least three months have passed between offenses, giving businesses time to correct non compliance.":
    {
      fr: "Les sanctions n’augmentent que lorsque les infractions précédentes ont été officiellement constatées et qu’au moins trois mois se sont écoulés entre deux manquements, laissant aux entreprises le temps de se mettre en conformité.",
      nl: "Sancties worden slechts verzwaard wanneer eerdere overtredingen officieel zijn vastgesteld en er minstens drie maanden tussen de inbreuken zitten, zodat bedrijven tijd hebben om de niet-naleving te corrigeren.",
      de: "Die Sanktionen steigen nur dann an, wenn frühere Verstöße offiziell protokolliert wurden und zwischen den Verstößen mindestens drei Monate liegen, sodass Unternehmen Zeit haben, ihre Nicht-Compliance zu beheben.",
    },
  "Final Outlook": {
    fr: "Perspectives finales",
    nl: "Eindvooruitzicht",
    de: "Abschließender Ausblick",
  },
  "Belgium's transition to mandatory e invoicing marks a decisive shift toward a fully digital financial environment. With B2G e invoicing already enforced and B2B obligations beginning in January 2026, businesses need to modernize their processes, reinforce internal controls, and ensure their systems are capable of exchanging structured invoice data reliably.":
    {
      fr: "La transition de la Belgique vers la facturation électronique obligatoire marque un tournant décisif vers un environnement financier entièrement numérique. Avec la facturation électronique B2G déjà en vigueur et les obligations B2B à partir de janvier 2026, les entreprises doivent moderniser leurs processus, renforcer leurs contrôles internes et s’assurer que leurs systèmes peuvent échanger de manière fiable des données de factures structurées.",
      nl: "De overgang van België naar verplichte e-facturatie betekent een beslissende stap richting een volledig digitale financiële omgeving. Nu B2G-e-facturatie al van kracht is en B2B-verplichtingen in januari 2026 starten, moeten bedrijven hun processen moderniseren, interne controles versterken en ervoor zorgen dat hun systemen gestructureerde factuurdata betrouwbaar kunnen uitwisselen.",
      de: "Der Übergang Belgiens zur verpflichtenden E-Rechnungsstellung markiert einen entscheidenden Schritt hin zu einer vollständig digitalen Finanzumgebung. Da B2G-E-Rechnungen bereits vorgeschrieben sind und die B2B-Pflichten im Januar 2026 beginnen, müssen Unternehmen ihre Prozesse modernisieren, interne Kontrollen stärken und sicherstellen, dass ihre Systeme strukturiere Rechnungsdaten zuverlässig austauschen können.",
    },
  "The rollout of real time e reporting in 2028 will further elevate data accuracy and automation requirements. Companies that begin preparing early will experience smoother compliance, reduced operational overhead, and more predictable cash flow.":
    {
      fr: "Le déploiement du e-reporting en temps quasi réel en 2028 renforcera encore les exigences en matière de précision des données et d’automatisation. Les entreprises qui se préparent en amont bénéficieront d’une conformité plus fluide, de charges opérationnelles réduites et d’une trésorerie plus prévisible.",
      nl: "De uitrol van near-real-time e-rapportage in 2028 zal de eisen op het gebied van datanauwkeurigheid en automatisering verder verhogen. Bedrijven die tijdig beginnen met de voorbereidingen, zullen een vlottere naleving, lagere operationele lasten en een beter voorspelbare cashflow ervaren.",
      de: "Die Einführung eines nahezu in Echtzeit arbeitenden E-Reportings im Jahr 2028 wird die Anforderungen an Datenqualität und Automatisierung weiter erhöhen. Unternehmen, die frühzeitig mit der Vorbereitung beginnen, werden eine reibungslosere Compliance, geringere operative Aufwände und eine besser planbare Liquidität erleben.",
    },
  "Many organizations are already adopting unified financial platforms to simplify this transition. Solutions that are Peppol ready, EN16931 compliant, and integrated across ERP workflows can significantly reduce complexity. Platforms like Accqrate, which already support structured invoicing standards and automated compliance processes, can help companies adapt without disrupting their existing operations. This creates a smoother path to compliance while strengthening overall financial efficiency.":
    {
      fr: "De nombreuses organisations adoptent déjà des plateformes financières unifiées pour simplifier cette transition. Des solutions prêtes pour Peppol, conformes à la norme EN16931 et intégrées aux workflows ERP peuvent réduire considérablement la complexité. Des plateformes comme Accqrate, qui prennent déjà en charge les standards de facturation structurée et les processus de conformité automatisés, aident les entreprises à s’adapter sans perturber leurs opérations existantes. Elles offrent ainsi une voie plus fluide vers la conformité tout en renforçant l’efficacité financière globale.",
      nl: "Veel organisaties stappen al over op uniforme financiële platformen om deze overgang te vereenvoudigen. Oplossingen die Peppol-ready zijn, EN16931-conform en geïntegreerd in ERP-workflows, kunnen de complexiteit aanzienlijk verminderen. Platformen zoals Accqrate, die al gestructureerde facturatiestandaarden en geautomatiseerde complianceprocessen ondersteunen, helpen bedrijven zich aan te passen zonder hun bestaande operaties te verstoren. Dit zorgt voor een soepelere weg naar naleving en versterkt tegelijk de algehele financiële efficiëntie.",
      de: "Viele Organisationen setzen bereits auf integrierte Finanzplattformen, um diesen Übergang zu vereinfachen. Lösungen, die Peppol-fähig, EN16931-konform und in ERP-Workflows integriert sind, können die Komplexität deutlich verringern. Plattformen wie Accqrate, die bereits strukturierte Rechnungsstandards und automatisierte Compliance-Prozesse unterstützen, helfen Unternehmen, sich ohne Unterbrechung ihrer bestehenden Abläufe anzupassen. So entsteht ein reibungsloserer Weg zur Compliance bei gleichzeitiger Stärkung der gesamten finanziellen Effizienz.",
    },
  "Belgium's mandate is not only a regulatory requirement. It is an opportunity for businesses to bring long term efficiency, accuracy, and transparency into their financial ecosystem, supported by technology that can evolve with future EU wide digital reporting initiatives.":
    {
      fr: "Le mandat belge n’est pas seulement une exigence réglementaire. C’est une opportunité pour les entreprises d’apporter davantage d’efficacité, de précision et de transparence à long terme dans leur écosystème financier, grâce à des technologies capables d’évoluer avec les futures initiatives européennes de reporting numérique.",
      nl: "De Belgische verplichting is niet alleen een wettelijke vereiste. Het is een kans voor bedrijven om op lange termijn meer efficiëntie, nauwkeurigheid en transparantie in hun financiële ecosysteem te brengen, ondersteund door technologie die kan meegroeien met toekomstige EU-brede digitale rapportage-initiatieven.",
      de: "Die belgische Vorgabe ist nicht nur eine regulatorische Pflicht. Sie bietet Unternehmen auch die Chance, langfristig mehr Effizienz, Genauigkeit und Transparenz in ihr Finanzökosystem zu bringen – gestützt auf Technologien, die sich mit zukünftigen EU-weiten Initiativen zum digitalen Reporting weiterentwickeln können.",
    },

  //Technical Rules for E-Invoicing in Belgium

  "Technical Rules for E-Invoicing in Belgium": {
    fr: "Règles techniques pour la facturation électronique en Belgique",
    nl: "Technische regels voor e-facturatie in België",
    de: "Technische Regeln für die E-Rechnungsstellung in Belgien",
  },
  "Updated On : Nov 27th, 2024 | 18 min read": {
    fr: "Mis à jour le : 27 nov. 2024 | Lecture de 18 minutes",
    nl: "Bijgewerkt op: 27 nov. 2024 | 18 minuten leestijd",
    de: "Aktualisiert am: 27. Nov. 2024 | 18 Minuten Lesezeit",
  },
  "Belgium is entering a decisive phase in its digital transformation, driven by the broader European effort to create a unified, efficient and transparent invoicing ecosystem. Structured electronic invoicing will soon become the default format for business-to-business transactions. This change has major implications for how companies generate invoices, exchange documents and maintain VAT compliance.":
    {
      fr: "La Belgique entre dans une phase décisive de sa transformation numérique, portée par l’effort européen visant à créer un écosystème de facturation unifié, efficace et transparent. La facturation électronique structurée deviendra bientôt le format par défaut pour les transactions entre entreprises. Ce changement a un impact majeur sur la manière dont les sociétés émettent des factures, échangent des documents et maintiennent leur conformité TVA.",
      nl: "België treedt een beslissende fase van zijn digitale transformatie binnen, gedreven door de bredere Europese inspanning om een uniform, efficiënt en transparant facturatie-ecosysteem te creëren. Gestructureerde elektronische facturatie zal binnenkort het standaardformaat worden voor transacties tussen ondernemingen. Deze verandering heeft grote gevolgen voor de manier waarop bedrijven facturen opstellen, documenten uitwisselen en hun btw-naleving borgen.",
      de: "Belgien tritt in eine entscheidende Phase seiner digitalen Transformation ein, angetrieben durch die breitere europäische Initiative zur Schaffung eines einheitlichen, effizienten und transparenten Rechnungssystems. Strukturierte elektronische Rechnungen werden bald zum Standardformat für Transaktionen zwischen Unternehmen. Diese Veränderung hat erhebliche Auswirkungen darauf, wie Unternehmen Rechnungen erstellen, Dokumente austauschen und die Mehrwertsteuer-Compliance sicherstellen.",
    },
  "The rules governing this new system are precise and highly technical, which is why understanding the regulatory expectations early is essential. The following guide breaks down the technical requirements, formats and standards that apply under Belgium's e-invoicing framework, and explains how businesses can prepare for the transition.":
    {
      fr: "Les règles qui encadrent ce nouveau système sont précises et très techniques, d’où l’importance de comprendre au plus tôt les exigences réglementaires. Le guide suivant détaille les exigences techniques, les formats et les standards applicables dans le cadre de la facturation électronique en Belgique, et explique comment les entreprises peuvent se préparer à cette transition.",
      nl: "De regels die dit nieuwe systeem beheersen zijn nauwkeurig en sterk technisch, waardoor het essentieel is om de regelgeving tijdig te begrijpen. Deze gids zet de technische vereisten, formaten en standaarden uiteen die gelden binnen het Belgische e-facturatiekader en legt uit hoe bedrijven zich op de overgang kunnen voorbereiden.",
      de: "Die Regeln, die dieses neue System steuern, sind präzise und stark technikgetrieben. Daher ist ein frühzeitiges Verständnis der regulatorischen Erwartungen entscheidend. Der folgende Leitfaden erläutert die technischen Anforderungen, Formate und Standards im belgischen E-Rechnungsrahmen und erklärt, wie Unternehmen sich auf den Übergang vorbereiten können.",
    },
  "Shift to Mandatory Structured Invoicing from 2026": {
    fr: "Passage à la facturation structurée obligatoire à partir de 2026",
    nl: "Overgang naar verplichte gestructureerde facturatie vanaf 2026",
    de: "Umstellung auf verpflichtende strukturierte Rechnungsstellung ab 2026",
  },
  "Starting 1 January 2026, most VAT-registered Belgian businesses will be required to issue and receive structured electronic invoices for all business-to-business transactions. This shift is intended to create a fully automated, end-to-end invoicing process that removes manual work, improves accuracy and enables more reliable VAT monitoring.":
    {
      fr: "À compter du 1er janvier 2026, la plupart des entreprises belges immatriculées à la TVA devront émettre et recevoir des factures électroniques structurées pour toutes leurs transactions B2B. Ce changement vise à instaurer un processus de facturation entièrement automatisé de bout en bout, réduisant le travail manuel, améliorant la précision et permettant un suivi TVA plus fiable.",
      nl: "Vanaf 1 januari 2026 zullen de meeste in België btw-geregistreerde ondernemingen verplicht zijn gestructureerde elektronische facturen uit te reiken en te ontvangen voor alle B2B-transacties. Deze verschuiving is bedoeld om een volledig geautomatiseerd end-to-end facturatieproces te creëren, dat handmatig werk wegneemt, de nauwkeurigheid verhoogt en een betrouwbaardere btw-monitoring mogelijk maakt.",
      de: "Ab dem 1. Januar 2026 sind die meisten in Belgien mehrwertsteuerlich registrierten Unternehmen verpflichtet, für alle B2B-Transaktionen strukturierte elektronische Rechnungen auszustellen und zu empfangen. Diese Umstellung soll einen vollständig automatisierten End-to-End-Rechnungsprozess schaffen, manuelle Tätigkeiten reduzieren, die Genauigkeit erhöhen und eine verlässlichere Mehrwertsteuerüberwachung ermöglichen.",
    },
  "Scope of the Mandate": {
    fr: "Portée du mandat",
    nl: "Reikwijdte van de verplichting",
    de: "Geltungsbereich der Verpflichtung",
  },
  "Business-to-Business Transactions": {
    fr: "Transactions entre entreprises (B2B)",
    nl: "Business-to-businesstransacties",
    de: "Business-to-Business-Transaktionen",
  },
  "Almost all B2B transactions between Belgian VAT-liable enterprises fall within the mandatory scope.":
    {
      fr: "Presque toutes les transactions B2B entre entreprises belges assujetties à la TVA entrent dans le champ d’application obligatoire.",
      nl: "Vrijwel alle B2B-transacties tussen Belgische btw-plichtige ondernemingen vallen binnen de verplichte scope.",
      de: "Nahezu alle B2B-Transaktionen zwischen in Belgien mehrwertsteuerpflichtigen Unternehmen fallen in den verpflichtenden Anwendungsbereich.",
    },
  "Business-to-Consumer Transactions": {
    fr: "Transactions entre entreprises et consommateurs (B2C)",
    nl: "Business-to-consumertransacties",
    de: "Business-to-Consumer-Transaktionen",
  },
  "Personal consumer transactions remain outside the requirement, and businesses may continue issuing traditional invoices for B2C customers.":
    {
      fr: "Les transactions avec des consommateurs finaux restent hors du champ de l’obligation, et les entreprises peuvent continuer à émettre des factures traditionnelles pour leurs clients B2C.",
      nl: "Transacties met particuliere consumenten vallen buiten de verplichting, en ondernemingen mogen voor B2C-klanten traditionele facturen blijven uitreiken.",
      de: "Transaktionen mit Endverbrauchern bleiben von der Verpflichtung ausgenommen, und Unternehmen können für B2C-Kunden weiterhin herkömmliche Rechnungen ausstellen.",
    },
  "Business-to-Government Transactions": {
    fr: "Transactions entre entreprises et pouvoirs publics (B2G)",
    nl: "Business-to-governmenttransacties",
    de: "Business-to-Government-Transaktionen",
  },
  "Since 1 March 2024, structured e-invoicing has been compulsory for public procurement contracts above €3,000.":
    {
      fr: "Depuis le 1er mars 2024, la facturation électronique structurée est obligatoire pour les marchés publics d’un montant supérieur à 3 000 €.",
      nl: "Sinds 1 maart 2024 is gestructureerde e-facturatie verplicht voor overheidsopdrachten boven de € 3.000.",
      de: "Seit dem 1. März 2024 ist für öffentliche Aufträge mit einem Volumen von mehr als 3.000 € strukturierte E-Rechnungsstellung verpflichtend.",
    },
  "Limited Exemptions": {
    fr: "Exemptions limitées",
    nl: "Beperkte vrijstellingen",
    de: "Begrenzte Ausnahmen",
  },
  "Some entities are exempt, such as bankrupt persons registered for VAT, businesses performing only VAT-exempt operations under Article 44 and flat-rate taxpayers until 2028.":
    {
      fr: "Certaines entités sont exemptées, notamment les personnes en faillite inscrites à la TVA, les entreprises exerçant uniquement des activités exonérées en vertu de l’article 44, ainsi que les assujettis au régime forfaitaire jusqu’en 2028.",
      nl: "Sommige entiteiten zijn vrijgesteld, zoals failliete btw-plichtigen, ondernemingen die uitsluitend btw-vrijgestelde activiteiten onder artikel 44 uitvoeren en forfaitaire belastingplichtigen tot 2028.",
      de: "Einige Unternehmen sind ausgenommen, etwa insolvente Mehrwertsteuerpflichtige, Betriebe, die ausschließlich nach Artikel 44 mehrwertsteuerbefreite Tätigkeiten ausüben, sowie pauschalbesteuerte Steuerpflichtige bis 2028.",
    },
  "What Makes a Structured Electronic Invoice": {
    fr: "Ce qui caractérise une facture électronique structurée",
    nl: "Wat een gestructureerde elektronische factuur kenmerkt",
    de: "Merkmale einer strukturierten elektronischen Rechnung",
  },
  "A structured electronic invoice is a machine-readable data file. It is not a PDF, not an emailed attachment and not a scanned copy. It is a digital document containing data in a format that accounting systems can interpret without manual intervention.":
    {
      fr: "Une facture électronique structurée est un fichier de données lisible par machine. Ce n’est ni un PDF, ni une pièce jointe envoyée par e-mail, ni une copie numérisée. Il s’agit d’un document numérique dont les données sont structurées de manière à être interprétées sans intervention manuelle par les systèmes comptables.",
      nl: "Een gestructureerde elektronische factuur is een machinaal leesbaar databestand. Het is geen pdf, geen e-mailbijlage en geen gescande kopie. Het is een digitaal document met gegevens in een formaat dat boekhoudsystemen zonder handmatige tussenkomst kunnen verwerken.",
      de: "Eine strukturierte elektronische Rechnung ist eine maschinenlesbare Datendatei. Sie ist weder ein PDF, noch ein E-Mail-Anhang oder ein eingescanntes Dokument. Es handelt sich um ein digitales Dokument mit Daten in einem Format, das Buchhaltungssysteme ohne manuelle Eingriffe verarbeiten können.",
    },
  "To comply with Belgian requirements, structured invoices must meet several strict conditions.":
    {
      fr: "Pour être conformes aux exigences belges, les factures structurées doivent respecter plusieurs conditions strictes.",
      nl: "Om aan de Belgische vereisten te voldoen, moeten gestructureerde facturen aan verschillende strikte voorwaarden voldoen.",
      de: "Um den belgischen Anforderungen zu entsprechen, müssen strukturierte Rechnungen mehrere strenge Bedingungen erfüllen.",
    },
  "Alignment with European Standards": {
    fr: "Alignement sur les normes européennes",
    nl: "Afstemming op Europese standaarden",
    de: "Ausrichtung an europäischen Standards",
  },
  "Invoices must follow EN 16931, which defines the semantic structure and technical specifications required for cross-border interoperability within the European Union.":
    {
      fr: "Les factures doivent respecter la norme EN 16931, qui définit la structure sémantique et les spécifications techniques nécessaires à l’interopérabilité transfrontalière au sein de l’Union européenne.",
      nl: "Facturen moeten voldoen aan EN 16931, dat de semantische structuur en technische specificaties vastlegt die vereist zijn voor grensoverschrijdende interoperabiliteit binnen de Europese Unie.",
      de: "Rechnungen müssen der Norm EN 16931 folgen, die die semantische Struktur und die technischen Spezifikationen für die grenzüberschreitende Interoperabilität in der Europäischen Union festlegt.",
    },
  "Inclusion of Mandatory Data Fields": {
    fr: "Inclusion des données obligatoires",
    nl: "Opname van verplichte gegevensvelden",
    de: "Aufnahme der Pflichtdatenfelder",
  },
  "Every invoice must include specific information such as the VAT identification of the buyer and supplier, invoice number, invoice date, line items, tax amounts, totals and payment details.":
    {
      fr: "Chaque facture doit inclure des informations obligatoires telles que les numéros de TVA de l’acheteur et du fournisseur, le numéro et la date de la facture, les lignes de détail, les montants de taxe, les totaux et les modalités de paiement.",
      nl: "Elke factuur moet specifieke informatie bevatten, zoals de btw-identificatie van koper en leverancier, factuurnummer, factuurdatum, lijnen met details, belastingbedragen, totalen en betalingsgegevens.",
      de: "Jede Rechnung muss bestimmte Angaben enthalten, etwa die Mehrwertsteuer-Identifikationsnummern von Käufer und Lieferant, Rechnungsnummer und -datum, Positionszeilen, Steuerbeträge, Summen und Zahlungsinformationen.",
    },
  "Use of the Peppol BIS Format": {
    fr: "Utilisation du format Peppol BIS",
    nl: "Gebruik van het Peppol BIS-formaat",
    de: "Verwendung des Peppol-BIS-Formats",
  },
  "Belgium uses the Peppol BIS format as the default structure for transmitting electronic invoices. This format ensures consistency and enables seamless data exchange through the Peppol network.":
    {
      fr: "La Belgique utilise le format Peppol BIS comme structure par défaut pour la transmission des factures électroniques. Ce format garantit la cohérence et permet un échange de données fluide via le réseau Peppol.",
      nl: "België gebruikt het Peppol BIS-formaat als standaardstructuur voor het verzenden van elektronische facturen. Dit formaat zorgt voor consistentie en maakt naadloze gegevensuitwisseling via het Peppol-netwerk mogelijk.",
      de: "Belgien verwendet das Peppol-BIS-Format als Standardstruktur für die Übermittlung elektronischer Rechnungen. Dieses Format stellt Konsistenz sicher und ermöglicht einen nahtlosen Datenaustausch über das Peppol-Netzwerk.",
    },
  "The Technical Foundations: Authenticity, Integrity and Legibility": {
    fr: "Fondements techniques : authenticité, intégrité et lisibilité",
    nl: "Technische basisprincipes: authenticiteit, integriteit en leesbaarheid",
    de: "Technische Grundlagen: Authentizität, Integrität und Lesbarkeit",
  },
  "Belgium's e-invoicing framework is built around three core technical principles. These principles ensure that invoices remain reliable, traceable and compliant throughout their entire life cycle.":
    {
      fr: "Le cadre belge de facturation électronique repose sur trois principes techniques fondamentaux. Ceux-ci garantissent que les factures restent fiables, traçables et conformes tout au long de leur cycle de vie.",
      nl: "Het Belgische e-facturatiekader is opgebouwd rond drie kerntechnische principes. Deze zorgen ervoor dat facturen gedurende hun volledige levenscyclus betrouwbaar, traceerbaar en conform blijven.",
      de: "Der belgische Rahmen für die E-Rechnungsstellung basiert auf drei zentralen technischen Grundsätzen. Sie stellen sicher, dass Rechnungen über ihren gesamten Lebenszyklus hinweg zuverlässig, nachvollziehbar und compliant bleiben.",
    },
  "Authenticity of Origin": {
    fr: "Authenticité de l’origine",
    nl: "Authenticiteit van de herkomst",
    de: "Echtheit der Herkunft",
  },
  "The origin of the invoice must always be identifiable. Both supplier and customer share responsibility for ensuring that the invoice genuinely originates from the correct issuer. This requirement helps prevent fraudulent invoices and strengthens VAT control.":
    {
      fr: "L’origine de la facture doit toujours être identifiable. Fournisseur et client partagent la responsabilité de s’assurer que la facture émane bien du bon émetteur. Cette exigence contribue à prévenir la fraude et renforce le contrôle de la TVA.",
      nl: "De herkomst van de factuur moet altijd identificeerbaar zijn. Zowel leverancier als klant zijn verantwoordelijk om te waarborgen dat de factuur daadwerkelijk van de juiste opsteller afkomstig is. Dit helpt frauduleuze facturen te voorkomen en versterkt de btw-controle.",
      de: "Die Herkunft der Rechnung muss jederzeit eindeutig feststellbar sein. Sowohl Lieferant als auch Kunde tragen die Verantwortung dafür, dass die Rechnung tatsächlich vom richtigen Aussteller stammt. Diese Vorgabe hilft, Betrugsfälle zu vermeiden und stärkt die Mehrwertsteuerkontrolle.",
    },
  "Integrity of Content": {
    fr: "Intégrité du contenu",
    nl: "Integriteit van de inhoud",
    de: "Integrität des Inhalts",
  },
  "Once issued, the invoice must remain unaltered. If a correction or amendment is required, it must be made through a separate structured document that references the original invoice. This requirement preserves the reliability of the financial record.":
    {
      fr: "Une fois émise, la facture ne doit plus être modifiée. Si une correction ou un ajustement est nécessaire, il doit être effectué au moyen d’un document structuré distinct, faisant référence à la facture originale. Cette exigence garantit la fiabilité des enregistrements financiers.",
      nl: "Zodra een factuur is uitgereikt, mag de inhoud niet meer worden gewijzigd. Indien een correctie of aanpassing nodig is, moet dit gebeuren via een afzonderlijk gestructureerd document dat naar de oorspronkelijke factuur verwijst. Dit waarborgt de betrouwbaarheid van de financiële administratie.",
      de: "Sobald eine Rechnung ausgestellt ist, darf ihr Inhalt nicht mehr verändert werden. Ist eine Korrektur oder Anpassung erforderlich, muss diese über ein separates strukturiertes Dokument erfolgen, das auf die ursprüngliche Rechnung verweist. Diese Anforderung erhält die Verlässlichkeit der Finanzunterlagen.",
    },
  "Legibility Over Time": {
    fr: "Lisibilité dans le temps",
    nl: "Leesbaarheid in de tijd",
    de: "Langfristige Lesbarkeit",
  },
  "Invoices must remain readable for the entire retention period. For electronic invoicing, this means the file must be retrievable in a clearly readable form at any time, and the displayed version must match the original document.":
    {
      fr: "Les factures doivent rester lisibles pendant toute la durée de conservation. Pour la facturation électronique, cela signifie que le fichier doit pouvoir être restitué à tout moment sous une forme clairement lisible, et que la version affichée doit correspondre au document original.",
      nl: "Facturen moeten gedurende de volledige bewaartermijn leesbaar blijven. Voor e-facturatie betekent dit dat het bestand op elk moment in een duidelijk leesbare vorm kan worden opgevraagd en dat de getoonde versie overeen moet komen met het oorspronkelijke document.",
      de: "Rechnungen müssen während der gesamten Aufbewahrungsfrist lesbar bleiben. Für elektronische Rechnungen bedeutet dies, dass die Datei jederzeit in klar lesbarer Form abrufbar sein muss und die angezeigte Version dem Originaldokument entsprechen muss.",
    },
  "Electronic Modifications and Referencing": {
    fr: "Modifications électroniques et référencements",
    nl: "Elektronische wijzigingen en verwijzingen",
    de: "Elektronische Änderungen und Referenzierung",
  },
  "Any modification issued in an electronic format is treated as a structured invoice when it:":
    {
      fr: "Toute modification émise sous forme électronique est considérée comme une facture structurée lorsqu’elle :",
      nl: "Elke wijziging die in elektronisch formaat wordt uitgegeven, wordt beschouwd als een gestructureerde factuur wanneer deze:",
      de: "Jede Änderung, die in elektronischer Form ausgestellt wird, gilt als strukturierte Rechnung, wenn sie:",
    },
  "Follows the same technical structure as the original": {
    fr: "Suit la même structure technique que le document original",
    nl: "Dezelfde technische structuur volgt als het origineel",
    de: "Dieselbe technische Struktur wie das Original verwendet",
  },
  "References the original invoice clearly and accurately": {
    fr: "Fait clairement et précisément référence à la facture originale",
    nl: "Op duidelijke en juiste wijze naar de oorspronkelijke factuur verwijst",
    de: "Eindeutig und korrekt auf die ursprüngliche Rechnung verweist",
  },
  "This ensures that the financial and audit history remains consistent, traceable and complete.":
    {
      fr: "Cela garantit que l’historique financier et les pistes d’audit restent cohérents, traçables et complets.",
      nl: "Dit zorgt ervoor dat de financiële historie en audittrail consistent, traceerbaar en volledig blijven.",
      de: "So bleibt die finanzielle und prüfungsrelevante Historie konsistent, nachvollziehbar und vollständig.",
    },
  "Retention and VAT Compliance": {
    fr: "Conservation et conformité TVA",
    nl: "Bewaring en btw-naleving",
    de: "Aufbewahrung und Mehrwertsteuer-Compliance",
  },
  "Beginning in 2026, structured invoices will serve as the main evidence for VAT deductions and reporting. The familiar reliance on PDF files or paper documents will be replaced by a more precise and auditable framework.":
    {
      fr: "À partir de 2026, les factures structurées serviront de principal justificatif pour les déductions et déclarations de TVA. La dépendance traditionnelle aux fichiers PDF ou documents papier sera remplacée par un cadre plus précis et entièrement auditable.",
      nl: "Vanaf 2026 zullen gestructureerde facturen het belangrijkste bewijs vormen voor btw-aftrek en -rapportage. De vertrouwde afhankelijkheid van pdf-bestanden of papieren documenten wordt vervangen door een nauwkeuriger en beter controleerbaar kader.",
      de: "Ab 2026 werden strukturierte Rechnungen den Hauptnachweis für Vorsteuerabzüge und Meldungen bilden. Die bisherige Abhängigkeit von PDF-Dateien oder Papierdokumenten wird durch einen präziseren und besser prüfbaren Rahmen ersetzt.",
    },
  "The Audit Trail Requirement": {
    fr: "Exigence en matière de piste d’audit",
    nl: "Vereiste rond audittrail",
    de: "Anforderungen an den Audit Trail",
  },
  "A reliable audit trail is essential. It must demonstrate:": {
    fr: "Une piste d’audit fiable est essentielle. Elle doit démontrer :",
    nl: "Een betrouwbare audittrail is essentieel. Deze moet aantonen:",
    de: "Ein verlässlicher Audit Trail ist unerlässlich. Er muss Folgendes nachweisen:",
  },
  Traceability: {
    fr: "Traçabilité",
    nl: "Traceerbaarheid",
    de: "Nachvollziehbarkeit",
  },
  "A clear link must exist between the invoice and the underlying business transaction.":
    {
      fr: "Un lien clair doit exister entre la facture et l’opération commerciale sous-jacente.",
      nl: "Er moet een duidelijke koppeling zijn tussen de factuur en de onderliggende bedrijfstransactie.",
      de: "Es muss eine eindeutige Verbindung zwischen der Rechnung und der zugrunde liegenden Geschäftstransaktion bestehen.",
    },
  "Compliance with VAT Procedures": {
    fr: "Conformité aux procédures TVA",
    nl: "Naleving van btw-procedures",
    de: "Einhaltung der Mehrwertsteuerverfahren",
  },
  "The audit trail must reflect the processes mandated by Belgian VAT legislation.":
    {
      fr: "La piste d’audit doit refléter les processus imposés par la législation belge en matière de TVA.",
      nl: "De audittrail moet de processen weergeven die door de Belgische btw-wetgeving worden voorgeschreven.",
      de: "Der Audit Trail muss die durch das belgische Mehrwertsteuerrecht vorgegebenen Prozesse widerspiegeln.",
    },
  "Accuracy of Operational Reality": {
    fr: "Exactitude par rapport à la réalité opérationnelle",
    nl: "Nauwkeurige weergave van de operationele realiteit",
    de: "Abbildung der tatsächlichen Geschäftsvorgänge mit hoher Genauigkeit",
  },
  "Documentation must match actual delivery of goods, performance of services and payment processes.":
    {
      fr: "La documentation doit correspondre à la livraison réelle des biens, à l’exécution des services et aux processus de paiement.",
      nl: "De documentatie moet overeenkomen met de daadwerkelijke levering van goederen, de uitvoering van diensten en de betalingsprocessen.",
      de: "Die Dokumentation muss der tatsächlichen Lieferung von Waren, der Erbringung von Dienstleistungen und den Zahlungsprozessen entsprechen.",
    },
  "Sending and Receiving Invoices through the Peppol Network": {
    fr: "Envoi et réception de factures via le réseau Peppol",
    nl: "Verzenden en ontvangen van facturen via het Peppol-netwerk",
    de: "Versand und Empfang von Rechnungen über das Peppol-Netzwerk",
  },
  "The Peppol network is at the heart of Belgium's structured invoicing ecosystem. It is an international framework that allows businesses and public authorities to exchange electronic documents securely and consistently.":
    {
      fr: "Le réseau Peppol est au cœur de l’écosystème belge de facturation structurée. Il s’agit d’un cadre international qui permet aux entreprises et aux autorités publiques d’échanger des documents électroniques de manière sécurisée et homogène.",
      nl: "Het Peppol-netwerk vormt het hart van het Belgische ecosysteem voor gestructureerde facturatie. Het is een internationaal kader waarmee bedrijven en overheden veilig en consistent elektronische documenten kunnen uitwisselen.",
      de: "Das Peppol-Netzwerk steht im Zentrum des belgischen Ökosystems für strukturierte Rechnungsstellung. Es ist ein internationaler Rahmen, der Unternehmen und Behörden den sicheren und einheitlichen Austausch elektronischer Dokumente ermöglicht.",
    },
  "Sending Invoices": {
    fr: "Envoi des factures",
    nl: "Facturen verzenden",
    de: "Versand von Rechnungen",
  },
  "Companies must use software connected to a certified Peppol Access Point. Invoices are created in the Peppol BIS format and sent through the network to the recipient's system.":
    {
      fr: "Les entreprises doivent utiliser un logiciel connecté à un point d’accès Peppol certifié. Les factures sont créées au format Peppol BIS et envoyées via le réseau vers le système du destinataire.",
      nl: "Bedrijven moeten software gebruiken die is gekoppeld aan een gecertificeerd Peppol Access Point. Facturen worden in Peppol BIS-formaat aangemaakt en via het netwerk naar het systeem van de ontvanger verzonden.",
      de: "Unternehmen müssen Software einsetzen, die mit einem zertifizierten Peppol Access Point verbunden ist. Rechnungen werden im Peppol-BIS-Format erstellt und über das Netzwerk an das System des Empfängers gesendet.",
    },
  "Receiving Invoices": {
    fr: "Réception des factures",
    nl: "Facturen ontvangen",
    de: "Empfang von Rechnungen",
  },
  "Companies must ensure their system can receive structured invoices and interpret them correctly. This often requires an upgrade of accounting software or a dedicated Peppol integration.":
    {
      fr: "Les entreprises doivent s’assurer que leur système peut recevoir des factures structurées et les interpréter correctement. Cela nécessite souvent une mise à niveau du logiciel comptable ou une intégration Peppol dédiée.",
      nl: "Bedrijven moeten ervoor zorgen dat hun systeem gestructureerde facturen kan ontvangen en correct kan interpreteren. Dit vereist vaak een upgrade van de boekhoudsoftware of een specifieke Peppol-integratie.",
      de: "Unternehmen müssen sicherstellen, dass ihre Systeme strukturierte Rechnungen empfangen und korrekt verarbeiten können. Dies erfordert häufig ein Upgrade der Buchhaltungssoftware oder eine dedizierte Peppol-Integration.",
    },
  "Why Peppol is Central to Belgium's Approach": {
    fr: "Pourquoi Peppol est au centre de l’approche belge",
    nl: "Waarom Peppol centraal staat in de Belgische aanpak",
    de: "Warum Peppol im Mittelpunkt des belgischen Ansatzes steht",
  },
  "The Peppol framework brings structure and reliability to electronic invoicing. Its benefits include:":
    {
      fr: "Le cadre Peppol apporte structure et fiabilité à la facturation électronique. Ses avantages incluent :",
      nl: "Het Peppol-raamwerk brengt structuur en betrouwbaarheid in elektronische facturatie. De voordelen zijn onder meer:",
      de: "Der Peppol-Rahmen sorgt für Struktur und Zuverlässigkeit in der elektronischen Rechnungsstellung. Zu den Vorteilen zählen unter anderem:",
    },
  "Interoperability Across Borders": {
    fr: "Interopérabilité transfrontalière",
    nl: "Interoperabiliteit over de grenzen heen",
    de: "Grenzüberschreitende Interoperabilität",
  },
  "Invoices can be exchanged with any business or authority registered on Peppol, regardless of the country.":
    {
      fr: "Les factures peuvent être échangées avec toute entreprise ou autorité enregistrée sur Peppol, quel que soit le pays.",
      nl: "Facturen kunnen worden uitgewisseld met elke onderneming of overheid die op Peppol is aangesloten, ongeacht het land.",
      de: "Rechnungen können mit jedem Unternehmen oder jeder Behörde ausgetauscht werden, die im Peppol-Netzwerk registriert ist – unabhängig vom Land.",
    },
  "High Security Levels": {
    fr: "Niveau de sécurité élevé",
    nl: "Hoog beveiligingsniveau",
    de: "Hohe Sicherheitsniveaus",
  },
  "Invoices move through certified service providers, drastically lowering the risk of invoice fraud.":
    {
      fr: "Les factures transitent via des prestataires certifiés, ce qui réduit fortement le risque de fraude liée aux factures.",
      nl: "Facturen worden via gecertificeerde dienstverleners verzonden, waardoor het risico op factuurfraude drastisch wordt verlaagd.",
      de: "Rechnungen werden über zertifizierte Dienstleister übermittelt, was das Risiko von Rechnungsbetrug erheblich reduziert.",
    },
  "Operational Efficiency": {
    fr: "Efficacité opérationnelle",
    nl: "Operationele efficiëntie",
    de: "Operative Effizienz",
  },
  "Because invoices are delivered in a structured format, automation becomes a natural part of financial workflows.":
    {
      fr: "Parce que les factures sont émises dans un format structuré, l’automatisation devient naturellement partie intégrante des processus financiers.",
      nl: "Doordat facturen in een gestructureerd formaat worden aangeleverd, wordt automatisering een vanzelfsprekend onderdeel van de financiële processen.",
      de: "Da Rechnungen in einem strukturierten Format bereitgestellt werden, wird Automatisierung zu einem natürlichen Bestandteil der Finanzprozesse.",
    },
  "EN 16931 and Peppol BIS: How They Work Together": {
    fr: "EN 16931 et Peppol BIS : comment ils fonctionnent ensemble",
    nl: "EN 16931 en Peppol BIS: hoe ze samenwerken",
    de: "EN 16931 und Peppol BIS: wie sie zusammenwirken",
  },
  "Belgium's technical rules combine a European standard with a network-specific format.":
    {
      fr: "Les règles techniques belges combinent une norme européenne avec un format spécifique au réseau.",
      nl: "De Belgische technische regels combineren een Europese norm met een netwerk specifiek formaat.",
      de: "Die technischen Vorschriften Belgiens verbinden einen europäischen Standard mit einem netzwerkspezifischen Format.",
    },
  "EN 16931": {
    fr: "EN 16931",
    nl: "EN 16931",
    de: "EN 16931",
  },
  "Defines the European standard that dictates which data fields and semantic structures must appear in a structured invoice.":
    {
      fr: "Définit la norme européenne qui précise quels champs de données et quelles structures sémantiques doivent figurer dans une facture structurée.",
      nl: "Bepaalt de Europese standaard die voorschrijft welke gegevensvelden en semantische structuren in een gestructureerde factuur moeten voorkomen.",
      de: "Definiert den europäischen Standard, der festlegt, welche Datenfelder und semantischen Strukturen in einer strukturierten Rechnung enthalten sein müssen.",
    },
  "Peppol BIS": {
    fr: "Peppol BIS",
    nl: "Peppol BIS",
    de: "Peppol BIS",
  },
  "Provides a harmonised format that applies these rules in a practical, machine-readable structure.":
    {
      fr: "Fournit un format harmonisé qui applique ces règles dans une structure pratique et lisible par machine.",
      nl: "Biedt een geharmoniseerd formaat dat deze regels omzet in een praktisch, machinaal leesbare structuur.",
      de: "Stellt ein harmonisiertes Format bereit, das diese Regeln in einer praktischen, maschinenlesbaren Struktur abbildet.",
    },
  "The combination of both ensures that invoices are compliant, interoperable and ready for automated processing.":
    {
      fr: "La combinaison des deux garantit que les factures sont conformes, interopérables et prêtes pour un traitement automatisé.",
      nl: "De combinatie van beide zorgt ervoor dat facturen compliant, interoperabel en klaar voor geautomatiseerde verwerking zijn.",
      de: "Die Kombination beider Komponenten stellt sicher, dass Rechnungen compliant, interoperabel und für die automatisierte Verarbeitung geeignet sind.",
    },
  "Allowed and Prohibited Invoice Formats": {
    fr: "Formats de facture autorisés et interdits",
    nl: "Toegestane en verboden factuurformaten",
    de: "Zulässige und unzulässige Rechnungsformate",
  },
  "Under the upcoming rules, the type of invoice businesses can issue will change significantly.":
    {
      fr: "Avec les nouvelles règles, le type de facture que les entreprises peuvent émettre va évoluer de manière significative.",
      nl: "Onder de nieuwe regels zal het soort facturen dat bedrijven mogen uitreiken aanzienlijk veranderen.",
      de: "Mit den neuen Vorschriften wird sich die Art der Rechnungen, die Unternehmen ausstellen können, deutlich verändern.",
    },
  "PDF Invoices": {
    fr: "Factures PDF",
    nl: "PDF-facturen",
    de: "PDF-Rechnungen",
  },
  "Permitted only until the end of 2025. Starting January 2026, they will no longer be legally valid for B2B VAT invoices.":
    {
      fr: "Autorisé uniquement jusqu’à la fin de l’année 2025. À partir de janvier 2026, elles ne seront plus légalement valables pour les factures B2B soumises à la TVA.",
      nl: "Alleen toegestaan tot eind 2025. Vanaf januari 2026 zijn ze niet langer rechtsgeldig voor B2B-btw-facturen.",
      de: "Nur bis Ende 2025 zulässig. Ab Januar 2026 sind sie für B2B-Mehrwertsteuerrechnungen rechtlich nicht mehr gültig.",
    },
  "Word or Excel": {
    fr: "Word ou Excel",
    nl: "Word of Excel",
    de: "Word oder Excel",
  },
  "Allowed only with the recipient's approval and only until December 2025.": {
    fr: "Autorisé uniquement avec l’accord du destinataire et seulement jusqu’en décembre 2025.",
    nl: "Alleen toegestaan met toestemming van de ontvanger en slechts tot en met december 2025.",
    de: "Nur mit Zustimmung des Empfängers und lediglich bis Dezember 2025 zulässig.",
  },
  "Structured EN 16931 Compliant Formats": {
    fr: "Formats structurés conformes à la norme EN 16931",
    nl: "Gestructureerde formaten conform EN 16931",
    de: "Strukturierte Formate gemäß EN 16931",
  },
  "From January 2026 onward, all B2B invoices must be created and transmitted in a structured electronic format that follows Peppol BIS.":
    {
      fr: "À partir de janvier 2026, toutes les factures B2B devront être émises et transmises dans un format électronique structuré conforme à Peppol BIS.",
      nl: "Vanaf januari 2026 moeten alle B2B-facturen worden opgesteld en verzonden in een gestructureerd elektronisch formaat dat Peppol BIS volgt.",
      de: "Ab Januar 2026 müssen alle B2B-Rechnungen in einem strukturierten elektronischen Format erstellt und übermittelt werden, das Peppol BIS entspricht.",
    },
 
  "Belgium's e-invoicing reform represents one of the most significant modernisations of the country's financial and VAT infrastructure. The shift to structured invoicing, enforced through Peppol BIS and EN 16931, is designed to eliminate manual inefficiencies, improve VAT oversight and support cross-border interoperability across Europe. Preparing early is essential. This includes upgrading accounting systems, ensuring software compatibility, training teams and establishing internal processes that support structured invoicing.":
    {
      fr: "La réforme de la facturation électronique en Belgique représente l’une des modernisations les plus importantes de l’infrastructure financière et TVA du pays. Le passage à la facturation structurée, imposé via Peppol BIS et EN 16931, vise à éliminer les inefficacités manuelles, à améliorer le contrôle de la TVA et à soutenir l’interopérabilité transfrontalière en Europe. Une préparation en amont est essentielle : mise à niveau des systèmes comptables, garantie de la compatibilité logicielle, formation des équipes et mise en place de processus internes adaptés.",
      nl: "De hervorming van e-facturatie in België is een van de belangrijkste moderniseringen van de financiële en btw-infrastructuur van het land. De overstap naar gestructureerde facturatie, afgedwongen via Peppol BIS en EN 16931, is bedoeld om manuele inefficiënties te elimineren, de btw-controle te verbeteren en de grensoverschrijdende interoperabiliteit in Europa te ondersteunen. Vroegtijdige voorbereiding is cruciaal: het upgraden van boekhoudsystemen, zorgen voor softwarecompatibiliteit, teams opleiden en interne processen inrichten die gestructureerde facturatie ondersteunen.",
      de: "Die Reform der E-Rechnungsstellung in Belgien zählt zu den bedeutendsten Modernisierungen der Finanz- und Mehrwertsteuerinfrastruktur des Landes. Der Schritt hin zur strukturierten Rechnungsstellung, durchgesetzt über Peppol BIS und EN 16931, zielt darauf ab, manuelle Ineffizienzen zu beseitigen, die Mehrwertsteueraufsicht zu verbessern und die grenzüberschreitende Interoperabilität in Europa zu unterstützen. Eine frühzeitige Vorbereitung ist entscheidend – einschließlich der Modernisierung von Buchhaltungssystemen, Sicherstellung der Softwarekompatibilität, Schulung der Teams und Einrichtung interner Prozesse, die strukturierte Rechnungsstellung tragen.",
    },
  "As businesses make this transition, many find that dedicated platforms simplify the journey. Solutions such as Accqrate help companies adopt structured invoicing with confidence by supporting the required formats, enabling Peppol connectivity and strengthening compliance workflows in a straightforward and reliable way.":
    {
      fr: "À mesure que les entreprises opèrent cette transition, beaucoup constatent que des plateformes dédiées simplifient le parcours. Des solutions comme Accqrate aident les sociétés à adopter la facturation structurée en toute confiance, en prenant en charge les formats requis, en offrant une connectivité Peppol et en renforçant les workflows de conformité de manière simple et fiable.",
      nl: "Terwijl bedrijven deze overgang maken, merken veel organisaties dat gespecialiseerde platformen het traject aanzienlijk vereenvoudigen. Oplossingen zoals Accqrate helpen bedrijven gestructureerde facturatie met vertrouwen te omarmen door de vereiste formaten te ondersteunen, Peppol-connectiviteit te bieden en compliancestromen op een eenvoudige en betrouwbare manier te versterken.",
      de: "Während Unternehmen diesen Wandel vollziehen, zeigt sich, dass spezialisierte Plattformen den Umstieg deutlich erleichtern. Lösungen wie Accqrate unterstützen Unternehmen dabei, strukturierte Rechnungsstellung sicher einzuführen, indem sie die erforderlichen Formate abdecken, Peppol-Konnektivität bereitstellen und Compliance-Workflows auf einfache und verlässliche Weise stärken.",
    },

  //Belgium E-Invoicing FAQs: Rules, Scope and What Businesses Must Prepare for in 2026

  "Belgium E-Invoicing FAQs: Rules, Scope and What Businesses Must Prepare for in 2026":
    {
      fr: "FAQ sur la facturation électronique en Belgique : règles, périmètre et préparatifs des entreprises pour 2026",
      nl: "Belgische e-facturatie-FAQ: regels, reikwijdte en waar bedrijven zich in 2026 op moeten voorbereiden",
      de: "Belgien E-Invoicing FAQ: Regeln, Geltungsbereich und worauf sich Unternehmen bis 2026 vorbereiten müssen",
    },
  "Belgium is preparing for one of the most important financial digitization shifts in its history...": {
    fr: "La Belgique se prépare à l'un des changements de numérisation financière les plus importants de son histoire...",
    nl: "België bereidt zich voor op een van de belangrijkste verschuivingen in financiële digitalisering in zijn geschiedenis...",
    de: "Belgien bereitet sich auf einen der bedeutendsten Schritte seiner finanziellen Digitalisierung vor...",
  },
  "Updated On : Nov 27th, 2024 | 22 min read": {
    fr: "Mis à jour le : 27 nov. 2024 | Lecture de 22 minutes",
    nl: "Bijgewerkt op: 27 nov. 2024 | 22 minuten leestijd",
    de: "Aktualisiert am: 27. Nov. 2024 | 22 Minuten Lesezeit",
  },
  "Belgium is preparing for one of the most important financial digitization shifts in its history. Starting January 2026, most business-to-business transactions will require structured electronic invoices. This move brings Belgium in line with the broader European vision for real-time digital reporting, secure tax administration and automated financial processes.":
    {
      fr: "La Belgique se prépare à l’un des changements de numérisation financière les plus importants de son histoire. À partir de janvier 2026, la plupart des transactions entre entreprises devront être effectuées au moyen de factures électroniques structurées. Ce changement aligne la Belgique sur la vision européenne plus large du reporting numérique en temps réel, d’une administration fiscale sécurisée et de processus financiers automatisés.",
      nl: "België bereidt zich voor op een van de belangrijkste verschuivingen in financiële digitalisering in zijn geschiedenis. Vanaf januari 2026 zullen de meeste transacties tussen bedrijven vereisen dat gestructureerde elektronische facturen worden gebruikt. Deze stap brengt België in lijn met de bredere Europese visie op realtime digitale rapportering, veilige belastingadministratie en geautomatiseerde financiële processen.",
      de: "Belgien bereitet sich auf einen der bedeutendsten Schritte seiner finanziellen Digitalisierung vor. Ab Januar 2026 müssen die meisten Transaktionen zwischen Unternehmen mit strukturierten elektronischen Rechnungen abgewickelt werden. Damit schließt sich Belgien der übergeordneten europäischen Vision von Echtzeit-Digitalberichterstattung, sicherer Steuerverwaltung und automatisierten Finanzprozessen an.",
    },
  "E-invoicing in Belgium goes far beyond sending PDF files by email. It involves exchanging invoices in a structured format that can be interpreted and processed directly by software. The country relies on the Peppol network and the European EN16931 standard to ensure invoices can be validated, routed and processed without manual intervention.":
    {
      fr: "La facturation électronique en Belgique va bien au-delà de l’envoi de fichiers PDF par e-mail. Elle implique l’échange de factures dans un format structuré qui peut être interprété et traité directement par les logiciels. Le pays s’appuie sur le réseau Peppol et sur la norme européenne EN16931 pour garantir que les factures puissent être validées, acheminées et traitées sans intervention manuelle.",
      nl: "E-facturatie in België gaat veel verder dan het per e-mail versturen van pdf-bestanden. Ze houdt in dat facturen worden uitgewisseld in een gestructureerd formaat dat direct door software kan worden geïnterpreteerd en verwerkt. Het land vertrouwt op het Peppol-netwerk en de Europese EN16931-norm om te waarborgen dat facturen zonder manuele tussenkomst kunnen worden gevalideerd, gerouteerd en verwerkt.",
      de: "E-Rechnungsstellung in Belgien bedeutet weit mehr, dan PDF-Dateien per E-Mail zu versenden. Sie basiert auf dem Austausch von Rechnungen in einem strukturierten Format, das unmittelbar von Software gelesen und verarbeitet werden kann. Das Land nutzt das Peppol-Netzwerk und den europäischen Standard EN16931, um sicherzustellen, dass Rechnungen ohne manuelle Eingriffe validiert, weitergeleitet und verarbeitet werden können.",
    },
  "To help businesses understand what this change means, the following FAQs explain the rules, timelines and compliance requirements in a clear and practical way.":
    {
      fr: "Pour aider les entreprises à comprendre la portée de ce changement, la FAQ suivante présente de manière claire et pratique les règles, les échéances et les exigences de conformité.",
      nl: "Om bedrijven te helpen begrijpen wat deze verandering betekent, verduidelijkt de onderstaande FAQ op een heldere en praktische manier de regels, tijdslijnen en compliancevereisten.",
      de: "Um Unternehmen zu helfen, die Tragweite dieser Änderungen zu verstehen, erläutern die folgenden FAQ die Regeln, Zeitpläne und Compliance-Anforderungen in klarer und praxisnaher Form.",
    },
  "General FAQs on E-Invoicing in Belgium": {
    fr: "FAQ générales sur la facturation électronique en Belgique",
    nl: "Algemene FAQ over e-facturatie in België",
    de: "Allgemeine FAQ zur E-Rechnungsstellung in Belgien",
  },
  "What is e-invoicing in Belgium?": {
    fr: "Qu’est-ce que la facturation électronique en Belgique ?",
    nl: "Wat is e-facturatie in België?",
    de: "Was ist E-Rechnungsstellung in Belgien?",
  },
  "E-invoicing refers to issuing, sending, receiving and processing invoices in a structured digital format. In Belgium, structured invoices typically follow the European EN16931 standard and are exchanged through Peppol-compatible software. This ensures machine readability and automation throughout the entire invoice lifecycle.":
    {
      fr: "La facturation électronique désigne l’émission, l’envoi, la réception et le traitement de factures dans un format numérique structuré. En Belgique, les factures structurées suivent généralement la norme européenne EN16931 et sont échangées via des logiciels compatibles Peppol. Cela garantit leur lisibilité par machine et l’automatisation de l’ensemble du cycle de vie de la facture.",
      nl: "E-facturatie verwijst naar het uitreiken, verzenden, ontvangen en verwerken van facturen in een gestructureerd digitaal formaat. In België volgen gestructureerde facturen doorgaans de Europese EN16931-norm en worden ze uitgewisseld via Peppol-compatibele software. Dit garandeert machinereadability en automatisering gedurende de volledige levenscyclus van de factuur.",
      de: "E-Rechnungsstellung bezeichnet das Ausstellen, Versenden, Empfangen und Verarbeiten von Rechnungen in einem strukturierten digitalen Format. In Belgien orientieren sich strukturierte Rechnungen in der Regel am europäischen Standard EN16931 und werden über Peppol-kompatible Software ausgetauscht. So wird die maschinelle Lesbarkeit und Automatisierung über den gesamten Rechnungslebenszyklus hinweg sichergestellt.",
    },
  "When does e-invoicing become mandatory?": {
    fr: "Quand la facturation électronique devient-elle obligatoire ?",
    nl: "Wanneer wordt e-facturatie verplicht?",
    de: "Ab wann wird die E-Rechnungsstellung verpflichtend?",
  },
  "E-invoicing is being introduced in phases.": {
    fr: "La facturation électronique est introduite par étapes.",
    nl: "E-facturatie wordt gefaseerd ingevoerd.",
    de: "Die E-Rechnungsstellung wird stufenweise eingeführt.",
  },
  "B2G: Required for federal public contracts published after 1 March 2024, generally for amounts above €3,000.":
    {
      fr: "B2G : requise pour les marchés publics fédéraux publiés après le 1er mars 2024, en général pour des montants supérieurs à 3 000 €.",
      nl: "B2G: verplicht voor federale overheidsopdrachten die na 1 maart 2024 worden gepubliceerd, doorgaans voor bedragen boven € 3.000.",
      de: "B2G: Verpflichtend für föderale öffentliche Aufträge, die nach dem 1. März 2024 veröffentlicht werden, in der Regel für Beträge über 3.000 €.",
    },
  "B2B: Required for almost all Belgian VAT-registered businesses from 1 January 2026.":
    {
      fr: "B2B : requise pour la quasi-totalité des entreprises belges assujetties à la TVA à partir du 1er janvier 2026.",
      nl: "B2B: verplicht voor bijna alle in België btw-geregistreerde ondernemingen vanaf 1 januari 2026.",
      de: "B2B: Verpflichtend für nahezu alle in Belgien mehrwertsteuerlich registrierten Unternehmen ab dem 1. Januar 2026.",
    },
  "Who must comply with the e-invoicing mandate?": {
    fr: "Qui doit se conformer au mandat de facturation électronique ?",
    nl: "Wie moet voldoen aan de e-facturatieverplichting?",
    de: "Wer muss der E-Rechnungsverpflichtung nachkommen?",
  },
  "Any business that is registered for VAT in Belgium and issues invoices to another VAT-registered Belgian business is required to send and receive structured invoices from 2026. Suppliers to government authorities are already required to follow structured invoicing rules.":
    {
      fr: "Toute entreprise immatriculée à la TVA en Belgique et émettant des factures à une autre entreprise belge assujettie à la TVA devra, à partir de 2026, envoyer et recevoir des factures structurées. Les fournisseurs des autorités publiques sont déjà soumis aux règles de facturation structurée.",
      nl: "Elke onderneming die in België voor de btw is geregistreerd en facturen uitreikt aan een andere Belgische btw-plichtige onderneming, moet vanaf 2026 gestructureerde facturen verzenden en ontvangen. Leveranciers van overheidsinstanties zijn nu al verplicht gestructureerde facturatie toe te passen.",
      de: "Jedes in Belgien mehrwertsteuerlich registrierte Unternehmen, das Rechnungen an ein anderes mehrwertsteuerpflichtiges belgisches Unternehmen stellt, ist ab 2026 verpflichtet, strukturierte Rechnungen zu senden und zu empfangen. Lieferanten von Behörden unterliegen bereits heute den Regeln der strukturierten Rechnungsstellung.",
    },
  "Why is Belgium introducing mandatory e-invoicing?": {
    fr: "Pourquoi la Belgique introduit-elle la facturation électronique obligatoire ?",
    nl: "Waarom voert België verplichte e-facturatie in?",
    de: "Warum führt Belgien die verpflichtende E-Rechnungsstellung ein?",
  },
  "The shift aims to reduce VAT fraud, simplify compliance, improve data accuracy, and increase the speed of financial processing. It also supports the larger European transition toward digital reporting and automation.":
    {
      fr: "Cette évolution vise à réduire la fraude à la TVA, à simplifier la conformité, à améliorer la qualité des données et à accélérer le traitement financier. Elle s’inscrit également dans la transition européenne plus large vers le reporting numérique et l’automatisation.",
      nl: "De verandering is erop gericht btw-fraude terug te dringen, compliance te vereenvoudigen, de datanauwkeurigheid te verbeteren en de snelheid van financiële verwerking te verhogen. Ze ondersteunt bovendien de bredere Europese overgang naar digitale rapportering en automatisering.",
      de: "Die Umstellung soll Mehrwertsteuerbetrug reduzieren, Compliance vereinfachen, die Datenqualität verbessern und die Geschwindigkeit der Finanzabwicklung erhöhen. Zudem unterstützt sie den übergeordneten europäischen Übergang zu digitalem Reporting und Automatisierung.",
    },
  "What benefits can businesses expect?": {
    fr: "Quels avantages les entreprises peuvent-elles en attendre ?",
    nl: "Welke voordelen kunnen bedrijven verwachten?",
    de: "Welche Vorteile können Unternehmen erwarten?",
  },
  "Common advantages include cost reduction, fewer manual errors, faster processing, reduced payment delays, stronger audit trails and lowered environmental impact due to paper-free workflows.":
    {
      fr: "Les principaux avantages incluent la réduction des coûts, moins d’erreurs manuelles, un traitement plus rapide, moins de retards de paiement, des pistes d’audit renforcées et une empreinte environnementale réduite grâce à la suppression du papier.",
      nl: "Belangrijke voordelen zijn onder meer kostenbesparing, minder manuele fouten, snellere verwerking, minder betalingsachterstanden, sterkere audittrails en een lagere milieu-impact dankzij papierloze processen.",
      de: "Zu den wichtigsten Vorteilen zählen Kostensenkungen, weniger manuelle Fehler, schnellere Verarbeitung, geringere Zahlungsverzögerungen, stärkere Prüfpfade und eine geringere Umweltbelastung durch papierlose Abläufe.",
    },
  "Are self-billing arrangements still allowed?": {
    fr: "Les accords d’auto-facturation sont-ils toujours autorisés ?",
    nl: "Zijn self-billingregelingen nog toegestaan?",
    de: "Sind Gutschrift- bzw. Selbstfakturierungsvereinbarungen weiterhin zulässig?",
  },
  "Yes. Self-billing remains permitted as long as both parties agree and follow the required acceptance procedures. Self-invoices can also be exchanged through the Peppol network.":
    {
      fr: "Oui. L’auto-facturation reste autorisée tant que les deux parties sont d’accord et respectent les procédures d’acceptation requises. Les auto-factures peuvent également être échangées via le réseau Peppol.",
      nl: "Ja. Self-billing blijft toegestaan zolang beide partijen akkoord gaan en de vereiste aanvaardingsprocedures volgen. Zelf-facturen kunnen eveneens via het Peppol-netwerk worden uitgewisseld.",
      de: "Ja. Selbstfakturierungsvereinbarungen bleiben zulässig, sofern beide Parteien zustimmen und die erforderlichen Annahmeverfahren einhalten. Selbstgestellte Rechnungen können ebenfalls über das Peppol-Netzwerk ausgetauscht werden.",
    },
  "Scope, Timeline and Applicability": {
    fr: "Champ d’application, calendrier et portée",
    nl: "Reikwijdte, tijdlijn en toepassingsgebied",
    de: "Geltungsbereich, Zeitplan und Anwendbarkeit",
  },
  "Does e-invoicing apply to B2C transactions?": {
    fr: "La facturation électronique s’applique-t-elle aux transactions B2C ?",
    nl: "Is e-facturatie van toepassing op B2C-transacties?",
    de: "Gilt die E-Rechnungsstellung auch für B2C-Transaktionen?",
  },
  "No. The mandate does not cover private consumers. However, businesses must still be capable of receiving structured invoices from their suppliers even if their customers are private individuals.":
    {
      fr: "Non. Le mandat ne couvre pas les consommateurs finaux. Toutefois, les entreprises doivent toujours être en mesure de recevoir des factures structurées de leurs fournisseurs, même si leurs clients sont des particuliers.",
      nl: "Nee. De verplichting geldt niet voor particuliere consumenten. Bedrijven moeten echter wel in staat zijn gestructureerde facturen van hun leveranciers te ontvangen, zelfs wanneer hun klanten particulieren zijn.",
      de: "Nein. Die Verpflichtung erstreckt sich nicht auf Privatverbraucher. Unternehmen müssen jedoch in der Lage sein, strukturierte Rechnungen ihrer Lieferanten zu empfangen, selbst wenn ihre Kunden Privatpersonen sind.",
    },
  "Which transactions fall within scope?": {
    fr: "Quelles transactions entrent dans le champ d’application ?",
    nl: "Welke transacties vallen binnen de scope?",
    de: "Welche Transaktionen fallen in den Anwendungsbereich?",
  },
  "B2B: Mandatory structured invoices for Belgian VAT-registered businesses from January 2026.":
    {
      fr: "B2B : factures structurées obligatoires pour les entreprises belges assujetties à la TVA à partir de janvier 2026.",
      nl: "B2B: gestructureerde facturen verplicht voor Belgische btw-geregistreerde ondernemingen vanaf januari 2026.",
      de: "B2B: Strukturierte Rechnungen sind ab Januar 2026 für in Belgien mehrwertsteuerlich registrierte Unternehmen verpflichtend.",
    },
  "B2G: Mandatory since March 2024 for contracts above the applicable thresholds.":
    {
      fr: "B2G : obligatoire depuis mars 2024 pour les contrats dépassant les seuils applicables.",
      nl: "B2G: verplicht sinds maart 2024 voor contracten boven de toepasselijke drempels.",
      de: "B2G: Seit März 2024 verpflichtend für Verträge oberhalb der geltenden Schwellenwerte.",
    },
  "B2C: Not mandatory.": {
    fr: "B2C : non obligatoire.",
    nl: "B2C: niet verplicht.",
    de: "B2C: nicht verpflichtend.",
  },
  "International transactions: Allowed if both parties agree and both are technically capable of exchanging structured invoices.":
    {
      fr: "Transactions internationales : autorisées si les deux parties sont d’accord et techniquement capables d’échanger des factures structurées.",
      nl: "Internationale transacties: toegestaan indien beide partijen akkoord gaan en technisch in staat zijn gestructureerde facturen uit te wisselen.",
      de: "Internationale Transaktionen: zulässig, sofern beide Parteien zustimmen und technisch in der Lage sind, strukturierte Rechnungen auszutauschen.",
    },
  "Are there exemptions?": {
    fr: "Existe-t-il des exemptions ?",
    nl: "Zijn er vrijstellingen?",
    de: "Gibt es Ausnahmen?",
  },
  "The following parties are exempt:": {
    fr: "Les parties suivantes sont exemptées :",
    nl: "De volgende partijen zijn vrijgesteld:",
    de: "Folgende Parteien sind ausgenommen:",
  },
  "Bankrupt businesses that are still VAT-liable": {
    fr: "Les entreprises en faillite qui restent assujetties à la TVA",
    nl: "Failliete ondernemingen die nog steeds btw-plichtig zijn",
    de: "Insolvente Unternehmen, die weiterhin mehrwertsteuerpflichtig sind",
  },
  "Entities performing only VAT-exempt activities under Article 44 of the VAT Code":
    {
      fr: "Les entités exerçant uniquement des activités exonérées de TVA en vertu de l’article 44 du Code TVA",
      nl: "Entiteiten die uitsluitend btw-vrijgestelde activiteiten verrichten onder artikel 44 van het Btw-wetboek",
      de: "Unternehmen, die ausschließlich mehrwertsteuerbefreite Tätigkeiten nach Artikel 44 des Mehrwertsteuergesetzbuchs ausüben",
    },
  "Non-resident taxpayers without a permanent establishment in Belgium": {
    fr: "Les assujettis non-résidents sans établissement permanent en Belgique",
    nl: "Niet-inwonende belastingplichtigen zonder vaste inrichting in België",
    de: "Steuerpflichtige ohne Wohnsitz und ohne feste Niederlassung in Belgien",
  },
  "Flat-rate taxpayers, who remain exempt until the start of 2028": {
    fr: "Les assujettis au régime forfaitaire, qui restent exemptés jusqu’au début de 2028",
    nl: "Forfaitaire belastingplichtigen, die vrijgesteld blijven tot begin 2028",
    de: "Pauschalbesteuerte Steuerpflichtige, die bis Anfang 2028 ausgenommen bleiben",
  },
  "Is there a transition period?": {
    fr: "Existe-t-il une période de transition ?",
    nl: "Is er een overgangsperiode?",
    de: "Gibt es eine Übergangsfrist?",
  },
  "Yes. Businesses have until January 2026 to adjust their invoicing systems, prepare internal workflows, update ERP configurations and train staff.":
    {
      fr: "Oui. Les entreprises ont jusqu’en janvier 2026 pour adapter leurs systèmes de facturation, préparer leurs workflows internes, mettre à jour leurs configurations ERP et former leurs équipes.",
      nl: "Ja. Bedrijven hebben tot januari 2026 de tijd om hun factureringssystemen aan te passen, interne workflows voor te bereiden, ERP-configuraties bij te werken en personeel op te leiden.",
      de: "Ja. Unternehmen haben bis Januar 2026 Zeit, ihre Fakturierungssysteme anzupassen, interne Abläufe vorzubereiten, ERP-Konfigurationen zu aktualisieren und ihre Mitarbeitenden zu schulen.",
    },
  "Are SMEs or freelancers offered support?": {
    fr: "Un soutien est-il prévu pour les PME ou les indépendants ?",
    nl: "Is er ondersteuning voor kmo’s of freelancers?",
    de: "Gibt es Unterstützung für KMU oder Selbstständige?",
  },
  "Yes. Beginning in 2025, the investment allowance for digital tools will be increased to 20%. Small businesses using subscription-based invoicing tools between 2024 and 2027 may also benefit from a 120% deductible for qualifying e-invoicing costs.":
    {
      fr: "Oui. À partir de 2025, la déduction pour investissements dans des outils numériques sera portée à 20 %. Les petites entreprises utilisant des solutions de facturation par abonnement entre 2024 et 2027 pourront également bénéficier d’une déductibilité de 120 % pour les coûts de facturation électronique admissibles.",
      nl: "Ja. Vanaf 2025 wordt de investeringsaftrek voor digitale tools verhoogd tot 20%. Kleine ondernemingen die tussen 2024 en 2027 abonnementsgebaseerde facturatietools gebruiken, kunnen bovendien profiteren van 120% aftrekbaarheid voor in aanmerking komende e-facturatiekosten.",
      de: "Ja. Ab 2025 wird die Investitionszulage für digitale Werkzeuge auf 20 % erhöht. Kleine Unternehmen, die zwischen 2024 und 2027 abonnementsbasierte Fakturierungslösungen nutzen, können zudem von einer 120%igen Abzugsfähigkeit qualifizierter E-Rechnungskosten profitieren.",
    },
  "What about international invoicing?": {
    fr: "Qu’en est-il de la facturation internationale ?",
    nl: "Hoe zit het met internationale facturatie?",
    de: "Wie wird mit internationaler Rechnungsstellung umgegangen?",
  },
  "Cross-border e-invoicing is allowed if both parties agree. Peppol can be used as long as the foreign recipient is connected. Future rules may evolve under the European VAT in the Digital Age initiative.":
    {
      fr: "La facturation électronique transfrontalière est autorisée si les deux parties sont d’accord. Peppol peut être utilisé dès lors que le destinataire étranger est connecté. Les règles futures pourront évoluer dans le cadre de l’initiative européenne « TVA à l’ère du numérique ». ",
      nl: "Grensoverschrijdende e-facturatie is toegestaan wanneer beide partijen akkoord gaan. Peppol kan worden gebruikt zolang de buitenlandse ontvanger is aangesloten. Toekomstige regels kunnen verder worden ontwikkeld in het kader van het Europese initiatief “btw in het digitale tijdperk”.",
      de: "Grenzüberschreitende E-Rechnungsstellung ist zulässig, sofern beide Parteien zustimmen. Peppol kann genutzt werden, solange der ausländische Empfänger angebunden ist. Künftige Regelungen können sich im Rahmen der europäischen Initiative „Mehrwertsteuer im digitalen Zeitalter“ weiterentwickeln.",
    },
  "Technical and Format Requirements": {
    fr: "Exigences techniques et de format",
    nl: "Technische en formatvereisten",
    de: "Technische Anforderungen und Formatvorgaben",
  },
  "Which network does Belgium use for e-invoicing?": {
    fr: "Quel réseau la Belgique utilise-t-elle pour la facturation électronique ?",
    nl: "Welk netwerk gebruikt België voor e-facturatie?",
    de: "Welches Netzwerk nutzt Belgien für die E-Rechnungsstellung?",
  },
  "Belgium uses the Peppol network. For public sector invoices, the Mercurius platform routes and receives structured documents. For business-to-business transactions, invoices are exchanged directly through Peppol-compatible software.":
    {
      fr: "La Belgique utilise le réseau Peppol. Pour les factures destinées au secteur public, la plateforme Mercurius assure le routage et la réception des documents structurés. Pour les transactions entre entreprises, les factures sont échangées directement via des logiciels compatibles Peppol.",
      nl: "België gebruikt het Peppol-netwerk. Voor facturen aan de publieke sector verzorgt het Mercurius-platform de routering en ontvangst van gestructureerde documenten. Voor transacties tussen bedrijven worden facturen rechtstreeks uitgewisseld via Peppol-compatibele software.",
      de: "Belgien nutzt das Peppol-Netzwerk. Für Rechnungen an den öffentlichen Sektor übernimmt die Mercurius-Plattform die Weiterleitung und den Empfang strukturierter Dokumente. Für Transaktionen zwischen Unternehmen werden Rechnungen direkt über Peppol-kompatible Software ausgetauscht.",
    },
  "What is the required format?": {
    fr: "Quel est le format requis ?",
    nl: "Welk formaat is vereist?",
    de: "Welches Format ist vorgeschrieben?",
  },
  "Invoices must follow the European EN16931 standard. In practice, most invoices are transmitted in the Peppol BIS format. Businesses may agree on an alternative EN16931-compliant format as long as it can be converted into a compliant invoice.":
    {
      fr: "Les factures doivent respecter la norme européenne EN16931. En pratique, la plupart des factures sont transmises au format Peppol BIS. Les entreprises peuvent convenir d’un autre format conforme à EN16931, pour autant qu’il puisse être converti en une facture conforme.",
      nl: "Facturen moeten voldoen aan de Europese EN16931-norm. In de praktijk worden de meeste facturen verzonden in Peppol BIS-formaat. Bedrijven kunnen een alternatief EN16931-conform formaat afspreken, zolang dit kan worden omgezet in een conforme factuur.",
      de: "Rechnungen müssen der europäischen Norm EN16931 entsprechen. In der Praxis werden die meisten Rechnungen im Peppol-BIS-Format übermittelt. Unternehmen können ein anderes EN16931-konformes Format vereinbaren, sofern dieses in eine konforme Rechnung überführt werden kann.",
    },
  "What model does Belgium rely on?": {
    fr: "Sur quel modèle la Belgique s’appuie-t-elle ?",
    nl: "Welk model hanteert België?",
    de: "Auf welches Modell stützt sich Belgien?",
  },
  "Belgium uses a four-corner model, where the sender and receiver each use their preferred Access Point to communicate through the Peppol network. This ensures interoperability regardless of software.":
    {
      fr: "La Belgique utilise un modèle à quatre coins, dans lequel l’émetteur et le destinataire utilisent chacun leur point d’accès préféré pour communiquer via le réseau Peppol. Cela garantit l’interopérabilité, quel que soit le logiciel utilisé.",
      nl: "België werkt met een vierhoekmodel, waarbij verzender en ontvanger elk hun eigen Access Point gebruiken om via het Peppol-netwerk te communiceren. Dit waarborgt interoperabiliteit, ongeacht de gebruikte software.",
      de: "Belgien verwendet ein Vier-Ecken-Modell, bei dem Absender und Empfänger jeweils ihren bevorzugten Access Point nutzen, um über das Peppol-Netzwerk zu kommunizieren. So ist die Interoperabilität unabhängig von der eingesetzten Software gewährleistet.",
    },
  "How is an e-invoice generated?": {
    fr: "Comment une facture électronique est-elle générée ?",
    nl: "Hoe wordt een e-factuur gegenereerd?",
    de: "Wie wird eine E-Rechnung erzeugt?",
  },
  "Invoices are created within accounting or ERP systems capable of producing EN16931-compliant data. The structured file is then transmitted through a Peppol Access Point. For B2G, the invoice passes through the Mercurius platform before reaching the authority.":
    {
      fr: "Les factures sont générées dans des systèmes comptables ou ERP capables de produire des données conformes à EN16931. Le fichier structuré est ensuite transmis via un point d’accès Peppol. Pour les factures B2G, le document transite par la plateforme Mercurius avant d’atteindre l’autorité concernée.",
      nl: "Facturen worden aangemaakt in boekhoud- of ERP-systemen die EN16931-conforme data kunnen produceren. Het gestructureerde bestand wordt vervolgens via een Peppol Access Point verzonden. Voor B2G-facturen loopt het document via het Mercurius-platform voordat het de overheid bereikt.",
      de: "Rechnungen werden in Buchhaltungs- oder ERP-Systemen erstellt, die EN16931-konforme Daten erzeugen können. Die strukturierte Datei wird anschließend über einen Peppol Access Point übertragen. Bei B2G-Rechnungen durchläuft das Dokument vor der Zustellung an die Behörde die Mercurius-Plattform.",
    },
  "What is Peppol?": {
    fr: "Qu’est-ce que Peppol ?",
    nl: "Wat is Peppol?",
    de: "Was ist Peppol?",
  },
  "Peppol is a secure, decentralized network designed to support standardised business document exchange across Europe. It ensures that invoices can be read, validated, and processed by any compliant recipient, regardless of the software being used.":
    {
      fr: "Peppol est un réseau sécurisé et décentralisé conçu pour faciliter l’échange standardisé de documents commerciaux à travers l’Europe. Il garantit que les factures puissent être lues, validées et traitées par tout destinataire conforme, quel que soit le logiciel utilisé.",
      nl: "Peppol is een veilig, gedecentraliseerd netwerk dat is ontworpen om gestandaardiseerde uitwisseling van zakelijke documenten in heel Europa te ondersteunen. Het zorgt ervoor dat facturen gelezen, gevalideerd en verwerkt kunnen worden door elke conforme ontvanger, ongeacht de gebruikte software.",
      de: "Peppol ist ein sicheres, dezentralisiertes Netzwerk, das für den standardisierten Austausch von Geschäftsdokumenten in ganz Europa entwickelt wurde. Es stellt sicher, dass Rechnungen von jedem konformen Empfänger gelesen, validiert und verarbeitet werden können – unabhängig von der verwendeten Software.",
    },
  "What is EN16931?": {
    fr: "Qu’est-ce que la norme EN16931 ?",
    nl: "Wat is EN16931?",
    de: "Was ist EN16931?",
  },
  "EN16931 defines the core data model for electronic invoices in Europe. It ensures consistency, interoperability and legal compliance across all participating countries.":
    {
      fr: "La norme EN16931 définit le modèle de données central pour les factures électroniques en Europe. Elle garantit la cohérence, l’interopérabilité et la conformité juridique dans tous les pays participants.",
      nl: "EN16931 definieert het kerngegevensmodel voor elektronische facturen in Europa. De norm waarborgt consistentie, interoperabiliteit en juridische naleving in alle deelnemende landen.",
      de: "EN16931 definiert das zentrale Datenmodell für elektronische Rechnungen in Europa. Die Norm sorgt für Konsistenz, Interoperabilität und rechtliche Konformität in allen teilnehmenden Ländern.",
    },
  "Are PDF invoices still accepted?": {
    fr: "Les factures PDF sont-elles encore acceptées ?",
    nl: "Worden pdf-facturen nog aanvaard?",
    de: "Werden PDF-Rechnungen weiterhin akzeptiert?",
  },
  "PDF invoices remain acceptable until the end of 2025.": {
    fr: "Les factures PDF restent acceptées jusqu’à la fin de l’année 2025.",
    nl: "Pdf-facturen blijven tot eind 2025 aanvaardbaar.",
    de: "PDF-Rechnungen bleiben bis Ende 2025 zulässig.",
  },
  "From January 2026, PDF invoices alone will not be considered valid for B2B transactions.":
    {
      fr: "À partir de janvier 2026, les factures PDF seules ne seront plus considérées comme valides pour les transactions B2B.",
      nl: "Vanaf januari 2026 worden pdf-facturen op zichzelf niet langer als geldig beschouwd voor B2B-transacties.",
      de: "Ab Januar 2026 gelten alleinige PDF-Rechnungen für B2B-Transaktionen nicht mehr als gültig.",
    },
  "For B2C and international invoicing, PDF remains allowed if the recipient agrees.":
    {
      fr: "Pour la facturation B2C et internationale, le format PDF reste autorisé si le destinataire marque son accord.",
      nl: "Voor B2C- en internationale facturatie blijft pdf toegestaan, mits de ontvanger akkoord gaat.",
      de: "Für B2C- und internationale Rechnungen bleibt PDF zulässig, sofern der Empfänger zustimmt.",
    },
  "How is invoice security guaranteed?": {
    fr: "Comment la sécurité des factures est-elle garantie ?",
    nl: "Hoe wordt de veiligheid van facturen gewaarborgd?",
    de: "Wie wird die Sicherheit von Rechnungen gewährleistet?",
  },
  "The Peppol network uses certified providers and secure communication protocols. This significantly reduces risks related to modified invoices, fraud or tampering.":
    {
      fr: "Le réseau Peppol repose sur des prestataires certifiés et des protocoles de communication sécurisés. Cela réduit considérablement les risques liés à la modification de factures, à la fraude ou à la falsification.",
      nl: "Het Peppol-netwerk maakt gebruik van gecertificeerde dienstverleners en beveiligde communicatieprotocollen. Dit verkleint het risico op gemanipuleerde facturen, fraude of knoeiwerk aanzienlijk.",
      de: "Das Peppol-Netzwerk nutzt zertifizierte Dienstleister und sichere Kommunikationsprotokolle. Dadurch werden Risiken im Zusammenhang mit manipulierten Rechnungen, Betrug oder Fälschung deutlich reduziert.",
    },
  "Must international transactions also comply with EN16931?": {
    fr: "Les transactions internationales doivent-elles également être conformes à EN16931 ?",
    nl: "Moeten internationale transacties ook voldoen aan EN16931?",
    de: "Müssen internationale Transaktionen ebenfalls EN16931 entsprechen?",
  },
  "Yes, if both parties agree to use structured invoicing. The Peppol network supports cross-border exchange across all participating jurisdictions.":
    {
      fr: "Oui, si les deux parties conviennent d’utiliser la facturation structurée. Le réseau Peppol prend en charge les échanges transfrontaliers dans toutes les juridictions participantes.",
      nl: "Ja, op voorwaarde dat beide partijen akkoord gaan met gestructureerde facturatie. Het Peppol-netwerk ondersteunt grensoverschrijdende uitwisseling in alle deelnemende rechtsgebieden.",
      de: "Ja, sofern beide Parteien der Verwendung strukturierter Rechnungen zustimmen. Das Peppol-Netzwerk unterstützt den grenzüberschreitenden Austausch in allen teilnehmenden Rechtsordnungen.",
    },
  "Compliance and Legal Obligations": {
    fr: "Conformité et obligations légales",
    nl: "Naleving en wettelijke verplichtingen",
    de: "Compliance und gesetzliche Pflichten",
  },
  "What are the retention and audit requirements?": {
    fr: "Quelles sont les exigences en matière de conservation et d’audit ?",
    nl: "Wat zijn de vereisten rond bewaring en audit?",
    de: "Welche Anforderungen gelten für Aufbewahrung und Prüfung?",
  },
  "Invoices must remain unaltered, readable and accessible for the entire retention period. Businesses must be able to present the invoice and its audit trail at any time upon request by the tax authority.":
    {
      fr: "Les factures doivent rester intactes, lisibles et accessibles pendant toute la durée de conservation. Les entreprises doivent être en mesure de présenter la facture et sa piste d’audit à tout moment, sur demande de l’administration fiscale.",
      nl: "Facturen moeten gedurende de volledige bewaartermijn ongewijzigd, leesbaar en toegankelijk blijven. Ondernemingen moeten de factuur en de bijbehorende audittrail op elk moment kunnen voorleggen op verzoek van de belastingdienst.",
      de: "Rechnungen müssen während der gesamten Aufbewahrungsfrist unverändert, lesbar und zugänglich bleiben. Unternehmen müssen in der Lage sein, die Rechnung und ihren Audit Trail jederzeit auf Anforderung der Steuerbehörde vorzulegen.",
    },
  "Can VAT be deducted from non-structured invoices after 2026?": {
    fr: "La TVA pourra-t-elle encore être déduite de factures non structurées après 2026 ?",
    nl: "Kan na 2026 nog btw worden afgetrokken van niet-gestructureerde facturen?",
    de: "Kann nach 2026 noch Vorsteuer aus nicht strukturierten Rechnungen abgezogen werden?",
  },
  "From 2026, VAT deductions on B2B transactions require a structured invoice. B2C and transactions outside the scope may still use regular electronic or paper invoices.":
    {
      fr: "À partir de 2026, la déduction de TVA sur les transactions B2B nécessitera une facture structurée. Les transactions B2C et celles hors champ pourront encore utiliser des factures électroniques ou papier classiques.",
      nl: "Vanaf 2026 is voor btw-aftrek op B2B-transacties een gestructureerde factuur vereist. Voor B2C-transacties en verrichtingen buiten de scope kunnen nog gewone elektronische of papieren facturen worden gebruikt.",
      de: "Ab 2026 setzt der Vorsteuerabzug bei B2B-Transaktionen eine strukturierte Rechnung voraus. Für B2C-Geschäfte und Vorgänge außerhalb des Anwendungsbereichs können weiterhin herkömmliche elektronische oder Papierrechnungen genutzt werden.",
    },
  "What are the authenticity and integrity rules?": {
    fr: "Quelles sont les règles en matière d’authenticité et d’intégrité ?",
    nl: "Wat zijn de regels rond authenticiteit en integriteit?",
    de: "Welche Vorgaben gelten für Authentizität und Integrität?",
  },
  "Authenticity of origin means the issuer must always be identifiable.": {
    fr: "L’authenticité de l’origine signifie que l’émetteur doit toujours être identifiable.",
    nl: "Authenticiteit van de herkomst betekent dat de opsteller steeds identificeerbaar moet zijn.",
    de: "Authentizität der Herkunft bedeutet, dass der Aussteller jederzeit eindeutig identifizierbar sein muss.",
  },
  "Integrity of content means the invoice data cannot be modified.": {
    fr: "L’intégrité du contenu signifie que les données de la facture ne peuvent pas être modifiées.",
    nl: "Integriteit van de inhoud houdt in dat de factuurgegevens niet mogen worden aangepast.",
    de: "Integrität des Inhalts bedeutet, dass die Rechnungsdaten nicht verändert werden dürfen.",
  },
  "Legibility means the invoice must remain readable at all times.": {
    fr: "La lisibilité implique que la facture doit rester lisible à tout moment.",
    nl: "Leesbaarheid betekent dat de factuur op elk moment leesbaar moet blijven.",
    de: "Lesbarkeit bedeutet, dass die Rechnung jederzeit lesbar sein muss.",
  },
  "A reliable audit trail must connect each invoice to the underlying transaction.":
    {
      fr: "Une piste d’audit fiable doit relier chaque facture à la transaction sous-jacente.",
      nl: "Een betrouwbare audittrail moet elke factuur koppelen aan de onderliggende transactie.",
      de: "Ein verlässlicher Audit Trail muss jede Rechnung mit der zugrunde liegenden Transaktion verknüpfen.",
    },
  "Do I still need recipient consent to send electronic invoices?": {
    fr: "Ai-je encore besoin du consentement du destinataire pour envoyer des factures électroniques ?",
    nl: "Heb ik nog toestemming van de ontvanger nodig om elektronische facturen te versturen?",
    de: "Benötige ich weiterhin die Zustimmung des Empfängers, um elektronische Rechnungen zu senden?",
  },
  "Until the end of 2025, recipient agreement is required unless they are already registered on Peppol.":
    {
      fr: "Jusqu’à la fin de l’année 2025, l’accord du destinataire est requis, sauf s’il est déjà enregistré sur Peppol.",
      nl: "Tot eind 2025 is toestemming van de ontvanger vereist, tenzij deze al op Peppol is geregistreerd.",
      de: "Bis Ende 2025 ist die Zustimmung des Empfängers erforderlich, es sei denn, er ist bereits im Peppol-Netzwerk registriert.",
    },
  "From January 2026, consent is not needed for domestic B2B transactions since structured invoicing becomes mandatory.":
    {
      fr: "À partir de janvier 2026, le consentement ne sera plus nécessaire pour les transactions B2B nationales, la facturation structurée devenant obligatoire.",
      nl: "Vanaf januari 2026 is geen toestemming meer nodig voor binnenlandse B2B-transacties, omdat gestructureerde facturatie dan verplicht wordt.",
      de: "Ab Januar 2026 ist für inländische B2B-Geschäfte keine Zustimmung mehr erforderlich, da die strukturierte Rechnungsstellung verpflichtend wird.",
    },
  "What are the penalties for non-compliance?": {
    fr: "Quelles sont les sanctions en cas de non-respect des obligations ?",
    nl: "Wat zijn de sancties bij niet-naleving?",
    de: "Welche Sanktionen drohen bei Nichtbefolgung?",
  },
  "Businesses that fail to issue or receive structured invoices face substantial fines.":
    {
      fr: "Les entreprises qui ne parviennent pas à émettre ou à recevoir des factures structurées s’exposent à des amendes importantes.",
      nl: "Ondernemingen die geen gestructureerde facturen uitreiken of ontvangen, riskeren aanzienlijke boetes.",
      de: "Unternehmen, die keine strukturierten Rechnungen ausstellen oder empfangen, müssen mit erheblichen Geldbußen rechnen.",
    },
  "First offence: €1,500": {
    fr: "Première infraction : 1 500 €",
    nl: "Eerste overtreding: € 1.500",
    de: "Erstverstoß: 1.500 €",
  },
  "Second offence: €3,000": {
    fr: "Deuxième infraction : 3 000 €",
    nl: "Tweede overtreding: € 3.000",
    de: "Zweitverstoß: 3.000 €",
  },
  "Further offences: €5,000": {
    fr: "Infractions ultérieures : 5 000 €",
    nl: "Verdere overtredingen: € 5.000",
    de: "Weitere Verstöße: 5.000 €",
  },
  "Additional penalties may apply for issuing incorrect or late e-invoices.": {
    fr: "Des sanctions supplémentaires peuvent s’appliquer en cas d’émission de factures électroniques erronées ou tardives.",
    nl: "Aanvullende sancties kunnen gelden bij het uitreiken van onjuiste of laattijdige e-facturen.",
    de: "Zusätzliche Sanktionen können bei fehlerhaften oder verspäteten E-Rechnungen anfallen.",
  },
  "Implementation and Software": {
    fr: "Mise en œuvre et logiciels",
    nl: "Implementatie en software",
    de: "Implementierung und Software",
  },
  "What software is required?": {
    fr: "Quel logiciel est nécessaire ?",
    nl: "Welke software is vereist?",
    de: "Welche Software wird benötigt?",
  },
  "You need software that supports EN16931 and can connect to the Peppol network. The Belgian government will publish a list of approved tools, including low-cost options, beginning October 2024.":
    {
      fr: "Vous avez besoin d’un logiciel compatible avec la norme EN16931 et capable de se connecter au réseau Peppol. Le gouvernement belge publiera à partir d’octobre 2024 une liste d’outils approuvés, y compris des options à faible coût.",
      nl: "U hebt software nodig die EN16931 ondersteunt en verbinding kan maken met het Peppol-netwerk. De Belgische overheid zal vanaf oktober 2024 een lijst publiceren met goedgekeurde tools, waaronder goedkope opties.",
      de: "Sie benötigen eine Software, die EN16931 unterstützt und sich mit dem Peppol-Netzwerk verbinden kann. Die belgische Regierung veröffentlicht ab Oktober 2024 eine Liste zugelassener Lösungen, einschließlich kostengünstiger Optionen.",
    },
  "What if my software is not compliant?": {
    fr: "Que se passe-t-il si mon logiciel n’est pas conforme ?",
    nl: "Wat als mijn software niet conform is?",
    de: "Was, wenn meine Software nicht konform ist?",
  },
  "You can check your provider's compliance roadmap, switch to a certified vendor or work with a Peppol Access Point that offers integration services.":
    {
      fr: "Vous pouvez vérifier la feuille de route de conformité de votre fournisseur, passer à un prestataire certifié ou collaborer avec un point d’accès Peppol qui propose des services d’intégration.",
      nl: "U kunt de compliance-roadmap van uw leverancier raadplegen, overstappen naar een gecertificeerde aanbieder of samenwerken met een Peppol Access Point dat integratiediensten aanbiedt.",
      de: "Sie können die Compliance-Roadmap Ihres Anbieters prüfen, zu einem zertifizierten Anbieter wechseln oder mit einem Peppol Access Point zusammenarbeiten, der Integrationsdienstleistungen anbietet.",
    },
  "Can I send a paper invoice along with a structured invoice?": {
    fr: "Puis-je envoyer une facture papier en plus d’une facture structurée ?",
    nl: "Kan ik naast een gestructureerde factuur ook een papieren factuur sturen?",
    de: "Kann ich zusätzlich zur strukturierten Rechnung auch eine Papierrechnung versenden?",
  },
  "Yes, but only the structured version is considered legally valid for tax and compliance purposes.":
    {
      fr: "Oui, mais seule la version structurée est considérée comme légalement valable à des fins fiscales et de conformité.",
      nl: "Ja, maar alleen de gestructureerde versie wordt voor fiscale en compliance-doeleinden als rechtsgeldig beschouwd.",
      de: "Ja, aber nur die strukturierte Version gilt für Steuer- und Compliance-Zwecke als rechtsverbindlich.",
    },
  "Will there be additional costs?": {
    fr: "Y aura-t-il des coûts supplémentaires ?",
    nl: "Zullen er extra kosten zijn?",
    de: "Fallen zusätzliche Kosten an?",
  },
  "Some businesses may incur expenses for system upgrades, integration or training. These costs are generally outweighed by long-term operational savings.":
    {
      fr: "Certaines entreprises devront peut-être engager des dépenses pour des mises à niveau de systèmes, des intégrations ou des formations. Ces coûts sont généralement compensés par des économies opérationnelles à long terme.",
      nl: "Sommige ondernemingen zullen kosten maken voor systeemupgrades, integratie of opleiding. Deze kosten worden doorgaans ruimschoots gecompenseerd door langetermijnbesparingen in de operatie.",
      de: "Einige Unternehmen müssen möglicherweise in Systemupgrades, Integrationen oder Schulungen investieren. Diese Aufwendungen werden in der Regel durch langfristige operative Einsparungen mehr als ausgeglichen.",
    },
  "How can a business implement e-invoicing?": {
    fr: "Comment une entreprise peut-elle mettre en œuvre la facturation électronique ?",
    nl: "Hoe kan een bedrijf e-facturatie invoeren?",
    de: "Wie kann ein Unternehmen E-Rechnungsstellung einführen?",
  },
  "At a minimum, companies should review their invoicing systems, select Peppol-compatible software, integrate their internal processes, establish data validation controls and train staff before January 2026.":
    {
      fr: "Au minimum, les entreprises devraient examiner leurs systèmes de facturation, choisir un logiciel compatible Peppol, intégrer leurs processus internes, mettre en place des contrôles de validation des données et former leur personnel avant janvier 2026.",
      nl: "Minstens zouden ondernemingen hun factureringssystemen moeten herzien, Peppol-compatibele software kiezen, hun interne processen integreren, controles voor datavalidatie opzetten en medewerkers opleiden vóór januari 2026.",
      de: "Mindestens sollten Unternehmen ihre Fakturierungssysteme überprüfen, Peppol-kompatible Software auswählen, ihre internen Prozesse integrieren, Kontrollen zur Datenvalidierung einrichten und ihre Mitarbeitenden bis spätestens Januar 2026 schulen.",
    },
 
  "Belgium's transition to structured e-invoicing represents an important shift toward a more transparent, secure and efficient financial ecosystem. Businesses that prepare early will be better positioned to comply with the mandate, reduce administrative effort and integrate smoothly with the broader European digital framework. Many organisations are choosing platforms that simplify structured invoicing, validation and Peppol connectivity. Solutions such as Accqrate, which already support automated and compliant e-invoicing workflows, can help companies adapt with confidence while they modernise their financial operations.":
    {
      fr: "La transition de la Belgique vers la facturation électronique structurée constitue une évolution majeure vers un écosystème financier plus transparent, plus sûr et plus efficace. Les entreprises qui se préparent en amont seront mieux placées pour respecter le mandat, réduire la charge administrative et s’intégrer sans friction dans le cadre numérique européen plus large. De nombreuses organisations optent pour des plateformes qui simplifient la facturation structurée, la validation et la connectivité Peppol. Des solutions telles qu’Accqrate, qui prennent déjà en charge des flux de facturation électronique automatisés et conformes, aident les entreprises à s’adapter en toute confiance tout en modernisant leurs opérations financières.",
      nl: "De overgang van België naar gestructureerde e-facturatie betekent een belangrijke stap naar een transparanter, veiliger en efficiënter financieel ecosysteem. Bedrijven die zich tijdig voorbereiden, zullen beter in staat zijn om aan de verplichting te voldoen, de administratieve last te beperken en naadloos aan te sluiten op het bredere Europese digitale kader. Veel organisaties kiezen daarom voor platformen die gestructureerde facturatie, validatie en Peppol-connectiviteit vereenvoudigen. Oplossingen zoals Accqrate, die al geautomatiseerde en conforme e-facturatiestromen ondersteunen, helpen bedrijven zich met vertrouwen aan te passen terwijl zij hun financiële processen moderniseren.",
      de: "Der Übergang Belgiens zur strukturierten E-Rechnungsstellung markiert einen wichtigen Schritt hin zu einem transparenteren, sichereren und effizienteren Finanzökosystem. Unternehmen, die sich frühzeitig vorbereiten, sind besser aufgestellt, um die Vorgaben zu erfüllen, den administrativen Aufwand zu reduzieren und sich reibungslos in den übergeordneten europäischen digitalen Rahmen einzufügen. Viele Organisationen entscheiden sich daher für Plattformen, die strukturierte Rechnungsstellung, Validierung und Peppol-Anbindung vereinfachen. Lösungen wie Accqrate, die bereits automatisierte und konforme E-Rechnungsworkflows unterstützen, helfen Unternehmen, sich mit Zuversicht anzupassen und gleichzeitig ihre Finanzprozesse zu modernisieren.",
    },

  //PEPPOL and the Mercurius Platform in Belgium: A Complete Guide for the 2026 E Invoicing Landscape

  "PEPPOL and the Mercurius Platform in Belgium: A Complete Guide for the 2026 E Invoicing Landscapes":
    {
      fr: "PEPPOL et la plateforme Mercurius en Belgique : guide complet pour le paysage de la facturation électronique 2026",
      nl: "PEPPOL en het Mercurius-platform in België: een complete gids voor het e-facturatielandschap van 2026",
      de: "PEPPOL und die Mercurius-Plattform in Belgien: ein vollständiger Leitfaden für die E-Rechnungslandschaft 2026",
    },
  "Updated On : Nov 25th, 2024 | 20 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 20 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 20 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | 20 Minuten Lesezeit",
  },
  "Belgium is preparing to reshape its financial and compliance environment with a nationwide transition to mandatory e invoicing for all VAT liable B2B transactions from January 2026. This move aligns the country with broader EU efforts to create a streamlined, transparent, and fully digital invoicing ecosystem.":
    {
      fr: "La Belgique se prépare à remodeler son environnement financier et réglementaire en instaurant, à partir de janvier 2026, la facturation électronique obligatoire pour toutes les transactions B2B assujetties à la TVA. Cette mesure aligne le pays sur les efforts plus larges de l’UE visant à créer un écosystème de facturation rationalisé, transparent et entièrement numérique.",
      nl: "België maakt zich op om zijn financiële en compliance-omgeving grondig te hervormen met een nationale overstap naar verplichte e-facturatie voor alle btw-plichtige B2B-transacties vanaf januari 2026. Deze stap brengt het land in lijn met de bredere EU-inspanningen om een gestroomlijnd, transparant en volledig digitaal facturatie-ecosysteem te creëren.",
      de: "Belgien bereitet sich darauf vor, seine Finanz- und Compliance-Landschaft grundlegend zu verändern, indem ab Januar 2026 landesweit eine verpflichtende E-Rechnungsstellung für alle mehrwertsteuerpflichtigen B2B-Transaktionen eingeführt wird. Dieser Schritt bringt das Land in Einklang mit den umfassenderen EU-Bestrebungen, ein schlankes, transparentes und vollständig digitales Rechnungsökosystem zu schaffen.",
    },
  "To support this transition, Belgium relies on two foundational components:":
    {
      fr: "Pour accompagner cette transition, la Belgique s’appuie sur deux composantes fondamentales :",
      nl: "Om deze overgang te ondersteunen, vertrouwt België op twee fundamentele bouwstenen:",
      de: "Zur Unterstützung dieses Übergangs stützt sich Belgien auf zwei zentrale Bausteine:",
    },
  "The Mercurius platform, which acts as the country's central processing and routing hub, and":
    {
      fr: "La plateforme Mercurius, qui sert de hub national de traitement et de routage, et",
      nl: "Het Mercurius-platform, dat fungeert als het centrale verwerkings- en routeringsknooppunt van het land, en",
      de: "Die Mercurius-Plattform, die als zentrales Verarbeitungs- und Routing-Drehkreuz des Landes fungiert, und",
    },
  "The PEPPOL framework, which provides the technical standards and international network for structured invoice exchange.":
    {
      fr: "Le cadre PEPPOL, qui fournit les normes techniques et le réseau international pour l’échange de factures structurées.",
      nl: "Het PEPPOL-raamwerk, dat de technische standaarden en het internationale netwerk voor de uitwisseling van gestructureerde facturen biedt.",
      de: "Das PEPPOL-Framework, das die technischen Standards und das internationale Netzwerk für den Austausch strukturierter Rechnungen bereitstellt.",
    },
  "Understanding how these two systems work together is essential for any business operating in Belgium. The following guide unpacks their roles, capabilities, and how companies can prepare for the upcoming requirements.":
    {
      fr: "Comprendre comment ces deux systèmes fonctionnent ensemble est essentiel pour toute entreprise opérant en Belgique. Le guide suivant détaille leurs rôles, leurs capacités et la manière dont les sociétés peuvent se préparer aux nouvelles exigences.",
      nl: "Inzicht in hoe deze twee systemen samenwerken is cruciaal voor elke onderneming die in België actief is. In deze gids worden hun rollen en mogelijkheden uiteengezet en wordt uitgelegd hoe bedrijven zich op de komende verplichtingen kunnen voorbereiden.",
      de: "Zu verstehen, wie diese beiden Systeme zusammenspielen, ist für jedes in Belgien tätige Unternehmen entscheidend. Der folgende Leitfaden erläutert ihre Rollen und Fähigkeiten und zeigt auf, wie sich Unternehmen auf die kommenden Anforderungen vorbereiten können.",
    },
  "Understanding E Invoicing and Its Importance": {
    fr: "Comprendre la facturation électronique et son importance",
    nl: "Inzicht in e-facturatie en het belang ervan",
    de: "E-Rechnungsstellung verstehen en ihre Bedeutung",
  },
  "E invoicing involves sending and receiving invoices in a structured digital format that allows automated interpretation by accounting or ERP systems. Unlike paper documents or PDFs, which require manual checks, structured e invoices follow a predefined data model that ensures consistency and accuracy.":
    {
      fr: "La facturation électronique consiste à envoyer et à recevoir des factures dans un format numérique structuré permettant une interprétation automatisée par les systèmes comptables ou ERP. Contrairement aux documents papier ou aux PDF, qui nécessitent des vérifications manuelles, les factures électroniques structurées suivent un modèle de données prédéfini garantissant cohérence et exactitude.",
      nl: "E-facturatie houdt in dat facturen worden verzonden en ontvangen in een gestructureerd digitaal formaat dat automatisch kan worden geïnterpreteerd door boekhoud- of ERP-systemen. In tegenstelling tot papieren documenten of pdf’s, die manuele controles vereisen, volgen gestructureerde e-facturen een vooraf gedefinieerd datamodel dat consistentie en nauwkeurigheid waarborgt.",
      de: "E-Rechnungsstellung bedeutet, Rechnungen in einem strukturierten digitalen Format zu senden und zu empfangen, das von Buchhaltungs- oder ERP-Systemen automatisch interpretiert werden kann. Im Gegensatz zu Papierdokumenten oder PDFs, die manuelle Prüfungen erfordern, folgen strukturierte E-Rechnungen einem vordefinierten Datenmodell, das Konsistenz und Genauigkeit sicherstellt.",
    },
  "Belgium adheres to the EU EN16931 standard, which defines how invoice data must be organized. This standard guarantees that both the sender and receiver can process invoices without manual intervention, regardless of the systems they use.":
    {
      fr: "La Belgique applique la norme européenne EN16931, qui définit la manière dont les données de facturation doivent être organisées. Cette norme garantit que l’émetteur comme le destinataire peuvent traiter les factures sans intervention manuelle, quels que soient les systèmes utilisés.",
      nl: "België hanteert de Europese EN16931-norm, die bepaalt hoe factuurgegevens moeten worden gestructureerd. Deze norm zorgt ervoor dat zowel verzender als ontvanger facturen kunnen verwerken zonder manuele tussenkomst, ongeacht de gebruikte systemen.",
      de: "Belgien richtet sich nach der EU-Norm EN16931, die festlegt, wie Rechnungsdaten aufgebaut sein müssen. Dieser Standard stellt sicher, dass sowohl Absender als auch Empfänger Rechnungen unabhängig von ihren Systemen ohne manuelle Eingriffe verarbeiten können.",
    },
  "By making structured e invoicing mandatory, Belgium aims to improve financial accuracy, reduce administrative burden, and strengthen tax compliance across the economy.":
    {
      fr: "En rendant la facturation électronique structurée obligatoire, la Belgique entend améliorer la précision financière, réduire la charge administrative et renforcer la conformité fiscale dans l’ensemble de l’économie.",
      nl: "Door gestructureerde e-facturatie verplicht te maken, wil België de financiële nauwkeurigheid verbeteren, de administratieve lasten verminderen en de fiscale compliance in de hele economie versterken.",
      de: "Durch die Einführung der verpflichtenden strukturierten E-Rechnungsstellung will Belgien die finanzielle Genauigkeit erhöhen, den administrativen Aufwand verringern und die Steuercompliance in der gesamten Wirtschaft verbessern.",
    },
  "Belgium's E Invoicing Architecture: Two Key Components": {
    fr: "L’architecture de la facturation électronique en Belgique : deux composantes clés",
    nl: "De Belgische e-facturatiearchitectuur: twee kerncomponenten",
    de: "Die Architektur der E-Rechnungsstellung in Belgien: zwei Schlüsselelemente",
  },
  "Belgium's approach to e invoicing is built on a coordinated framework where national infrastructure and international standards work hand in hand.":
    {
      fr: "L’approche belge de la facturation électronique repose sur un cadre coordonné où l’infrastructure nationale et les normes internationales fonctionnent de concert.",
      nl: "De Belgische aanpak van e-facturatie steunt op een gecoördineerd raamwerk waarin nationale infrastructuur en internationale standaarden hand in hand gaan.",
      de: "Der belgische Ansatz zur E-Rechnungsstellung basiert auf einem abgestimmten Rahmen, in dem nationale Infrastruktur und internationale Standards ineinandergreifen.",
    },
  " Mercurius: The National Processing Hub": {
    fr: " Mercurius : le hub national de traitement",
    nl: " Mercurius: het nationale verwerkingsknooppunt",
    de: " Mercurius: das nationale Verarbeitungszentrum",
  },
  "Mercurius is the Belgian government's centralized digital portal for exchanging e invoices. Initially created for public sector procurement, it will expand to B2B transactions as the mandate takes effect.":
    {
      fr: "Mercurius est le portail numérique centralisé du gouvernement belge pour l’échange de factures électroniques. Initialement créé pour les marchés publics, il sera étendu aux transactions B2B à mesure que le mandat entrera en vigueur.",
      nl: "Mercurius is het gecentraliseerde digitale portaal van de Belgische overheid voor de uitwisseling van e-facturen. Het werd oorspronkelijk opgezet voor overheidsopdrachten, maar zal worden uitgebreid naar B2B-transacties naarmate de verplichting in werking treedt.",
      de: "Mercurius ist das zentralisierte digitale Portal der belgischen Regierung für den Austausch von E-Rechnungen. Es wurde ursprünglich für die öffentliche Beschaffung geschaffen und wird mit Inkrafttreten der Verpflichtung auf B2B-Transaktionen ausgeweitet.",
    },
  "Mercurius functions as a routing system that ensures invoices reach the correct recipient while maintaining compliance with national and EU standards.":
    {
      fr: "Mercurius fonctionne comme un système de routage qui garantit que les factures parviennent au bon destinataire tout en respectant les normes nationales et européennes.",
      nl: "Mercurius fungeert als een routeringssysteem dat ervoor zorgt dat facturen de juiste ontvanger bereiken, met behoud van conformiteit met nationale en Europese normen.",
      de: "Mercurius fungiert als Routersystem, das sicherstellt, dass Rechnungen den richtigen Empfänger erreichen und gleichzeitig die Einhaltung nationaler und europäischer Standards gewahrt bleibt.",
    },
  "Core functions of the Mercurius platform include:": {
    fr: "Les fonctions principales de la plateforme Mercurius incluent :",
    nl: "De kernfuncties van het Mercurius-platform omvatten:",
    de: "Zu den Hauptfunktionen der Mercurius-Plattform gehören:",
  },
  "Invoice submission and routing – Ensures that structured invoices are delivered to the right recipient based on validated routing rules.":
    {
      fr: "Soumission et routage des factures – garantit que les factures structurées sont livrées au bon destinataire sur la base de règles de routage validées.",
      nl: "Indiening en routering van facturen – zorgt ervoor dat gestructureerde facturen op basis van gevalideerde routeringsregels bij de juiste ontvanger terechtkomen.",
      de: "Übermittlung und Routing von Rechnungen – stellt sicher, dass strukturierte Rechnungen anhand geprüfter Routing-Regeln an den richtigen Empfänger zugestellt werden.",
    },
  "Interoperability support – Works in alignment with the PEPPOL framework, ensuring cross system compatibility.":
    {
      fr: "Support de l’interopérabilité – fonctionne en cohérence avec le cadre PEPPOL afin d’assurer la compatibilité entre les systèmes.",
      nl: "Ondersteuning van interoperabiliteit – werkt in overeenstemming met het PEPPOL-raamwerk en waarborgt zo compatibiliteit tussen systemen.",
      de: "Unterstützung der Interoperabilität – arbeitet im Einklang mit dem PEPPOL-Framework und stellt so die Kompatibilität zwischen verschiedenen Systemen sicher.",
    },
  "Manual and automated submission options – Supports both integrated ERP submissions and manual uploads for smaller businesses.":
    {
      fr: "Options de soumission manuelle et automatisée – prend en charge à la fois les envois intégrés depuis les ERP et les dépôts manuels pour les petites entreprises.",
      nl: "Mogelijkheden voor manuele en geautomatiseerde indiening – ondersteunt zowel geïntegreerde ERP-indieningen als manuele uploads voor kleinere ondernemingen.",
      de: "Optionen für manuelle und automatisierte Einreichung – unterstützt sowohl integrierte Übermittlungen aus ERP-Systemen als auch manuelle Uploads für kleinere Unternehmen.",
    },
  "Track and trace features – Offers real time visibility so users can monitor invoice status from submission to acceptance.":
    {
      fr: "Fonctionnalités de suivi – offrent une visibilité en temps réel permettant aux utilisateurs de suivre le statut des factures, de la soumission à l’acceptation.",
      nl: "Track-en-tracefuncties – bieden realtime inzicht zodat gebruikers de status van facturen van indiening tot aanvaarding kunnen opvolgen.",
      de: "Tracking-Funktionen – bieten Echtzeiteinblick, damit Nutzer den Rechnungsstatus von der Einreichung bis zur Annahme verfolgen können.",
    },
  "Document conversion – Provides human readable views of machine readable XML invoices, making the system accessible for non technical users.":
    {
      fr: "Conversion de documents – fournit des vues lisibles par l’homme de factures XML lisibles par machine, rendant le système accessible aux utilisateurs non techniques.",
      nl: "Documentconversie – biedt menselijk leesbare weergaven van machinaal leesbare XML-facturen, zodat het systeem ook voor niet-technische gebruikers toegankelijk is.",
      de: "Dokumentkonvertierung – stellt menschenlesbare Ansichten maschinenlesbarer XML-Rechnungen bereit en macht das System so ook voor nicht-technische Nutzer zugänglich.",
    },
  "Archiving and reporting – Retains invoices for audit and compliance purposes and supports reporting requirements for both public and private entities.":
    {
      fr: "Archivage et reporting – conserve les factures à des fins d’audit et de conformité et prend en charge les obligations de reporting des entités publiques et privées.",
      nl: "Archivering en rapportering – bewaart facturen voor audit- en compliance-doeleinden en ondersteunt rapportagevereisten voor zowel publieke als private organisaties.",
      de: "Archivierung und Berichterstattung – bewahrt Rechnungen für Prüfungs- und Compliance-Zwecke auf und unterstützt die Berichtspflichten öffentlicher wie privater Stellen.",
    },
  "Overall, Mercurius ensures that Belgian entities have a reliable and secure mechanism for sending and receiving structured invoices.":
    {
      fr: "Globalement, Mercurius offre aux entités belges un mécanisme fiable et sécurisé pour l’envoi et la réception de factures structurées.",
      nl: "Al met al zorgt Mercurius ervoor dat Belgische organisaties over een betrouwbaar en veilig mechanisme beschikken om gestructureerde facturen te verzenden en te ontvangen.",
      de: "Insgesamt stellt Mercurius sicher, dass belgische Unternehmen über einen zuverlässigen und sicheren Mechanismus zum Versenden en Empfangen strukturierter Rechnungen verfügen.",
    },
  " PEPPOL: The Standard and Network Behind E Invoicing": {
    fr: " PEPPOL : la norme et le réseau au cœur de la facturation électronique",
    nl: " PEPPOL: de standaard en het netwerk achter e-facturatie",
    de: " PEPPOL: der Standard und das Netzwerk hinter der E-Rechnungsstellung",
  },
  "PEPPOL (Pan European Public Procurement On Line) provides the technical foundation that enables cross border and cross system e invoicing. It is both a set of standards and a global network that ensures invoices can flow securely between trading partners.":
    {
      fr: "PEPPOL (Pan-European Public Procurement On Line) fournit la base technique qui rend possible la facturation électronique transfrontalière et intersystèmes. Il s’agit à la fois d’un ensemble de normes et d’un réseau mondial garantissant que les factures peuvent circuler en toute sécurité entre partenaires commerciaux.",
      nl: "PEPPOL (Pan European Public Procurement On Line) vormt de technische basis voor grensoverschrijdende en systeemoverschrijdende e-facturatie. Het is zowel een set standaarden als een wereldwijd netwerk waarmee facturen veilig tussen handelspartners kunnen worden uitgewisseld.",
      de: "PEPPOL (Pan European Public Procurement On Line) bildet das technische Fundament für grenzüberschreitende und systemübergreifende E-Rechnungsstellung. Es ist zugleich ein Satz von Standards und ein globales Netzwerk, das den sicheren Austausch von Rechnungen tussen Geschäftspartnern ermöglicht.",
    },
  "Belgium's Federal Public Service Policy and Support (BOSA) oversees PEPPOL governance in the country, ensuring alignment with EU norms.":
    {
      fr: "Le Service public fédéral Stratégie et Appui (BOSA) supervise la gouvernance de PEPPOL en Belgique et veille à son alignement sur les normes de l’UE.",
      nl: "De FOD Beleid en Ondersteuning (BOSA) ziet in België toe op het beheer van PEPPOL en bewaakt de afstemming op de EU-normen.",
      de: "Der Föderale Öffentliche Dienst Politik und Unterstützung (BOSA) überwacht in Belgien die Governance von PEPPOL und stellt die Übereinstimmung mit den EU-Vorgaben sicher.",
    },
  "Key functions of the PEPPOL framework include:": {
    fr: "Les principales fonctions du cadre PEPPOL incluent :",
    nl: "Belangrijkste functies van het PEPPOL-raamwerk zijn onder meer:",
    de: "Zu den zentralen Funktionen des PEPPOL-Frameworks gehören:",
  },
  "Standardized invoice structure – Ensures compatibility with the EN16931 standard used across Europe.":
    {
      fr: "Structure de facture standardisée – garantit la compatibilité avec la norme EN16931 utilisée dans toute l’Europe.",
      nl: "Gestandaardiseerde factuurstructuur – zorgt voor compatibiliteit met de in heel Europa gebruikte EN16931-norm.",
      de: "Standardisierte Rechnungsstruktur – stellt die Kompatibilität mit der in ganz Europa verwendeten Norm EN16931 sicher.",
    },
  "Certified Access Points – These providers connect businesses to the PEPPOL network and guarantee secure, authenticated invoice exchanges.":
    {
      fr: "Points d’accès certifiés – ces prestataires connectent les entreprises au réseau PEPPOL et garantissent des échanges de factures sécurisés et authentifiés.",
      nl: "Gecertificeerde Access Points – deze dienstverleners verbinden bedrijven met het PEPPOL-netwerk en garanderen beveiligde, geauthenticeerde factuuroverdrachten.",
      de: "Zertifizierte Access Points – diese Dienstleister binden Unternehmen an das PEPPOL-Netzwerk an und gewährleisten einen sicheren, authentifizierten Rechnungsaustausch.",
    },
  "Interoperable international network – Allows businesses in Belgium to transact with parties in other PEPPOL enabled countries without format or protocol mismatches.":
    {
      fr: "Réseau international interopérable – permet aux entreprises belges de traiter avec des partenaires situés dans d’autres pays compatibles PEPPOL, sans divergence de format ou de protocole.",
      nl: "Interoperabel internationaal netwerk – maakt het voor Belgische ondernemingen mogelijk zaken te doen met partijen in andere PEPPOL-landen zonder formaat- of protocolconflicten.",
      de: "Interoperables internationales Netzwerk – ermöglicht belgischen Unternehmen Geschäfte mit Partnern in anderen PEPPOL-Ländern, ohne dass Format- oder Protokollunterschiede auftreten.",
    },
  "Security and compliance – Offers encrypted data transfer and rules for authenticity and integrity.":
    {
      fr: "Sécurité et conformité – offre un transfert de données chiffré et des règles garantissant l’authenticité et l’intégrité.",
      nl: "Beveiliging en compliance – voorziet in versleutelde gegevensoverdracht en regels voor authenticiteit en integriteit.",
      de: "Sicherheit und Compliance – bietet verschlüsselte Datenübertragung sowie Vorgaben zur Gewährleistung von Authentizität und Integrität.",
    },
  "National recipient register – Helps identify entities that can receive PEPPOL compliant invoices, simplifying onboarding and delivery.":
    {
      fr: "Registre national des destinataires – aide à identifier les entités pouvant recevoir des factures conformes à PEPPOL, ce qui simplifie l’onboarding et la distribution.",
      nl: "Nationaal ontvangersregister – helpt entiteiten te identificeren die PEPPOL-conforme facturen kunnen ontvangen, wat onboarding en aflevering vereenvoudigt.",
      de: "Nationales Empfängerregister – erleichtert die Identifizierung von Stellen, die PEPPOL-konforme Rechnungen empfangen können, und vereinfacht so Onboarding en Zustellung.",
    },
  "PEPPOL ensures that data exchange remains consistent, secure, and universally accessible, regardless of the systems used.":
    {
      fr: "PEPPOL garantit un échange de données cohérent, sécurisé et universellement accessible, quels que soient les systèmes utilisés.",
      nl: "PEPPOL zorgt ervoor dat gegevenuitwisseling consistent, veilig en universeel toegankelijk blijft, ongeacht de gebruikte systemen.",
      de: "PEPPOL stellt sicher, dass der Datenaustausch unabhängig von den eingesetzten Systemen konsistent, sicher und allgemein zugänglich bleibt.",
    },
  "How Mercurius Enables Belgium's E Invoicing Mandate": {
    fr: "Comment Mercurius soutient le mandat belge de facturation électronique",
    nl: "Hoe Mercurius het Belgische e-facturatiemandaat ondersteunt",
    de: "Wie Mercurius das belgische E-Rechnungsmandat ermöglicht",
  },
  "Mercurius plays a central role in Belgium's public sector invoicing and is evolving to support private sector workflows as mandated e invoicing expands.":
    {
      fr: "Mercurius joue un rôle central dans la facturation du secteur public en Belgique et évolue pour prendre en charge les flux du secteur privé à mesure que la facturation électronique obligatoire se généralise.",
      nl: "Mercurius vervult een centrale rol in de facturatie van de publieke sector in België en ontwikkelt zich verder om ook de processen in de private sector te ondersteunen naarmate verplichte e-facturatie wordt uitgebreid.",
      de: "Mercurius spielt eine zentrale Rolle bei der Rechnungsstellung im öffentlichen Sektor Belgiens und wird weiterentwickelt, um mit der Ausweitung der verpflichtenden E-Rechnungsstellung ook die Abläufe im Privatsektor zu unterstützen.",
    },
  "How Mercurius Processes E Invoices": {
    fr: "Comment Mercurius traite les factures électroniques",
    nl: "Hoe Mercurius e-facturen verwerkt",
    de: "Wie Mercurius E-Rechnungen verarbeitet",
  },
  "A structured invoice is generated using compliant accounting or ERP software.":
    {
      fr: "Une facture structurée est générée à l’aide d’un logiciel comptable ou ERP conforme.",
      nl: "Een gestructureerde factuur wordt aangemaakt met conforme boekhoud- of ERP-software.",
      de: "Eine strukturierte Rechnung wird mit konformer Buchhaltungs- oder ERP-Software erstellt.",
    },
  "It is submitted to Mercurius via integrated systems or manual upload.": {
    fr: "Elle est transmise à Mercurius via des systèmes intégrés ou par dépôt manuel.",
    nl: "Deze wordt via geïntegreerde systemen of via een manuele upload aan Mercurius bezorgd.",
    de: "Sie wird über integrierte Systeme oder per manuellem Upload an Mercurius übermittelt.",
  },
  "Mercurius determines the correct receiving entity and delivers the invoice.":
    {
      fr: "Mercurius identifie le destinataire approprié et lui remet la facture.",
      nl: "Mercurius bepaalt de juiste ontvangende entiteit en levert de factuur af.",
      de: "Mercurius ermittelt den korrekten Empfänger en stellt die Rechnung zu.",
    },
  "The recipient acknowledges receipt, processes the invoice, and responds with approvals or rejections.":
    {
      fr: "Le destinataire accuse réception, traite la facture et répond par une approbation ou un rejet.",
      nl: "De ontvanger bevestigt de ontvangst, verwerkt de factuur en reageert met een goedkeuring of een weigering.",
      de: "Der Empfänger bestätigt den Eingang, verarbeitet die Rechnung und antwortet mit einer Genehmigung oder Ablehnung.",
    },
  "All events are logged, and the invoice is archived for compliance.": {
    fr: "Tous les événements sont consignés et la facture est archivée à des fins de conformité.",
    nl: "Alle gebeurtenissen worden gelogd en de factuur wordt voor compliance-doeleinden gearchiveerd.",
    de: "Alle Ereignisse werden protokolliert und die Rechnung wird zu Compliance-Zwecken archiviert.",
  },
  "Why Mercurius Matters to Businesses": {
    fr: "Pourquoi Mercurius est important pour les entreprises",
    nl: "Waarom Mercurius belangrijk is voor bedrijven",
    de: "Warum Mercurius für Unternehmen wichtig ist",
  },
  "Provides a single national gateway for government and business recipients": {
    fr: "Fournit une porte d’entrée nationale unique pour les destinataires publics et privés",
    nl: "Biedt één nationaal toegangspunt voor overheids- en bedrijfsontvangers",
    de: "Bietet ein zentrales nationales Gateway für öffentliche und private Empfänger",
  },
  "Reduces administrative complexity by standardizing workflows": {
    fr: "Réduit la complexité administrative en standardisant les workflows",
    nl: "Vermindert de administratieve complexiteit door workflows te standaardiseren",
    de: "Verringert die administrative Komplexität durch standardisierte Abläufe",
  },
  "Enhances transparency with real time tracking": {
    fr: "Renforce la transparence grâce au suivi en temps réel",
    nl: "Verhoogt de transparantie dankzij realtime-tracking",
    de: "Erhöht die Transparenz durch Nachverfolgung in Echtzeit",
  },
  "Supports businesses of all sizes with flexible submission options": {
    fr: "Soutient les entreprises de toutes tailles grâce à des options de soumission flexibles",
    nl: "Ondersteunt bedrijven van elke grootte met flexibele indieningsopties",
    de: "Unterstützt Unternehmen jeder Größe mit flexiblen Einreichungsoptionen",
  },
  "Strengthens traceability for audits and VAT reporting": {
    fr: "Renforce la traçabilité pour les audits et les déclarations de TVA",
    nl: "Versterkt de traceerbaarheid voor audits en btw-rapportering",
    de: "Verbessert die Nachvollziehbarkeit für Prüfungen und Mehrwertsteuerberichte",
  },
  "Mercurius ensures that structured invoices flow smoothly throughout the Belgian ecosystem.":
    {
      fr: "Mercurius garantit une circulation fluide des factures structurées dans l’ensemble de l’écosystème belge.",
      nl: "Mercurius zorgt ervoor dat gestructureerde facturen vlot door het Belgische ecosysteem stromen.",
      de: "Mercurius stellt sicher, dass strukturierte Rechnungen reibungslos durch das belgische Ökosystem laufen.",
    },
  "How PEPPOL Strengthens Belgium's Digital Invoicing Framework": {
    fr: "Comment PEPPOL renforce le cadre belge de facturation numérique",
    nl: "Hoe PEPPOL het Belgische digitale facturatiekader versterkt",
    de: "Wie PEPPOL den digitalen Rechnungsrahmen Belgiens stärkt",
  },
  "PEPPOL ensures that Belgium's e-invoicing ecosystem remains aligned with EU and global standards.":
    {
      fr: "PEPPOL garantit que l’écosystème belge de facturation électronique reste aligné sur les normes européennes et internationales.",
      nl: "PEPPOL zorgt ervoor dat het Belgische e-facturatie-ecosysteem in lijn blijft met de Europese en internationale standaarden.",
      de: "PEPPOL stellt sicher, dass das belgische E-Rechnungssystem mit den europäischen und globalen Standards im Einklang bleibt.",
    },
  "How PEPPOL Supports End to End Invoice Exchange": {
    fr: "Comment PEPPOL prend en charge l’échange de factures de bout en bout",
    nl: "Hoe PEPPOL end-to-end factuuroverdracht ondersteunt",
    de: "Wie PEPPOL den End-to-End-Rechnungsaustausch unterstützt",
  },
  "Compatibility through EN16931 standardization": {
    fr: "Compatibilité grâce à la standardisation EN16931",
    nl: "Compatibiliteit via standaardisering volgens EN16931",
    de: "Kompatibilität durch Standardisierung nach EN16931",
  },
  "Secure transmission through Access Points": {
    fr: "Transmission sécurisée via des points d’accès",
    nl: "Veilige overdracht via Access Points",
    de: "Sichere Übermittlung über Access Points",
  },
  "Reduced errors via automated data validation": {
    fr: "Réduction des erreurs grâce à la validation automatisée des données",
    nl: "Minder fouten door geautomatiseerde datavalidatie",
    de: "Weniger Fehler durch automatisierte Datenvalidierung",
  },
  "Domestic and international reach without additional integrations": {
    fr: "Portée nationale et internationale sans intégrations supplémentaires",
    nl: "Nationale en internationale reikwijdte zonder extra integraties",
    de: "Nationale und internationale Reichweite ohne zusätzliche Integrationen",
  },
  "Scalable architecture suitable for both small and large enterprises": {
    fr: "Architecture évolutive adaptée aux petites comme aux grandes entreprises",
    nl: "Schaalbare architectuur, geschikt voor zowel kleine als grote ondernemingen",
    de: "Skalierbare Architektur, die sowohl für kleine als auch für große Unternehmen geeignet ist",
  },
  "Benefits of PEPPOL Adoption": {
    fr: "Avantages de l’adoption de PEPPOL",
    nl: "Voordelen van PEPPOL-adoptie",
    de: "Vorteile der PEPPOL-Einführung",
  },
  "Simplifies regulatory compliance": {
    fr: "Simplifie la conformité réglementaire",
    nl: "Vereenvoudigt de reglementaire compliance",
    de: "Vereinfacht die regulatorische Compliance",
  },
  "Reduces processing time and manual workloads": {
    fr: "Réduit les délais de traitement et les tâches manuelles",
    nl: "Verkort de verwerkingstijd en vermindert de manuele werklast",
    de: "Verringert die Bearbeitungszeiten und den manuellen Aufwand",
  },
  "Minimizes human errors": {
    fr: "Minimise les erreurs humaines",
    nl: "Beperkt menselijke fouten tot een minimum",
    de: "Minimiert menschliche Fehler",
  },
  "Facilitates seamless interactions with trading partners": {
    fr: "Facilite des interactions fluides avec les partenaires commerciaux",
    nl: "Maakt naadloze interacties met handelspartners mogelijk",
    de: "Ermöglicht reibungslose Interaktionen mit Geschäftspartnern",
  },
  "Supports cross border trade without new integrations or custom formats": {
    fr: "Soutient le commerce transfrontalier sans nouvelles intégrations ni formats personnalisés",
    nl: "Ondersteunt grensoverschrijdende handel zonder nieuwe integraties of aangepaste formaten",
    de: "Unterstützt den grenzüberschreitenden Handel, ohne dass neue Integrationen oder Sonderformate erforderlich sind",
  },
  "PEPPOL ensures that businesses can operate efficiently and remain compliant across multiple jurisdictions.":
    {
      fr: "PEPPOL permet aux entreprises de fonctionner efficacement tout en restant conformes dans plusieurs juridictions.",
      nl: "PEPPOL zorgt ervoor dat bedrijven efficiënt kunnen werken en tegelijk compliant blijven in meerdere rechtsgebieden.",
      de: "PEPPOL stellt sicher, dass Unternehmen effizient arbeiten und gleichzeitig in mehreren Rechtsordnungen konform bleiben können.",
    },
  "Preparing for PEPPOL and Mercurius Adoption": {
    fr: "Se préparer à l’adoption de PEPPOL et de Mercurius",
    nl: "Voorbereiden op de adoptie van PEPPOL en Mercurius",
    de: "Vorbereitung auf die Einführung von PEPPOL und Mercurius",
  },
  "To meet the requirements of the 2026 mandate, businesses should begin preparing early. Key steps include:":
    {
      fr: "Pour satisfaire aux exigences du mandat 2026, les entreprises devraient commencer à se préparer dès maintenant. Les principales étapes comprennent :",
      nl: "Om te voldoen aan de vereisten van de verplichting in 2026, doen bedrijven er goed aan tijdig met de voorbereiding te starten. Belangrijke stappen zijn onder meer:",
      de: "Um die Anforderungen des Mandats für 2026 zu erfüllen, sollten Unternehmen frühzeitig mit den Vorbereitungen beginnen. Wichtige Schritte sind unter anderem:",
    },
  "Assess current invoicing tools to ensure they support PEPPOL BIS and EN16931 formats.":
    {
      fr: "Évaluer les outils de facturation actuels afin de vérifier qu’ils prennent en charge les formats PEPPOL BIS et EN16931.",
      nl: "De huidige facturatietools beoordelen om te controleren of zij PEPPOL BIS- en EN16931-formaten ondersteunen.",
      de: "Die bestehenden Fakturierungstools prüfen, um sicherzustellen, dass sie die Formate PEPPOL BIS und EN16931 unterstützen.",
    },
  "Register through a certified Access Point to obtain a PEPPOL ID.": {
    fr: "S’enregistrer via un point d’accès certifié pour obtenir un identifiant PEPPOL.",
    nl: "Zich via een gecertificeerd Access Point registreren om een PEPPOL-ID te verkrijgen.",
    de: "Sich über einen zertifizierten Access Point registrieren, um eine PEPPOL-ID zu erhalten.",
  },
  "Enable system integration with Mercurius or prepare to use the manual portal.":
    {
      fr: "Activer l’intégration de vos systèmes avec Mercurius ou se préparer à utiliser le portail manuel.",
      nl: "Systeemintegratie met Mercurius inschakelen of zich voorbereiden op het gebruik van het manuele portaal.",
      de: "Die Systemintegration mit Mercurius einrichten oder sich auf die Nutzung des manuellen Portals vorbereiten.",
    },
  "Validate invoice formats before production use.": {
    fr: "Valider les formats de facture avant leur utilisation en production.",
    nl: "De factuurformaten valideren vóór gebruik in productie.",
    de: "Die Rechnungsformate vor dem produktiven Einsatz validieren.",
  },
  "Train finance and operations teams to manage the new processes confidently.":
    {
      fr: "Former les équipes financières et opérationnelles afin qu’elles maîtrisent les nouveaux processus en toute confiance.",
      nl: "Financiële en operationele teams opleiden zodat zij de nieuwe processen met vertrouwen kunnen beheren.",
      de: "Finanz- und Operationsteams schulen, damit sie die neuen Prozesse souverän beherrschen.",
    },
  "Organizations that prepare early will find the transition smoother and more efficient.":
    {
      fr: "Les organisations qui se préparent en amont vivront une transition plus fluide et plus efficace.",
      nl: "Organisaties die tijdig starten met de voorbereiding zullen de overgang vlotter en efficiënter ervaren.",
      de: "Organisationen, die sich frühzeitig vorbereiten, erleben den Übergang deutlich reibungsloser und effizienter.",
    },
  
  "Belgium's upcoming e invoicing mandate represents a major step toward building a modern, transparent, and data driven financial ecosystem. The combination of the Mercurius platform and the PEPPOL framework provides a solid technological foundation that supports automation, compliance, and long term scalability.":
    {
      fr: "Le futur mandat belge de facturation électronique constitue une étape majeure vers la création d’un écosystème financier moderne, transparent et axé sur les données. La combinaison de la plateforme Mercurius et du cadre PEPPOL offre une base technologique solide qui favorise l’automatisation, la conformité et l’évolutivité à long terme.",
      nl: "Het komende Belgische e-facturatiemandaat is een belangrijke stap in de uitbouw van een modern, transparant en datagedreven financieel ecosysteem. De combinatie van het Mercurius-platform en het PEPPOL-raamwerk vormt een stevige technologische basis die automatisering, compliance en schaalbaarheid op lange termijn ondersteunt.",
      de: "Das anstehende belgische E-Rechnungsmandat ist ein bedeutender Schritt hin zu einem modernen, transparenten en datengetriebenen Finanzökosystem. Die Kombination aus der Mercurius-Plattform en dem PEPPOL-Framework bildet ein tragfähiges technisches Fundament, das Automatisierung, Compliance und langfristige Skalierbarkeit unterstützt.",
    },
  "Businesses that embrace these systems early will not only ensure compliance with the 2026 regulations but also benefit from improved operational efficiency, faster invoice cycles, and greater visibility across financial workflows. As Belgium moves toward a fully digitized invoicing environment, readiness becomes both a strategic advantage and a compliance necessity.":
    {
      fr: "Les entreprises qui adoptent ces systèmes de manière anticipée garantiront non seulement leur conformité avec la réglementation de 2026, mais bénéficieront aussi d’une meilleure efficacité opérationnelle, de cycles de facturation plus rapides et d’une visibilité accrue sur leurs flux financiers. À mesure que la Belgique progresse vers un environnement de facturation entièrement numérisé, la préparation devient à la fois un avantage stratégique et une nécessité en matière de conformité.",
      nl: "Bedrijven die deze systemen vroegtijdig omarmen, verzekeren niet alleen hun naleving van de regels in 2026, maar profiteren ook van een hogere operationele efficiëntie, kortere factuurcycli en meer zicht op hun financiële processen. Nu België evolueert naar een volledig gedigitaliseerde facturatieomgeving, wordt paraatheid zowel een strategisch voordeel als een compliance-noodzaak.",
      de: "Unternehmen, die diese Systeme frühzeitig einführen, stellen nicht nur die Einhaltung der Vorschriften für 2026 sicher, sondern profitieren ook von höherer operativer Effizienz, schnelleren Rechnungszyklen und größerer Transparenz in ihren Finanzprozessen. Während Belgien auf eine vollständig digitalisierte Rechnungsumgebung zusteuert, wird rechtzeitige Vorbereitung zugleich zu einem strategischen Vorteil und einer Compliance-Notwendigkeit.",
    },

  //VAT in Belgium: Rates, Registration, Liability, Returns, Payments and Compliance Essentials

  "VAT in Belgium: Rates, Registration, Liability, Returns, Payments and Compliance Essentials":
    {
      fr: "TVA en Belgique : taux, immatriculation, responsabilité, déclarations, paiements et éléments essentiels de conformité",
      nl: "Btw in België: tarieven, registratie, aansprakelijkheid, aangiften, betalingen en kernpunten van compliance",
      de: "Mehrwertsteuer in Belgien: Steuersätze, Registrierung, Haftung, Meldungen, Zahlungen und wesentliche Compliance-Pflichten",
    },
  "Updated On : Nov 25th, 2024 | 22 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 22 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 22 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | 22 Minuten Lesezeit",
  },
  "VAT is one of the most important taxes in Belgium and affects virtually every business that sells goods or services in the country. As a consumption tax, it applies at each stage of the economic chain, although the financial burden ultimately falls on the end consumer. Businesses serve as collection agents and must charge, report, and pay VAT using the Intervat system.":
    {
      fr: "La TVA est l’un des impôts les plus importants en Belgique et concerne pratiquement toute entreprise qui vend des biens ou des services dans le pays. En tant qu’impôt sur la consommation, elle s’applique à chaque étape de la chaîne économique, même si la charge financière repose en dernier ressort sur le consommateur final. Les entreprises agissent comme collecteurs pour le compte de l’État et doivent facturer, déclarer et payer la TVA via le système Intervat.",
      nl: "Btw is een van de belangrijkste belastingen in België en heeft impact op vrijwel elke onderneming die goederen of diensten in het land verkoopt. Als verbruiksbelasting wordt zij in elke schakel van de economische keten geheven, hoewel de uiteindelijke last bij de eindconsument ligt. Ondernemingen fungeren als intrekkers en moeten btw aanrekenen, rapporteren en afdragen via het Intervat-systeem.",
      de: "Die Mehrwertsteuer ist eine der wichtigsten Steuern in Belgien und betrifft nahezu jedes Unternehmen, das im Land Waren oder Dienstleistungen verkauft. Als Verbrauchsteuer fällt sie in jeder Stufe der wirtschaftlichen Kette an, auch wenn die finanzielle Last letztlich beim Endverbraucher liegt. Unternehmen fungieren als Einzugsstellen und müssen die Mehrwertsteuer über das Intervat-System berechnen, melden und abführen.",
    },
  "Understanding how VAT works in Belgium is essential for maintaining compliance, avoiding penalties, and accurately managing tax obligations. The following guide provides a clear overview of VAT rates, registration rules, return filing, and common regulatory challenges.":
    {
      fr: "Comprendre le fonctionnement de la TVA en Belgique est essentiel pour rester conforme, éviter les sanctions et gérer correctement les obligations fiscales. Le guide qui suit offre une vue d’ensemble claire des taux de TVA, des règles d’immatriculation, du dépôt des déclarations et des principaux défis réglementaires.",
      nl: "Inzicht in hoe de btw in België werkt is essentieel om compliant te blijven, boetes te vermijden en fiscale verplichtingen correct te beheren. Deze gids geeft een helder overzicht van de btw-tarieven, de registratieregels, de indiening van aangiften en veelvoorkomende regelgevingstechnische uitdagingen.",
      de: "Zu verstehen, wie die Mehrwertsteuer in Belgien funktioniert, ist entscheidend, um konform zu bleiben, Sanktionen zu vermeiden und steuerliche Verpflichtungen korrekt zu steuern. Der folgende Leitfaden bietet einen klaren Überblick über Mehrwertsteuersätze, Registrierungsregeln, Steuererklärungen und typische regulatorische Herausforderungen.",
    },
  "What VAT Means in Belgium": {
    fr: "Ce que signifie la TVA en Belgique",
    nl: "Wat btw betekent in België",
    de: "Was die Mehrwertsteuer in Belgien bedeutet",
  },
  "Value Added Tax in Belgium is an indirect tax imposed on most goods and services supplied or consumed within the country. Every time value is added along the supply chain, VAT is charged and collected.":
    {
      fr: "La taxe sur la valeur ajoutée (TVA) en Belgique est un impôt indirect appliqué à la plupart des biens et services fournis ou consommés dans le pays. Chaque fois qu’une valeur est ajoutée le long de la chaîne d’approvisionnement, de la TVA est facturée et collectée.",
      nl: "De belasting over de toegevoegde waarde (btw) in België is een indirecte belasting die wordt geheven op de meeste goederen en diensten die in het land worden geleverd of verbruikt. Telkens wanneer er waarde wordt toegevoegd in de toeleveringsketen, wordt btw aangerekend en geïnd.",
      de: "Die Mehrwertsteuer in Belgien ist eine indirekte Steuer, die auf die meisten im Land gelieferten oder verbrauchten Waren und Dienstleistungen erhoben wird. Jedes Mal, wenn entlang der Lieferkette Wert geschaffen wird, wird Mehrwertsteuer berechnet und eingezogen.",
    },
  "Although consumers pay the final VAT amount, businesses are responsible for collecting the tax, issuing compliant invoices, and remitting the amount to the Belgian tax administration. VAT is added directly to the sale price. For example, a product sold at 100 euros with a 21 percent VAT rate will cost the consumer 121 euros. The additional 21 euros is collected by the seller and later paid to the authorities.":
    {
      fr: "Même si les consommateurs paient le montant final de TVA, les entreprises sont responsables de la collecte de l’impôt, de l’émission de factures conformes et du versement des montants à l’administration fiscale belge. La TVA est ajoutée directement au prix de vente. Par exemple, un produit vendu 100 euros avec un taux de TVA de 21 % coûtera 121 euros au consommateur. Les 21 euros supplémentaires sont collectés par le vendeur puis reversés aux autorités.",
      nl: "Hoewel consumenten het uiteindelijke btw-bedrag betalen, zijn ondernemingen verantwoordelijk voor het innen van de belasting, het uitreiken van conforme facturen en het doorstorten van de bedragen aan de Belgische belastingadministratie. Btw wordt rechtstreeks aan de verkoopprijs toegevoegd. Een product dat bijvoorbeeld voor 100 euro wordt verkocht met een btw-tarief van 21 % kost de consument 121 euro. De extra 21 euro wordt door de leverancier geïnd en nadien aan de overheid betaald.",
      de: "Auch wenn die Verbraucher den endgültigen Mehrwertsteuerbetrag zahlen, sind die Unternehmen dafür verantwortlich, die Steuer einzuziehen, konforme Rechnungen auszustellen und die Beträge an die belgische Steuerverwaltung abzuführen. Die Mehrwertsteuer wird direkt auf den Verkaufspreis aufgeschlagen. Wird ein Produkt beispielsweise für 100 Euro mit einem Mehrwertsteuersatz von 21 % verkauft, zahlt der Verbraucher 121 Euro. Die zusätzlichen 21 Euro werden vom Verkäufer vereinnahmt und anschließend an die Behörden abgeführt.",
    },
  "VAT in Belgium follows a structured framework with a standard rate and two reduced rates, along with a limited number of zero rated activities.":
    {
      fr: "Le régime de TVA en Belgique repose sur un cadre structuré comprenant un taux normal, deux taux réduits et un nombre limité d’activités soumises au taux zéro.",
      nl: "Het btw-stelsel in België volgt een gestructureerd kader met één standaardtarief, twee verlaagde tarieven en een beperkt aantal handelingen aan 0 %.",
      de: "Das Mehrwertsteuersystem in Belgien folgt einem strukturierten Rahmen mit einem Normalsatz, zwei ermäßigten Sätzen sowie einer begrenzten Anzahl von Tätigkeiten zum Nullsteuersatz.",
    },
  "How VAT Operates in Belgium": {
    fr: "Fonctionnement de la TVA en Belgique",
    nl: "Hoe btw in België werkt",
    de: "Funktionsweise der Mehrwertsteuer in Belgien",
  },
  "Businesses that make taxable supplies in Belgium must register for VAT, issue VAT compliant invoices, collect VAT from customers, and periodically report and pay it to the government.":
    {
      fr: "Les entreprises qui effectuent des opérations taxables en Belgique doivent s’identifier à la TVA, émettre des factures conformes, collecter la TVA auprès de leurs clients et la déclarer et payer périodiquement à l’État.",
      nl: "Ondernemingen die in België belaste handelingen verrichten, moeten zich voor btw registreren, btw-conforme facturen uitreiken, btw innen bij klanten en deze periodiek aangeven en afdragen aan de overheid.",
      de: "Unternehmen, die in Belgien steuerpflichtige Umsätze ausführen, müssen sich für die Mehrwertsteuer registrieren, mehrwertsteuerkonforme Rechnungen ausstellen, die Steuer bei ihren Kunden einziehen und sie regelmäßig an den Staat melden und abführen.",
    },
  "The system functions as follows:": {
    fr: "Le système fonctionne comme suit :",
    nl: "Het systeem werkt als volgt:",
    de: "Das System funktioniert wie folgt:",
  },
  "A business charges VAT when it sells taxable goods or services.": {
    fr: "Une entreprise facture la TVA lorsqu’elle vend des biens ou services taxables.",
    nl: "Een onderneming rekent btw aan wanneer zij belaste goederen of diensten verkoopt.",
    de: "Ein Unternehmen berechnet Mehrwertsteuer, wenn es steuerpflichtige Waren oder Dienstleistungen verkauft.",
  },
  "The customer pays the price including VAT.": {
    fr: "Le client paie le prix TVA comprise.",
    nl: "De klant betaalt de prijs inclusief btw.",
    de: "Der Kunde zahlt den Preis einschließlich Mehrwertsteuer.",
  },
  "The business records the VAT collected.": {
    fr: "L’entreprise comptabilise la TVA collectée.",
    nl: "De onderneming boekt de geïnde btw in haar administratie.",
    de: "Das Unternehmen erfasst die vereinnahmte Mehrwertsteuer in seiner Buchhaltung.",
  },
  "Input VAT (VAT paid on purchases) is deducted from output VAT (VAT collected from customers).":
    {
      fr: "La TVA déductible (TVA payée sur les achats) est imputée sur la TVA due (TVA collectée auprès des clients).",
      nl: "De aftrekbare btw (btw op aankopen) wordt in mindering gebracht op de verschuldigde btw (btw geïnd bij klanten).",
      de: "Die Vorsteuer (Mehrwertsteuer auf Einkäufe) wird von der Umsatzsteuer (Mehrwertsteuer, die bei Kunden vereinnahmt wurde) abgezogen.",
    },
  "The net amount is remitted through VAT returns.": {
    fr: "Le montant net est versé via les déclarations de TVA.",
    nl: "Het nettobedrag wordt via de btw-aangiften aan de fiscus doorgestort.",
    de: "Der Nettobetrag wird im Rahmen der Mehrwertsteuererklärungen an die Steuerbehörde abgeführt.",
  },
  "Because VAT is applied at each stage of the economic chain, Belgium's system ensures continuous tax collection while preventing double taxation through input VAT deductions.":
    {
      fr: "Comme la TVA s’applique à chaque étape de la chaîne économique, le système belge assure une collecte continue de l’impôt tout en évitant la double imposition grâce au mécanisme de déduction de la TVA en amont.",
      nl: "Omdat btw in elke schakel van de economische keten wordt geheven, zorgt het Belgische systeem voor een continue belastinginning, terwijl dubbele belasting wordt voorkomen via de aftrek van voorbelasting.",
      de: "Da die Mehrwertsteuer in jeder Stufe der wirtschaftlichen Kette erhoben wird, gewährleistet das belgische System eine kontinuierliche Steuererhebung und vermeidet gleichzeitig eine Doppelbesteuerung durch den Vorsteuerabzug.",
    },
  "VAT Liability: When a Business Must Register": {
    fr: "Assujettissement à la TVA : quand une entreprise doit-elle s’enregistrer ?",
    nl: "Btw-plicht: wanneer moet een onderneming zich registreren?",
    de: "Mehrwertsteuerpflicht: Wann muss sich ein Unternehmen registrieren?",
  },
  "A company, whether Belgian or foreign, becomes liable for VAT when it performs taxable activities defined under the Belgian VAT Code.":
    {
      fr: "Une société, belge ou étrangère, devient assujettie à la TVA lorsqu’elle exerce des activités taxables telles que définies par le Code belge de la TVA.",
      nl: "Een vennootschap, Belgisch of buitenlands, wordt btw-plichtig zodra zij belaste activiteiten verricht zoals gedefinieerd in het Belgische Btw-Wetboek.",
      de: "Ein Unternehmen, ob belgisch oder ausländisch, wird mehrwertsteuerpflichtig, sobald es steuerpflichtige Tätigkeiten im Sinne des belgischen Mehrwertsteuergesetzbuchs ausübt.",
    },
  "Liability arises when the activity:": {
    fr: "L’assujettissement naît lorsque l’activité :",
    nl: "De btw-plicht ontstaat wanneer de activiteit:",
    de: "Die Steuerpflicht entsteht, wenn die Tätigkeit:",
  },
  "Is performed regularly.": {
    fr: "Est exercée de manière régulière.",
    nl: "Op regelmatige basis wordt uitgeoefend.",
    de: "Regelmäßig ausgeübt wird.",
  },
  "Is carried out independently.": {
    fr: "Est exercée de manière indépendante.",
    nl: "Zelfstandig wordt uitgevoerd.",
    de: "Unabhängig ausgeübt wird.",
  },
  "Does not depend on whether the business makes a profit.": {
    fr: "Ne dépend pas du fait que l’activité soit ou non bénéficiaire.",
    nl: "Niet afhankelijk is van het al dan niet maken van winst.",
    de: "Unabhängig davon ist, ob die Tätigkeit Gewinn erzielt oder nicht.",
  },
  "Is part of the main or secondary operations.": {
    fr: "Fait partie de l’activité principale ou accessoire de l’entreprise.",
    nl: "Onderdeel is van de hoofd- of nevenactiviteiten.",
    de: "Teil der Haupt- oder Nebentätigkeiten des Unternehmens ist.",
  },
  "Occurs regardless of where the business is physically located.": {
    fr: "Est exercée indépendamment du lieu d’établissement physique de l’entreprise.",
    nl: "Wordt verricht ongeacht waar de onderneming fysiek is gevestigd.",
    de: "Unabhängig vom physischen Sitz des Unternehmens ausgeübt wird.",
  },
  "If an entity performs activities that are entirely VAT exempt and has no right to deduct VAT, it does not need to register or charge VAT.":
    {
      fr: "Si une entité exerce exclusivement des activités entièrement exonérées de TVA et ne dispose d’aucun droit à déduction, elle n’a ni l’obligation de s’identifier ni celle de facturer la TVA.",
      nl: "Wanneer een entiteit uitsluitend volledig van btw vrijgestelde activiteiten uitoefent en geen recht op aftrek heeft, hoeft zij zich niet te registreren en geen btw aan te rekenen.",
      de: "Übt eine Einheit ausschließlich vollständig mehrwertsteuerbefreite Tätigkeiten aus und besitzt kein Recht auf Vorsteuerabzug, muss sie sich nicht registrieren und keine Mehrwertsteuer in Rechnung stellen.",
    },
  "However, foreign companies carrying out taxable activities in Belgium must still register even if they have no physical establishment in the country.":
    {
      fr: "En revanche, les entreprises étrangères qui exercent des activités taxables en Belgique doivent s’enregistrer, même si elles ne disposent d’aucun établissement physique dans le pays.",
      nl: "Buitenlandse ondernemingen die in België belaste handelingen verrichten, moeten zich echter toch registreren, zelfs als zij er geen fysieke inrichting hebben.",
      de: "Ausländische Unternehmen, die in Belgien steuerpflichtige Tätigkeiten ausüben, müssen sich jedoch registrieren, auch wenn sie im Land keine physische Betriebsstätte haben.",
    },
  " VAT Exemptions in Belgium": {
    fr: " Exonérations de TVA en Belgique",
    nl: " Btw-vrijstellingen in België",
    de: " Mehrwertsteuerbefreiungen in Belgien",
  },
  "Businesses engaged solely in VAT exempt activities are not required to charge VAT or submit regular VAT returns. These exemptions apply to sectors that serve important social, cultural, or financial functions.":
    {
      fr: "Les entreprises qui exercent exclusivement des activités exonérées de TVA ne doivent pas facturer de TVA ni déposer de déclarations périodiques. Ces exonérations concernent des secteurs remplissant des fonctions sociales, culturelles ou financières importantes.",
      nl: "Ondernemingen die uitsluitend btw-vrijgestelde activiteiten verrichten, hoeven geen btw aan te rekenen en geen periodieke btw-aangiften in te dienen. Deze vrijstellingen gelden voor sectoren met belangrijke sociale, culturele of financiële functies.",
      de: "Unternehmen, die ausschließlich mehrwertsteuerbefreite Tätigkeiten ausüben, müssen keine Mehrwertsteuer in Rechnung stellen und keine regelmäßigen Mehrwertsteuererklärungen einreichen. Diese Befreiungen betreffen Bereiche mit wichtigen sozialen, kulturellen oder finanziellen Funktionen.",
    },
  "Common VAT exempt activities include:": {
    fr: "Parmi les activités couramment exonérées de TVA, on trouve :",
    nl: "Veelvoorkomende btw-vrijgestelde activiteiten zijn onder meer:",
    de: "Zu den häufig mehrwertsteuerbefreiten Tätigkeiten gehören unter anderem:",
  },
  "Non aesthetic medical services and hospital care": {
    fr: "Les prestations médicales non esthétiques et les soins hospitaliers",
    nl: "Niet-esthetische medische diensten en ziekenhuiszorg",
    de: "Nichtästhetische medizinische Leistungen und Krankenhausbehandlungen",
  },
  "Elderly care, disability services, and youth protection": {
    fr: "Les services de prise en charge des personnes âgées, les services aux personnes handicapées et la protection de la jeunesse",
    nl: "Ouderenzorg, diensten voor personen met een handicap en jeugdbescherming",
    de: "Altenpflege, Leistungen für Menschen mit Behinderungen und Jugendfürsorge",
  },
  "Services provided by nurses, midwives, physiotherapists, and other approved health professions":
    {
      fr: "Les prestations fournies par les infirmiers, sages-femmes, kinésithérapeutes et autres professions de santé agréées",
      nl: "Diensten verleend door verpleegkundigen, vroedvrouwen, kinesitherapeuten en andere erkende gezondheidsberoepen",
      de: "Leistungen von Pflegekräften, Hebammen, Physiotherapeuten und anderen anerkannten Gesundheitsberufen",
    },
  "Educational services and library services": {
    fr: "Les services éducatifs et les services de bibliothèque",
    nl: "Onderwijsdiensten en bibliotheekdiensten",
    de: "Bildungsleistungen und Bibliotheksdienste",
  },
  "Cultural events such as concerts, theatre, exhibitions, and films": {
    fr: "Les événements culturels tels que concerts, théâtre, expositions et projections de films",
    nl: "Culturele evenementen zoals concerten, theater, tentoonstellingen en films",
    de: "Kulturelle Veranstaltungen wie Konzerte, Theateraufführungen, Ausstellungen und Filme",
  },
  "Real estate rental and leasing": {
    fr: "La location et la mise en location de biens immobiliers",
    nl: "Verhuur en leasing van onroerend goed",
    de: "Vermietung und Verpachtung von Immobilien",
  },
  "Insurance operations": {
    fr: "Les opérations d’assurance",
    nl: "Verzekeringsverrichtingen",
    de: "Versicherungsgeschäfte",
  },
  "Financial services such as credit granting": {
    fr: "Les services financiers, tels que l’octroi de crédits",
    nl: "Financiële diensten, zoals het verlenen van kredieten",
    de: "Finanzdienstleistungen wie etwa die Gewährung von Krediten",
  },
  "Transport of sick or injured persons using equipped vehicles": {
    fr: "Le transport de personnes malades ou blessées au moyen de véhicules équipés",
    nl: "Vervoer van zieke of gewonde personen met speciaal uitgeruste voertuigen",
    de: "Beförderung kranker oder verletzter Personen mit entsprechend ausgestatteten Fahrzeugen",
  },
  "Businesses performing only these activities are exempt from VAT obligations. However, if they conduct intra EU transactions or cross border services, registration may still be required even without the obligation to charge VAT.":
    {
      fr: "Les entreprises qui n’exercent que ces activités sont dispensées des obligations liées à la TVA. Toutefois, si elles réalisent des opérations intracommunautaires ou des prestations transfrontalières, une immatriculation peut rester nécessaire, même sans obligation de facturer la TVA.",
      nl: "Ondernemingen die uitsluitend deze activiteiten uitoefenen, zijn vrijgesteld van de gewone btw-verplichtingen. Indien zij echter intracommunautaire transacties of grensoverschrijdende diensten verrichten, kan registratie toch vereist zijn, zelfs zonder verplichting om btw aan te rekenen.",
      de: "Unternehmen, die ausschließlich diese Tätigkeiten ausführen, sind von den üblichen Mehrwertsteuerpflichten befreit. Führen sie jedoch innergemeinschaftliche Geschäfte oder grenzüberschreitende Dienstleistungen aus, kann dennoch eine Registrierung erforderlich sein, selbst wenn keine Pflicht zur Mehrwertsteuerberechnung besteht.",
    },
  "VAT Rates in Belgium": {
    fr: "Taux de TVA en Belgique",
    nl: "Btw-tarieven in België",
    de: "Mehrwertsteuersätze in Belgien",
  },
  "Belgium applies several VAT rates depending on the nature of goods or services.":
    {
      fr: "La Belgique applique plusieurs taux de TVA en fonction de la nature des biens ou des services.",
      nl: "België hanteert verschillende btw-tarieven, afhankelijk van de aard van de goederen of diensten.",
      de: "Belgien wendet mehrere Mehrwertsteuersätze an, abhängig von der Art der gelieferten Waren oder Dienstleistungen.",
    },
  "21 percent Standard Rate": {
    fr: "Taux normal de 21 %",
    nl: "Standaardtarief van 21 %",
    de: "Normalsatz von 21 %",
  },
  "Applies to most goods and services.": {
    fr: "S’applique à la plupart des biens et services.",
    nl: "Is van toepassing op de meeste goederen en diensten.",
    de: "Gilt für die meisten Waren und Dienstleistungen.",
  },
  "12 percent Intermediate Rate": {
    fr: "Taux intermédiaire de 12 %",
    nl: "Tussentarief van 12 %",
    de: "Zwischensatz von 12 %",
  },
  "Covers categories such as certain food items, agricultural products, some social housing, specific energy goods, fertilizers, pesticides, and agricultural tires.":
    {
      fr: "Couvre des catégories telles que certains produits alimentaires, des produits agricoles, certains logements sociaux, des produits énergétiques spécifiques, des engrais, des pesticides et des pneus agricoles.",
      nl: "Heeft betrekking op categorieën zoals bepaalde voedingsmiddelen, landbouwproducten, bepaalde sociale huisvesting, specifieke energieproducten, meststoffen, pesticiden en landbouwbanden.",
      de: "Umfasst Kategorien wie bestimmte Lebensmittel, landwirtschaftliche Erzeugnisse, bestimmte Sozialwohnungen, spezifische Energieprodukte, Düngemittel, Pestizide und landwirtschaftliche Reifen.",
    },
  "6 percent Reduced Rate": {
    fr: "Taux réduit de 6 %",
    nl: "Verlaagd tarief van 6 %",
    de: "Ermäßigter Satz von 6 %",
  },
  "Applies to a wide range of essential or socially beneficial items including:":
    {
      fr: "S’applique à un large éventail de biens et services essentiels ou socialement utiles, notamment :",
      nl: "Is van toepassing op een brede waaier aan essentiële of maatschappelijk nuttige goederen en diensten, waaronder:",
      de: "Gilt für eine breite Palette wesentlicher oder gesellschaftlich wichtiger Leistungen, insbesondere für:",
    },
  "Water supply": {
    fr: "La distribution d’eau",
    nl: "Watervoorziening",
    de: "Wasserversorgung",
  },
  Pharmaceuticals: {
    fr: "Les produits pharmaceutiques",
    nl: "Geneesmiddelen",
    de: "Arzneimittel",
  },
  "Medical equipment": {
    fr: "Le matériel médical",
    nl: "Medische uitrusting",
    de: "Medizinische Geräte",
  },
  "Public transport": {
    fr: "Les transports publics",
    nl: "Openbaar vervoer",
    de: "Öffentlicher Personentransport",
  },
  "Certain books and newspapers": {
    fr: "Certains livres et journaux",
    nl: "Bepaalde boeken en kranten",
    de: "Bestimmte Bücher und Zeitungen",
  },
  "Cultural performances": {
    fr: "Les spectacles culturels",
    nl: "Culturele voorstellingen",
    de: "Kulturelle Aufführungen",
  },
  "Repairs and renovation of private homes": {
    fr: "Les travaux de réparation et de rénovation de logements privés",
    nl: "Herstellingen en renovatie van particuliere woningen",
    de: "Reparatur- und Renovierungsarbeiten an privaten Wohngebäuden",
  },
  "Hotel accommodation": {
    fr: "L’hébergement hôtelier",
    nl: "Hotelaccommodatie",
    de: "Beherbergungsleistungen in Hotels",
  },
  "Sports events": {
    fr: "Les manifestations sportives",
    nl: "Sportevenementen",
    de: "Sportveranstaltungen",
  },
  "Some social services": {
    fr: "Certains services sociaux",
    nl: "Bepaalde sociale diensten",
    de: "Bestimmte soziale Dienstleistungen",
  },
  "0 percent Zero Rate": {
    fr: "Taux zéro de 0 %",
    nl: "Nultarief van 0 %",
    de: "Nullsteuersatz von 0 %",
  },
  "Applied to limited categories such as newspapers under certain conditions, recycled materials, and specific international and intra community transport services.":
    {
      fr: "S’applique à des catégories limitées, telles que certains journaux sous conditions, les matériaux recyclés et certains services de transport internationaux ou intracommunautaires.",
      nl: "Wordt toegepast op een beperkt aantal categorieën, zoals kranten onder bepaalde voorwaarden, gerecycleerde materialen en bepaalde internationale en intracommunautaire vervoersdiensten.",
      de: "Kommt für begrenzte Kategorien zur Anwendung, etwa für Zeitungen unter bestimmten Voraussetzungen, Recyclingmaterialien sowie bestimmte internationale und innergemeinschaftliche Beförderungsleistungen.",
    },
  "VAT Registration in Belgium": {
    fr: "Immatriculation à la TVA en Belgique",
    nl: "Btw-registratie in België",
    de: "Mehrwertsteuerregistrierung in Belgien",
  },
  "To operate legally, businesses must follow Belgium's VAT registration process.":
    {
      fr: "Pour exercer légalement leurs activités, les entreprises doivent suivre la procédure belge d’immatriculation à la TVA.",
      nl: "Om wettig te kunnen opereren, moeten ondernemingen de Belgische procedure voor btw-registratie volgen.",
      de: "Um rechtmäßig tätig zu sein, müssen Unternehmen das belgische Verfahren zur Mehrwertsteuerregistrierung durchlaufen.",
    },
  "Steps for registration:": {
    fr: "Étapes de l’immatriculation :",
    nl: "Stappen voor registratie:",
    de: "Schritte der Registrierung:",
  },
  "Obtain a company number from the Crossroads Bank for Enterprises (CBE).": {
    fr: "Obtenir un numéro d’entreprise auprès de la Banque-Carrefour des Entreprises (BCE).",
    nl: "Een ondernemingsnummer bekomen bij de Kruispuntbank van Ondernemingen (KBO).",
    de: "Eine Unternehmensnummer bei der Zentralen Datenbank der Unternehmen (CBE) beantragen.",
  },
  "Submit VAT registration form 604A, which activates VAT status.": {
    fr: "Introduire le formulaire 604A de demande d’identification à la TVA, qui active le statut TVA.",
    nl: "Het formulier 604A voor btw-identificatie indienen, waarmee de btw-status wordt geactiveerd.",
    de: "Das Formular 604A zur Mehrwertsteueranmeldung einreichen, das den Mehrwertsteuerstatus aktiviert.",
  },
  "Applications can be submitted:": {
    fr: "Les demandes peuvent être introduites :",
    nl: "Aanvragen kunnen worden ingediend:",
    de: "Anträge können gestellt werden:",
  },
  "Through MyMinfin": {
    fr: "Via MyMinfin",
    nl: "Via MyMinfin",
    de: "Über MyMinfin",
  },
  "Via an accredited accountant": {
    fr: "Par l’intermédiaire d’un comptable agréé",
    nl: "Via een erkende accountant",
    de: "Über einen zugelassenen Buchhalter oder Steuerberater",
  },
  "At an authorized business counter": {
    fr: "Auprès d’un guichet d’entreprises agréé",
    nl: "Bij een erkend ondernemingsloket",
    de: "Bei einer anerkannten Unternehmensschalterstelle",
  },
  "Registration must occur after receiving the enterprise number but before starting taxable activities.":
    {
      fr: "L’immatriculation doit intervenir après l’obtention du numéro d’entreprise, mais avant le début des activités taxables.",
      nl: "De registratie moet gebeuren nadat het ondernemingsnummer is ontvangen, maar vóór de start van de belaste activiteiten.",
      de: "Die Registrierung muss nach Erhalt der Unternehmensnummer, aber vor Aufnahme der steuerpflichtigen Tätigkeiten erfolgen.",
    },
  "The business will receive a VAT identification number, typically written as BE followed by ten digits.":
    {
      fr: "L’entreprise reçoit alors un numéro d’identification à la TVA, généralement présenté sous la forme BE suivi de dix chiffres.",
      nl: "De onderneming ontvangt vervolgens een btw-identificatienummer, doorgaans weergegeven als BE gevolgd door tien cijfers.",
      de: "Das Unternehmen erhält anschließend eine Mehrwertsteuer-Identifikationsnummer, die üblicherweise aus „BE“ gefolgt von zehn Ziffern besteht.",
    },
  "VAT Returns and Payment Obligations": {
    fr: "Déclarations de TVA et obligations de paiement",
    nl: "Btw-aangiften en betalingsverplichtingen",
    de: "Mehrwertsteuererklärungen und Zahlungspflichten",
  },
  "Belgian businesses with the right to deduct VAT must file periodic VAT returns. The standard system requires monthly returns, although quarterly returns are permitted when specific turnover thresholds are met.":
    {
      fr: "Les entreprises belges disposant d’un droit à déduction doivent déposer des déclarations de TVA périodiques. En règle générale, le système prévoit des déclarations mensuelles, mais des déclarations trimestrielles sont autorisées lorsque certains seuils de chiffre d’affaires sont respectés.",
      nl: "Belgische ondernemingen met recht op btw-aftrek moeten periodieke btw-aangiften indienen. In het standaardstelsel gebeurt dit maandelijks, al zijn kwartaalaangiften toegestaan wanneer bepaalde omzetdrempels niet worden overschreden.",
      de: "Belgische Unternehmen mit Vorsteuerabzugsrecht müssen periodische Mehrwertsteuererklärungen abgeben. Im Regelfall sind monatliche Erklärungen vorgesehen, allerdings sind vierteljährliche Meldungen zulässig, wenn bestimmte Umsatzschwellen eingehalten werden.",
    },
  "Conditions for quarterly VAT returns:": {
    fr: "Conditions pour les déclarations trimestrielles de TVA :",
    nl: "Voorwaarden voor kwartaalaangiften:",
    de: "Voraussetzungen für vierteljährliche Mehrwertsteuererklärungen:",
  },
  "Annual turnover below 2,500,000 euros.": {
    fr: "Un chiffre d’affaires annuel inférieur à 2 500 000 euros.",
    nl: "Een jaarlijkse omzet van minder dan 2.500.000 euro.",
    de: "Ein Jahresumsatz von weniger als 2.500.000 Euro.",
  },
  "For certain sectors such as energy products, electronics, and motor vehicles, turnover must remain below 250,000 euros.":
    {
      fr: "Pour certains secteurs, tels que les produits énergétiques, l’électronique ou les véhicules automobiles, le chiffre d’affaires doit rester inférieur à 250 000 euros.",
      nl: "Voor bepaalde sectoren, zoals energieproducten, elektronica en motorvoertuigen, moet de omzet onder 250.000 euro blijven.",
      de: "Für bestimmte Branchen, etwa Energieprodukte, Elektronik oder Kraftfahrzeuge, darf der Umsatz 250.000 Euro nicht überschreiten.",
    },
  "Filing and payment rules:": {
    fr: "Règles de dépôt et de paiement :",
    nl: "Regels voor indiening en betaling:",
    de: "Regeln für Einreichung und Zahlung:",
  },
  "Returns must be submitted electronically via Intervat.": {
    fr: "Les déclarations doivent être introduites par voie électronique via Intervat.",
    nl: "Aangiften moeten elektronisch worden ingediend via Intervat.",
    de: "Die Erklärungen sind elektronisch über Intervat einzureichen.",
  },
  "Deadlines apply on the 20th of the month following the reporting period.": {
    fr: "Les échéances sont fixées au 20 du mois qui suit la période de déclaration.",
    nl: "De uiterste indieningsdatum is de 20ste van de maand die volgt op de aangifteperiode.",
    de: "Die Fristen laufen in der Regel am 20. des Monats ab, der auf den Meldezeitraum folgt.",
  },
  "Businesses unable to file electronically may submit manually if they provide written justification.":
    {
      fr: "Les entreprises qui ne sont pas en mesure de déposer leurs déclarations par voie électronique peuvent, moyennant justification écrite, recourir à un dépôt manuel.",
      nl: "Ondernemingen die niet elektronisch kunnen indienen, kunnen bij schriftelijke motivering uitzonderlijk een manuele indiening doen.",
      de: "Unternehmen, die nicht elektronisch einreichen können, dürfen bei schriftlicher Begründung ausnahmsweise eine manuelle Einreichung vornehmen.",
    },
  "Certain businesses do not file periodic returns, including:": {
    fr: "Certaines entreprises ne déposent pas de déclarations périodiques, notamment :",
    nl: "Bepaalde ondernemingen dienen geen periodieke aangiften in, waaronder:",
    de: "Einige Unternehmen geben keine periodischen Erklärungen ab, darunter insbesondere:",
  },
  "Entities under the VAT exemption regime.": {
    fr: "Les entités relevant du régime d’exonération de TVA.",
    nl: "Entiteiten die onder het btw-vrijstellingsstelsel vallen.",
    de: "Unternehmen, die dem Mehrwertsteuerbefreiungsregime unterliegen.",
  },
  "Farmers operating under the special agricultural scheme.": {
    fr: "Les agriculteurs soumis au régime agricole particulier.",
    nl: "Landbouwers die onder de bijzondere landbouwregeling vallen.",
    de: "Landwirte, die der besonderen Landwirtschaftsregelung unterliegen.",
  },
  "Entities providing only VAT exempt services as listed in Article 44.": {
    fr: "Les entités qui ne fournissent que des services exonérés de TVA tels qu’énumérés à l’article 44.",
    nl: "Entiteiten die uitsluitend btw-vrijgestelde diensten verrichten zoals opgesomd in artikel 44.",
    de: "Einheiten, die ausschließlich von der Mehrwertsteuer befreite Leistungen gemäß Artikel 44 erbringen.",
  },
  "VAT and Online Sales": {
    fr: "TVA et ventes en ligne",
    nl: "Btw en online verkoop",
    de: "Mehrwertsteuer und Online-Verkäufe",
  },
  "Belgium's VAT rules apply specific obligations for digital and cross border sales.":
    {
      fr: "Les règles belges en matière de TVA prévoient des obligations spécifiques pour les ventes numériques et transfrontalières.",
      nl: "De Belgische btw-regels voorzien in specifieke verplichtingen voor digitale en grensoverschrijdende verkopen.",
      de: "Die belgischen Mehrwertsteuervorschriften sehen besondere Pflichten für digitale und grenzüberschreitende Umsätze vor.",
    },
  "Key considerations:": {
    fr: "Points clés à prendre en compte :",
    nl: "Belangrijke aandachtspunten:",
    de: "Wesentliche Aspekte:",
  },
  "EU online sales follow destination based VAT rules under the One Stop Shop (OSS) scheme.":
    {
      fr: "Les ventes en ligne au sein de l’UE suivent les règles de TVA basées sur le pays de destination dans le cadre du guichet unique (One Stop Shop – OSS).",
      nl: "Voor online verkopen binnen de EU gelden bestemmingslandregels in het kader van de One Stop Shop-regeling (OSS).",
      de: "Für Online-Verkäufe innerhalb der EU gelten die Bestimmungslandregeln im Rahmen der One-Stop-Shop-Regelung (OSS).",
    },
  "Low value imports under 150 euros use the Import One Stop Shop (IOSS), ensuring VAT is paid at checkout.":
    {
      fr: "Les importations de faible valeur inférieures à 150 euros utilisent le guichet unique à l’importation (Import One Stop Shop – IOSS), ce qui garantit que la TVA est payée au moment du paiement en ligne.",
      nl: "Voor invoer met een lage waarde onder 150 euro wordt het Import One Stop Shop-stelsel (IOSS) gebruikt, waardoor de btw bij het afrekenen wordt betaald.",
      de: "Geringwertige Einfuhren unter 150 Euro fallen unter das Import-One-Stop-Shop-System (IOSS), wodurch die Mehrwertsteuer bereits beim Checkout erhoben wird.",
    },
  "Marketplaces and platforms become responsible for collecting VAT on certain transactions, particularly distance sales.":
    {
      fr: "Les places de marché et plateformes en ligne deviennent responsables de la collecte de la TVA sur certaines transactions, en particulier les ventes à distance.",
      nl: "Marktplaatsen en platforms worden voor bepaalde transacties, met name afstandsverkopen, verantwoordelijk voor het innen van de btw.",
      de: "Online-Marktplätze und Plattformen werden für die Erhebung der Mehrwertsteuer auf bestimmte Transaktionen, insbesondere Fernverkäufe, verantwortlich.",
    },
  "These mechanisms simplify VAT compliance for e-commerce businesses operating across borders.":
    {
      fr: "Ces mécanismes simplifient la conformité TVA pour les entreprises de commerce électronique actives au-delà des frontières.",
      nl: "Deze mechanismen vereenvoudigen de btw-compliance voor e-commercebedrijven die grensoverschrijdend actief zijn.",
      de: "Diese Mechanismen erleichtern die Mehrwertsteuer-Compliance für E-Commerce-Unternehmen, die grenzüberschreitend tätig sind.",
    },
  "E Invoicing and Its Impact on VAT": {
    fr: "Facturation électronique et impact sur la TVA",
    nl: "E-facturatie en de impact op btw",
    de: "E-Rechnungsstellung und ihre Auswirkungen auf die Mehrwertsteuer",
  },
  "Belgium will require structured e invoicing for B2B transactions starting January 2026. Under the new system:":
    {
      fr: "La Belgique rendra la facturation électronique structurée obligatoire pour les transactions B2B à partir de janvier 2026. Dans le cadre de ce nouveau système :",
      nl: "België zal vanaf januari 2026 gestructureerde e-facturatie verplicht stellen voor B2B-transacties. In het nieuwe stelsel geldt dat:",
      de: "Belgien wird ab Januar 2026 für B2B-Geschäfte die strukturierte E-Rechnungsstellung vorschreiben. Im neuen System gilt Folgendes:",
    },
  "All invoices must follow the Peppol BIS format or an EN16931 compliant alternative.":
    {
      fr: "Toutes les factures devront respecter le format Peppol BIS ou une autre alternative conforme à la norme EN16931.",
      nl: "Alle facturen moeten het Peppol BIS-formaat of een ander met EN16931 verenigbaar formaat volgen.",
      de: "Alle Rechnungen müssen im Peppol-BIS-Format oder in einem EN16931-konformen Alternativformat ausgestellt werden.",
    },
  "PDF invoices will no longer be considered valid.": {
    fr: "Les factures au format PDF ne seront plus considérées comme valides.",
    nl: "Facturen in pdf-formaat zullen niet langer als geldig worden beschouwd.",
    de: "Rechnungen im PDF-Format gelten dann nicht mehr als rechtsgültig.",
  },
  "Businesses must be able to send and receive structured electronic invoices.":
    {
      fr: "Les entreprises devront être en mesure d’envoyer et de recevoir des factures électroniques structurées.",
      nl: "Ondernemingen moeten gestructureerde elektronische facturen kunnen verzenden en ontvangen.",
      de: "Unternehmen müssen in der Lage sein, strukturierte elektronische Rechnungen zu senden und zu empfangen.",
    },
  "Transaction data will eventually be reported in real time to tax authorities.":
    {
      fr: "Les données de transaction seront à terme transmises en temps réel aux autorités fiscales.",
      nl: "Transactiegegevens zullen op termijn in quasi realtime aan de belastingadministratie worden gerapporteerd.",
      de: "Transaktionsdaten werden perspektivisch in Echtzeit an die Steuerbehörden übermittelt.",
    },
  "This shift will significantly influence how businesses manage VAT processes, record keeping, and audit trails.":
    {
      fr: "Cette évolution aura un impact majeur sur la manière dont les entreprises gèrent leurs processus TVA, leur tenue de registres et leurs pistes d’audit.",
      nl: "Deze omschakeling zal een grote impact hebben op de manier waarop ondernemingen hun btw-processen, hun administratie en hun audittrail organiseren.",
      de: "Dieser Wandel wird erheblichen Einfluss darauf haben, wie Unternehmen ihre Mehrwertsteuerprozesse, ihre Aufzeichnungen und ihre Prüfspuren organisieren.",
    },
  "Common VAT Challenges for Businesses in Belgium": {
    fr: "Principaux défis liés à la TVA pour les entreprises en Belgique",
    nl: "Veelvoorkomende btw-uitdagingen voor ondernemingen in België",
    de: "Typische Mehrwertsteuerherausforderungen für Unternehmen in Belgien",
  },
  "Businesses often face several difficulties when managing VAT obligations, including:":
    {
      fr: "Les entreprises sont souvent confrontées à plusieurs difficultés dans la gestion de leurs obligations TVA, notamment :",
      nl: "Ondernemingen ondervinden vaak verschillende moeilijkheden bij het beheer van hun btw-verplichtingen, waaronder:",
      de: "Unternehmen stehen bei der Erfüllung ihrer Mehrwertsteuerpflichten häufig vor verschiedenen Herausforderungen, darunter:",
    },
  "Complex registration for foreign companies without local establishments.": {
    fr: "La complexité de l’immatriculation pour les sociétés étrangères sans établissement local.",
    nl: "Complexe registratie voor buitenlandse vennootschappen zonder lokale inrichting.",
    de: "Komplexe Registrierungsverfahren für ausländische Unternehmen ohne lokale Betriebsstätte.",
  },
  "Distinguishing between taxable and exempt activities.": {
    fr: "La distinction entre opérations taxables et opérations exonérées.",
    nl: "Het onderscheid maken tussen belaste en vrijgestelde activiteiten.",
    de: "Die Abgrenzung zwischen steuerpflichtigen und steuerbefreiten Tätigkeiten.",
  },
  "Managing VAT on intra EU sales and services.": {
    fr: "La gestion de la TVA sur les ventes et prestations intracommunautaires.",
    nl: "Het beheer van btw op intracommunautaire verkopen en diensten.",
    de: "Die Behandlung der Mehrwertsteuer auf innergemeinschaftliche Lieferungen und Leistungen.",
  },
  "Determining input VAT recovery for mixed taxable and exempt operations.": {
    fr: "La détermination du droit à déduction de la TVA pour des activités mixtes, taxables et exonérées.",
    nl: "Het bepalen van de aftrek van voorbelasting bij gemengde activiteiten (belast en vrijgesteld).",
    de: "Die Ermittlung des Vorsteuerabzugs bei gemischten, sowohl steuerpflichtigen als auch steuerbefreiten Tätigkeiten.",
  },
  "Keeping up with strict invoicing, reporting, and documentation rules.": {
    fr: "Le respect de règles strictes en matière de facturation, de déclaration et de documentation.",
    nl: "Blijvend voldoen aan strikte facturatie-, rapporterings- en documentatieverplichtingen.",
    de: "Die Einhaltung strenger Vorschriften zu Rechnungsstellung, Meldungen und Dokumentation.",
  },
  "Navigating OSS and IOSS compliance for online sales.": {
    fr: "La gestion de la conformité aux régimes OSS et IOSS pour les ventes en ligne.",
    nl: "Zich wegwijs maken in de OSS- en IOSS-verplichtingen voor online verkopen.",
    de: "Die Bewältigung der OSS- und IOSS-Vorgaben im Zusammenhang mit Online-Verkäufen.",
  },
  "Staying compliant requires a clear understanding of Belgian and EU VAT regulations.":
    {
      fr: "Rester conforme exige une compréhension claire de la réglementation TVA belge et européenne.",
      nl: "Om compliant te blijven is een duidelijke kennis van de Belgische en Europese btw-regels noodzakelijk.",
      de: "Um konform zu bleiben, ist ein klares Verständnis der belgischen und europäischen Mehrwertsteuervorschriften erforderlich.",
    },
 
  "VAT remains one of the most important aspects of doing business in Belgium, influencing how companies price their products, manage compliance, and organize financial reporting. With varying VAT rates of 21 percent, 12 percent, 6 percent, and 0 percent, businesses must ensure they apply the correct rate, maintain accurate records, and submit their monthly or quarterly returns through Intervat on time. Foreign companies operating in Belgium also need to follow the same registration and reporting requirements when engaging in taxable activities.":
    {
      fr: "La TVA demeure l’un des aspects les plus importants de l’activité économique en Belgique. Elle influence la manière dont les entreprises fixent leurs prix, gèrent la conformité et organisent leur reporting financier. Avec des taux de TVA de 21 %, 12 %, 6 % et 0 %, les entreprises doivent veiller à appliquer le taux correct, à conserver des registres précis et à déposer leurs déclarations mensuelles ou trimestrielles dans les délais via Intervat. Les sociétés étrangères actives en Belgique sont soumises aux mêmes obligations d’immatriculation et de déclaration lorsqu’elles exercent des activités taxables.",
      nl: "Btw blijft een van de belangrijkste aandachtspunten voor ondernemingen in België en beïnvloedt hoe zij hun prijzen bepalen, compliance organiseren en financiële rapportering inrichten. Met btw-tarieven van 21 %, 12 %, 6 % en 0 % moeten bedrijven erop toezien dat zij het juiste tarief toepassen, een nauwkeurige administratie bijhouden en hun maandelijkse of driemaandelijkse aangiften tijdig via Intervat indienen. Buitenlandse ondernemingen die in België actief zijn, moeten bij belaste activiteiten dezelfde registratie- en rapporteringsverplichtingen naleven.",
      de: "Die Mehrwertsteuer gehört weiterhin zu den zentralen Rahmenbedingungen für Unternehmen in Belgien und beeinflusst, wie Produkte bepreist werden, wie Compliance gesteuert wird und wie das Finanzreporting organisiert ist. Bei Mehrwertsteuersätzen von 21 %, 12 %, 6 % und 0 % müssen Unternehmen sicherstellen, dass der richtige Satz angewendet wird, dass die Aufzeichnungen korrekt geführt werden und dass ihre monatlichen oder vierteljährlichen Erklärungen fristgerecht über Intervat eingereicht werden. Auch ausländische Unternehmen, die in Belgien steuerpflichtige Tätigkeiten ausüben, müssen dieselben Registrierungs- und Meldepflichten erfüllen.",
    },
  "As Belgium prepares for the shift to mandatory structured e invoicing in 2026, VAT reporting will increasingly rely on digital accuracy and real time transaction visibility. Many organizations are moving toward integrated platforms that simplify compliance and improve overall financial control. Solutions like Accqrate, which support structured invoicing and automated tax workflows, can help companies transition smoothly while maintaining strong operational efficiency.":
    {
      fr: "Alors que la Belgique se prépare au passage à la facturation électronique structurée obligatoire en 2026, le reporting TVA reposera de plus en plus sur la précision numérique et la visibilité quasi en temps réel des transactions. De nombreuses organisations se tournent vers des plateformes intégrées qui simplifient la conformité et renforcent le pilotage financier global. Des solutions comme Accqrate, qui prennent en charge la facturation structurée et l’automatisation des processus fiscaux, peuvent aider les entreprises à réussir cette transition en douceur tout en maintenant une forte efficacité opérationnelle.",
      nl: "Naarmate België toewerkt naar verplichte gestructureerde e-facturatie in 2026, zal btw-rapportering in toenemende mate steunen op digitale nauwkeurigheid en realtime-inzicht in transacties. Veel organisaties stappen over op geïntegreerde platformen die compliance vereenvoudigen en de algemene financiële beheersing verbeteren. Oplossingen zoals Accqrate, die gestructureerde facturatie en geautomatiseerde fiscale workflows ondersteunen, helpen bedrijven om deze overgang vlot te maken en tegelijk een hoge operationele efficiëntie te behouden.",
      de: "Während Belgien sich auf die Einführung der verpflichtenden strukturierten E-Rechnungsstellung im Jahr 2026 vorbereitet, wird die Mehrwertsteuerberichterstattung zunehmend auf digitale Genauigkeit und nahezu Echtzeit-Transparenz bei Transaktionen angewiesen sein. Viele Organisationen setzen daher auf integrierte Plattformen, die die Compliance vereinfachen und die finanzielle Steuerung verbessern. Lösungen wie Accqrate, die strukturierte Rechnungsstellung und automatisierte Steuerprozesse unterstützen, können Unternehmen dabei helfen, den Übergang reibungslos zu bewältigen und gleichzeitig eine hohe operative Effizienz sicherzustellen.",
    },
  //Corporate Tax in Belgium: Complete Guide to Rates, Filing, Deductions, Incentives, Assessments, and Compliance Obligations

  "Corporate Tax in Belgium: Complete Guide to Rates, Filing, Deductions, Incentives, Assessments, and Compliance Obligations":
    {
      fr: "Impôt des sociétés en Belgique : guide complet des taux, déclarations, déductions, incitants, contrôles et obligations de conformité",
      nl: "Vennootschapsbelasting in België: complete gids voor tarieven, aangifte, aftrekken, incentives, controles en complianceverplichtingen",
      de: "Körperschaftsteuer in Belgien: Umfassender Leitfaden zu Steuersätzen, Erklärungen, Abzügen, Anreizen, Prüfungen und Compliance-Pflichten",
    },
  
  "Corporate tax is a fundamental part of Belgium's fiscal framework and a core element of business compliance for companies operating within the country. Whether a business is Belgian, foreign-owned, a multinational group, or a startup, understanding Belgium's corporate tax rules is essential for accurate reporting, strategic planning, and long-term financial performance.":
    {
      fr: "L’impôt des sociétés est un élément fondamental du cadre fiscal belge et un pilier central de la conformité pour les entreprises actives dans le pays. Qu’une entreprise soit belge, à capitaux étrangers, membre d’un groupe multinational ou une start-up, la compréhension des règles belges en matière d’impôt des sociétés est essentielle pour un reporting fiable, une planification stratégique efficace et des performances financières durables.",
      nl: "De vennootschapsbelasting is een essentieel onderdeel van het Belgische fiscale kader en een kernaspect van compliance voor ondernemingen die in het land actief zijn. Of een onderneming nu Belgisch is, in buitenlandse handen, deel uitmaakt van een multinationale groep of een start-up is, inzicht in de Belgische regels voor de vennootschapsbelasting is cruciaal voor correcte rapportering, strategische planning en duurzame financiële prestaties.",
      de: "Die Körperschaftsteuer ist ein zentraler Bestandteil des belgischen Steuersystems und ein Kernelement der Compliance für Unternehmen, die in Belgien tätig sind. Ob es sich um ein belgisches Unternehmen, eine ausländisch beherrschte Gesellschaft, einen multinationalen Konzern oder ein Start-up handelt – das Verständnis der belgischen Körperschaftsteuervorschriften ist entscheidend für korrekte Berichterstattung, strategische Planung und eine langfristig solide Finanzleistung.",
    },
  "Belgium's corporate tax system offers a blend of competitive tax rates, innovation-focused deductions, and strict compliance requirements that businesses must navigate carefully. This comprehensive guide provides an in-depth overview of corporate tax rates, tax liability rules, filing requirements, tax incentives, audits, capital gains treatment, and key obligations companies must follow.":
    {
      fr: "Le régime belge de l’impôt des sociétés combine des taux d’imposition compétitifs, des déductions orientées vers l’innovation et des exigences de conformité strictes que les entreprises doivent gérer avec rigueur. Ce guide complet présente en détail les taux d’impôt des sociétés, les règles d’assujettissement, les obligations de dépôt, les incitants fiscaux, les contrôles, le traitement des plus-values et les principales obligations que les sociétés doivent respecter.",
      nl: "Het Belgische stelsel van vennootschapsbelasting biedt een combinatie van competitieve tarieven, innovatiegerichte aftrekken en strikte compliancevereisten waarmee ondernemingen zorgvuldig moeten omgaan. Deze uitgebreide gids geeft een diepgaand overzicht van de vennootschapsbelastingtarieven, de belastingplichtregels, de aangifteverplichtingen, fiscale incentives, controles, de behandeling van meerwaarden en de belangrijkste verplichtingen voor vennootschappen.",
      de: "Das belgische Körperschaftsteuersystem verbindet wettbewerbsfähige Steuersätze mit innovationsorientierten Abzugsmöglichkeiten und strengen Compliance-Anforderungen, durch die sich Unternehmen sorgfältig navigieren müssen. Dieser umfassende Leitfaden bietet einen detaillierten Überblick über Körperschaftsteuersätze, Steuerpflichtregeln, Erklärungspflichten, Steueranreize, Prüfungen, die Behandlung von Veräußerungsgewinnen sowie die wichtigsten Pflichten für Unternehmen.",
    },
  "Understanding Belgium's Corporate Tax System": {
    fr: "Comprendre le système belge d’impôt des sociétés",
    nl: "Inzicht in het Belgische stelsel van vennootschapsbelasting",
    de: "Das belgische Körperschaftsteuersystem verstehen",
  },
  "Corporate tax in Belgium is governed by the Federal Public Service Finance. It is levied on the taxable profits of companies, which include income after deducting allowable expenses, depreciation, and applicable incentives.":
    {
      fr: "L’impôt des sociétés en Belgique est administré par le Service public fédéral Finances. Il est prélevé sur les bénéfices imposables des sociétés, à savoir les revenus après déduction des charges admissibles, des amortissements et des incitants fiscaux applicables.",
      nl: "De vennootschapsbelasting in België wordt beheerd door de Federale Overheidsdienst Financiën. Ze wordt geheven op de belastbare winst van vennootschappen, met inbegrip van de inkomsten na aftrek van toegelaten kosten, afschrijvingen en toepasselijke fiscale incentives.",
      de: "Die Körperschaftsteuer in Belgien wird vom Föderalen Öffentlichen Dienst Finanzen verwaltet. Sie wird auf den steuerpflichtigen Gewinn von Gesellschaften erhoben, also auf die Einkünfte nach Abzug abzugsfähiger Aufwendungen, Abschreibungen und anwendbarer Steueranreize.",
    },
  "Belgium has intentionally restructured parts of its tax code in recent years to improve competitiveness, attract foreign investment, and align with global tax developments such as OECD BEPS and the upcoming EU global minimum tax rules.":
    {
      fr: "La Belgique a, ces dernières années, réformé de manière ciblée certaines parties de son code fiscal afin d’améliorer sa compétitivité, d’attirer les investissements étrangers et de s’aligner sur les évolutions internationales en matière de fiscalité, telles que le projet OCDE BEPS et les futures règles européennes de taux minimal d’imposition mondial.",
      nl: "België heeft de afgelopen jaren bewust delen van zijn fiscale wetgeving hervormd om de concurrentiekracht te verhogen, buitenlandse investeringen aan te trekken en aan te sluiten bij internationale fiscale ontwikkelingen, zoals het OESO-BEPS-project en de komende Europese regels inzake een mondiale minimumbelasting.",
      de: "Belgien hat in den letzten Jahren gezielt Teile seines Steuergesetzbuchs reformiert, um seine Wettbewerbsfähigkeit zu stärken, ausländische Investitionen anzuziehen und sich an internationale Entwicklungen wie das OECD-BEPS-Projekt und die künftigen EU-Regeln zur globalen Mindestbesteuerung anzupassen.",
    },
  "Key Characteristics of Belgium's Corporate Tax Framework": {
    fr: "Caractéristiques clés du cadre belge d’impôt des sociétés",
    nl: "Belangrijkste kenmerken van het Belgische kader voor vennootschapsbelasting",
    de: "Zentrale Merkmale des belgischen Körperschaftsteuersystems",
  },
  "Competitive headline tax rate when compared to historical levels": {
    fr: "Un taux nominal compétitif par rapport aux niveaux historiques",
    nl: "Een competitief nominaal tarief in vergelijking met historische niveaus",
    de: "Ein im Vergleich zu früheren Niveaus wettbewerbsfähiger Nominalsteuersatz",
  },
  "Significant research and innovation incentives": {
    fr: "Des incitants substantiels en matière de recherche et d’innovation",
    nl: "Aanzienlijke stimulansen voor onderzoek en innovatie",
    de: "Bedeutende Anreize für Forschung und Innovation",
  },
  "Clear rules for resident versus non-resident companies": {
    fr: "Des règles claires pour distinguer sociétés résidentes et non résidentes",
    nl: "Duidelijke regels voor residentiële versus niet-residentiële vennootschappen",
    de: "Klare Abgrenzungsvorschriften für in- und ausländische Unternehmen",
  },
  "An expanding compliance regime marked by audits, documentation requirements, and digitalization":
    {
      fr: "Un régime de conformité en expansion, marqué par des contrôles, des exigences documentaires et une digitalisation accrue",
      nl: "Een uitbreidend compliancekader met meer controles, documentatievereisten en verregaande digitalisering",
      de: "Ein zunehmend ausgebautes Compliance-Regime mit Prüfungen, umfangreichen Dokumentationspflichten und fortschreitender Digitalisierung",
    },
  "Predictable filing cycles and well-defined deductible categories": {
    fr: "Des cycles de déclaration prévisibles et des catégories de déduction bien définies",
    nl: "Voorspelbare aangiftecycli en duidelijk afgebakende aftrekbare categorieën",
    de: "Planbare Erklärungstermine und klar definierte abzugsfähige Aufwendungen",
  },
  "Corporate Tax Liability in Belgium": {
    fr: "Assujettissement à l’impôt des sociétés en Belgique",
    nl: "Belastingplicht voor de vennootschapsbelasting in België",
    de: "Körperschaftsteuerpflicht in Belgien",
  },
  "Corporate tax applies differently depending on the nature, location, and residence status of the business.":
    {
      fr: "L’impôt des sociétés s’applique de manière différenciée selon la nature, la localisation et le statut de résidence de l’entreprise.",
      nl: "De vennootschapsbelasting wordt verschillend toegepast naargelang de aard, de locatie en de fiscale woonplaats van de onderneming.",
      de: "Die Körperschaftsteuer greift unterschiedlich, je nach Art, Standort und steuerlichem Ansässigkeitsstatus des Unternehmens.",
    },
  "Belgian Resident Companies": {
    fr: "Sociétés résidentes belges",
    nl: "Belgische ingezeten vennootschappen",
    de: "In Belgien ansässige Gesellschaften",
  },
  "company is considered tax resident in Belgium if its:": {
    fr: "Une société est considérée comme résidente fiscale en Belgique lorsque :",
    nl: "Een vennootschap wordt als fiscaal inwoner van België beschouwd indien haar:",
    de: "Eine Gesellschaft gilt als in Belgien steuerlich ansässig, wenn ihr:",
  },
  "Registered office,": {
    fr: "Siège statutaire,",
    nl: "Maatschappelijke zetel,",
    de: "Satzungssitz,",
  },
  "Principal place of management, or": {
    fr: "Lieu de direction effective, ou",
    nl: "Plaats van werkelijke leiding, of",
    de: "Ort der tatsächlichen Geschäftsleitung oder",
  },
  "Center of economic interest is located in Belgium.": {
    fr: "Centre d’intérêts économiques est situé en Belgique.",
    nl: "Centrum van economische belangen zich in België bevindt.",
    de: "Zentrum der wirtschaftlichen Interessen in Belgien liegt.",
  },
  "Resident companies are taxed on worldwide income, including domestic and foreign profits.":
    {
      fr: "Les sociétés résidentes sont imposées sur l’ensemble de leurs revenus mondiaux, y compris les bénéfices nationaux et étrangers.",
      nl: "Ingezeten vennootschappen worden belast op hun wereldwijde inkomen, inclusief binnenlandse en buitenlandse winsten.",
      de: "Ansässige Gesellschaften werden auf ihr weltweites Einkommen besteuert, einschließlich in- und ausländischer Gewinne.",
    },
  "Branches of Foreign Companies": {
    fr: "Succursales de sociétés étrangères",
    nl: "Bijkantoren van buitenlandse vennootschappen",
    de: "Zweigniederlassungen ausländischer Gesellschaften",
  },
  "A branch is treated as a non-resident entity. It is taxed only on profits generated from Belgian activities.":
    {
      fr: "Une succursale est traitée comme une entité non résidente. Elle n’est imposable que sur les bénéfices générés par ses activités en Belgique.",
      nl: "Een bijkantoor wordt als een niet-inwoner beschouwd. Het wordt uitsluitend belast op de winsten die voortkomen uit activiteiten in België.",
      de: "Eine Zweigniederlassung gilt als nichtansässige Einheit. Sie wird nur auf die Gewinne besteuert, die aus ihren Tätigkeiten in Belgien stammen.",
    },
  "Example: A U.S. logistics firm operating a branch in Antwerp pays corporate tax only on Belgian-sourced income.":
    {
      fr: "Exemple : une société logistique américaine exploitant une succursale à Anvers paie l’impôt des sociétés uniquement sur les revenus d’origine belge.",
      nl: "Voorbeeld: een Amerikaans logistiek bedrijf met een bijkantoor in Antwerpen betaalt vennootschapsbelasting uitsluitend op inkomsten van Belgische oorsprong.",
      de: "Beispiel: Ein US-Logistikunternehmen mit einer Zweigniederlassung in Antwerpen zahlt Körperschaftsteuer ausschließlich auf Einkünfte mit belgischer Quelle.",
    },
  "Subsidiaries of Foreign Companies": {
    fr: "Filiales de sociétés étrangères",
    nl: "Dochtervennootschappen van buitenlandse ondernemingen",
    de: "Tochtergesellschaften ausländischer Unternehmen",
  },
  "Unlike branches, subsidiaries are separate legal entities. They are considered resident companies and taxed on worldwide profits, including foreign income.":
    {
      fr: "Contrairement aux succursales, les filiales sont des entités juridiques distinctes. Elles sont considérées comme des sociétés résidentes et imposées sur leurs bénéfices mondiaux, y compris les revenus étrangers.",
      nl: "In tegenstelling tot bijkantoren zijn dochtervennootschappen afzonderlijke rechtspersonen. Zij worden als ingezeten vennootschappen beschouwd en belast op hun wereldwijde winst, inclusief buitenlandse inkomsten.",
      de: "Im Unterschied zu Zweigniederlassungen sind Tochtergesellschaften eigenständige Rechtsträger. Sie gelten als in Belgien ansässig und werden auf ihre weltweiten Gewinne besteuert, einschließlich ausländischer Einkünfte.",
    },
  "Profit-Generating Activities Triggering Tax Liability": {
    fr: "Activités génératrices de bénéfices entraînant une obligation fiscale",
    nl: "Winstgenererende activiteiten die tot belastingplicht leiden",
    de: "Gewinnerzielende Tätigkeiten, die eine Steuerpflicht auslösen",
  },
  "Corporate tax applies when the company engages in:": {
    fr: "L’impôt des sociétés s’applique lorsque l’entreprise exerce :",
    nl: "De vennootschapsbelasting is van toepassing wanneer de vennootschap zich bezighoudt met:",
    de: "Die Körperschaftsteuer wird fällig, wenn das Unternehmen folgende Tätigkeiten ausübt:",
  },
  "Professional or commercial activities performed regularly": {
    fr: "Des activités professionnelles ou commerciales exercées de manière régulière",
    nl: "Professionele of commerciële activiteiten die op regelmatige basis worden verricht",
    de: "Regelmäßig ausgeübte gewerbliche oder berufliche Tätigkeiten",
  },
  "Independent operations": {
    fr: "Des activités exercées de manière indépendante",
    nl: "Onafhankelijke werkzaamheden",
    de: "Unabhängige Geschäftstätigkeiten",
  },
  "Activities regardless of profitability": {
    fr: "Des activités, indépendamment de leur rentabilité",
    nl: "Activiteiten, ongeacht of zij winstgevend zijn",
    de: "Tätigkeiten unabhängig davon, ob sie Gewinne abwerfen",
  },
  "Both primary and secondary business activities": {
    fr: "Des activités principales comme accessoires",
    nl: "Zowel hoofd- als nevenactiviteiten",
    de: "Sowohl Haupt- als auch Nebentätigkeiten",
  },
  "Companies conducting only VAT-exempt or non-commercial activities may be excluded from corporate tax obligations, depending on the structure.":
    {
      fr: "Les sociétés qui exercent uniquement des activités exonérées de TVA ou non commerciales peuvent, selon leur structure, être exclues du champ d’application de l’impôt des sociétés.",
      nl: "Vennootschappen die uitsluitend btw-vrijgestelde of niet-commerciële activiteiten uitoefenen, kunnen afhankelijk van hun structuur buiten de vennootschapsbelasting vallen.",
      de: "Unternehmen, die ausschließlich mehrwertsteuerbefreite oder nicht gewerbliche Tätigkeiten ausüben, können je nach Struktur von der Körperschaftsteuerpflicht ausgenommen sein.",
    },
  "Corporate Tax Rates in Belgium": {
    fr: "Taux de l’impôt des sociétés en Belgique",
    nl: "Tarieven van de vennootschapsbelasting in België",
    de: "Körperschaftsteuersätze in Belgien",
  },
  "Belgium applies a straightforward corporate tax rate structure:": {
    fr: "La Belgique applique une structure de taux d’impôt des sociétés relativement simple :",
    nl: "België hanteert een relatief eenvoudig tariefschema voor de vennootschapsbelasting:",
    de: "Belgien wendet eine vergleichsweise übersichtliche Struktur von Körperschaftsteuersätzen an:",
  },
  "Standard Corporate Tax Rate: 25 percent": {
    fr: "Taux normal de l’impôt des sociétés : 25 %",
    nl: "Standaardtarief voor de vennootschapsbelasting: 25 %",
    de: "Regulärer Körperschaftsteuersatz: 25 %",
  },
  "This rate applies to all companies unless they qualify for SME benefits.": {
    fr: "Ce taux s’applique à toutes les sociétés, sauf si elles remplissent les conditions pour bénéficier du régime PME.",
    nl: "Dit tarief geldt voor alle vennootschappen, tenzij zij in aanmerking komen voor kmo-voordelen.",
    de: "Dieser Satz gilt für alle Gesellschaften, sofern sie nicht die Voraussetzungen für die KMU-Begünstigung erfüllen.",
  },
  "Reduced SME Rate: 20 percent on the first 100,000 euros": {
    fr: "Taux réduit PME : 20 % sur les premiers 100 000 euros",
    nl: "Verlaagd kmo-tarief: 20 % op de eerste 100.000 euro",
    de: "Ermäßigter KMU-Satz: 20 % auf die ersten 100.000 Euro",
  },
  "SMEs may apply the reduced rate if they meet the following requirements:": {
    fr: "Les PME peuvent appliquer ce taux réduit si elles remplissent les conditions suivantes :",
    nl: "Kmo’s kunnen het verlaagde tarief toepassen indien zij aan de volgende voorwaarden voldoen:",
    de: "KMU können diesen ermäßigten Satz in Anspruch nehmen, wenn sie die folgenden Voraussetzungen erfüllen:",
  },
  "Taxable profit does not exceed 100,000 euros": {
    fr: "Le bénéfice imposable ne dépasse pas 100 000 euros",
    nl: "De belastbare winst niet hoger is dan 100.000 euro",
    de: "Der steuerpflichtige Gewinn 100.000 Euro nicht übersteigt",
  },
  "They qualify as a small or medium-sized enterprise under Belgian Company Law":
    {
      fr: "Elles répondent à la définition de petite ou moyenne entreprise au sens du droit des sociétés belge",
      nl: "Zij kwalificeren als kleine of middelgrote onderneming volgens het Belgische vennootschapsrecht",
      de: "Sie als kleines oder mittleres Unternehmen nach belgischem Gesellschaftsrecht gelten",
    },
  "They employ at least one full-time equivalent worker": {
    fr: "Elles occupent au moins un travailleur à temps plein (équivalent temps plein)",
    nl: "Zij minstens één voltijdsequivalent in dienst hebben",
    de: "Sie mindestens einen Vollzeitäquivalent-Arbeitnehmer beschäftigen",
  },
  "They are not exempt from corporate tax": {
    fr: "Elles ne bénéficient d’aucune exonération de l’impôt des sociétés",
    nl: "Zij niet van de vennootschapsbelasting zijn vrijgesteld",
    de: "Sie nicht von der Körperschaftsteuer befreit sind",
  },
  "The reduced SME rate is designed to support business creation, growth, and reinvestment.":
    {
      fr: "Le taux réduit PME vise à soutenir la création d’entreprises, la croissance et la réinjection des bénéfices dans l’activité.",
      nl: "Het verlaagde kmo-tarief is bedoeld om ondernemingscreatie, groei en herinvestering te stimuleren.",
      de: "Der ermäßigte KMU-Satz soll Unternehmensgründungen, Wachstum und Reinvestitionen gezielt fördern.",
    },
  "Deductible Expenses and Corporate Tax Incentives": {
    fr: "Dépenses déductibles et incitants en matière d’impôt des sociétés",
    nl: "Aftrekbare kosten en fiscale incentives in de vennootschapsbelasting",
    de: "Abzugsfähige Aufwendungen und Anreize bei der Körperschaftsteuer",
  },
  "Belgium provides one of the most generous innovation incentive ecosystems in Europe. These incentives allow companies to significantly reduce their taxable base.":
    {
      fr: "La Belgique offre l’un des écosystèmes d’incitants à l’innovation les plus généreux d’Europe. Ces mécanismes permettent aux entreprises de réduire significativement leur base imposable.",
      nl: "België beschikt over een van de meest genereuze innovatie-incentives in Europa. Deze maatregelen laten ondernemingen toe hun belastbare basis aanzienlijk te verlagen.",
      de: "Belgien zählt zu den Ländern mit den großzügigsten Innovationsanreizen in Europa. Diese Instrumente ermöglichen es Unternehmen, ihre steuerpflichtige Bemessungsgrundlage deutlich zu reduzieren.",
    },
  "Common Deductible Business Expenses": {
    fr: "Principales dépenses professionnelles déductibles",
    nl: "Belangrijkste aftrekbare bedrijfskosten",
    de: "Typische abzugsfähige Betriebsausgaben",
  },
  "Deductible costs typically include:": {
    fr: "Les coûts généralement déductibles comprennent notamment :",
    nl: "Typisch aftrekbare kosten omvatten onder meer:",
    de: "Zu den typischerweise abzugsfähigen Kosten gehören unter anderem:",
  },
  "Operating expenses such as utilities, rent, and supplies": {
    fr: "Les frais d’exploitation tels que les services publics, loyers et fournitures",
    nl: "Operationele kosten zoals nutsvoorzieningen, huur en verbruiksgoederen",
    de: "Betriebsausgaben wie Energie- und Versorgungskosten, Mieten und Verbrauchsmaterial",
  },
  "Depreciation on fixed assets": {
    fr: "Les amortissements sur immobilisations",
    nl: "Afschrijvingen op vaste activa",
    de: "Abschreibungen auf Sachanlagen",
  },
  "Loan interest": {
    fr: "Les intérêts d’emprunt",
    nl: "Rente op leningen",
    de: "Zinsaufwendungen auf Darlehen",
  },
  "Business travel": {
    fr: "Les frais de déplacements professionnels",
    nl: "Zakelijke reis- en vervoerskosten",
    de: "Geschäftsreiseaufwendungen",
  },
  "Employee salaries and benefits": {
    fr: "Les salaires et avantages du personnel",
    nl: "Lonen en voordelen van werknemers",
    de: "Löhne, Gehälter und Mitarbeiterleistungen",
  },
  "Professional fees": {
    fr: "Les honoraires de conseils et prestataires externes",
    nl: "Erelonen van externe professionals",
    de: "Honorare für externe Berater und Dienstleister",
  },
  "Key Belgian Tax Incentives": {
    fr: "Principaux incitants fiscaux belges",
    nl: "Belangrijkste Belgische fiscale incentives",
    de: "Zentrale belgische Steueranreize",
  },
  "Investment Deductions": {
    fr: "Déductions pour investissements",
    nl: "Investeringsaftrekken",
    de: "Investitionsabzüge",
  },
  "Companies can deduct a percentage of eligible investments in technology, equipment, or energy-efficient assets.":
    {
      fr: "Les sociétés peuvent déduire un pourcentage de leurs investissements admissibles en technologies, équipements ou actifs économes en énergie.",
      nl: "Vennootschappen kunnen een percentage aftrekken van in aanmerking komende investeringen in technologie, uitrusting of energie-efficiënte activa.",
      de: "Unternehmen können einen Prozentsatz förderfähiger Investitionen in Technologie, Ausrüstung oder energieeffiziente Anlagen steuerlich abziehen.",
    },
  "R&D Tax Credit": {
    fr: "Crédit d’impôt pour la R&D",
    nl: "Belastingkrediet voor O&O",
    de: "Steuergutschrift für F&E",
  },
  "Offers tax credits for research investments. Unused credits may be refunded or carried forward.":
    {
      fr: "Octroie des crédits d’impôt pour les investissements de recherche. Les crédits non utilisés peuvent être remboursés ou reportés.",
      nl: "Biedt belastingkredieten voor onderzoeksinvesteringen. Onbenutte kredieten kunnen worden terugbetaald of doorgeschoven naar volgende jaren.",
      de: "Gewährt Steuergutschriften für Forschungsinvestitionen. Nicht genutzte Gutschriften können erstattet oder vorgetragen werden.",
    },
  "Innovation Income Deduction (IID)": {
    fr: "Déduction pour revenus d’innovation (DRI)",
    nl: "Aftrek voor innovatie-inkomsten (IIA)",
    de: "Abzug für Innovationsgewinne (Innovation Income Deduction)",
  },
  "Reduces taxes on income derived from patents, copyrighted software, utility models, and other registered innovations.":
    {
      fr: "Réduit l’impôt sur les revenus provenant de brevets, logiciels protégés par le droit d’auteur, modèles d’utilité et autres innovations enregistrées.",
      nl: "Verlaagt de belasting op inkomsten uit octrooien, auteursrechtelijk beschermde software, gebruiksmodellen en andere geregistreerde innovaties.",
      de: "Verringert die Steuerlast auf Einkünfte aus Patenten, urheberrechtlich geschützter Software, Gebrauchsmustern und anderen registrierten Innovationen.",
    },
  "Patent Income Deduction": {
    fr: "Déduction pour revenus de brevets",
    nl: "Aftrek voor octrooi-inkomsten",
    de: "Abzug für Patenteinkünfte",
  },
  "Results in an effective tax rate of 3.75 percent on qualifying patent income.":
    {
      fr: "Aboutit à un taux effectif d’imposition de 3,75 % sur les revenus de brevets admissibles.",
      nl: "Leidt tot een effectief belastingtarief van 3,75 % op in aanmerking komende octrooi-inkomsten.",
      de: "Führt zu einem effektiven Steuersatz von 3,75 % auf begünstigte Patenteinkünfte.",
    },
  "Foreign Tax Credits": {
    fr: "Crédits d’impôt pour impôts étrangers",
    nl: "Belastingkredieten voor buitenlandse bronbelastingen",
    de: "Anrechnung ausländischer Steuern",
  },
  "Allows companies to offset Belgian corporate tax with foreign withholding taxes on royalties, dividends, or interest.":
    {
      fr: "Permettent aux sociétés d’imputer l’impôt belge des sociétés avec les retenues étrangères sur les redevances, dividendes ou intérêts.",
      nl: "Laat vennootschappen toe de Belgische vennootschapsbelasting te compenseren met buitenlandse voorheffingen op royalty’s, dividenden of interesten.",
      de: "Ermöglicht Unternehmen, die belgische Körperschaftsteuer mit ausländischen Quellensteuern auf Lizenzgebühren, Dividenden oder Zinsen zu verrechnen.",
    },
  "Wage Withholding Tax Exemption for R&D Personnel": {
    fr: "Exonération de précompte professionnel pour le personnel de R&D",
    nl: "Vrijstelling van bedrijfsvoorheffing voor O&O-personeel",
    de: "Befreiung von der Lohnsteuer für F&E-Personal",
  },
  "Up to 80 percent exemption on payroll withholding taxes for qualified R&D workers.":
    {
      fr: "Jusqu’à 80 % d’exonération de précompte professionnel sur les salaires des collaborateurs de R&D éligibles.",
      nl: "Tot 80 % vrijstelling van bedrijfsvoorheffing op de lonen van in aanmerking komend O&O-personeel.",
      de: "Bis zu 80 % Befreiung von der Lohnsteuer auf die Gehälter qualifizierter F&E-Mitarbeitender.",
    },
  "Basket Limitation Rule": {
    fr: "Règle de limitation par panier",
    nl: "Basketbeperkingsregel",
    de: "Korbbegrenzungsregel",
  },
  "To prevent excessive use of deductions, Belgium applies basket limitations for profits exceeding 1 million euros.":
    {
      fr: "Afin d’éviter un recours excessif aux déductions, la Belgique applique une limitation par panier pour la partie des bénéfices supérieure à 1 million d’euros.",
      nl: "Om buitensporig gebruik van aftrekken te voorkomen, past België een basketbeperking toe voor winsten boven 1 miljoen euro.",
      de: "Um einen übermäßigen Einsatz von Abzügen zu verhindern, wendet Belgien eine Korbbegrenzung für Gewinne über 1 Million Euro an.",
    },
  "A minimum of 15 percent of profits above the 1 million threshold must be taxable.":
    {
      fr: "Au minimum 15 % des bénéfices supérieurs au seuil de 1 million d’euros doivent rester imposables.",
      nl: "Minstens 15 % van de winst boven de drempel van 1 miljoen euro moet belastbaar blijven.",
      de: "Mindestens 15 % der Gewinne über der Schwelle von 1 Million Euro müssen steuerpflichtig bleiben.",
    },
  "This limitation is expected to revert to previous 70 percent offset rules once global minimum tax frameworks finalize.":
    {
      fr: "Cette limitation devrait revenir aux anciennes règles d’imputation à 70 % une fois que les cadres relatifs à la taxe minimale mondiale seront définitivement arrêtés.",
      nl: "Naar verwachting zal deze beperking opnieuw aansluiten bij de vroegere 70 %-compensatieregels zodra de internationale kaders voor de mondiale minimumbelasting definitief zijn.",
      de: "Es wird erwartet, dass diese Begrenzung wieder an die früheren 70-%-Anrechnungsregeln anknüpft, sobald die globalen Mindestbesteuerungsrahmen vollständig umgesetzt sind.",
    },
  "Capital Gains Taxation in Belgium": {
    fr: "Imposition des plus-values en Belgique",
    nl: "Belasting op meerwaarden in België",
    de: "Besteuerung von Veräußerungsgewinnen in Belgien",
  },
  "Capital gains on assets such as real estate or investments generally follow the standard 25 percent rate. However, Belgium offers favorable treatment for capital gains on shares.":
    {
      fr: "Les plus-values sur des actifs tels que l’immobilier ou certains investissements sont en principe soumises au taux normal de 25 %. La Belgique prévoit toutefois un régime favorable pour les plus-values réalisées sur actions.",
      nl: "Meerwaarden op activa zoals onroerend goed of investeringen worden in de regel belast aan het standaardtarief van 25 %. België biedt echter een gunstige behandeling voor meerwaarden op aandelen.",
      de: "Veräußerungsgewinne auf Vermögenswerte wie Immobilien oder bestimmte Investitionen unterliegen grundsätzlich dem regulären Satz von 25 %. Für Veräußerungsgewinne auf Aktien sieht Belgien jedoch eine begünstigte Behandlung vor.",
    },
  "Capital Gains Exemptions on Share Disposals": {
    fr: "Exonérations de plus-values sur cessions d’actions",
    nl: "Vrijstellingen voor meerwaarden bij de vervreemding van aandelen",
    de: "Steuerbefreiungen für Veräußerungsgewinne aus Aktien",
  },
  "Capital gains on shares may be exempt if:": {
    fr: "Les plus-values sur actions peuvent être exonérées si :",
    nl: "Meerwaarden op aandelen kunnen worden vrijgesteld indien:",
    de: "Veräußerungsgewinne auf Aktien können steuerfrei sein, wenn:",
  },
  "The shares have been held for at least one year": {
    fr: "Les actions sont détenues depuis au moins un an",
    nl: "De aandelen gedurende minstens één jaar in bezit zijn",
    de: "Die Aktien seit mindestens einem Jahr gehalten werden",
  },
  "The subsidiary meets taxation and participation requirements": {
    fr: "La filiale satisfait aux conditions relatives à l’imposition et à la participation",
    nl: "De dochtervennootschap voldoet aan de voorwaarden inzake belastingheffing en deelnemingsniveau",
    de: "Die Beteiligungsgesellschaft die steuerlichen und beteiligungsbezogenen Voraussetzungen erfüllt",
  },
  "The shares qualify under participation exemption rules": {
    fr: "Les actions répondent aux critères du régime d’exonération des participations",
    nl: "De aandelen in aanmerking komen onder de regels van de deelnemingsvrijstelling",
    de: "Die Anteile die Voraussetzungen der Beteiligungsbefreiung erfüllen",
  },
  "These exemptions encourage long-term investment and corporate restructuring.":
    {
      fr: "Ces exonérations encouragent l’investissement à long terme et les opérations de restructuration des entreprises.",
      nl: "Deze vrijstellingen stimuleren langetermijninvesteringen en herstructureringen binnen ondernemingen.",
      de: "Diese Befreiungen fördern langfristige Investitionen und gesellschaftsrechtliche Umstrukturierungen.",
    },
  "Corporate Tax Filing, Compliance, and Deadlines": {
    fr: "Déclaration, conformité et délais en matière d’impôt des sociétés",
    nl: "Aangifte, compliance en termijnen voor de vennootschapsbelasting",
    de: "Abgabe, Compliance und Fristen bei der Körperschaftsteuer",
  },
  "Understanding filing obligations is essential for avoiding penalties and audit triggers.":
    {
      fr: "La bonne compréhension des obligations déclaratives est essentielle pour éviter les sanctions et limiter les risques de contrôle.",
      nl: "Een goed begrip van de aangifteverplichtingen is cruciaal om boetes te vermijden en het risico op controle te beperken.",
      de: "Das Verständnis der Erklärungspflichten ist entscheidend, um Sanktionen zu vermeiden und Prüfungsrisiken zu reduzieren.",
    },
  "Fiscal Year and Filing": {
    fr: "Exercice fiscal et dépôt des déclarations",
    nl: "Boekjaar en aangifte",
    de: "Geschäftsjahr und Steuererklärung",
  },
  "Belgium's fiscal year follows the company's accounting year. Returns must be filed:":
    {
      fr: "En Belgique, l’exercice fiscal suit l’exercice comptable de la société. Les déclarations doivent être déposées :",
      nl: "In België volgt het fiscale boekjaar het boekjaar van de vennootschap. Aangiften moeten worden ingediend:",
      de: "In Belgien entspricht das Steuerjahr in der Regel dem Geschäftsjahr der Gesellschaft. Die Erklärungen sind einzureichen:",
    },
  "Within seven months of the close of the financial year": {
    fr: "Dans les sept mois qui suivent la clôture de l’exercice comptable",
    nl: "Binnen zeven maanden na het einde van het boekjaar",
    de: "Innerhalb von sieben Monaten nach Abschluss des Geschäftsjahres",
  },
  "Or by the official return filing deadline published annually by the Belgian tax authorities":
    {
      fr: "Ou au plus tard à la date officielle de dépôt publiée chaque année par l’administration fiscale belge",
      nl: "Of uiterlijk op de officiële indieningsdatum die jaarlijks door de Belgische belastingadministratie wordt bekendgemaakt",
      de: "Oder bis zu der von der belgischen Steuerverwaltung jährlich veröffentlichten offiziellen Einreichungsfrist",
    },
  "Required Documentation": {
    fr: "Documentation requise",
    nl: "Vereiste documentatie",
    de: "Erforderliche Unterlagen",
  },
  "Companies must maintain:": {
    fr: "Les sociétés doivent conserver notamment :",
    nl: "Vennootschappen moeten onder meer het volgende bijhouden:",
    de: "Unternehmen müssen insbesondere Folgendes vorhalten:",
  },
  "Full financial statements": {
    fr: "Les états financiers complets",
    nl: "Volledige jaarrekeningen",
    de: "Vollständige Jahresabschlüsse",
  },
  "Tax reconciliation statements": {
    fr: "Les tableaux de rapprochement fiscaux",
    nl: "Fiscale reconciliatieoverzichten",
    de: "Steuerliche Überleitungsrechnungen",
  },
  "Transfer pricing documentation (for multinationals)": {
    fr: "La documentation en matière de prix de transfert (pour les groupes multinationaux)",
    nl: "Documentatie inzake transfer pricing (voor multinationale groepen)",
    de: "Verrechnungspreisdokumentation (für multinationale Unternehmensgruppen)",
  },
  "Supporting expense documents": {
    fr: "Les pièces justificatives des charges",
    nl: "Ondersteunende bewijsstukken voor kosten",
    de: "Belege und Nachweise zu Aufwendungen",
  },
  "Payroll records": {
    fr: "Les registres de paie",
    nl: "Loon- en personeelsadministratie",
    de: "Lohn- und Gehaltsunterlagen",
  },
  "Proof of deductions and investment incentives": {
    fr: "Les preuves des déductions et des incitants à l’investissement",
    nl: "Bewijsstukken van aftrekken en investeringsincentives",
    de: "Nachweise für Abzüge und Investitionsanreize",
  },
  "Electronic filing through the Biztax platform is mandatory.": {
    fr: "Le dépôt électronique via la plateforme Biztax est obligatoire.",
    nl: "Elektronische indiening via het Biztax-platform is verplicht.",
    de: "Die elektronische Übermittlung über die Biztax-Plattform ist verpflichtend.",
  },
  Prepayments: {
    fr: "Versements anticipés",
    nl: "Voorafbetalingen",
    de: "Vorauszahlungen",
  },
  "Corporate tax prepayments must be made quarterly. Insufficient prepayments may result in a tax increase on the amount owed.":
    {
      fr: "Des versements anticipés d’impôt des sociétés doivent être effectués trimestriellement. Des versements insuffisants peuvent entraîner une majoration d’impôt sur le solde dû.",
      nl: "Voorafbetalingen van de vennootschapsbelasting moeten per kwartaal worden gedaan. Onvoldoende voorafbetalingen kunnen aanleiding geven tot een belastingverhoging op het verschuldigde bedrag.",
      de: "Vorauszahlungen auf die Körperschaftsteuer sind vierteljährlich zu leisten. Unzureichende Vorauszahlungen können zu einem Steuerzuschlag auf die Restschuld führen.",
    },
  "Corporate Tax Audits in Belgium": {
    fr: "Contrôles en matière d’impôt des sociétés en Belgique",
    nl: "Controles op de vennootschapsbelasting in België",
    de: "Betriebsprüfungen zur Körperschaftsteuer in Belgien",
  },
  "Belgian tax authorities conduct audits to ensure compliance, accuracy, and proper reporting.":
    {
      fr: "L’administration fiscale belge réalise des contrôles afin de s’assurer de la conformité, de l’exactitude des déclarations et de la qualité du reporting.",
      nl: "De Belgische belastingadministratie voert controles uit om compliance, juistheid en correcte rapportering te waarborgen.",
      de: "Die belgischen Steuerbehörden führen Prüfungen durch, um Compliance, Richtigkeit und ordnungsgemäße Berichterstattung sicherzustellen.",
    },
  "Reasons for Audit Selection": {
    fr: "Motifs de sélection pour un contrôle",
    nl: "Redenen voor selectie voor een controle",
    de: "Gründe für die Auswahl zur Betriebsprüfung",
  },
  "Audits occur due to:": {
    fr: "Un contrôle peut être déclenché notamment pour les raisons suivantes :",
    nl: "Controles vinden onder meer plaats omwille van:",
    de: "Prüfungen erfolgen unter anderem aufgrund von:",
  },
  "Random selection": {
    fr: "Sélection aléatoire",
    nl: "Willekeurige selectie",
    de: "Zufallsauswahl",
  },
  "Discrepancies in filings": {
    fr: "Incohérences ou écarts dans les déclarations",
    nl: "Verschillen of onregelmatigheden in aangiften",
    de: "Unstimmigkeiten in den Steuererklärungen",
  },
  "Inconsistencies between VAT, payroll, and corporate tax filings": {
    fr: "Incohérences entre déclarations TVA, données de paie et déclarations d’impôt des sociétés",
    nl: "Inconsistenties tussen btw-aangiften, loonadministratie en aangiften vennootschapsbelasting",
    de: "Abweichungen zwischen Mehrwertsteuer-, Lohn- und Körperschaftsteuererklärungen",
  },
  "Missing or late returns": {
    fr: "Absence de déclarations ou dépôt tardif",
    nl: "Ontbrekende of laattijdige aangiften",
    de: "Fehlende oder verspätet eingereichte Erklärungen",
  },
  "Industry-specific risk factors": {
    fr: "Facteurs de risque propres à certains secteurs",
    nl: "Sectorspecifieke risicofactoren",
    de: "Branchenspezifische Risikofaktoren",
  },
  "Significant increases or decreases in declared profits": {
    fr: "Variations significatives (à la hausse ou à la baisse) des bénéfices déclarés",
    nl: "Aanzienlijke stijgingen of dalingen in de aangegeven winsten",
    de: "Erhebliche Zu- oder Rückgänge bei den erklärten Gewinnen",
  },
  "What Happens During an Audit?": {
    fr: "Que se passe-t-il lors d’un contrôle fiscal ?",
    nl: "Wat gebeurt er tijdens een belastingcontrole?",
    de: "Was geschieht bei einer Betriebsprüfung?",
  },
  "Authorities may review:": {
    fr: "L’administration fiscale peut examiner :",
    nl: "De autoriteiten kunnen onder meer het volgende onderzoeken:",
    de: "Die Behörden können unter anderem Folgendes prüfen:",
  },
  "Financial statements": {
    fr: "États financiers",
    nl: "Jaarrekeningen",
    de: "Jahresabschlüsse",
  },
  "Contracts and agreements": {
    fr: "Contrats et conventions",
    nl: "Contracten en overeenkomsten",
    de: "Verträge und Vereinbarungen",
  },
  "Sales and purchase records": {
    fr: "Registres des ventes et des achats",
    nl: "Verkoop- en aankoopregisters",
    de: "Verkaufs- und Einkaufsaufzeichnungen",
  },
  "Transfer pricing arrangements": {
    fr: "Dispositifs en matière de prix de transfert",
    nl: "Transferpricingregelingen",
    de: "Verrechnungspreisgestaltungen",
  },
  "Deduction justification": {
    fr: "Justificatifs des déductions",
    nl: "Verantwoording van aftrekken",
    de: "Begründung der steuerlichen Abzüge",
  },
  "Cash flow and bank statements": {
    fr: "Flux de trésorerie et relevés bancaires",
    nl: "Cashflow- en bankafschriften",
    de: "Cashflows und Kontoauszüge",
  },
  "If issues are found, tax adjustments and penalties may follow. Companies can challenge or appeal decisions through a structured review process.":
    {
      fr: "En cas d’anomalies, des rectifications d’impôt et des sanctions peuvent être appliquées. Les sociétés peuvent contester ou faire appel des décisions via une procédure de recours structurée.",
      nl: "Wanneer onregelmatigheden worden vastgesteld, kunnen belastingcorrecties en sancties volgen. Vennootschappen kunnen beslissingen betwisten of aanvechten via een gestructureerde beroepsprocedure.",
      de: "Werden Unstimmigkeiten festgestellt, können Steuernachforderungen und Sanktionen folgen. Unternehmen können Entscheidungen über ein strukturiertes Einspruchs- und Beschwerdeverfahren anfechten.",
    },
  "Strategic Considerations for Businesses": {
    fr: "Considérations stratégiques pour les entreprises",
    nl: "Strategische aandachtspunten voor ondernemingen",
    de: "Strategische Überlegungen für Unternehmen",
  },
  "Belgium's corporate tax environment requires:": {
    fr: "L’environnement belge de l’impôt des sociétés exige :",
    nl: "De Belgische omgeving voor de vennootschapsbelasting vereist:",
    de: "Das belgische Umfeld der Körperschaftsteuer erfordert:",
  },
  "Accurate record keeping": {
    fr: "Une tenue de registres rigoureuse",
    nl: "Een nauwkeurige boekhouding en dossieropbouw",
    de: "Eine präzise und vollständige Dokumentation",
  },
  "Timely filing": {
    fr: "Le dépôt ponctuel des déclarations",
    nl: "Tijdige indiening van aangiften",
    de: "Fristgerechte Abgabe der Steuererklärungen",
  },
  "Strong financial controls": {
    fr: "Des contrôles financiers solides",
    nl: "Sterke interne financiële controles",
    de: "Robuste interne Finanzkontrollen",
  },
  "Awareness of incentive eligibility": {
    fr: "Une bonne maîtrise des conditions d’éligibilité aux incitants",
    nl: "Bewustzijn van de voorwaarden om voor fiscale incentives in aanmerking te komen",
    de: "Kenntnis der Voraussetzungen für steuerliche Vergünstigungen",
  },
  "Planning for digital reporting and future tax reforms": {
    fr: "Une anticipation des obligations de reporting digital et des futures réformes fiscales",
    nl: "Planning voor digitale rapportering en toekomstige fiscale hervormingen",
    de: "Vorausschauende Planung in Bezug auf digitale Berichterstattung und künftige Steuerreformen",
  },
  "Companies operating internationally should also consider double tax treaties and withholding tax implications.":
    {
      fr: "Les entreprises actives à l’international doivent également tenir compte des conventions préventives de double imposition et des impacts en matière de retenues à la source.",
      nl: "Ondernemingen die internationaal actief zijn, moeten ook rekening houden met dubbelbelastingverdragen en de impact van bronbelastingen.",
      de: "International tätige Unternehmen sollten zudem Doppelbesteuerungsabkommen und die Auswirkungen von Quellensteuern berücksichtigen.",
    },
  "Final Takeaways": {
    fr: "Points clés à retenir",
    nl: "Belangrijkste aandachtspunten",
    de: "Wesentliche Erkenntnisse",
  },
  "Standard corporate tax rate: 25 percent": {
    fr: "Taux standard de l’impôt des sociétés : 25 %",
    nl: "Standaardtarief vennootschapsbelasting: 25 %",
    de: "Standard-Körperschaftsteuersatz: 25 %",
  },
  "Reduced SME rate: 20 percent on first 100,000 euros": {
    fr: "Taux réduit PME : 20 % sur les premiers 100 000 euros",
    nl: "Verlaagd kmo-tarief: 20 % op de eerste 100.000 euro",
    de: "Ermäßigter KMU-Satz: 20 % auf die ersten 100.000 Euro",
  },
  "Attractive incentives for R&D, innovation, and capital investments": {
    fr: "Des incitants attractifs pour la R&D, l’innovation et les investissements en capital",
    nl: "Aantrekkelijke incentives voor O&O, innovatie en kapitaalinvesteringen",
    de: "Attraktive Anreize für F&E, Innovation und Sachinvestitionen",
  },
  "Capital gains exemptions available under specific conditions": {
    fr: "Des exonérations de plus-values disponibles sous certaines conditions",
    nl: "Vrijstellingen voor meerwaarden onder specifieke voorwaarden",
    de: "Steuerbefreiungen für Veräußerungsgewinne unter bestimmten Voraussetzungen",
  },
  "Digital reporting and documentation requirements continue to increase": {
    fr: "Les exigences en matière de reporting digital et de documentation continuent de se renforcer",
    nl: "De vereisten rond digitale rapportering en documentatie nemen verder toe",
    de: "Die Anforderungen an digitale Berichterstattung und Dokumentation nehmen weiter zu",
  },
  "Audits may occur, especially where filings show inconsistencies": {
    fr: "Des contrôles peuvent intervenir, en particulier lorsque les déclarations présentent des incohérences",
    nl: "Controles kunnen plaatsvinden, vooral wanneer aangiften inconsistenties vertonen",
    de: "Prüfungen können insbesondere dann erfolgen, wenn Erklärungen Unstimmigkeiten aufweisen",
  },
  "Belgium's mix of competitive tax rates, innovation incentives, and expanding digital compliance expectations makes it vital for businesses to stay organized, informed, and proactive.":
    {
      fr: "La combinaison de taux d’imposition compétitifs, d’incitants à l’innovation et d’exigences croissantes en matière de conformité digitale rend essentiel pour les entreprises de rester organisées, bien informées et proactives.",
      nl: "Door de mix van competitieve belastingtarieven, innovatie-incentives en toenemende digitale complianceverplichtingen is het voor ondernemingen cruciaal om georganiseerd, goed geïnformeerd en proactief te blijven.",
      de: "Angesichts der Kombination aus wettbewerbsfähigen Steuersätzen, Innovationsanreizen und zunehmenden digitalen Compliance-Anforderungen ist es für Unternehmen entscheidend, organisiert, informiert und vorausschauend zu agieren.",
    },

  "Belgium's corporate tax landscape offers both opportunities and responsibilities for businesses. While companies face a 25 percent standard rate and strict compliance requirements, the system also provides substantial benefits through innovation income deductions, R&D incentives, capital gains exemptions, and SME rebates. Businesses that maintain strong financial governance and leverage available incentives can optimize their tax position and support long-term growth.":
    {
      fr: "Le paysage belge de l’impôt des sociétés présente à la fois des opportunités et des responsabilités pour les entreprises. Si les sociétés sont soumises à un taux standard de 25 % et à des exigences strictes de conformité, le système offre également des avantages substantiels via les déductions pour revenus d’innovation, les incitants R&D, les exonérations de plus-values et les régimes préférentiels pour les PME. Les entreprises qui maintiennent une gouvernance financière solide et exploitent pleinement les incitants disponibles peuvent optimiser leur position fiscale et soutenir leur croissance à long terme.",
      nl: "Het Belgische landschap van de vennootschapsbelasting biedt zowel kansen als verantwoordelijkheden voor ondernemingen. Hoewel bedrijven geconfronteerd worden met een standaardtarief van 25 % en strikte complianceregels, voorziet het systeem ook in aanzienlijke voordelen via aftrekken voor innovatie-inkomsten, O&O-incentives, vrijstellingen op meerwaarden en kmo-voordelen. Ondernemingen die een sterke financiële governance aanhouden en de beschikbare incentives optimaal benutten, kunnen hun fiscale positie optimaliseren en hun langetermijngroei ondersteunen.",
      de: "Die belgische Körperschaftsteuerlandschaft schafft für Unternehmen sowohl Chancen als auch Pflichten. Trotz eines Standardsatzes von 25 % und strenger Compliance-Vorgaben bietet das System erhebliche Vorteile durch Abzüge für Innovationsgewinne, F&E-Anreize, Befreiungen für Veräußerungsgewinne sowie KMU-Erleichterungen. Unternehmen, die eine starke Finanz-Governance etablieren und verfügbare Anreize aktiv nutzen, können ihre Steuerposition optimieren und ihr langfristiges Wachstum unterstützen.",
    },
  "As tax rules evolve and digital reporting becomes more integrated into corporate compliance, many companies are adopting platforms that streamline financial operations and ensure accuracy across accounting, invoicing, and regulatory reporting. Solutions like Accqrate, which support synchronized financial data and structured reporting workflows, can help organizations remain compliant while improving efficiency and transparency in their corporate tax processes.":
    {
      fr: "À mesure que les règles fiscales évoluent et que le reporting digital s’intègre davantage dans la conformité des entreprises, de nombreuses sociétés adoptent des plateformes qui rationalisent les opérations financières et garantissent l’exactitude de la comptabilité, de la facturation et du reporting réglementaire. Des solutions comme Accqrate, qui prennent en charge des données financières synchronisées et des workflows de reporting structurés, aident les organisations à rester conformes tout en améliorant l’efficacité et la transparence de leurs processus d’impôt des sociétés.",
      nl: "Naarmate de fiscale regels evolueren en digitale rapportering een belangrijker onderdeel wordt van corporate compliance, kiezen veel ondernemingen voor platforms die de financiële processen stroomlijnen en nauwkeurigheid waarborgen in boekhouding, facturatie en regelgevende rapportering. Oplossingen zoals Accqrate, die gesynchroniseerde financiële data en gestructureerde rapporteringsworkflows ondersteunen, helpen organisaties om compliant te blijven terwijl zij de efficiëntie en transparantie van hun processen rond vennootschapsbelasting verhogen.",
      de: "Mit der Weiterentwicklung der Steuervorschriften und der stärkeren Verankerung digitaler Berichterstattung in der Unternehmens-Compliance setzen viele Unternehmen auf Plattformen, die Finanzprozesse verschlanken und Genauigkeit in Buchhaltung, Fakturierung und regulatorischem Reporting sicherstellen. Lösungen wie Accqrate, die synchronisierte Finanzdaten und strukturierte Reporting-Workflows unterstützen, helfen Organisationen, compliant zu bleiben und gleichzeitig Effizienz und Transparenz in ihren Körperschaftsteuerprozessen zu verbessern.",
    },

  //Belgium Tax System 2025: A Comprehensive Guide to Tax Types, Rates, Filing Responsibilities and Key Compliance Requirements

  "Belgium Tax System 2025: A Comprehensive Guide to Tax Types, Rates, Filing Responsibilities and Key Compliance Requirements":
    {
      fr: "Système fiscal belge 2025 : guide complet des types d’impôts, des taux, des obligations déclaratives et des principales exigences de conformité",
      nl: "Belgisch belastingsysteem 2025: een uitgebreide gids over belastingsoorten, tarieven, aangifteverplichtingen en kernvereisten voor compliance",
      de: "Belgisches Steuersystem 2025: Umfassender Leitfaden zu Steuerarten, Steuersätzen, Erklärungspflichten und zentralen Compliance-Anforderungen",
    },
  "Updated On : Nov 25th, 2024 | 28 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 28 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 28 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | Lesezeit 28 Minuten",
  },
  "Belgium's tax structure is one of the most detailed in the EU, combining federal, regional and municipal tax layers. Every individual or business operating in Belgium interacts with some part of this system, whether through income taxes, corporate taxes, VAT, social security contributions, or specific product and environmental levies.":
    {
      fr: "La structure fiscale de la Belgique compte parmi les plus détaillées de l’UE et combine des niveaux d’imposition fédéral, régional et communal. Chaque particulier ou entreprise opérant en Belgique est concerné par une partie de ce système, que ce soit via l’impôt sur le revenu, l’impôt des sociétés, la TVA, les cotisations de sécurité sociale ou des taxes spécifiques sur certains produits et sur l’environnement.",
      nl: "De Belgische fiscale structuur is een van de meest gedetailleerde in de EU en combineert federale, regionale en gemeentelijke belastingsniveaus. Elke particulier of onderneming die in België actief is, komt met dit systeem in aanraking, via onder meer personenbelasting, vennootschapsbelasting, btw, socialezekerheidsbijdragen of specifieke product- en milieubelastingen.",
      de: "Die belgische Steuerstruktur zählt zu den detailliertesten in der EU und umfasst föderale, regionale und kommunale Ebenen. Jede Person oder jedes Unternehmen, das in Belgien tätig ist, berührt Teile dieses Systems – sei es durch Einkommensteuer, Körperschaftsteuer, Mehrwertsteuer, Sozialversicherungsbeiträge oder spezifische Produkt- und Umweltabgaben.",
    },
  "This guide reorganizes Belgium's tax framework into a clear, comprehensive structure that explains how taxes work, who pays them, and what taxpayers should expect in 2025.":
    {
      fr: "Le présent guide réorganise le cadre fiscal belge dans une structure claire et complète qui explique le fonctionnement des impôts, qui les paie et ce à quoi les contribuables doivent s’attendre en 2025.",
      nl: "Deze gids herstructureert het Belgische fiscale kader in een duidelijk en volledig overzicht dat uitlegt hoe belastingen werken, wie ze betaalt en wat belastingplichtigen in 2025 mogen verwachten.",
      de: "Dieser Leitfaden ordnet das belgische Steuersystem in eine klare, umfassende Struktur ein, erklärt, wie die einzelnen Steuern funktionieren, wer sie bezahlt und womit Steuerpflichtige 2025 rechnen sollten.",
    },
  "How Belgium's Tax System Is Structured": {
    fr: "Structure du système fiscal belge",
    nl: "Hoe het Belgische belastingsysteem is opgebouwd",
    de: "Aufbau des belgischen Steuersystems",
  },
  "Belgium's taxes fall under three administrative levels:": {
    fr: "Les impôts en Belgique se répartissent sur trois niveaux administratifs :",
    nl: "De Belgische belastingen worden beheerd op drie administratieve niveaus:",
    de: "Die Steuern in Belgien gliedern sich auf drei Verwaltungsebenen:",
  },
  Federal: {
    fr: "Fédéral",
    nl: "Federaal",
    de: "Föderal",
  },
  "Income tax, corporate tax, VAT, excise duties, and social security.": {
    fr: "Impôt des personnes physiques, impôt des sociétés, TVA, accises et sécurité sociale.",
    nl: "Personenbelasting, vennootschapsbelasting, btw, accijnzen en sociale zekerheid.",
    de: "Einkommensteuer, Körperschaftsteuer, Mehrwertsteuer, Verbrauchsteuern und Sozialversicherung.",
  },
  "Regional (Flanders, Wallonia, Brussels)": {
    fr: "Régional (Flandre, Wallonie, Bruxelles)",
    nl: "Gewestelijk (Vlaanderen, Wallonië, Brussel)",
    de: "Regional (Flandern, Wallonien, Brüssel)",
  },
  "Environmental taxes, vehicle taxes, property-related rules.": {
    fr: "Taxes environnementales, taxes sur les véhicules, règles liées aux biens immobiliers.",
    nl: "Milieubelastingen, voertuigbelastingen en vastgoedgerelateerde regels.",
    de: "Umweltabgaben, Kfz-Steuern und grundstücksbezogene Regelungen.",
  },
  Municipal: {
    fr: "Communal",
    nl: "Gemeentelijk",
    de: "Kommunal",
  },
  "Local surtaxes, service-related fees, waste and tourism taxes.": {
    fr: "Centimes additionnels locaux, redevances liées aux services, taxes sur les déchets et le tourisme.",
    nl: "Lokale opcentiemen, dienstengerelateerde heffingen, afval- en toeristentaksen.",
    de: "Lokale Zuschläge, gebührenbezogene Abgaben sowie Abfall- und Tourismussteuern.",
  },
  "Taxes are further divided into direct taxes (income, corporate profits, property) and indirect taxes (VAT, excise duties, environmental levies, customs duties).":
    {
      fr: "Les impôts se répartissent en impôts directs (revenus, bénéfices des sociétés, patrimoine immobilier) et impôts indirects (TVA, accises, taxes environnementales, droits de douane).",
      nl: "Belastingen worden verder onderverdeeld in directe belastingen (inkomen, vennootschapswinsten, onroerend goed) en indirecte belastingen (btw, accijnzen, milieutaksen, douanerechten).",
      de: "Darüber hinaus unterscheidet Belgien zwischen direkten Steuern (Einkommen, Unternehmensgewinne, Vermögen) und indirekten Steuern (Mehrwertsteuer, Verbrauchsteuern, Umweltabgaben, Zölle).",
    },
  "Overview of Major Taxes in Belgium (2025 Snapshot)": {
    fr: "Vue d’ensemble des principaux impôts en Belgique (aperçu 2025)",
    nl: "Overzicht van de belangrijkste belastingen in België (situatie 2025)",
    de: "Überblick über die wichtigsten Steuern in Belgien (Stand 2025)",
  },
  "Key Belgian Taxes at a Glance": {
    fr: "Principaux impôts belges en un coup d’œil",
    nl: "Belangrijkste Belgische belastingen in één oogopslag",
    de: "Zentrale belgische Steuern im Überblick",
  },
  "Personal Income Tax": {
    fr: "Impôt des personnes physiques",
    nl: "Personenbelasting",
    de: "Einkommensteuer",
  },
  "25% to 50%": {
    fr: "25 % à 50 %",
    nl: "25 % tot 50 %",
    de: "25 % bis 50 %",
  },
  "Residents and Belgian-income earners": {
    fr: "Résidents et personnes percevant des revenus de source belge",
    nl: "Inwoners en personen met Belgische inkomsten",
    de: "Ansässige Steuerpflichtige und Personen mit Einkünften aus Belgien",
  },
  "Income from salaries, rentals, investments, pensions": {
    fr: "Revenus provenant des salaires, loyers, placements et pensions",
    nl: "Inkomsten uit lonen, huur, beleggingen en pensioenen",
    de: "Einkünfte aus Löhnen, Vermietung, Kapitalanlagen und Renten",
  },
  "Corporate Tax": {
    fr: "Impôt des sociétés",
    nl: "Vennootschapsbelasting",
    de: "Körperschaftsteuer",
  },
  "25% standard; 20% for SMEs": {
    fr: "25 % standard ; 20 % pour les PME",
    nl: "25 % standaard; 20 % voor kmo’s",
    de: "25 % Standard; 20 % für KMU",
  },
  "Belgian companies, foreign entities with Belgian activity": {
    fr: "Sociétés belges, entités étrangères exerçant une activité en Belgique",
    nl: "Belgische vennootschappen, buitenlandse entiteiten met activiteiten in België",
    de: "Belgische Unternehmen und ausländische Gesellschaften mit Aktivitäten in Belgien",
  },
  "Profit generated in Belgium": {
    fr: "Bénéfices générés en Belgique",
    nl: "Winst die in België wordt gegenereerd",
    de: "In Belgien erzielte Gewinne",
  },
  VAT: {
    fr: "TVA",
    nl: "Btw",
    de: "Mehrwertsteuer (MwSt)",
  },
  "21%, 12%, 6%": {
    fr: "21 %, 12 %, 6 %",
    nl: "21 %, 12 %, 6 %",
    de: "21 %, 12 %, 6 %",
  },
  "Consumers (collected by businesses)": {
    fr: "Consommateurs (taxe perçue par les entreprises)",
    nl: "Consumenten (geïnd door ondernemingen)",
    de: "Verbraucher (von Unternehmen eingehoben)",
  },
  "Goods and services sold in Belgium": {
    fr: "Biens et services vendus en Belgique",
    nl: "Goederen en diensten die in België worden verkocht",
    de: "In Belgien verkaufte Waren und Dienstleistungen",
  },
  "Social Security": {
    fr: "Sécurité sociale",
    nl: "Sociale zekerheid",
    de: "Sozialversicherung",
  },
  "13.07% employee, approx. 27% employer": {
    fr: "13,07 % pour le travailleur, env. 27 % pour l’employeur",
    nl: "13,07 % werknemer, ca. 27 % werkgever",
    de: "13,07 % Arbeitnehmeranteil, ca. 27 % Arbeitgeberanteil",
  },
  "Employees and employers": {
    fr: "Travailleurs et employeurs",
    nl: "Werknemers en werkgevers",
    de: "Arbeitnehmende und Arbeitgebende",
  },
  "Healthcare, pensions, unemployment, family allowances": {
    fr: "Soins de santé, pensions, chômage, allocations familiales",
    nl: "Gezondheidszorg, pensioenen, werkloosheid, gezinsbijslagen",
    de: "Gesundheitsversorgung, Renten, Arbeitslosigkeit, Familienleistungen",
  },
  "Municipal Surtax": {
    fr: "Centimes additionnels communaux",
    nl: "Gemeentelijke opcentiemen",
    de: "Kommunaler Zuschlag zur Einkommensteuer",
  },
  "About 7% to 9% of income tax": {
    fr: "Environ 7 % à 9 % de l’impôt sur le revenu",
    nl: "Ongeveer 7 % tot 9 % van de personenbelasting",
    de: "Rund 7 % bis 9 % der Einkommensteuer",
  },
  "Local residents": {
    fr: "Résidents de la commune",
    nl: "Lokale inwoners",
    de: "Örtliche Steuerpflichtige",
  },
  "Funds municipal services": {
    fr: "Financement des services communaux",
    nl: "Financiering van gemeentelijke diensten",
    de: "Finanzierung kommunaler Dienstleistungen",
  },
  "Excise Duties": {
    fr: "Droits d’accise",
    nl: "Accijnzen",
    de: "Verbrauchsteuern (Akzisen)",
  },
  "Product-specific": {
    fr: "Spécifiques aux produits",
    nl: "Productgebonden",
    de: "Produktspezifisch",
  },
  Consumers: {
    fr: "Consommateurs",
    nl: "Consumenten",
    de: "Verbraucher",
  },
  "Alcohol, tobacco, fuel, coffee, energy drinks": {
    fr: "Alcool, tabac, carburants, café, boissons énergétiques",
    nl: "Alcohol, tabak, brandstoffen, koffie, energiedranken",
    de: "Alkohol, Tabak, Kraftstoffe, Kaffee, Energy-Drinks",
  },
  "Property Tax": {
    fr: "Précompte immobilier",
    nl: "Onroerende voorheffing",
    de: "Grundsteuer",
  },
  "Municipality-based": {
    fr: "Déterminé au niveau communal",
    nl: "Afhankelijk van de gemeente",
    de: "Gemeindeabhängig",
  },
  "Real estate owners": {
    fr: "Propriétaires de biens immobiliers",
    nl: "Eigenaars van onroerend goed",
    de: "Eigentümer von Immobilien",
  },
  "Cadastral income of buildings and land": {
    fr: "Revenu cadastral des bâtiments et terrains",
    nl: "Kadastraal inkomen van gebouwen en gronden",
    de: "Katastraleinkommen von Gebäuden und Grundstücken",
  },
  "Customs Duties": {
    fr: "Droits de douane",
    nl: "Douanerechten",
    de: "Zölle",
  },
  Varies: {
    fr: "Variable",
    nl: "Variabel",
    de: "Variabel",
  },
  Importers: {
    fr: "Importateurs",
    nl: "Importeurs",
    de: "Importeure",
  },
  "Goods imported into Belgium and the EU": {
    fr: "Marchandises importées en Belgique et dans l’UE",
    nl: "Goederen die in België en de EU worden ingevoerd",
    de: "In Belgien und in die EU eingeführte Waren",
  },
  "Environmental Taxes": {
    fr: "Taxes environnementales",
    nl: "Milieubelastingen",
    de: "Umweltsteuern",
  },
  "Varies by region": {
    fr: "Variables selon la région",
    nl: "Verschillend per gewest",
    de: "Je nach Region unterschiedlich",
  },
  "Businesses and consumers": {
    fr: "Entreprises et consommateurs",
    nl: "Ondernemingen en consumenten",
    de: "Unternehmen und Verbraucher",
  },
  "Pollution, fuel consumption, waste, emissions": {
    fr: "Pollution, consommation de carburant, déchets, émissions",
    nl: "Verontreiniging, brandstofverbruik, afval, uitstoot",
    de: "Verschmutzung, Kraftstoffverbrauch, Abfall, Emissionen",
  },
  "Direct Taxation in Belgium": {
    fr: "Fiscalité directe en Belgique",
    nl: "Directe belastingen in België",
    de: "Direkte Besteuerung in Belgien",
  },
  
  "Belgium uses a progressive tax system. Residents pay tax on worldwide income, while non-residents pay tax only on Belgian-sourced income such as employment income, rental income, or certain Belgian capital gains.":
    {
      fr: "La Belgique applique un système d’imposition progressif. Les résidents sont imposés sur leurs revenus mondiaux, tandis que les non-résidents ne sont imposés que sur leurs revenus de source belge, tels que les revenus professionnels, locatifs ou certaines plus-values belges.",
      nl: "België hanteert een progressief belastingsysteem. Inwoners betalen belasting op hun wereldwijde inkomen, terwijl niet-inwoners enkel worden belast op inkomsten van Belgische oorsprong, zoals beroepsinkomsten, huurinkomsten of bepaalde Belgische meerwaarden.",
      de: "Belgien verwendet ein progressives Steuersystem. Ansässige zahlen auf ihr weltweites Einkommen, während Nichtansässige nur auf Einkünfte aus belgischer Quelle – etwa Arbeitslohn, Miete oder bestimmte belgische Veräußerungsgewinne – besteuert werden.",
    },
  "2025 Income Tax Brackets": {
    fr: "Barèmes de l’impôt sur le revenu 2025",
    nl: "Inkomstenbelastingschijven 2025",
    de: "Einkommensteuertarif 2025",
  },
  "Up to 15,820 euros": {
    fr: "Jusqu’à 15 820 euros",
    nl: "Tot 15.820 euro",
    de: "Bis 15.820 Euro",
  },
  "25%": {
    fr: "25 %",
    nl: "25 %",
    de: "25 %",
  },
  "15,820 to 27,920 euros": {
    fr: "De 15 820 à 27 920 euros",
    nl: "Van 15.820 tot 27.920 euro",
    de: "15.820 bis 27.920 Euro",
  },
  "40%": {
    fr: "40 %",
    nl: "40 %",
    de: "40 %",
  },
  "27,920 to 48,320 euros": {
    fr: "De 27 920 à 48 320 euros",
    nl: "Van 27.920 tot 48.320 euro",
    de: "27.920 bis 48.320 Euro",
  },
  "45%": {
    fr: "45 %",
    nl: "45 %",
    de: "45 %",
  },
  "Above 48,320 euros": {
    fr: "Au-delà de 48 320 euros",
    nl: "Boven 48.320 euro",
    de: "Über 48.320 Euro",
  },
  "50%": {
    fr: "50 %",
    nl: "50 %",
    de: "50 %",
  },
  "Income categories include:": {
    fr: "Les catégories de revenus comprennent :",
    nl: "Inkomenscategorieën omvatten onder meer:",
    de: "Zu den Einkommenskategorien zählen unter anderem:",
  },
  "Employment income": {
    fr: "Revenus professionnels salariés",
    nl: "Looninkomsten",
    de: "Einkünfte aus unselbständiger Arbeit",
  },
  "Professional income": {
    fr: "Revenus professionnels indépendants",
    nl: "Beroepsinkomsten",
    de: "Einkünfte aus selbständiger Tätigkeit",
  },
  Pensions: {
    fr: "Pensions",
    nl: "Pensioenen",
    de: "Renten und Pensionen",
  },
  "Investment income": {
    fr: "Revenus de placement",
    nl: "Beleggingsinkomsten",
    de: "Kapitalerträge",
  },
  "Rental income": {
    fr: "Revenus locatifs",
    nl: "Huurinkomsten",
    de: "Mieteinkünfte",
  },
  "Miscellaneous taxable income": {
    fr: "Autres revenus imposables",
    nl: "Diverse belastbare inkomsten",
    de: "Sonstige steuerpflichtige Einkünfte",
  },
  "Taxpayers must file annually through Tax-on-Web unless exemptions apply.": {
    fr: "Les contribuables doivent introduire une déclaration annuelle via Tax-on-Web, sauf si une dispense spécifique s’applique.",
    nl: "Belastingplichtigen moeten jaarlijks aangifte doen via Tax-on-Web, tenzij een specifieke vrijstelling van toepassing is.",
    de: "Steuerpflichtige müssen ihre Steuererklärung grundsätzlich jährlich über Tax-on-Web einreichen, sofern keine Ausnahmeregelung greift.",
  },

  "Corporate tax is levied on profits of companies with activities in Belgium.":
    {
      fr: "L’impôt des sociétés est prélevé sur les bénéfices des entreprises exerçant des activités en Belgique.",
      nl: "De vennootschapsbelasting wordt geheven op de winsten van vennootschappen met activiteiten in België.",
      de: "Die Körperschaftsteuer wird auf die Gewinne von Unternehmen mit Tätigkeiten in Belgien erhoben.",
    },
  "Corporate Tax Structure (2025)": {
    fr: "Structure de l’impôt des sociétés (2025)",
    nl: "Structuur van de vennootschapsbelasting (2025)",
    de: "Struktur der Körperschaftsteuer (2025)",
  },
  "Standard corporations": {
    fr: "Sociétés ordinaires",
    nl: "Gewone vennootschappen",
    de: "Standardkapitalgesellschaften",
  },
 
  SMEs: {
    fr: "PME",
    nl: "Kmo’s",
    de: "KMU",
  },
  "20% on first 100,000 euros; 25% thereafter": {
    fr: "20 % sur les premiers 100 000 euros ; 25 % au-delà",
    nl: "20 % op de eerste 100.000 euro; 25 % daarboven",
    de: "20 % auf die ersten 100.000 Euro; danach 25 %",
  },
  "SME eligibility includes:": {
    fr: "Les conditions d’éligibilité au statut de PME comprennent :",
    nl: "Voor kmo-eligibiliteit gelden onder meer:",
    de: "Für die Einstufung als KMU gelten unter anderem:",
  },
  "Meeting Belgium's SME definition": {
    fr: "Respect de la définition belge de la PME",
    nl: "Voldoen aan de Belgische definitie van een kmo",
    de: "Erfüllung der belgischen KMU-Definition",
  },
  "Employing at least one full-time worker": {
    fr: "Employer au moins un travailleur à temps plein",
    nl: "Minstens één voltijdse werknemer in dienst hebben",
    de: "Beschäftigung von mindestens einem vollzeitbeschäftigten Mitarbeiter",
  },
  "Not being exempt from corporate tax": {
    fr: "Ne pas bénéficier d’une exonération de l’impôt des sociétés",
    nl: "Niet zijn vrijgesteld van vennootschapsbelasting",
    de: "Keine Befreiung von der Körperschaftsteuer",
  },
  "Additional Corporate Incentives": {
    fr: "Incitants supplémentaires pour les sociétés",
    nl: "Aanvullende incentives voor vennootschappen",
    de: "Zusätzliche steuerliche Anreize für Unternehmen",
  },
  "Belgium provides notable deductions such as:": {
    fr: "La Belgique offre des déductions notables, notamment :",
    nl: "België voorziet in belangrijke aftrekken, zoals:",
    de: "Belgien gewährt bedeutende Abzugsmöglichkeiten, unter anderem:",
  },
  "R&D tax credits": {
    fr: "Crédits d’impôt pour la R&D",
    nl: "Belastingkredieten voor O&O",
    de: "Steuergutschriften für F&E",
  },
  "Innovation income deduction": {
    fr: "Déduction pour revenus d’innovation",
    nl: "Aftrek voor innovatie-inkomsten",
    de: "Abzug für Innovationsgewinne",
  },
  "Investment allowances": {
    fr: "Déductions pour investissements",
    nl: "Investeringsaftrekken",
    de: "Investitionszulagen bzw. -abzüge",
  },
  "Payroll tax exemptions for scientific personnel": {
    fr: "Exonérations de précompte professionnel pour le personnel scientifique",
    nl: "Vrijstellingen van bedrijfsvoorheffing voor wetenschappelijk personeel",
    de: "Lohnsteuerbefreiungen für wissenschaftliches Personal",
  },
  "Capital gains exemptions on qualifying share disposals": {
    fr: "Exonérations de plus-values sur cessions d’actions admissibles",
    nl: "Vrijstellingen op meerwaarden bij kwalificerende aandelenverkopen",
    de: "Steuerbefreiungen für Veräußerungsgewinne aus qualifizierten Anteilsverkäufen",
  },
  "These measures make Belgium an attractive environment for research-intensive and technology-driven companies.":
    {
      fr: "Ces mesures font de la Belgique un environnement attractif pour les entreprises à forte intensité de recherche et orientées technologie.",
      nl: "Deze maatregelen maken België tot een aantrekkelijke locatie voor onderzoekintensieve en technologiegedreven ondernemingen.",
      de: "Diese Maßnahmen machen Belgien zu einem attraktiven Standort für forschungsintensive und technologieorientierte Unternehmen.",
    },
  "Municipal-Level Taxes": {
    fr: "Fiscalité au niveau communal",
    nl: "Belastingen op gemeentelijk niveau",
    de: "Steuern auf Gemeindeebene",
  },
  "Municipalities levy their own taxes and service charges, which vary widely across regions.":
    {
      fr: "Les communes prélèvent leurs propres taxes et redevances de services, avec des niveaux qui varient fortement d’une région à l’autre.",
      nl: "Gemeenten heffen hun eigen belastingen en dienstheffingen, die sterk kunnen verschillen per regio.",
      de: "Die Gemeinden erheben eigene Steuern und Entgelte für Dienstleistungen, deren Höhe je nach Region stark variiert.",
    },
  "Common Municipal Charges": {
    fr: "Principales taxes communales",
    nl: "Veelvoorkomende gemeentelijke heffingen",
    de: "Typische kommunale Abgaben",
  },
  "Income surtax": {
    fr: "Centimes additionnels sur l’impôt sur le revenu",
    nl: "Opcentiemen op de inkomstenbelasting",
    de: "Zuschlag auf die Einkommensteuer",
  },
  "Municipal revenue for local services": {
    fr: "Recette communale destinée au financement des services locaux",
    nl: "Gemeentelijke inkomsten ter financiering van lokale diensten",
    de: "Einnahmen zur Finanzierung kommunaler Dienstleistungen",
  },
  "Waste collection fees": {
    fr: "Redevances de collecte des déchets",
    nl: "Afvalinzamelingskosten",
    de: "Gebühren für die Abfallentsorgung",
  },
  "Garbage management and recycling": {
    fr: "Gestion des déchets et recyclage",
    nl: "Afvalbeheer en recyclage",
    de: "Abfallbewirtschaftung und Recycling",
  },
  "Property-related taxes": {
    fr: "Taxes liées aux biens immobiliers",
    nl: "Vastgoedgerelateerde belastingen",
    de: "Immobilienbezogene Abgaben",
  },
  "Public utilities and maintenance": {
    fr: "Services publics et entretien des infrastructures",
    nl: "Openbare nutsvoorzieningen en onderhoud",
    de: "Öffentliche Versorgungsleistungen und Instandhaltung",
  },
  "Advertising and signage tax": {
    fr: "Taxe sur la publicité et l’affichage",
    nl: "Belasting op reclame en uithangborden",
    de: "Steuer auf Werbung und Außenbeschilderung",
  },
  "Regulation of outdoor advertising": {
    fr: "Encadrement de la publicité extérieure",
    nl: "Regulering van buitenreclame",
    de: "Regulierung von Außenwerbung",
  },
  "Tourism taxes": {
    fr: "Taxes de séjour",
    nl: "Toeristentaksen",
    de: "Kurtaxen / Tourismusabgaben",
  },
  "Hotel stays and short-term lodging": {
    fr: "Séjours à l’hôtel et hébergements de courte durée",
    nl: "Hotelverblijven en kortetermijnlogies",
    de: "Hotelaufenthalte und kurzfristige Beherbergung",
  },
  "Rates differ by municipality and should be verified locally.": {
    fr: "Les taux varient selon la commune et doivent être vérifiés au niveau local.",
    nl: "De tarieven verschillen per gemeente en moeten lokaal worden nagegaan.",
    de: "Die Sätze unterscheiden sich von Gemeinde zu Gemeinde und sollten lokal geprüft werden.",
  },
  "Social Security Contributions": {
    fr: "Cotisations de sécurité sociale",
    nl: "Socialezekerheidsbijdragen",
    de: "Sozialversicherungsbeiträge",
  },
  "Belgium's social security system funds critical national programs such as healthcare, pensions, employment benefits and family allowances.":
    {
      fr: "Le système de sécurité sociale belge finance des programmes nationaux essentiels tels que les soins de santé, les pensions, les allocations de chômage et les prestations familiales.",
      nl: "Het Belgische socialezekerheidsstelsel financiert cruciale nationale programma’s zoals gezondheidszorg, pensioenen, werkloosheidsuitkeringen en gezinsbijslagen.",
      de: "Das belgische Sozialversicherungssystem finanziert zentrale staatliche Programme wie Gesundheitsversorgung, Renten, Arbeitslosenleistungen und Familienbeihilfen.",
    },
  "Contribution Structure": {
    fr: "Structure des cotisations",
    nl: "Bijdragestructuur",
    de: "Beitragsstruktur",
  },
  Employee: {
    fr: "Travailleur",
    nl: "Werknemer",
    de: "Arbeitnehmer",
  },
  "13.07%": {
    fr: "13,07 %",
    nl: "13,07 %",
    de: "13,07 %",
  },
  "Healthcare, pension, unemployment": {
    fr: "Soins de santé, pension, chômage",
    nl: "Gezondheidszorg, pensioen, werkloosheid",
    de: "Gesundheitsversorgung, Rente, Arbeitslosigkeit",
  },
  Employer: {
    fr: "Employeur",
    nl: "Werkgever",
    de: "Arbeitgeber",
  },
  "Around 27%": {
    fr: "Environ 27 %",
    nl: "Ongeveer 27 %",
    de: "Rund 27 %",
  },
  "Social protections and employer-based obligations": {
    fr: "Protections sociales et obligations à charge de l’employeur",
    nl: "Sociale bescherming en verplichtingen ten laste van de werkgever",
    de: "Sozialschutz und arbeitgeberseitige Verpflichtungen",
  },
  "These contributions are deducted directly from payroll.": {
    fr: "Ces cotisations sont prélevées directement sur la paie.",
    nl: "Deze bijdragen worden rechtstreeks via de loonlijst ingehouden.",
    de: "Diese Beiträge werden direkt über die Lohnabrechnung einbehalten.",
  },
  "Indirect Taxes": {
    fr: "Fiscalité indirecte",
    nl: "Indirecte belastingen",
    de: "Indirekte Steuern",
  },

  "VAT applies to most goods and services purchased in Belgium.": {
    fr: "La TVA s’applique à la plupart des biens et services achetés en Belgique.",
    nl: "Btw is van toepassing op de meeste goederen en diensten die in België worden gekocht.",
    de: "Die Mehrwertsteuer gilt für die meisten in Belgien erworbenen Waren und Dienstleistungen.",
  },
  "VAT Rates": {
    fr: "Taux de TVA",
    nl: "Btw-tarieven",
    de: "Mehrwertsteuersätze",
  },
  "21%": {
    fr: "21 %",
    nl: "21 %",
    de: "21 %",
  },
  "Most goods and services": {
    fr: "La plupart des biens et services",
    nl: "De meeste goederen en diensten",
    de: "Die meisten Waren und Dienstleistungen",
  },
  "12%": {
    fr: "12 %",
    nl: "12 %",
    de: "12 %",
  },
  "Certain construction services, restaurant meals (non-alcoholic)": {
    fr: "Certains services de construction, repas de restaurant (hors boissons alcoolisées)",
    nl: "Bepaalde bouwwerken, restaurantmaaltijden (zonder alcoholische dranken)",
    de: "Bestimmte Bauleistungen, Restaurantmahlzeiten (ohne alkoholische Getränke)",
  },
  "6%": {
    fr: "6 %",
    nl: "6 %",
    de: "6 %",
  },
  "Food, books, medicines, public transport": {
    fr: "Produits alimentaires, livres, médicaments, transports publics",
    nl: "Voeding, boeken, geneesmiddelen, openbaar vervoer",
    de: "Lebensmittel, Bücher, Arzneimittel, öffentlicher Verkehr",
  },
  "VAT returns must be filed electronically through Intervat.": {
    fr: "Les déclarations de TVA doivent être introduites électroniquement via Intervat.",
    nl: "Btw-aangiften moeten elektronisch via Intervat worden ingediend.",
    de: "Mehrwertsteuererklärungen müssen elektronisch über Intervat eingereicht werden.",
  },

  "Excise duties are consumption-based taxes applied to specific items.": {
    fr: "Les droits d’accise sont des taxes à la consommation appliquées à des produits spécifiques.",
    nl: "Accijnzen zijn verbruiksbelastingen die op bepaalde producten worden geheven.",
    de: "Verbrauchsteuern sind verbrauchsabhängige Abgaben auf bestimmte Produkte.",
  },
  "Excise Duty Examples (Approx. Values)": {
    fr: "Exemples de droits d’accise (valeurs approximatives)",
    nl: "Voorbeelden van accijnzen (benaderende waarden)",
    de: "Beispiele für Verbrauchsteuern (Richtwerte)",
  },
  Beer: {
    fr: "Bière",
    nl: "Bier",
    de: "Bier",
  },
  "0.18 to 1.99 euros per liter depending on ABV": {
    fr: "De 0,18 à 1,99 euro par litre selon le taux d’alcool",
    nl: "Van 0,18 tot 1,99 euro per liter afhankelijk van het alcoholvolume",
    de: "Zwischen 0,18 und 1,99 Euro pro Liter, abhängig vom Alkoholgehalt",
  },
  Spirits: {
    fr: "Spiritueux",
    nl: "Sterke dranken",
    de: "Spirituosen",
  },
  "Around 15.51 euros per liter of pure alcohol": {
    fr: "Environ 15,51 euros par litre d’alcool pur",
    nl: "Ongeveer 15,51 euro per liter pure alcohol",
    de: "Rund 15,51 Euro pro Liter reinen Alkohols",
  },
  "Sparkling wine": {
    fr: "Vin mousseux",
    nl: "Mousserende wijn",
    de: "Schaumwein",
  },
  "Roughly 1.32 euros per liter": {
    fr: "Environ 1,32 euro par litre",
    nl: "Ongeveer 1,32 euro per liter",
    de: "Rund 1,32 Euro pro Liter",
  },
  Cigarettes: {
    fr: "Cigarettes",
    nl: "Sigaretten",
    de: "Zigaretten",
  },
  "Fixed amount plus percentage of retail price": {
    fr: "Montant fixe plus pourcentage du prix de vente au détail",
    nl: "Vast bedrag plus een percentage van de kleinhandelsprijs",
    de: "Fester Betrag zuzüglich eines Prozentsatzes des Einzelhandelspreises",
  },
  Petrol: {
    fr: "Essence",
    nl: "Benzine",
    de: "Benzin",
  },
  "About 0.62 euros per liter": {
    fr: "Environ 0,62 euro par litre",
    nl: "Ongeveer 0,62 euro per liter",
    de: "Etwa 0,62 Euro pro Liter",
  },
  Diesel: {
    fr: "Diesel",
    nl: "Diesel",
    de: "Diesel",
  },
  "About 0.44 euros per liter": {
    fr: "Environ 0,44 euro par litre",
    nl: "Ongeveer 0,44 euro per liter",
    de: "Etwa 0,44 Euro pro Liter",
  },
  LPG: {
    fr: "GPL",
    nl: "LPG",
    de: "Autogas (LPG)",
  },
  "0.24 euros per liter": {
    fr: "0,24 euro par litre",
    nl: "0,24 euro per liter",
    de: "0,24 Euro pro Liter",
  },
  Coffee: {
    fr: "Café",
    nl: "Koffie",
    de: "Kaffee",
  },
  "Around 3 euros per kg": {
    fr: "Environ 3 euros par kilo",
    nl: "Ongeveer 3 euro per kg",
    de: "Rund 3 Euro pro kg",
  },
  "Energy drinks": {
    fr: "Boissons énergétiques",
    nl: "Energiedranken",
    de: "Energydrinks",
  },
  "Around 0.045 euros per liter": {
    fr: "Environ 0,045 euro par litre",
    nl: "Ongeveer 0,045 euro per liter",
    de: "Rund 0,045 Euro pro Liter",
  },
  "Rates adjust as public health or environmental priorities evolve.": {
    fr: "Les taux évoluent en fonction des priorités de santé publique et des objectifs environnementaux.",
    nl: "De tarieven worden aangepast naarmate de prioriteiten op het vlak van volksgezondheid en milieu wijzigen.",
    de: "Die Sätze werden angepasst, wenn sich gesundheits- oder umweltpolitische Prioritäten verändern.",
  },

  "Environmental taxes aim to influence sustainable behavior and fund pollution-reduction programs. These rates differ by regional authority.":
    {
      fr: "Les taxes environnementales visent à encourager des comportements durables et à financer des programmes de réduction de la pollution. Les taux varient selon l’autorité régionale.",
      nl: "Milieubelastingen zijn bedoeld om duurzaam gedrag te stimuleren en programma’s voor emissiereductie te financieren. De tarieven verschillen per gewestelijke overheid.",
      de: "Umweltsteuern sollen nachhaltiges Verhalten fördern und Programme zur Emissionsreduzierung finanzieren. Die Sätze unterscheiden sich je nach zuständiger Region.",
    },
  "Typical Environmental Fee Ranges": {
    fr: "Fourchettes typiques de redevances environnementales",
    nl: "Typische bandbreedtes van milieutaksen",
    de: "Typische Bandbreiten umweltbezogener Abgaben",
  },
  "Motor fuels": {
    fr: "Carburants pour moteurs",
    nl: "Motorbrandstoffen",
    de: "Kraftstoffe",
  },
  "Around 10.75 euros per GJ": {
    fr: "Environ 10,75 euros par GJ",
    nl: "Ongeveer 10,75 euro per GJ",
    de: "Rund 10,75 Euro pro GJ",
  },
  "Heating fuels": {
    fr: "Combustibles de chauffage",
    nl: "Verwarmingsbrandstoffen",
    de: "Heizbrennstoffe",
  },
  "About 0.9 euros per GJ": {
    fr: "Environ 0,9 euro par GJ",
    nl: "Ongeveer 0,9 euro per GJ",
    de: "Etwa 0,9 Euro pro GJ",
  },
  "Electricity usage": {
    fr: "Consommation d’électricité",
    nl: "Elektriciteitsverbruik",
    de: "Stromverbrauch",
  },
  "Roughly 0.15 euros per GJ": {
    fr: "Environ 0,15 euro par GJ",
    nl: "Ongeveer 0,15 euro per GJ",
    de: "Rund 0,15 Euro pro GJ",
  },
  "Waste disposal": {
    fr: "Élimination des déchets",
    nl: "Afvalverwerking",
    de: "Abfallentsorgung",
  },
  "Region-set landfill charges": {
    fr: "Redevances de mise en décharge fixées par la région",
    nl: "Storttarieven die door het gewest worden vastgesteld",
    de: "Deponiegebühren, die von der Region festgelegt werden",
  },
  "CO₂ emissions": {
    fr: "Émissions de CO₂",
    nl: "CO₂-uitstoot",
    de: "CO₂-Emissionen",
  },
  "Industry-based penalties": {
    fr: "Sanctions appliquées par secteur industriel",
    nl: "Sectorgebonden heffingen of sancties",
    de: "Branchenspezifische Abgaben oder Sanktionen",
  },
  "Vehicle registration": {
    fr: "Immatriculation des véhicules",
    nl: "Voertuigregistratie",
    de: "Fahrzeugzulassung",
  },
  "Higher for high-emission vehicles": {
    fr: "Plus élevée pour les véhicules fortement émetteurs",
    nl: "Hoger voor voertuigen met een hoge uitstoot",
    de: "Höher für Fahrzeuge mit hohen Emissionen",
  },
  "These taxes support climate transition goals and eco-friendly infrastructure.":
    {
      fr: "Ces taxes soutiennent les objectifs de transition climatique et le développement d’infrastructures respectueuses de l’environnement.",
      nl: "Deze belastingen ondersteunen de klimaattransitie en de uitbouw van milieuvriendelijke infrastructuur.",
      de: "Diese Abgaben unterstützen die Klimaziele und den Ausbau umweltfreundlicher Infrastrukturen.",
    },
  "Filing Taxes in Belgium (Individuals and Companies)": {
    fr: "Déclaration des impôts en Belgique (particuliers et entreprises)",
    nl: "Belastingen aangeven in België (particulieren en ondernemingen)",
    de: "Steuererklärung in Belgien (für Privatpersonen und Unternehmen)",
  },
  "Step 1: Gather Documentation": {
    fr: "Étape 1 : Rassembler la documentation",
    nl: "Stap 1: Documenten verzamelen",
    de: "Schritt 1: Unterlagen zusammenstellen",
  },
  "Income statements, payroll slips, invoices, VAT reports, investment details, and property information.":
    {
      fr: "Relevés de revenus, fiches de paie, factures, relevés de TVA, détails sur les investissements et informations relatives aux biens immobiliers.",
      nl: "Inkomensfiches, loonbrieven, facturen, btw-overzichten, investeringsgegevens en informatie over onroerend goed.",
      de: "Einkommensnachweise, Lohnzettel, Rechnungen, MwSt.-Übersichten, Angaben zu Anlagen sowie Informationen zu Immobilien.",
    },
  "Step 2: Use the Correct Filing System": {
    fr: "Étape 2 : Utiliser le bon canal de déclaration",
    nl: "Stap 2: Het juiste aangiftesysteem gebruiken",
    de: "Schritt 2: Das richtige Einreichungssystem nutzen",
  },
  "Individuals: Tax-on-Web": {
    fr: "Particuliers : Tax-on-web",
    nl: "Particulieren: Tax-on-Web",
    de: "Privatpersonen: Tax-on-Web",
  },
  "Companies: Biztax": {
    fr: "Sociétés : Biztax",
    nl: "Vennootschappen: Biztax",
    de: "Unternehmen: Biztax",
  },
  "VAT: Intervat": {
    fr: "TVA : Intervat",
    nl: "Btw: Intervat",
    de: "Mehrwertsteuer: Intervat",
  },
  "Step 3: Meet Filing Deadlines": {
    fr: "Étape 3 : Respecter les délais de dépôt",
    nl: "Stap 3: De indieningstermijnen naleven",
    de: "Schritt 3: Einreichungsfristen einhalten",
  },
  "Deadlines differ by category:": {
    fr: "Les échéances varient selon la catégorie :",
    nl: "De deadlines verschillen per categorie:",
    de: "Die Fristen unterscheiden sich je nach Kategorie:",
  },
  "Personal tax returns (residents): Typically June–July": {
    fr: "Déclarations d’impôt des résidents : généralement entre juin et juillet",
    nl: "Aangiften personenbelasting (inwoners): doorgaans in de periode juni–juli",
    de: "Einkommensteuererklärungen für Ansässige: in der Regel zwischen Juni und Juli",
  },
  "Non-resident tax returns: Late-year deadlines": {
    fr: "Déclarations des non-résidents : échéances généralement plus tard dans l’année",
    nl: "Aangiften voor niet-inwoners: deadlines doorgaans later in het jaar",
    de: "Steuererklärungen für Nichtansässige: Fristen in der Regel gegen Jahresende",
  },
  "Corporate returns: Seven months after fiscal year-end": {
    fr: "Déclarations des sociétés : sept mois après la clôture de l’exercice",
    nl: "Vennootschapsaangiften: zeven maanden na het einde van het boekjaar",
    de: "Körperschaftsteuererklärungen: sieben Monate nach Geschäftsjahresende",
  },
  "VAT returns: Monthly or quarterly": {
    fr: "Déclarations de TVA : mensuelles ou trimestrielles",
    nl: "Btw-aangiften: maandelijks of per kwartaal",
    de: "Mehrwertsteuererklärungen: monatlich oder vierteljährlich",
  },
  "Step 4: Assessment and Payment": {
    fr: "Étape 4 : Imposition et paiement",
    nl: "Stap 4: Aanslag en betaling",
    de: "Schritt 4: Veranlagung und Zahlung",
  },
  "After submission, authorities issue assessments indicating taxes owed or refunds due.":
    {
      fr: "Après la déclaration, l’administration émet un avertissement-extrait de rôle indiquant l’impôt dû ou le montant du remboursement.",
      nl: "Na indiening sturen de autoriteiten aanslagbiljetten met daarop het verschuldigde belastingbedrag of het terug te betalen bedrag.",
      de: "Nach der Einreichung erlassen die Behörden Steuerbescheide, in denen die geschuldete Steuer oder ein etwaiges Erstattungsbetrags ausgewiesen wird.",
    },
 
  "Belgium's 2025 tax system combines multiple layers of federal, regional and municipal obligations. With progressive income taxes, structured corporate taxation, consumption-based levies, and an expanding set of environmental rules, both individuals and businesses must remain attentive to changing rates, filing requirements and compliance procedures. Effective tax management requires accurate reporting, organized documentation and awareness of regional differences.":
    {
      fr: "Le système fiscal belge 2025 combine plusieurs niveaux d’obligations fédérales, régionales et communales. Avec un impôt sur le revenu progressif, une fiscalité des sociétés structurée, des prélèvements à la consommation et un ensemble croissant de règles environnementales, particuliers et entreprises doivent rester attentifs aux évolutions de taux, aux exigences déclaratives et aux procédures de conformité. Une gestion fiscale efficace repose sur un reporting rigoureux, une documentation organisée et une bonne connaissance des spécificités régionales.",
      nl: "Het Belgische belastingsysteem 2025 omvat meerdere lagen van federale, gewestelijke en gemeentelijke verplichtingen. Met progressieve inkomstenbelastingen, een gestructureerde vennootschapsbelasting, verbruiksheffingen en een groeiend pakket milieuregels moeten zowel particulieren als ondernemingen alert blijven op wijzigingen in tarieven, aangifteverplichtingen en complianceprocedures. Een doeltreffend fiscaal beheer vereist nauwkeurige rapportering, goed georganiseerde documentatie en bewustzijn van regionale verschillen.",
      de: "Das belgische Steuersystem 2025 vereint mehrere Ebenen föderaler, regionaler und kommunaler Verpflichtungen. Mit progressiven Einkommensteuern, einer strukturierten Körperschaftsbesteuerung, verbrauchsabhängigen Abgaben und einem wachsenden Bündel an Umweltvorschriften müssen sowohl Privatpersonen als auch Unternehmen den Entwicklungen bei Steuersätzen, Erklärungspflichten und Compliance-Prozessen aufmerksam folgen. Eine wirksame Steuerplanung setzt präzise Berichterstattung, gut organisierte Unterlagen und ein Bewusstsein für regionale Besonderheiten voraus.",
    },
  "As more elements of Belgium's tax and reporting infrastructure move toward digital automation, companies increasingly rely on integrated financial systems for accuracy and efficiency. Platforms like Accqrate, which support streamlined financial data flows and consistent compliance management, can help businesses navigate Belgium's evolving tax environment with greater control and reliability.":
    {
      fr: "À mesure que l’infrastructure fiscale et déclarative de la Belgique se digitalise, les entreprises s’appuient de plus en plus sur des systèmes financiers intégrés pour garantir exactitude et efficacité. Des plateformes comme Accqrate, qui facilitent les flux de données financières et la gestion cohérente de la conformité, aident les entreprises à naviguer dans un environnement fiscal belge en évolution avec davantage de maîtrise et de fiabilité.",
      nl: "Nu steeds meer onderdelen van de Belgische fiscale en rapporteringsinfrastructuur richting digitale automatisering evolueren, vertrouwen ondernemingen in toenemende mate op geïntegreerde financiële systemen voor nauwkeurigheid en efficiëntie. Platformen zoals Accqrate, die gestroomlijnde financiële datastromen en consistente compliance-ondersteuning bieden, helpen bedrijven om zich met meer controle en betrouwbaarheid aan het veranderende Belgische belastinglandschap aan te passen.",
      de: "Da immer mehr Elemente der belgischen Steuer- und Berichtsinfrastruktur digital automatisiert werden, verlassen sich Unternehmen zunehmend auf integrierte Finanzsysteme, um Genauigkeit und Effizienz sicherzustellen. Plattformen wie Accqrate, die schlanke Finanzdatenflüsse und ein konsistentes Compliance-Management unterstützen, helfen Unternehmen, sich mit mehr Steuerung und Verlässlichkeit im sich wandelnden belgischen Steuerumfeld zu bewegen.",
    },

  //Belgian Income Tax System: Rates, Deductions, Exemptions and How Filing Works

  "Belgian Income Tax System: Rates, Deductions, Exemptions and How Filing Works":
    {
      fr: "Système de l’impôt sur le revenu en Belgique : taux, déductions, exonérations et fonctionnement de la déclaration",
      nl: "Belgisch inkomstenbelastingsysteem: tarieven, aftrekken, vrijstellingen en hoe de aangifte werkt",
      de: "Belgisches Einkommensteuersystem: Steuersätze, Abzüge, Befreiungen und Ablauf der Steuererklärung",
    },
  "Updated On : Nov 25th, 2024 | 26 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 26 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 26 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | Lesezeit 26 Minuten",
  },
  "Belgium's income tax framework is often viewed as complex at first glance, but once the structure is clear, the rules follow a predictable logic. Individual taxpayers and companies are both subject to taxation, and understanding how each category is treated is essential for proper compliance.":
    {
      fr: "Le cadre belge de l’impôt sur le revenu est souvent perçu comme complexe au premier abord, mais une fois la structure comprise, les règles suivent une logique prévisible. Les particuliers comme les sociétés sont soumis à l’impôt et il est essentiel de comprendre le traitement de chaque catégorie pour rester en conformité.",
      nl: "Het Belgische kader voor de inkomstenbelasting wordt op het eerste gezicht vaak als complex ervaren, maar eenmaal de structuur duidelijk is, volgen de regels een voorspelbare logica. Zowel particulieren als vennootschappen zijn onderworpen aan belasting, en inzicht in de behandeling van elke categorie is cruciaal voor correcte compliance.",
      de: "Der belgische Rahmen für die Einkommensteuer wirkt auf den ersten Blick oft komplex, folgt aber einer gut nachvollziehbaren Logik, sobald die Struktur verstanden ist. Sowohl Privatpersonen als auch Unternehmen unterliegen der Besteuerung; das Verständnis der jeweiligen Behandlung ist entscheidend für eine ordnungsgemäße Compliance.",
    },
  "This guide provides a reorganized and comprehensive explanation of how Belgian income tax works in 2025, covering personal income tax rules, corporate tax rules, deductions, exemptions, filing requirements and payment processes.":
    {
      fr: "Ce guide propose une présentation structurée et complète du fonctionnement de l’impôt sur le revenu en Belgique en 2025, en couvrant les règles applicables à l’impôt des personnes physiques et à l’impôt des sociétés, les déductions, les exonérations, ainsi que les obligations de déclaration et de paiement.",
      nl: "Deze gids biedt een herstructuurde en volledige uitleg over hoe de Belgische inkomstenbelasting in 2025 werkt, met aandacht voor de regels rond personenbelasting en vennootschapsbelasting, de belangrijkste aftrekken en vrijstellingen, en de voorschriften voor aangifte en betaling.",
      de: "Dieser Leitfaden bietet eine neu strukturierte und umfassende Darstellung der Einkommensteuer in Belgien im Jahr 2025 – von den Regeln zur Besteuerung natürlicher Personen und von Unternehmen über Abzüge und Befreiungen bis hin zu Erklärungspflichten und Zahlungsabläufen.",
    },
  "Understanding Belgium's Income Tax Structure": {
    fr: "Comprendre la structure de l’impôt sur le revenu en Belgique",
    nl: "Inzicht in de structuur van de Belgische inkomstenbelasting",
    de: "Aufbau der belgischen Einkommensteuerstruktur",
  },
  "Belgium applies income tax through two principal categories:": {
    fr: "La Belgique applique l’impôt sur le revenu via deux grandes catégories :",
    nl: "België past de inkomstenbelasting toe via twee hoofdcategorieën:",
    de: "Belgien erhebt Einkommensteuer im Wesentlichen über zwei Kategorien:",
  },
  "Personal Income Tax (PIT)": {
    fr: "Impôt des personnes physiques (IPP)",
    nl: "Personenbelasting (PIT)",
    de: "Einkommensteuer für natürliche Personen (PIT)",
  },
  "Applies to individuals earning income such as salaries, rental income, pensions, or investment income.":
    {
      fr: "S’applique aux personnes physiques percevant des revenus tels que salaires, loyers, pensions ou revenus de placement.",
      nl: "Van toepassing op natuurlijke personen die inkomsten verwerven zoals lonen, huurinkomsten, pensioenen of beleggingsinkomsten.",
      de: "Gilt für Privatpersonen, die Einkommen wie Löhne, Mieteinnahmen, Renten oder Kapitalerträge erzielen.",
    },
  "Corporate Income Tax (CIT)": {
    fr: "Impôt des sociétés (ISoc)",
    nl: "Vennootschapsbelasting (CIT)",
    de: "Körperschaftsteuer (CIT)",
  },
  "Applies to company profits earned by Belgian entities or foreign companies operating within Belgium.":
    {
      fr: "S’applique aux bénéfices des sociétés belges et des sociétés étrangères exerçant une activité en Belgique.",
      nl: "Van toepassing op winsten van Belgische vennootschappen en buitenlandse ondernemingen met activiteiten in België.",
      de: "Wird auf Gewinne von belgischen Gesellschaften und ausländischen Unternehmen mit Aktivitäten in Belgien erhoben.",
    },
  "Both systems are administered by the Federal Public Service Finance.": {
    fr: "Les deux systèmes sont gérés par le Service public fédéral Finances.",
    nl: "Beide systemen worden beheerd door de Federale Overheidsdienst Financiën.",
    de: "Beide Systeme werden vom Föderalen Öffentlichen Dienst Finanzen verwaltet.",
  },
  "Personal Income Tax in Belgium": {
    fr: "Impôt des personnes physiques en Belgique",
    nl: "Personenbelasting in België",
    de: "Einkommensteuer für Privatpersonen in Belgien",
  },
  "Who Is Taxed?": {
    fr: "Qui est imposé ?",
    nl: "Wie wordt belast?",
    de: "Wer wird besteuert?",
  },
  "Belgium distinguishes between residents and non-residents.": {
    fr: "La Belgique distingue les résidents des non-résidents.",
    nl: "België maakt een onderscheid tussen inwoners en niet-inwoners.",
    de: "Belgien unterscheidet zwischen Steuerinländern und Steuerausländern.",
  },
  "Resident Taxpayers": {
    fr: "Contribuables résidents",
    nl: "Inwonende belastingplichtigen",
    de: "Ansässige Steuerpflichtige",
  },
  "A person is typically considered a resident if:": {
    fr: "Une personne est généralement considérée comme résidente si :",
    nl: "Iemand wordt doorgaans als inwoner beschouwd als:",
    de: "Eine Person gilt in der Regel als ansässig, wenn:",
  },
  "They stay in Belgium for more than 183 days, or": {
    fr: "Elle séjourne en Belgique plus de 183 jours, ou",
    nl: "Hij of zij meer dan 183 dagen in België verblijft, of",
    de: "Sie sich mehr als 183 Tage in Belgien aufhält oder",
  },
  "Their main economic and family ties are in Belgium.": {
    fr: "Ses principaux liens économiques et familiaux se situent en Belgique.",
    nl: "Haar of zijn belangrijkste economische en familiale belangen in België liggen.",
    de: "Ihre bzw. seine wesentlichen wirtschaftlichen und familiären Bindungen in Belgien liegen.",
  },
  "Residents pay tax on worldwide income.": {
    fr: "Les résidents sont imposés sur l’ensemble de leurs revenus mondiaux.",
    nl: "Inwoners worden belast op hun wereldwijde inkomen.",
    de: "Ansässige zahlen Steuern auf ihr weltweites Einkommen.",
  },
  "Non-resident Taxpayers": {
    fr: "Contribuables non-résidents",
    nl: "Niet-inwonende belastingplichtigen",
    de: "Nichtansässige Steuerpflichtige",
  },
  "Non-residents only pay tax on Belgian-source income, including:": {
    fr: "Les non-résidents ne sont imposés que sur leurs revenus de source belge, notamment :",
    nl: "Niet-inwoners betalen enkel belasting op inkomsten van Belgische oorsprong, waaronder:",
    de: "Nichtansässige werden nur auf Einkünfte aus belgischer Quelle besteuert, unter anderem:",
  },
  "Belgian employment income": {
    fr: "Revenus professionnels belges",
    nl: "Belgische beroepsinkomsten",
    de: "Belgische Arbeitseinkünfte",
  },
  "Rental income from Belgian property": {
    fr: "Revenus locatifs provenant de biens immobiliers situés en Belgique",
    nl: "Huurinkomsten uit Belgisch onroerend goed",
    de: "Mieteinkünfte aus Immobilien in Belgien",
  },
  "Certain Belgian investment income": {
    fr: "Certains revenus de placement de source belge",
    nl: "Bepaalde Belgische beleggingsinkomsten",
    de: "Bestimmte Kapitalerträge aus belgischer Quelle",
  },
  "Income tied to Belgian business activities": {
    fr: "Revenus liés à des activités professionnelles exercées en Belgique",
    nl: "Inkomsten verbonden aan beroepsactiviteiten in België",
    de: "Einkünfte aus geschäftlichen Tätigkeiten in Belgien",
  },
  "Personal Income Tax Rates for 2025": {
    fr: "Taux de l’impôt des personnes physiques pour 2025",
    nl: "Tarieven van de personenbelasting voor 2025",
    de: "Steuersätze der Einkommensteuer 2025",
  },
  "Belgium uses a progressive taxation model. The brackets below apply for income year 2024, taxed in 2025.":
    {
      fr: "La Belgique applique un modèle d’imposition progressif. Les tranches ci-dessous s’appliquent aux revenus de 2024 imposés en 2025.",
      nl: "België hanteert een progressief belastingmodel. De onderstaande schijven gelden voor inkomstenjaar 2024, belast in 2025.",
      de: "Belgien verwendet ein progressives Steuermodell. Die nachstehenden Stufen gelten für das Einkommen 2024, das im Jahr 2025 besteuert wird.",
    },
  "Updated Belgian PIT Brackets": {
    fr: "Nouvelles tranches de la personne physique en Belgique",
    nl: "Geactualiseerde Belgische PIT-schijven",
    de: "Aktualisierte belgische Einkommensteuertarife",
  },
  
  "25 percent": {
    fr: "25 %",
    nl: "25 %",
    de: "25 %",
  },
  
  "40 percent": {
    fr: "40 %",
    nl: "40 %",
    de: "40 %",
  },

  "45 percent": {
    fr: "45 %",
    nl: "45 %",
    de: "45 %",
  },
  
  "50 percent": {
    fr: "50 %",
    nl: "50 %",
    de: "50 %",
  },
  "These rates apply to both residents and non-residents, although non-residents are taxed only on Belgian-source income.":
    {
      fr: "Ces taux s’appliquent aux résidents comme aux non-résidents, ces derniers n’étant toutefois imposés que sur leurs revenus de source belge.",
      nl: "Deze tarieven gelden zowel voor inwoners als niet-inwoners, al worden niet-inwoners enkel belast op inkomsten van Belgische oorsprong.",
      de: "Diese Sätze gelten sowohl für Ansässige als auch für Nichtansässige; Nichtansässige werden jedoch nur auf Einkünfte aus belgischer Quelle besteuert.",
    },
  "What Counts as Taxable Income?": {
    fr: "Quels revenus sont imposables ?",
    nl: "Wat geldt als belastbaar inkomen?",
    de: "Was gilt als steuerpflichtiges Einkommen?",
  },
  "Belgium taxes a wide range of income categories. The main ones include:": {
    fr: "La Belgique impose un large éventail de catégories de revenus. Les principales sont :",
    nl: "België belast een brede waaier aan inkomenscategorieën. De belangrijkste zijn:",
    de: "Belgien besteuert eine Vielzahl von Einkommenskategorien. Zu den wichtigsten zählen:",
  },
  "Salaries and wages": {
    fr: "Salaires et traitements",
    nl: "Lonenen wedden",
    de: "Löhne und Gehälter",
  },
  "Professional income from self-employment": {
    fr: "Revenus professionnels d’indépendant",
    nl: "Beroepsinkomsten uit zelfstandige activiteit",
    de: "Einkünfte aus selbständiger Tätigkeit",
  },
  "Rental income from real property": {
    fr: "Revenus locatifs immobiliers",
    nl: "Huurinkomsten uit onroerend goed",
    de: "Mieteinkünfte aus unbeweglichem Vermögen",
  },
  "Dividends and interest": {
    fr: "Dividendes et intérêts",
    nl: "Dividenden en interesten",
    de: "Dividenden und Zinsen",
  },
  "Certain capital gains": {
    fr: "Certaines plus-values",
    nl: "Bepaalde meerwaarden",
    de: "Bestimmte Veräußerungsgewinne",
  },
  "Pensions and annuities": {
    fr: "Pensions et rentes",
    nl: "Pensioenen en lijfrentes",
    de: "Renten und Leibrenten",
  },
  "Miscellaneous benefits and allowances": {
    fr: "Avantages et allocations divers",
    nl: "Diverse voordelen en toelagen",
    de: "Sonstige Vorteile und Zulagen",
  },
  "Deductions Available for Personal Income Tax": {
    fr: "Déductions disponibles pour l’impôt des personnes physiques",
    nl: "Beschikbare aftrekken in de personenbelasting",
    de: "Verfügbare Abzüge bei der Einkommensteuer",
  },
  "Belgium provides a range of deductions to reduce taxable income. Eligibility varies for residents and non-residents.":
    {
      fr: "La Belgique prévoit un ensemble de déductions permettant de réduire le revenu imposable. Les conditions d’éligibilité diffèrent pour les résidents et les non-résidents.",
      nl: "België voorziet in verschillende aftrekken om het belastbare inkomen te verlagen. De voorwaarden verschillen voor inwoners en niet-inwoners.",
      de: "Belgien gewährt eine Reihe von Abzügen zur Reduzierung des steuerpflichtigen Einkommens. Die Anspruchsvoraussetzungen unterscheiden sich für Ansässige und Nichtansässige.",
    },
  "Main PIT Deductions": {
    fr: "Principales déductions en matière d’IPP",
    nl: "Belangrijkste PIT-aftrekken",
    de: "Wichtigste Abzüge bei der Einkommensteuer",
  },
  "Social security contributions": {
    fr: "Cotisations de sécurité sociale",
    nl: "Socialezekerheidsbijdragen",
    de: "Sozialversicherungsbeiträge",
  },
  "Fully deductible": {
    fr: "Totalement déductibles",
    nl: "Volledig aftrekbaar",
    de: "Voll abzugsfähig",
  },
  "Paid in Belgium or abroad": {
    fr: "Versées en Belgique ou à l’étranger",
    nl: "Betaald in België of in het buitenland",
    de: "In Belgien oder im Ausland geleistet",
  },
  "Standard employment cost deduction": {
    fr: "Déduction forfaitaire pour frais professionnels des salariés",
    nl: "Forfaitaire kostenaftrek voor werknemers",
    de: "Pauschaler Werbungskostenabzug für Arbeitnehmer",
  },
  "30 percent of employment income, up to 5,750 euros": {
    fr: "30 % des revenus professionnels, avec un plafond d’environ 5 750 euros",
    nl: "30 % van het beroepsinkomen, met een plafond van ongeveer 5.750 euro",
    de: "30 % der Erwerbseinkünfte, mit einem Höchstbetrag von rund 5.750 Euro",
  },
  Employees: {
    fr: "Travailleurs salariés",
    nl: "Werknemers",
    de: "Arbeitnehmer",
  },
  "Deduction for company directors": {
    fr: "Déduction pour administrateurs de société",
    nl: "Aftrek voor bedrijfsleiders",
    de: "Abzug für Geschäftsführer und Verwaltungsratsmitglieder",
  },
  "3 percent of income, up to 3,030 euros": {
    fr: "3 % des revenus, avec un plafond d’environ 3 030 euros",
    nl: "3 % van het inkomen, met een plafond van ongeveer 3.030 euro",
    de: "3 % der Einkünfte, mit einem Höchstbetrag von rund 3.030 Euro",
  },
  "Remunerated directors": {
    fr: "Administrateurs rémunérés",
    nl: "Bezoldigde bestuurders",
    de: "Vergütete Geschäftsleiter",
  },
  "Alimony or support payments": {
    fr: "Pensions alimentaires et contributions d’entretien",
    nl: "Onderhouds- en alimentatiebetalingen",
    de: "Unterhalts- und Versorgungsleistungen",
  },
  "80 percent deductible": {
    fr: "Déductibles à hauteur de 80 %",
    nl: "Voor 80 % aftrekbaar",
    de: "Zu 80 % steuerlich absetzbar",
  },
  "Payments to eligible dependents and ex-spouses": {
    fr: "Versements aux personnes à charge admissibles et aux ex-conjoints",
    nl: "Betalingen aan in aanmerking komende kinderen en ex-partners",
    de: "Zahlungen an berechtigte Unterhaltsberechtigte und geschiedene Ehepartner",
  },
  "Pension savings": {
    fr: "Épargne-pension",
    nl: "Pensioensparen",
    de: "Pensionssparbeiträge",
  },
  "1,020 to 1,310 euros": {
    fr: "Entre 1 020 et 1 310 euros",
    nl: "Tussen 1.020 en 1.310 euro",
    de: "Zwischen 1.020 und 1.310 Euro",
  },
  "Depends on chosen tax relief tier": {
    fr: "En fonction du niveau de réduction d’impôt choisi",
    nl: "Afhankelijk van het gekozen fiscale voordelenniveau",
    de: "Abhängig von der gewählten Förderstufe",
  },
  "Life insurance premiums": {
    fr: "Primes d’assurance-vie",
    nl: "Premies voor levensverzekeringen",
    de: "Lebensversicherungsbeiträge",
  },
  "Up to 2,450 euros": {
    fr: "Jusqu’à 2 450 euros",
    nl: "Tot 2.450 euro",
    de: "Bis zu 2.450 Euro",
  },
  "Eligible long-term policies": {
    fr: "Contrats à long terme remplissant les conditions",
    nl: "In aanmerking komende langetermijnpolissen",
    de: "Begünstigte langfristige Policen",
  },
  "Donations to approved institutions": {
    fr: "Dons à des institutions agréées",
    nl: "Schenkingen aan erkende instellingen",
    de: "Spenden an anerkannte Einrichtungen",
  },
  "45 percent deduction": {
    fr: "Déduction de 45 %",
    nl: "45 % aftrek",
    de: "45 % Steuerabzug",
  },
  "Minimum donation 40 euros": {
    fr: "Don minimum de 40 euros",
    nl: "Minimale schenking van 40 euro",
    de: "Mindestspende von 40 Euro",
  },
  "Household service expenses": {
    fr: "Dépenses pour services domestiques",
    nl: "Uitgaven voor huishoudelijke diensten",
    de: "Aufwendungen für haushaltsnahe Dienstleistungen",
  },
  "30 percent deduction": {
    fr: "Déduction de 30 %",
    nl: "30 % aftrek",
    de: "30 % Steuerabzug",
  },
  "Within regulatory limits": {
    fr: "Dans les limites prévues par la réglementation",
    nl: "Binnen de wettelijke grensbedragen",
    de: "Im Rahmen der gesetzlichen Höchstgrenzen",
  },
  "Childcare expenses": {
    fr: "Frais de garde d’enfants",
    nl: "Kosten voor kinderopvang",
    de: "Kinderbetreuungskosten",
  },
  "45 percent, daily capped": {
    fr: "45 %, avec plafond journalier",
    nl: "45 %, met een dagplafond",
    de: "45 %, mit täglicher Höchstgrenze",
  },
  "For dependents under age 14": {
    fr: "Pour les personnes à charge de moins de 14 ans",
    nl: "Voor personen ten laste jonger dan 14 jaar",
    de: "Für unterhaltsberechtigte Kinder unter 14 Jahren",
  },
  "Personal basic exemption": {
    fr: "Quotité de revenus exonérée d’impôt",
    nl: "Persoonlijke belastingvrije som",
    de: "Persönlicher Steuerfreibetrag",
  },
  "10,160 euros": {
    fr: "10 160 euros",
    nl: "10.160 euro",
    de: "10.160 Euro",
  },
  "Automatically granted": {
    fr: "Octroyée automatiquement",
    nl: "Automatisch toegekend",
    de: "Automatisch gewährt",
  },
  "Dependent children exemption": {
    fr: "Exonération pour enfants à charge",
    nl: "Vrijstelling voor kinderen ten laste",
    de: "Freibetrag für Kinder in Haushaltsgemeinschaft",
  },
  "1,920 to 6,850 euros per child": {
    fr: "De 1 920 à 6 850 euros par enfant",
    nl: "Van 1.920 tot 6.850 euro per kind",
    de: "Von 1.920 bis 6.850 Euro pro Kind",
  },
  "Increases per child; enhanced for disabled children": {
    fr: "Montant croissant par enfant, majoré pour les enfants handicapés",
    nl: "Bedrag stijgt per kind en is verhoogd voor kinderen met een handicap",
    de: "Betrag steigt je Kind und ist für Kinder mit Behinderung erhöht",
  },
  "Other dependent exemption": {
    fr: "Exonération pour autres personnes à charge",
    nl: "Vrijstelling voor andere personen ten laste",
    de: "Freibetrag für sonstige Unterhaltsberechtigte",
  },
  "1,920 euros": {
    fr: "1 920 euros",
    nl: "1.920 euro",
    de: "1.920 Euro",
  },
  "Applies to non-child dependents": {
    fr: "S’applique aux personnes à charge autres que les enfants",
    nl: "Van toepassing op personen ten laste die geen kind zijn",
    de: "Gilt für Unterhaltsberechtigte, die keine Kinder sind",
  },
  "Non-residents may claim many of these deductions only if at least 75 percent of their worldwide income is Belgian-source.":
    {
      fr: "Les non-résidents ne peuvent bénéficier de nombreuses déductions que si au moins 75 % de leurs revenus mondiaux sont de source belge.",
      nl: "Niet-inwoners kunnen veel van deze aftrekken alleen toepassen als minimaal 75 % van hun wereldwijde inkomen uit Belgische bron afkomstig is.",
      de: "Nichtansässige können viele dieser Abzüge nur geltend machen, wenn mindestens 75 % ihres weltweiten Einkommens aus belgischen Quellen stammen.",
    },
  "Filing Personal Income Tax": {
    fr: "Déclaration de l’impôt des personnes physiques",
    nl: "Aangifte van de personenbelasting",
    de: "Abgabe der persönlichen Einkommensteuererklärung",
  },
  "Who Must File?": {
    fr: "Qui doit déposer une déclaration ?",
    nl: "Wie moet aangifte doen?",
    de: "Wer muss eine Steuererklärung abgeben?",
  },
  "Both residents and non-residents must file a return if they earned taxable Belgian income. Failure to file may trigger fines ranging from 50 to 1,250 euros.":
    {
      fr: "Les résidents comme les non-résidents doivent déposer une déclaration s’ils ont perçu des revenus imposables de source belge. L’absence de déclaration peut entraîner des amendes allant de 50 à 1 250 euros.",
      nl: "Zowel inwoners als niet-inwoners moeten een aangifte indienen als zij in België belastbare inkomsten hebben genoten. Het niet indienen kan leiden tot boetes van 50 tot 1.250 euro.",
      de: "Sowohl Ansässige als auch Nichtansässige müssen eine Steuererklärung abgeben, wenn sie in Belgien steuerpflichtige Einkünfte erzielt haben. Unterlassene Erklärungen können zu Geldbußen zwischen 50 und 1.250 Euro führen.",
    },
  "Tax Year and Filing Cycle": {
    fr: "Année d’imposition et cycle déclaratif",
    nl: "Belastingjaar en aangiftecyclus",
    de: "Steuerjahr und Veranlagungszyklus",
  },
  "Tax year: January 1 to December 31": {
    fr: "Année fiscale : du 1er janvier au 31 décembre",
    nl: "Belastingjaar: 1 januari tot en met 31 december",
    de: "Steuerjahr: 1. Januar bis 31. Dezember",
  },
  "Income year x is declared in tax year x+1": {
    fr: "Les revenus de l’année x sont déclarés au cours de l’exercice d’imposition x+1.",
    nl: "Het inkomstenjaar x wordt aangegeven in aanslagjaar x+1.",
    de: "Das Einkommen des Jahres x wird im Veranlagungsjahr x+1 erklärt.",
  },
  "Filing Deadlines (Assessment Year 2024 Reference)": {
    fr: "Délais de dépôt (référence : exercice d’imposition 2024)",
    nl: "Indieningstermijnen (referentie: aanslagjaar 2024)",
    de: "Abgabefristen (Referenz: Veranlagungsjahr 2024)",
  },
  "These are the most recent official deadlines available:": {
    fr: "Voici les dernières échéances officielles disponibles :",
    nl: "Dit zijn de meest recente officiële deadlines:",
    de: "Dies sind die zuletzt veröffentlichten offiziellen Fristen:",
  },
  "Paper filing: 30 June 2024": {
    fr: "Déclaration papier : 30 juin 2024",
    nl: "Papieren aangifte: 30 juni 2024",
    de: "Papierformulare: 30. Juni 2024",
  },
  "Online filing (standard): 15 July 2024": {
    fr: "Déclaration en ligne (standard) : 15 juillet 2024",
    nl: "Online aangifte (standaard): 15 juli 2024",
    de: "Online-Erklärung (Standard): 15. Juli 2024",
  },
  "Online filing (complex returns): 14 November 2024": {
    fr: "Déclaration en ligne (dossiers complexes) : 14 novembre 2024",
    nl: "Online aangifte (complexe dossiers): 14 november 2024",
    de: "Online-Erklärung (komplexe Fälle): 14. November 2024",
  },
  "Non-resident returns: 22 November 2024": {
    fr: "Déclarations des non-résidents : 22 novembre 2024",
    nl: "Aangiften voor niet-inwoners: 22 november 2024",
    de: "Erklärungen der Nichtansässigen: 22. November 2024",
  },
  "Deadlines for Assessment Year 2025 will be announced by FPS Finance.": {
    fr: "Les délais pour l’exercice d’imposition 2025 seront annoncés par le SPF Finances.",
    nl: "De deadlines voor aanslagjaar 2025 worden nog bekendgemaakt door de FOD Financiën.",
    de: "Die Fristen für das Veranlagungsjahr 2025 werden vom FÖD Finanzen noch bekanntgegeben.",
  },
  "Filing Methods": {
    fr: "Modes de dépôt",
    nl: "Wijzen van indiening",
    de: "Einreichungsmethoden",
  },
  "Digital: MyMinfin (Tax-on-Web), preferred for speed and accuracy": {
    fr: "Numérique : MyMinfin (Tax-on-web), recommandé pour sa rapidité et sa fiabilité",
    nl: "Digitaal: MyMinfin (Tax-on-Web), aanbevolen wegens snelheid en nauwkeurigheid",
    de: "Digital: MyMinfin (Tax-on-Web), bevorzugt wegen Schnelligkeit und Genauigkeit",
  },
  "Paper: Available upon request": {
    fr: "Papier : disponible sur demande",
    nl: "Papier: op aanvraag beschikbaar",
    de: "Papierformulare: auf Antrag erhältlich",
  },
  "Representative: Tax agent filings allowed": {
    fr: "Mandataire : dépôt possible via un conseiller fiscal",
    nl: "Vertegenwoordiger: aangifte via een fiscaal adviseur is toegestaan",
    de: "Vertretung: Einreichung über Steuerberater zulässig",
  },
  Payment: {
    fr: "Paiement",
    nl: "Betaling",
    de: "Zahlung",
  },
  "Payments may be made through:": {
    fr: "Les paiements peuvent être effectués via :",
    nl: "Betalingen kunnen gebeuren via:",
    de: "Zahlungen können über folgende Wege erfolgen:",
  },
  "QR-code via MyMinfin": {
    fr: "Code QR via MyMinfin",
    nl: "QR-code via MyMinfin",
    de: "QR-Code über MyMinfin",
  },
  "Direct bank transfer with the specific reference number": {
    fr: "Virement bancaire avec la communication structurée",
    nl: "Overschrijving met de gestructureerde mededeling",
    de: "Banküberweisung mit dem angegebenen Verwendungszweck",
  },
  "Payment to bailiffs in legal collection cases": {
    fr: "Paiement auprès de l’huissier dans le cadre de procédures de recouvrement",
    nl: "Betaling aan gerechtsdeurwaarders in invorderingsprocedures",
    de: "Zahlung an Gerichtsvollzieher im Rahmen von Vollstreckungsverfahren",
  },
  "Withholding tax on salaries counts as an advance payment toward the final PIT liability.":
    {
      fr: "Le précompte professionnel retenu sur les salaires est imputé comme acompte sur l’impôt final des personnes physiques.",
      nl: "De bedrijfsvoorheffing op lonen geldt als een voorschot op de uiteindelijke personenbelasting.",
      de: "Die Lohnsteuer wird als Vorauszahlung auf die endgültige Einkommensteuerschuld angerechnet.",
    },
  "Corporate Income Tax in Belgium": {
    fr: "Impôt des sociétés en Belgique",
    nl: "Vennootschapsbelasting in België",
    de: "Körperschaftsteuer in Belgien",
  },
  "Corporate income tax applies to:": {
    fr: "L’impôt des sociétés s’applique :",
    nl: "De vennootschapsbelasting is van toepassing op:",
    de: "Die Körperschaftsteuer gilt für:",
  },
  "Belgian resident companies (worldwide income)": {
    fr: "Les sociétés résidentes belges (revenus mondiaux)",
    nl: "Belgische residentiële vennootschappen (wereldwijd inkomen)",
    de: "In Belgien ansässige Gesellschaften (Welteinkommen)",
  },
  "Belgian branches of foreign companies (Belgian-source income)": {
    fr: "Les succursales belges de sociétés étrangères (revenus de source belge)",
    nl: "Belgische vaste inrichtingen van buitenlandse ondernemingen (inkomsten van Belgische oorsprong)",
    de: "Belgische Betriebsstätten ausländischer Unternehmen (Einkünfte aus belgischer Quelle)",
  },
  "Belgian subsidiaries of international groups (worldwide income)": {
    fr: "Les filiales belges de groupes internationaux (revenus mondiaux)",
    nl: "Belgische dochtervennootschappen van internationale groepen (wereldwijd inkomen)",
    de: "Belgische Tochtergesellschaften internationaler Konzerne (Welteinkommen)",
  },
  "Corporate Tax Rates": {
    fr: "Taux de l’impôt des sociétés",
    nl: "Tarieven van de vennootschapsbelasting",
    de: "Sätze der Körperschaftsteuer",
  },
  "2025 CIT Framework": {
    fr: "Cadre de l’ISoc pour 2025",
    nl: "Kader van de vennootschapsbelasting 2025",
    de: "Rahmen der Körperschaftsteuer 2025",
  },
  "Standard companies": {
    fr: "Sociétés ordinaires",
    nl: "Standaardvennootschappen",
    de: "Normale Kapitalgesellschaften",
  },
  
  "SMEs (first 100,000 euros profit)": {
    fr: "PME (sur les premiers 100 000 euros de bénéfice)",
    nl: "KMO’s (op de eerste 100.000 euro winst)",
    de: "KMU (für die ersten 100.000 Euro Gewinn)",
  },
  "20 percent": {
    fr: "20 %",
    nl: "20 %",
    de: "20 %",
  },
  "SMEs must meet specific conditions, including employing at least one full-time worker.":
    {
      fr: "Les PME doivent remplir certaines conditions, notamment l’occupation d’au moins un travailleur à temps plein.",
      nl: "KMO’s moeten aan specifieke voorwaarden voldoen, waaronder het tewerkstellen van minimaal één voltijdse werknemer.",
      de: "KMU müssen bestimmte Voraussetzungen erfüllen, unter anderem mindestens eine Vollzeitkraft beschäftigen.",
    },
  "Corporate Income Tax Deductions and Incentives": {
    fr: "Déductions et incitants en matière d’impôt des sociétés",
    nl: "Aftrekken en stimulansen in de vennootschapsbelasting",
    de: "Abzüge und Anreize bei der Körperschaftsteuer",
  },
  "Belgium offers strong incentives, particularly for R&D and innovation.": {
    fr: "La Belgique offre des incitants importants, en particulier pour la R&D et l’innovation.",
    nl: "België biedt sterke stimulansen, vooral voor O&O en innovatie.",
    de: "Belgien gewährt erhebliche steuerliche Anreize, insbesondere für F&E und Innovation.",
  },
  "Key CIT Deductions (Rewritten Summary Table)": {
    fr: "Principaux avantages en ISoc (tableau récapitulatif actualisé)",
    nl: "Belangrijkste aftrekken in de vennootschapsbelasting (herwerkte samenvattende tabel)",
    de: "Zentrale Abzüge bei der Körperschaftsteuer (überarbeitete Übersicht)",
  },
  "Investment deduction": {
    fr: "Déduction pour investissements",
    nl: "Investeringsaftrek",
    de: "Investitionsabzug",
  },
  "Varies by asset type": {
    fr: "Varie selon le type d’actif",
    nl: "Verschilt naargelang het activatype",
    de: "Variiert je nach Art des Vermögenswerts",
  },
  "Available for qualifying fixed assets and R&D equipment": {
    fr: "Applicable aux immobilisations et équipements de R&D éligibles",
    nl: "Beschikbaar voor in aanmerking komende vaste activa en O&O-materieel",
    de: "Verfügbar für förderfähige Sachanlagen und F&E-Ausrüstung",
  },
  "R&D tax credit": {
    fr: "Crédit d’impôt pour la R&D",
    nl: "Belastingkrediet voor O&O",
    de: "F&E-Steuergutschrift",
  },
  "30 percent credit": {
    fr: "Crédit de 30 %",
    nl: "Krediet van 30 %",
    de: "Gutschrift von 30 %",
  },
  "On eligible research-related expenses": {
    fr: "Sur les dépenses de recherche éligibles",
    nl: "Op in aanmerking komende onderzoeksuitgaven",
    de: "Für förderfähige forschungsbezogene Aufwendungen",
  },
  "Patent income deduction": {
    fr: "Déduction pour revenus de brevets",
    nl: "Aftrek voor octrooinkomsten",
    de: "Abzug für Patenteinkünfte",
  },
  "Effective 3.75 percent rate": {
    fr: "Taux effectif de 3,75 %",
    nl: "Effectief tarief van 3,75 %",
    de: "Effektiver Steuersatz von 3,75 %",
  },
  "For income from qualifying patents": {
    fr: "Pour les revenus issus de brevets éligibles",
    nl: "Voor inkomsten uit in aanmerking komende octrooien",
    de: "Für Einkünfte aus begünstigten Patenten",
  },

  "Up to 85 percent exemption": {
    fr: "Exonération pouvant atteindre 85 %",
    nl: "Vrijstelling tot maximaal 85 %",
    de: "Steuerbefreiung von bis zu 85 %",
  },
  "Requires IP registration": {
    fr: "Nécessite l’enregistrement des droits de propriété intellectuelle",
    nl: "Vereist registratie van intellectuele-eigendomsrechten",
    de: "Erfordert eine Eintragung der Schutzrechte",
  },
  "Foreign tax credits": {
    fr: "Crédits d’impôt pour impôts étrangers",
    nl: "Belastingkredieten voor buitenlandse belasting",
    de: "Anrechnung ausländischer Steuern",
  },
  "Based on foreign tax paid": {
    fr: "Calculés sur base des impôts étrangers acquittés",
    nl: "Gebaseerd op in het buitenland betaalde belasting",
    de: "Bemessen nach tatsächlich gezahlten ausländischen Steuern",
  },
  "Avoids double taxation": {
    fr: "Permet d’éviter la double imposition",
    nl: "Voorkomt dubbele belastingheffing",
    de: "Vermeidet Doppelbesteuerung",
  },
  "Payroll tax exemption": {
    fr: "Exonération de précompte professionnel",
    nl: "Vrijstelling van bedrijfsvoorheffing",
    de: "Befreiung von der Lohnsteuer-Vorauszahlung",
  },
  "80 percent reduction": {
    fr: "Réduction de 80 %",
    nl: "Vermindering met 80 %",
    de: "Reduzierung um 80 %",
  },
  "Applies to eligible R&D personnel": {
    fr: "Applicable au personnel de R&D éligible",
    nl: "Van toepassing op in aanmerking komend O&O-personeel",
    de: "Gilt für förderfähiges F&E-Personal",
  },
  "Basket limitation": {
    fr: "Règle de limitation (basket rule)",
    nl: "Korflimiet (basket rule)",
    de: "Korbbegrenzung („Basket Rule“)",
  },
  "Minimum 15 percent of profits above 1 million euros must be taxable": {
    fr: "Au moins 15 % des bénéfices au-delà de 1 million d’euros doivent rester imposables",
    nl: "Minstens 15 % van de winst boven 1 miljoen euro moet belastbaar blijven",
    de: "Mindestens 15 % der Gewinne über 1 Million Euro müssen steuerpflichtig bleiben",
  },
  "Temporary rule expected to revert when EU global minimum tax is finalized": {
    fr: "Règle temporaire appelée à être adaptée lorsque l’impôt minimum mondial de l’UE sera finalisé",
    nl: "Tijdelijke regeling die naar verwachting wordt herzien zodra de EU-minimumbelasting volledig is ingevoerd",
    de: "Vorläufige Regelung, die voraussichtlich angepasst wird, sobald die EU-weite Mindestbesteuerung endgültig umgesetzt ist",
  },
  "Filing Corporate Income Tax": {
    fr: "Introduction de la déclaration à l’impôt des sociétés",
    nl: "Indiening van de vennootschapsbelasting",
    de: "Abgabe der Körperschaftsteuererklärung",
  },
  "Filing Requirements": {
    fr: "Obligations déclaratives",
    nl: "Indieningsverplichtingen",
    de: "Pflichten zur Abgabe der Steuererklärung",
  },
  "All companies must submit a CIT return. Failure to file can trigger penalties, estimated assessments or legal action.":
    {
      fr: "Toutes les sociétés doivent introduire une déclaration à l’impôt des sociétés. L’absence de dépôt peut entraîner des amendes, des cotisations d’office ou des poursuites.",
      nl: "Alle vennootschappen moeten een aangifte in de vennootschapsbelasting indienen. Niet-indiening kan leiden tot boetes, ambtshalve aanslagen of juridische stappen.",
      de: "Alle Gesellschaften müssen eine Körperschaftsteuererklärung einreichen. Unterlassene Abgaben können zu Strafen, Schätzungsbescheiden oder rechtlichen Schritten führen.",
    },
  "Filing Deadlines": {
    fr: "Délais de dépôt",
    nl: "Indieningstermijnen",
    de: "Abgabefristen",
  },
  "For Assessment Year 2024 (reference):": {
    fr: "Pour l’exercice d’imposition 2024 (référence) :",
    nl: "Voor aanslagjaar 2024 (ter referentie):",
    de: "Für das Veranlagungsjahr 2024 (Referenz):",
  },
  "Fiscal year ending between 31 December 2023 and 29 February 2024: Filing deadline 7 October 2024":
    {
      fr: "Exercice comptable se clôturant entre le 31 décembre 2023 et le 29 février 2024 : délai de dépôt fixé au 7 octobre 2024",
      nl: "Boekjaar dat eindigt tussen 31 december 2023 en 29 februari 2024: indiendatum 7 oktober 2024",
      de: "Geschäftsjahr mit Ende zwischen dem 31. Dezember 2023 und dem 29. Februar 2024: Abgabefrist 7. Oktober 2024",
    },
  "Companies filing early (before 30 August 2024) receive faster refund processing":
    {
      fr: "Les sociétés qui déposent tôt (avant le 30 août 2024) bénéficient d’un traitement plus rapide de leurs remboursements.",
      nl: "Vennootschappen die vroeg indienen (vóór 30 augustus 2024) genieten een snellere verwerking van terugbetalingen.",
      de: "Unternehmen, die frühzeitig (vor dem 30. August 2024) einreichen, erhalten Rückerstattungen in der Regel schneller bearbeitet.",
    },
  "Filing Method": {
    fr: "Mode de dépôt",
    nl: "Wijze van indiening",
    de: "Einreichungsweg",
  },
  "Mandatory electronic filing: Biztax": {
    fr: "Dépôt électronique obligatoire via Biztax",
    nl: "Verplichte elektronische indiening via Biztax",
    de: "Obligatorische elektronische Abgabe über Biztax",
  },
  "Paper forms: Only allowed when formally approved by the tax authorities": {
    fr: "Formulaires papier : uniquement autorisés avec l’accord formel de l’administration fiscale",
    nl: "Papieren formulieren: alleen toegestaan mits formele goedkeuring van de fiscale administratie",
    de: "Papierformulare: nur mit ausdrücklicher Zustimmung der Steuerbehörde zulässig",
  },
  
  "Payments can be made via MyMinfin or through bank transfer using the reference provided on the assessment notice.":
    {
      fr: "Les paiements peuvent être effectués via MyMinfin ou par virement bancaire en utilisant la communication figurant sur l’avertissement-extrait de rôle.",
      nl: "Betalingen kunnen gebeuren via MyMinfin of via een overschrijving met de mededeling die op het aanslagbiljet staat.",
      de: "Zahlungen können über MyMinfin oder per Banküberweisung unter Verwendung des auf dem Steuerbescheid angegebenen Verwendungszwecks erfolgen.",
    },
  "Role of FPS Finance": {
    fr: "Rôle du SPF Finances",
    nl: "Rol van de FOD Financiën",
    de: "Rolle des FÖD Finanzen",
  },
  "The Federal Public Service Finance manages:": {
    fr: "Le Service public fédéral Finances est responsable de :",
    nl: "De Federale Overheidsdienst Financiën staat in voor:",
    de: "Der Föderale Öffentliche Dienst Finanzen ist zuständig für:",
  },
  "Income tax administration": {
    fr: "La gestion de l’impôt sur le revenu",
    nl: "Het beheer van de personenbelasting",
    de: "Die Verwaltung der Einkommensteuer",
  },
  "Corporate tax oversight": {
    fr: "Le contrôle de l’impôt des sociétés",
    nl: "Het toezicht op de vennootschapsbelasting",
    de: "Die Aufsicht über die Körperschaftsteuer",
  },
  "VAT supervision": {
    fr: "Le suivi de la TVA",
    nl: "Het toezicht op de btw",
    de: "Die Überwachung der Mehrwertsteuer",
  },
  "Customs and excise": {
    fr: "Les douanes et accises",
    nl: "Douane en accijnzen",
    de: "Zoll- und Verbrauchsteuern",
  },
  "Taxpayer support services": {
    fr: "Les services d’assistance aux contribuables",
    nl: "Dienstverlening aan belastingplichtigen",
    de: "Unterstützungsdienste für Steuerpflichtige",
  },
  "Audit functions": {
    fr: "Les fonctions de contrôle et d’audit",
    nl: "Controle- en auditactiviteiten",
    de: "Prüfungs- und Kontrollfunktionen",
  },
  "It is the primary authority for compliance, assessments and dispute handling.":
    {
      fr: "Il constitue l’autorité centrale pour la conformité fiscale, les impositions et le traitement des litiges.",
      nl: "Het is de centrale autoriteit voor fiscale compliance, aanslagregeling en geschillenbehandeling.",
      de: "Er ist die zentrale Behörde für steuerliche Compliance, Veranlagung und Streitbeilegung.",
    },
  
  "Belgian income tax rules for individuals and companies remain among the more demanding in Europe, both in terms of rates and compliance obligations. Accurate documentation, timely filing and a clear understanding of deductions are essential to avoid penalties, audits or interest charges. With more tax processes shifting toward digital systems, taxpayers benefit significantly from well-organized financial records and clear reporting workflows.":
    {
      fr: "Les règles belges en matière d’impôt sur le revenu, pour les particuliers comme pour les sociétés, comptent parmi les plus exigeantes d’Europe tant au niveau des taux que des obligations de conformité. Une documentation précise, le respect des délais et une bonne compréhension des déductions sont essentiels pour éviter amendes, contrôles et intérêts de retard. À mesure que les procédures fiscales se digitalisent, des dossiers financiers bien structurés et des flux de reporting clairs deviennent un avantage déterminant.",
      nl: "De Belgische regels inzake inkomstenbelasting voor particulieren en vennootschappen behoren tot de meer veeleisende in Europa, zowel qua tariefniveau als qua complianceverplichtingen. Nauwkeurige documentatie, tijdige indiening en een helder inzicht in aftrekken zijn cruciaal om boetes, controles en nalatigheidsinteresten te vermijden. Nu steeds meer fiscale processen digitaliseren, halen belastingplichtigen duidelijk voordeel uit goed georganiseerde financiële dossiers en gestructureerde rapporteringsstromen.",
      de: "Die belgischen Vorschriften zur Einkommensteuer für Privatpersonen und Unternehmen zählen in Europa zu den anspruchsvolleren – sowohl hinsichtlich der Steuersätze als auch der Compliance-Pflichten. Sorgfältige Dokumentation, fristgerechte Abgabe und ein klares Verständnis der Abzugsmöglichkeiten sind entscheidend, um Sanktionen, Prüfungen und Säumniszuschläge zu vermeiden. Mit der fortschreitenden Digitalisierung der Steuerprozesse profitieren Steuerpflichtige erheblich von gut organisierten Finanzunterlagen und klar definierten Reporting-Abläufen.",
    },
  "Many businesses are also adopting integrated digital platforms to simplify compliance and manage their financial data more effectively. Solutions like Accqrate, which help centralize documentation and streamline reporting processes, can support organizations as they navigate Belgium's evolving tax environment with greater structure and reliability.":
    {
      fr: "De nombreuses entreprises adoptent également des plateformes numériques intégrées afin de simplifier la conformité et de mieux gérer leurs données financières. Des solutions comme Accqrate, qui centralisent la documentation et rationalisent les processus de reporting, peuvent aider les organisations à traverser l’évolution du paysage fiscal belge avec davantage de structure et de fiabilité.",
      nl: "Veel ondernemingen stappen bovendien over op geïntegreerde digitale platformen om de fiscale compliance te vereenvoudigen en hun financiële data efficiënter te beheren. Oplossingen zoals Accqrate, die documentatie centraliseren en rapporteringsprocessen stroomlijnen, ondersteunen organisaties bij het navigeren door het veranderende Belgische fiscale landschap met meer structuur en betrouwbaarheid.",
      de: "Viele Unternehmen setzen zudem auf integrierte digitale Plattformen, um Compliance zu vereinfachen und ihre Finanzdaten effizienter zu steuern. Lösungen wie Accqrate, die Unterlagen zentral bündeln und Berichtsprozesse verschlanken, unterstützen Organisationen dabei, sich mit mehr Struktur und Verlässlichkeit im sich wandelnden belgischen Steuerumfeld zu bewegen.",
    },

  //Belgium VAT Registration Number

  "Belgium VAT Registration Number": {
    fr: "Numéro de TVA en Belgique",
    nl: "Belgisch btw-nummer",
    de: "Belgische USt-IdNr. (Mehrwertsteuer-Identifikationsnummer)",
  },
  "Updated On : Nov 25th, 2024 | 18 min read": {
    fr: "Mis à jour le : 25 nov. 2024 | Lecture de 18 minutes",
    nl: "Bijgewerkt op: 25 nov. 2024 | 18 minuten leestijd",
    de: "Aktualisiert am: 25. Nov. 2024 | Lesezeit 18 Minuten",
  },
  "What It Is, Why You Need It, and How to Obtain One": {
    fr: "Définition, utilité et procédure d’obtention",
    nl: "Wat het is, waarom u het nodig hebt en hoe u het verkrijgt",
    de: "Was sie ist, warum sie erforderlich ist und wie man sie erhält",
  },
  "Any business that performs taxable activities in Belgium is required to register for VAT. Once registered, the company receives a VAT identification number, which is essential for invoicing, reporting, and participating in domestic or EU trade. This guide explains what a Belgian VAT number is, when registration becomes mandatory, how to obtain it, and how to verify validity through official systems.":
    {
      fr: "Toute entreprise qui exerce des activités taxables en Belgique doit s’enregistrer à la TVA. Une fois enregistrée, elle reçoit un numéro d’identification TVA, indispensable pour la facturation, les déclarations et la participation aux échanges nationaux et intracommunautaires. Ce guide explique ce qu’est un numéro de TVA belge, à partir de quand l’enregistrement devient obligatoire, comment l’obtenir et comment en vérifier la validité via les systèmes officiels.",
      nl: "Elke onderneming die in België belastbare activiteiten verricht, moet zich voor de btw laten registreren. Na registratie ontvangt de onderneming een btw-identificatienummer, dat essentieel is voor facturatie, rapportering en deelname aan binnenlandse en EU-handel. Deze gids licht toe wat een Belgisch btw-nummer is, wanneer registratie verplicht wordt, hoe u het aanvraagt en hoe u de geldigheid via officiële systemen kunt controleren.",
      de: "Jedes Unternehmen, das in Belgien steuerpflichtige Tätigkeiten ausübt, muss sich für die Mehrwertsteuer registrieren lassen. Nach der Registrierung erhält das Unternehmen eine Mehrwertsteuer-Identifikationsnummer, die für Rechnungsstellung, Meldungen sowie für den nationalen und EU-weiten Handel unerlässlich ist. Dieser Leitfaden erläutert, was eine belgische USt-IdNr. ist, wann die Registrierung verpflichtend wird, wie sie beantragt wird und wie sich ihre Gültigkeit über offizielle Systeme überprüfen lässt.",
    },
  "Understanding Belgium's VAT Registration Number": {
    fr: "Comprendre le numéro d’enregistrement TVA belge",
    nl: "Inzicht in het Belgische btw-registratienummer",
    de: "Grundlagen der belgischen Mehrwertsteuer-Registrierungsnummer",
  },
  "A Belgian VAT registration number is a unique tax identifier issued to businesses that register for VAT. The number consists of ten digits linked to the company's enterprise number in the Crossroads Bank for Enterprises. When the prefix 'BE' is added, this becomes the official VAT identification number used on invoices, returns, and EU trade documents.":
    {
      fr: "Le numéro d’enregistrement TVA belge est un identifiant fiscal unique attribué aux entreprises qui s’enregistrent à la TVA. Il se compose de dix chiffres liés au numéro d’entreprise dans la Banque-Carrefour des Entreprises. Lorsqu’il est précédé du préfixe « BE », il devient le numéro d’identification TVA officiel utilisé sur les factures, les déclarations et les documents de commerce intracommunautaire.",
      nl: "Het Belgische btw-registratienummer is een uniek fiscaal identificatienummer dat wordt toegekend aan ondernemingen die zich voor de btw laten registreren. Het bestaat uit tien cijfers die gekoppeld zijn aan het ondernemingsnummer in de Kruispuntbank van Ondernemingen. Met het voorvoegsel “BE” wordt dit het officiële btw-identificatienummer dat op facturen, aangiften en EU-handelsdocumenten wordt vermeld.",
      de: "Die belgische Mehrwertsteuer-Registrierungsnummer ist eine eindeutige steuerliche Kennung, die Unternehmen nach der Anmeldung zur Mehrwertsteuer erhalten. Sie besteht aus zehn Ziffern, die mit der Unternehmensnummer in der Zentrale Datenbank der Unternehmen verknüpft sind. Mit dem Präfix „BE“ wird sie zur offiziellen Mehrwertsteuer-Identifikationsnummer, die auf Rechnungen, Steuererklärungen und Unterlagen für den EU-Handel verwendet wird.",
    },
  "VAT Number Format in Belgium": {
    fr: "Format du numéro de TVA en Belgique",
    nl: "Formaat van het Belgische btw-nummer",
    de: "Format der belgischen Mehrwertsteuernummer",
  },
  Prefix: {
    fr: "Préfixe",
    nl: "Voorvoegsel",
    de: "Präfix",
  },
  BE: {
    fr: "BE",
    nl: "BE",
    de: "BE",
  },
  Structure: {
    fr: "Structure",
    nl: "Structuur",
    de: "Struktur",
  },
  "BE followed by ten digits": {
    fr: "BE suivi de dix chiffres",
    nl: "BE gevolgd door tien cijfers",
    de: "BE gefolgt von zehn Ziffern",
  },
  Examples: {
    fr: "Exemples",
    nl: "Voorbeelden",
    de: "Beispiele",
  },
  "BE0999999999 or BE1999999999": {
    fr: "BE0999999999 ou BE1999999999",
    nl: "BE0999999999 of BE1999999999",
    de: "BE0999999999 oder BE1999999999",
  },
  "The number becomes active only after VAT activation is completed through the Federal Public Service Finance.":
    {
      fr: "Le numéro ne devient actif qu’une fois l’activation TVA finalisée auprès du Service public fédéral Finances.",
      nl: "Het nummer wordt pas actief nadat de btw-activatie is afgerond via de Federale Overheidsdienst Financiën.",
      de: "Die Nummer wird erst aktiv, nachdem die Mehrwertsteueraktivierung über den Föderalen Öffentlichen Dienst Finanzen abgeschlossen wurde.",
    },
  "Why a VAT Number Is Required": {
    fr: "Pourquoi un numéro de TVA est requis",
    nl: "Waarom een btw-nummer verplicht is",
    de: "Warum eine Mehrwertsteuernummer erforderlich ist",
  },
  "A VAT registration number is mandatory for businesses that supply goods or services subject to VAT. It enables compliance with Belgian and EU VAT rules and is required for several core functions.":
    {
      fr: "Un numéro de TVA est obligatoire pour les entreprises qui livrent des biens ou prestent des services soumis à la TVA. Il permet de respecter les règles belges et européennes en matière de TVA et est indispensable pour plusieurs fonctions clés.",
      nl: "Een btw-registratienummer is verplicht voor ondernemingen die goederen leveren of diensten verrichten die aan btw onderworpen zijn. Het maakt naleving van de Belgische en Europese btw-regels mogelijk en is vereist voor verschillende kernprocessen.",
      de: "Eine Mehrwertsteuer-Registrierungsnummer ist für Unternehmen verpflichtend, die mehrwertsteuerpflichtige Waren liefern oder Dienstleistungen erbringen. Sie ermöglicht die Einhaltung der belgischen und EU-weiten MwSt.-Vorschriften und ist für mehrere zentrale Funktionen notwendig.",
    },
  "Key Purposes of the VAT Number": {
    fr: "Principaux usages du numéro de TVA",
    nl: "Belangrijkste functies van het btw-nummer",
    de: "Zentrale Zwecke der Mehrwertsteuernummer",
  },
  Invoicing: {
    fr: "Facturation",
    nl: "Facturatie",
    de: "Rechnungsstellung",
  },
  "Must be shown on all invoices for taxable transactions": {
    fr: "Doit figurer sur toutes les factures relatives à des opérations taxables",
    nl: "Moet op alle facturen voor belastbare handelingen worden vermeld",
    de: "Muss auf allen Rechnungen über steuerpflichtige Umsätze angegeben sein",
  },
  "VAT Returns": {
    fr: "Déclarations de TVA",
    nl: "Btw-aangiften",
    de: "Mehrwertsteuererklärungen",
  },
  "Used to declare collected VAT and claim input VAT": {
    fr: "Utilisé pour déclarer la TVA collectée et récupérer la TVA déductible",
    nl: "Gebruikt om geïnde btw aan te geven en aftrekbare btw terug te vorderen",
    de: "Wird genutzt, um vereinnahmte MwSt. zu melden und Vorsteuer geltend zu machen",
  },
  "EU Trade": {
    fr: "Échanges intracommunautaires",
    nl: "EU-handel",
    de: "Handel innerhalb der EU",
  },
  "Required for intra-EU supplies, acquisitions, and reverse charge transactions":
    {
      fr: "Requis pour les livraisons, acquisitions intracommunautaires et opérations soumises à l’autoliquidation",
      nl: "Vereist voor intracommunautaire leveringen, verwervingen en verleggingsmechanismen",
      de: "Erforderlich für innergemeinschaftliche Lieferungen, Erwerbe und Reverse-Charge-Vorgänge",
    },
  Compliance: {
    fr: "Conformité",
    nl: "Compliance",
    de: "Compliance",
  },
  "Allows Belgian authorities to identify, audit, and verify VAT-liable businesses":
    {
      fr: "Permet aux autorités belges d’identifier, de contrôler et de vérifier les entreprises assujetties à la TVA",
      nl: "Stelt de Belgische autoriteiten in staat om btw-plichtige ondernemingen te identificeren, te controleren en te verifiëren",
      de: "Ermöglicht es den belgischen Behörden, mehrwertsteuerpflichtige Unternehmen zu identifizieren, zu prüfen und zu überwachen",
    },
  "Without a valid VAT number, invoices may be considered non-compliant, which affects input VAT recovery and exposes businesses to penalties.":
    {
      fr: "Sans numéro de TVA valide, les factures peuvent être considérées comme non conformes, ce qui compromet le droit à déduction de la TVA et expose l’entreprise à des sanctions.",
      nl: "Zonder geldig btw-nummer kunnen facturen als niet-conform worden beschouwd, wat de terugvordering van btw in gevaar brengt en ondernemingen aan sancties blootstelt.",
      de: "Ohne gültige Mehrwertsteuernummer können Rechnungen als nicht konform eingestuft werden, was den Vorsteuerabzug gefährdet und Unternehmen Sanktionen aussetzt.",
    },
  "When VAT Registration Becomes Mandatory": {
    fr: "Quand l’enregistrement à la TVA devient obligatoire",
    nl: "Wanneer btw-registratie verplicht wordt",
    de: "Wann die Mehrwertsteuerregistrierung verpflichtend wird",
  },
  "A business must register for VAT in Belgium if it regularly performs taxable activities defined in the Belgian VAT Code. Registration applies regardless of whether the business is Belgian or foreign.":
    {
      fr: "Une entreprise doit s’enregistrer à la TVA en Belgique lorsqu’elle exerce de manière régulière des activités taxables telles que définies dans le Code belge de la TVA. Cette obligation vaut aussi bien pour les entreprises belges que pour les entreprises étrangères.",
      nl: "Een onderneming moet zich in België voor de btw registreren zodra zij regelmatig belastbare handelingen verricht zoals omschreven in het Belgische Btw-Wetboek. De registratieplicht geldt zowel voor Belgische als voor buitenlandse ondernemingen.",
      de: "Ein Unternehmen muss sich in Belgien zur Mehrwertsteuer registrieren lassen, wenn es regelmäßig steuerpflichtige Tätigkeiten im Sinne des belgischen Mehrwertsteuergesetzbuchs ausübt. Diese Pflicht gilt unabhängig davon, ob das Unternehmen belgisch oder ausländisch ist.",
    },
  "Conditions Triggering VAT Registration": {
    fr: "Conditions entraînant l’assujettissement à la TVA",
    nl: "Voorwaarden die een btw-registratie uitlokken",
    de: "Voraussetzungen, die eine Mehrwertsteuerregistrierung auslösen",
  },
  "Regular supply of goods or services": {
    fr: "Fourniture régulière de biens ou de services",
    nl: "Regelmatige levering van goederen of diensten",
    de: "Regelmäßige Lieferung von Waren oder Dienstleistungen",
  },
  "Activities performed on a recurring basis": {
    fr: "Activités exercées de manière récurrente",
    nl: "Activiteiten die op terugkerende basis worden uitgevoerd",
    de: "Wiederkehrend ausgeübte Tätigkeiten",
  },
  "Independent activity": {
    fr: "Activité exercée de manière indépendante",
    nl: "Onafhankelijke activiteit",
    de: "Selbstständige Tätigkeit",
  },
  "Not performed as an employee": {
    fr: "Non exercée dans le cadre d’un contrat de travail",
    nl: "Niet uitgevoerd in dienstverband als werknemer",
    de: "Nicht im Rahmen eines Arbeitsverhältnisses ausgeübt",
  },
  "Profit motive irrelevant": {
    fr: "Indépendamment de l’objectif de profit",
    nl: "Winstoogmerk is niet doorslaggevend",
    de: "Gewinnerzielungsabsicht ist nicht ausschlaggebend",
  },
  "VAT applies even if not intended to generate profit": {
    fr: "La TVA s’applique même si l’activité n’a pas pour but de générer un bénéfice",
    nl: "Btw is van toepassing, ook als de activiteit niet bedoeld is om winst te maken",
    de: "Mehrwertsteuer fällt auch an, wenn mit der Tätigkeit kein Gewinn angestrebt wird",
  },
  "Primary or secondary activity": {
    fr: "Activité principale ou secondaire",
    nl: "Hoofd- of nevenactiviteit",
    de: "Haupt- oder Nebentätigkeit",
  },
  "Applies to both main and side business activities": {
    fr: "Couvre à la fois l’activité principale et les activités accessoires",
    nl: "Van toepassing op zowel hoofd- als nevenactiviteiten",
    de: "Gilt sowohl für die Haupt- als auch für Nebentätigkeiten",
  },
  "Location-neutral rule": {
    fr: "Règle neutre quant au lieu d’exécution",
    nl: "Locatie-neutrale regel",
    de: "Standortunabhängige Regel",
  },
  "Applies even if work is performed outside the business's primary location": {
    fr: "S’applique même lorsque l’activité est exercée en dehors du lieu d’établissement principal",
    nl: "Geldt ook wanneer werkzaamheden buiten de primaire vestigingsplaats worden uitgevoerd",
    de: "Gilt auch, wenn Tätigkeiten außerhalb des hauptsächlichen Betriebssitzes ausgeübt werden",
  },
  "Exceptions for Foreign Companies": {
    fr: "Exceptions pour les entreprises étrangères",
    nl: "Uitzonderingen voor buitenlandse ondernemingen",
    de: "Ausnahmen für ausländische Unternehmen",
  },
  "Some foreign businesses may not need to register for VAT if:": {
    fr: "Certaines entreprises étrangères ne doivent pas nécessairement s’enregistrer à la TVA si :",
    nl: "Sommige buitenlandse ondernemingen hoeven zich niet altijd voor de btw te registreren wanneer:",
    de: "Einige ausländische Unternehmen müssen sich nicht zwingend zur Mehrwertsteuer registrieren, wenn:",
  },
  "Their Belgian activities fall under the reverse charge mechanism, or": {
    fr: "Leurs activités en Belgique relèvent du mécanisme d’autoliquidation, ou",
    nl: "Hun Belgische activiteiten onder het verleggingsmechanisme vallen, of",
    de: "Ihre belgischen Tätigkeiten dem Reverse-Charge-Verfahren unterliegen, oder",
  },
  "They have no taxable output in Belgium but only incur Belgian input VAT.": {
    fr: "Elles ne réalisent aucune opération taxable en Belgique mais ne supportent que de la TVA en amont en Belgique.",
    nl: "Zij in België geen belastbare output hebben maar enkel Belgische voorbelasting dragen.",
    de: "Sie in Belgien keine steuerpflichtigen Umsätze erzielen, sondern lediglich belgische Vorsteuer tragen.",
  },
  "EU businesses may also register voluntarily if they need to recover Belgian VAT exceeding 10,000 euros in a calendar year.":
    {
      fr: "Les entreprises établies dans l’UE peuvent également s’enregistrer volontairement si elles doivent récupérer plus de 10 000 euros de TVA belge sur une année civile.",
      nl: "Ondernemingen binnen de EU kunnen zich ook vrijwillig registreren wanneer zij in één kalenderjaar meer dan 10.000 euro aan Belgische btw willen terugvorderen.",
      de: "Unternehmen aus der EU können sich zudem freiwillig registrieren, wenn sie in einem Kalenderjahr mehr als 10.000 Euro belgische Mehrwertsteuer zurückfordern möchten.",
    },
  "How to Obtain a VAT Registration Number in Belgium": {
    fr: "Comment obtenir un numéro de TVA en Belgique",
    nl: "Hoe u een Belgisch btw-nummer verkrijgt",
    de: "So erhalten Sie eine belgische Mehrwertsteuernummer",
  },
  "VAT registration requires an enterprise number from the Crossroads Bank for Enterprises (CBE). Only after this number is issued can a business activate its VAT identification.":
    {
      fr: "L’enregistrement à la TVA nécessite au préalable un numéro d’entreprise auprès de la Banque-Carrefour des Entreprises (BCE). Ce n’est qu’une fois ce numéro attribué que l’entreprise peut activer son identification TVA.",
      nl: "Voor een btw-registratie is eerst een ondernemingsnummer bij de Kruispuntbank van Ondernemingen (KBO) vereist. Pas nadat dit nummer is toegekend, kan de onderneming haar btw-identificatie activeren.",
      de: "Für die Mehrwertsteuerregistrierung ist zunächst eine Unternehmensnummer bei der Zentralen Datenbank der Unternehmen (ZDU) erforderlich. Erst nachdem diese Nummer vergeben wurde, kann das Unternehmen seine Mehrwertsteueridentifikation aktivieren.",
    },
  "Step-by-Step Process to Get a VAT Number": {
    fr: "Procédure étape par étape pour obtenir un numéro de TVA",
    nl: "Stapsgewijze procedure om een btw-nummer te verkrijgen",
    de: "Schritt-für-Schritt-Vorgehen zur Beantragung einer Mehrwertsteuernummer",
  },
  "Obtain an enterprise number – Register the business with the CBE.": {
    fr: "Obtenir un numéro d’entreprise – Enregistrer l’entité auprès de la BCE.",
    nl: "Vraag een ondernemingsnummer aan – Registreer de onderneming bij de KBO.",
    de: "Unternehmensnummer beantragen – Registrierung des Unternehmens bei der ZDU.",
  },
  "Wait at least two days – VAT activation requests cannot be submitted immediately after CBE registration.":
    {
      fr: "Attendre au moins deux jours – Les demandes d’activation TVA ne peuvent pas être introduites immédiatement après l’inscription à la BCE.",
      nl: "Wacht minstens twee dagen – Btw-activatie kan niet onmiddellijk na registratie in de KBO worden aangevraagd.",
      de: "Mindestens zwei Tage warten – Anträge auf Mehrwertsteueraktivierung können nicht unmittelbar nach der Registrierung bei der ZDU eingereicht werden.",
    },
  "Submit VAT Registration Form 604A through MyMinfin or via an accountant or accredited business counter. Provide:":
    {
      fr: "Introduire le formulaire 604A d’enregistrement TVA via MyMinfin ou par l’intermédiaire d’un comptable ou d’un guichet d’entreprises agréé. Indiquer :",
      nl: "Dien formulier 604A voor btw-registratie in via MyMinfin of via een accountant of erkend ondernemingsloket. Vermeld daarbij:",
      de: "Übermittlung des Formulars 604A zur MwSt.-Registrierung über MyMinfin oder über einen Steuerberater bzw. ein anerkanntes Unternehmensschalter. Anzugeben sind:",
    },
  "Registered business address": {
    fr: "Adresse du siège enregistré",
    nl: "Geregistreerd bedrijfsadres",
    de: "Eingetragene Geschäftsadresse",
  },
  "Bank account details": {
    fr: "Coordonnées bancaires",
    nl: "Bankrekeninggegevens",
    de: "Bankverbindung",
  },
  "Description of activities": {
    fr: "Description des activités",
    nl: "Omschrijving van de activiteiten",
    de: "Beschreibung der Tätigkeit(en)",
  },
  "Contact information": {
    fr: "Coordonnées de contact",
    nl: "Contactgegevens",
    de: "Kontaktangaben",
  },
  "Activation by FPS Finance – Once approved, the VAT identification number tied to the enterprise number becomes active.":
    {
      fr: "Activation par le SPF Finances – Une fois la demande approuvée, le numéro d’identification TVA lié au numéro d’entreprise devient actif.",
      nl: "Activatie door de FOD Financiën – Na goedkeuring wordt het btw-identificatienummer dat aan het ondernemingsnummer is gekoppeld, geactiveerd.",
      de: "Aktivierung durch den FÖD Finanzen – Nach Genehmigung wird die an die Unternehmensnummer gekoppelte Mehrwertsteueridentifikation aktiviert.",
    },
  "Notification Methods": {
    fr: "Modes de notification",
    nl: "Wijzen van kennisgeving",
    de: "Formen der Bekanntgabe",
  },
  "Digital notification through the business's eBox": {
    fr: "Notification électronique via l’eBox de l’entreprise",
    nl: "Digitale kennisgeving via de eBox van de onderneming",
    de: "Elektronische Mitteilung über die eBox des Unternehmens",
  },
  "Registered mail if the eBox notification was not accessed": {
    fr: "Envoi par courrier recommandé si la notification via l’eBox n’a pas été consultée",
    nl: "Aangetekende zending indien de eBox-melding niet werd geopend",
    de: "Zustellung per Einschreiben, falls die eBox-Mitteilung nicht abgerufen wurde",
  },
  "How to Verify a Belgian VAT Number": {
    fr: "Comment vérifier un numéro de TVA belge",
    nl: "Hoe een Belgisch btw-nummer te controleren",
    de: "Wie Sie eine belgische Mehrwertsteuernummer prüfen",
  },
  "Businesses trading within the EU must validate VAT numbers to comply with VAT exemption rules and reduce risk of fraud.":
    {
      fr: "Les entreprises actives dans le commerce intracommunautaire doivent vérifier les numéros de TVA afin de respecter les règles d’exonération et de réduire le risque de fraude.",
      nl: "Ondernemingen die binnen de EU handel drijven, moeten btw-nummers valideren om aan vrijstellingsregels te voldoen en het frauderisico te beperken.",
      de: "Unternehmen, die innerhalb der EU Geschäfte tätigen, müssen Mehrwertsteuernummern überprüfen, um die Voraussetzungen für Steuerbefreiungen zu erfüllen und Betrugsrisiken zu senken.",
    },
  "Verification Process": {
    fr: "Processus de vérification",
    nl: "Verificatieprocedure",
    de: "Prüfverfahren",
  },
  "Confirm that the number is in the correct Belgian format.": {
    fr: "Vérifier que le numéro respecte le format belge.",
    nl: "Controleer of het nummer het juiste Belgische formaat heeft.",
    de: "Prüfen, ob die Nummer dem belgischen Format entspricht.",
  },
  "Use the VIES (VAT Information Exchange System) provided by the European Commission.":
    {
      fr: "Utiliser le système VIES (VAT Information Exchange System) mis à disposition par la Commission européenne.",
      nl: "Gebruik het VIES-systeem (VAT Information Exchange System) van de Europese Commissie.",
      de: "Das von der Europäischen Kommission bereitgestellte VIES-System (VAT Information Exchange System) verwenden.",
    },
  "Visit the VIES website": {
    fr: "Accéder au site web VIES",
    nl: "Ga naar de VIES-website",
    de: "Die VIES-Webseite aufrufen",
  },
  "Select Belgium": {
    fr: "Sélectionner la Belgique",
    nl: "België selecteren",
    de: "Belgien auswählen",
  },
  "Enter the VAT number": {
    fr: "Saisir le numéro de TVA",
    nl: "Het btw-nummer invoeren",
    de: "Die Mehrwertsteuernummer eingeben",
  },
  "Check validity in real time": {
    fr: "Contrôler la validité en temps réel",
    nl: "De geldigheid in real time controleren",
    de: "Gültigkeit in Echtzeit prüfen",
  },
  "If VIES cannot confirm the number or is temporarily unavailable, companies may contact the Belgian Federal Public Service Finance for manual verification.":
    {
      fr: "Si VIES ne peut pas confirmer le numéro ou est temporairement indisponible, les entreprises peuvent contacter le SPF Finances pour une vérification manuelle.",
      nl: "Als VIES het nummer niet kan bevestigen of tijdelijk onbeschikbaar is, kunnen ondernemingen de FOD Financiën contacteren voor een manuele controle.",
      de: "Kann VIES die Nummer nicht bestätigen oder ist der Dienst vorübergehend nicht verfügbar, können Unternehmen den Föderalen Öffentlichen Dienst Finanzen zur manuellen Überprüfung kontaktieren.",
    },
  "Responsibilities After VAT Registration": {
    fr: "Obligations après l’enregistrement à la TVA",
    nl: "Verplichtingen na btw-registratie",
    de: "Pflichten nach der Mehrwertsteuerregistrierung",
  },
  "Once registered, businesses must follow Belgian VAT rules and maintain accurate documentation. Failure to comply may lead to administrative penalties, interest charges, and restrictions during audits.":
    {
      fr: "Une fois enregistrées, les entreprises doivent respecter la réglementation belge en matière de TVA et conserver une documentation exacte. Le non-respect de ces obligations peut entraîner des amendes administratives, des intérêts de retard et des limitations lors de contrôles fiscaux.",
      nl: "Na registratie moeten ondernemingen de Belgische btw-regels naleven en een nauwkeurige administratie bijhouden. Niet-naleving kan leiden tot administratieve boetes, nalatigheidsinteresten en beperkingen tijdens controles.",
      de: "Nach der Registrierung müssen Unternehmen die belgischen MwSt.-Vorschriften einhalten und eine ordnungsgemäße Dokumentation führen. Verstöße können zu Verwaltungssanktionen, Verzugszinsen und Einschränkungen im Rahmen von Betriebsprüfungen führen.",
    },
  "Core Obligations of VAT-Registered Businesses": {
    fr: "Obligations essentielles des assujettis à la TVA",
    nl: "Kernverplichtingen voor btw-plichtige ondernemingen",
    de: "Zentrale Pflichten für mehrwertsteuerregistrierte Unternehmen",
  },
  "Apply correct VAT rates": {
    fr: "Appliquer les taux de TVA corrects",
    nl: "De juiste btw-tarieven toepassen",
    de: "Die korrekten Mehrwertsteuersätze anwenden",
  },
  "Use 6, 12 or 21 percent depending on the goods or services": {
    fr: "Utiliser les taux de 6 %, 12 % ou 21 % selon la nature des biens ou services",
    nl: "Gebruik 6, 12 of 21 procent afhankelijk van de geleverde goederen of diensten",
    de: "Je nach Art der Waren oder Dienstleistungen 6 %, 12 % oder 21 % anwenden",
  },
  "Issue compliant invoices": {
    fr: "Émettre des factures conformes",
    nl: "Conforme facturen uitreiken",
    de: "Rechtskonforme Rechnungen ausstellen",
  },
  "Include VAT number, rate applied, and invoice details": {
    fr: "Y faire figurer le numéro de TVA, le taux appliqué et les mentions obligatoires de la facture",
    nl: "Het btw-nummer, het toegepaste tarief en de vereiste factuurgegevens vermelden",
    de: "Angabe der Mehrwertsteuernummer, des angewandten Steuersatzes und aller Pflichtangaben auf der Rechnung",
  },
  "Submit VAT returns": {
    fr: "Introduire les déclarations de TVA",
    nl: "Btw-aangiften indienen",
    de: "Mehrwertsteuererklärungen einreichen",
  },
  "Monthly or quarterly depending on turnover": {
    fr: "Mensuellement ou trimestriellement selon le chiffre d’affaires",
    nl: "Maandelijks of per kwartaal, afhankelijk van de omzet",
    de: "Monatlich oder vierteljährlich, abhängig vom Umsatz",
  },
  "Maintain records": {
    fr: "Conserver une comptabilité et des pièces justificatives",
    nl: "Een correcte administratie bijhouden",
    de: "Unterlagen ordnungsgemäß aufbewahren",
  },
  "Keep invoices and VAT documentation for at least seven years": {
    fr: "Conserver les factures et documents liés à la TVA pendant au moins sept ans",
    nl: "Facturen en btw-documenten minimaal zeven jaar bewaren",
    de: "Rechnungen und Mehrwertsteuerunterlagen mindestens sieben Jahre aufbewahren",
  },
  "Submit EU declarations": {
    fr: "Introduire les déclarations européennes",
    nl: "EU-opgaven indienen",
    de: "EU-Meldungen einreichen",
  },
  "File Intrastat and European Sales Listings when required": {
    fr: "Déposer les déclarations Intrastat et relevés de livraisons intracommunautaires lorsque requis",
    nl: "Intrastat-aangiften en opgaven van intracommunautaire leveringen indienen wanneer vereist",
    de: "Intrastat-Meldungen und Zusammenfassende Meldungen abgeben, sofern erforderlich",
  },
  "Verify partner VAT numbers": {
    fr: "Vérifier les numéros de TVA des partenaires",
    nl: "Btw-nummers van handelspartners controleren",
    de: "Mehrwertsteuernummern der Handelspartner prüfen",
  },
  "Mandatory for intra-EU supplies": {
    fr: "Obligatoire pour les livraisons intracommunautaires",
    nl: "Verplicht voor intracommunautaire leveringen",
    de: "Verpflichtend für innergemeinschaftliche Lieferungen",
  },
  "Notify changes": {
    fr: "Signaler les changements",
    nl: "Wijzigingen melden",
    de: "Änderungen mitteilen",
  },
  "Report updates to business name, address, or activity to FPS Finance": {
    fr: "Communiquer au SPF Finances toute modification de la dénomination, de l’adresse ou de l’activité",
    nl: "Wijzigingen in naam, adres of activiteiten doorgeven aan de FOD Financiën",
    de: "Änderungen von Firmenname, Adresse oder Tätigkeit dem FÖD Finanzen melden",
  },
  "Compliance ensures uninterrupted business operations and protects against fines or challenges during audits":
    {
      fr: "Une bonne conformité garantit la continuité des activités et limite le risque d’amendes ou de contestations lors de contrôles.",
      nl: "Correcte naleving zorgt voor ononderbroken bedrijfsvoering en beschermt tegen boetes of betwistingen bij controles.",
      de: "Steuerliche Compliance sichert einen reibungslosen Geschäftsbetrieb und schützt vor Bußgeldern oder Beanstandungen im Rahmen von Prüfungen.",
    },
 
  "A Belgian VAT registration number is a fundamental requirement for any business conducting taxable activities. It ensures valid invoicing, accurate VAT reporting, and access to VAT exemptions within the EU. Whether operating in Belgium or abroad, maintaining compliance with VAT registration, filing and verification rules is essential to avoid significant financial penalties. As more processes move online, businesses benefit from organized financial systems that help maintain accuracy and meet regulatory obligations. Solutions like Accqrate, which support structured invoicing and VAT-related workflows, can help companies stay compliant and operate confidently within Belgium's evolving tax environment.":
    {
      fr: "Le numéro d’enregistrement TVA belge est une exigence incontournable pour toute entreprise qui exerce des activités taxables. Il garantit la validité des factures, une déclaration de TVA exacte et l’accès aux exonérations applicables au sein de l’UE. Qu’une société opère en Belgique ou à l’étranger, le respect des règles d’enregistrement, de déclaration et de vérification de la TVA est essentiel pour éviter des sanctions financières importantes. À mesure que les procédures se dématérialisent, les entreprises tirent profit de systèmes financiers organisés qui renforcent la fiabilité des données et facilitent le respect des obligations réglementaires. Des solutions comme Accqrate, qui prennent en charge la facturation structurée et les flux de travail liés à la TVA, aident les sociétés à rester conformes et à évoluer en toute confiance dans l’environnement fiscal belge en pleine transformation.",
      nl: "Een Belgisch btw-registratienummer is een basisvoorwaarde voor elke onderneming die belastbare activiteiten verricht. Het waarborgt geldige facturatie, correcte btw-rapportering en toegang tot de toepasselijke vrijstellingen binnen de EU. Of een bedrijf nu in België of vanuit het buitenland opereert, naleving van de regels rond registratie, aangifte en controle is cruciaal om aanzienlijke financiële sancties te vermijden. Nu steeds meer processen digitaal verlopen, profiteren ondernemingen van goed georganiseerde financiële systemen die de nauwkeurigheid vergroten en de naleving van regelgeving ondersteunen. Oplossingen zoals Accqrate, die gestructureerde facturatie en btw-gerelateerde workflows ondersteunen, helpen bedrijven om compliant te blijven en met vertrouwen te opereren in het veranderende Belgische fiscale landschap.",
      de: "Eine belgische Mehrwertsteuer-Registrierungsnummer ist eine zentrale Voraussetzung für jedes Unternehmen mit steuerpflichtigen Tätigkeiten. Sie sichert die Rechtsgültigkeit von Rechnungen, eine korrekte MwSt.-Deklaration und den Zugang zu einschlägigen Steuerbefreiungen innerhalb der EU. Unabhängig davon, ob ein Unternehmen in Belgien oder aus dem Ausland heraus tätig ist, ist die konsequente Einhaltung der Regeln zur Registrierung, Erklärung und Überprüfung der Mehrwertsteuer entscheidend, um erhebliche finanzielle Sanktionen zu vermeiden. Da immer mehr Abläufe digital abgewickelt werden, profitieren Unternehmen von gut strukturierten Finanzsystemen, die Genauigkeit und Regeltreue unterstützen. Lösungen wie Accqrate, die strukturierte Rechnungsstellung und mehrwertsteuerbezogene Workflows abbilden, helfen Unternehmen, compliant zu bleiben und sich im sich wandelnden belgischen Steuerumfeld sicher zu bewegen.",
    },

    // --------- E-INVOICING BELGIUM SECTION ---------

  'Swift Peppol Onboarding': {
    nl: "Snelle Peppol-onboarding",
    de: "Schnelles Peppol-Onboarding",
    fr: "Onboarding Peppol rapide"
  },

  'Get started with Belgiums e-invoicing mandate in minutes. Provide your company details, and Accqrate activates your Peppol-ready, EN 16931-compliant setup instantly for seamless B2B e-invoicing.': {
    nl: "Start binnen enkele minuten met de Belgische e-factureringsverplichting. Geef uw bedrijfsgegevens door en Accqrate activeert onmiddellijk uw Peppol-klare en EN 16931-conforme omgeving voor naadloze B2B-e-facturatie.",
    de: "Starten Sie in wenigen Minuten mit Belgiens E-Rechnungsmandat. Geben Sie Ihre Unternehmensdaten an, und Accqrate aktiviert sofort Ihre Peppol-bereite, EN 16931-konforme Umgebung für nahtlose B2B-E-Rechnungen.",
    fr: "Commencez en quelques minutes avec le mandat belge de facturation électronique. Fournissez les informations de votre entreprise et Accqrate active instantanément votre configuration prête pour Peppol et conforme à l’EN 16931 pour une e-facturation B2B fluide."
  },

  'Automatic EN 16931 Field Mapping': {
    nl: "Automatische EN 16931-veldmapping",
    de: "Automatische EN 16931-Feldzuordnung",
    fr: "Cartographie automatique des champs EN 16931"
  },

  'Remove formatting and compliance errors with Accqrates automated mapping of all mandatory EN 16931 fields, ensuring every Belgian e-invoice meets the structured Peppol and UBL standards, no manual intervention required.': {
    nl: "Elimineer opmaak- en conformiteitsfouten met Accqrates automatische mapping van alle verplichte EN 16931-velden, zodat elke Belgische e-factuur voldoet aan de gestructureerde Peppol- en UBL-normen, zonder handmatige tussenkomst.",
    de: "Beseitigen Sie Formatierungs- und Compliance-Fehler durch Accqrates automatische Zuordnung aller obligatorischen EN 16931-Felder, sodass jede belgische E-Rechnung den strukturierten Peppol- und UBL-Standards entspricht – ganz ohne manuelle Eingriffe.",
    fr: "Éliminez les erreurs de formatage et de conformité grâce à la cartographie automatique par Accqrate de tous les champs obligatoires EN 16931, garantissant que chaque e-facture belge respecte les normes structurées Peppol et UBL, sans intervention manuelle."
  },

  'Comprehensive Peppol Reconciliation Dashboard': {
    nl: "Uitgebreid Peppol-afstemmingsdashboard",
    de: "Umfassendes Peppol-Abgleichs-Dashboard",
    fr: "Tableau de réconciliation Peppol complet"
  },

  'Effortlessly reconcile invoices exchanged through Peppol with your internal systems using Accqrates unified dashboards, detailed compliance reports, and exportable Excel summaries.': {
    nl: "Stem facturen die via Peppol worden uitgewisseld moeiteloos af met uw interne systemen via Accqrates uniforme dashboards, gedetailleerde conformiteitsrapporten en exporteerbare Excel-overzichten.",
    de: "Gleichen Sie über Peppol ausgetauschte Rechnungen mühelos mit Ihren internen Systemen ab – mit Accqrates einheitlichen Dashboards, detaillierten Compliance-Berichten und exportierbaren Excel-Zusammenfassungen.",
    fr: "Rapprochez facilement les factures échangées via Peppol avec vos systèmes internes grâce aux tableaux de bord unifiés d’Accqrate, aux rapports de conformité détaillés et aux synthèses Excel exportables."
  },

  'Full Support for Belgian E-Invoicing Compliance Reviews': {
    nl: "Volledige ondersteuning voor Belgische e-facturatie-compliancecontroles",
    de: "Umfassende Unterstützung bei belgischen E-Rechnungs-Compliance-Prüfungen",
    fr: "Support complet pour les audits de conformité belges en matière d’e-facturation"
  },

  'Accqrate goes beyond enablement. We provide end-to-end support during Belgian e-invoicing compliance checks, ensuring your Peppol and EN 16931 processes meet all regulatory requirements.': {
    nl: "Accqrate gaat verder dan alleen enablement. Wij bieden end-to-end ondersteuning tijdens Belgische e-facturatie-compliancecontroles, zodat uw Peppol- en EN 16931-processen aan alle wettelijke vereisten voldoen.",
    de: "Accqrate geht über die reine Bereitstellung hinaus. Wir bieten umfassende Unterstützung während belgischer Compliance-Prüfungen für E-Rechnungen, damit Ihre Peppol- und EN 16931-Prozesse alle gesetzlichen Anforderungen erfüllen.",
    fr: "Accqrate va au-delà de la simple mise en service. Nous offrons un support complet lors des contrôles de conformité belges afin de garantir que vos processus Peppol et EN 16931 répondent à toutes les exigences réglementaires."
  },

  'Swift KSeF Onboarding': {
    nl: "Snelle KSeF-onboarding",
    de: "Schnelles KSeF-Onboarding",
    fr: "Onboarding KSeF rapide"
  },

  'Begin your KSeF journey effortlessly. Share your company information, and Accqrate onboard you quickly with a fully compliant FA(3) XML and KSeF-connected setup ready for Polands mandatory e-invoicing framework.': {
    nl: "Begin moeiteloos met uw KSeF-traject. Deel uw bedrijfsinformatie en Accqrate onboardt u snel met een volledig conforme FA(3)-XML en een met KSeF verbonden omgeving, klaar voor het verplichte Poolse e-factureringskader.",
    de: "Starten Sie mühelos mit Ihrem KSeF-Prozess. Teilen Sie Ihre Unternehmensinformationen, und Accqrate richtet schnell eine vollständig konforme FA(3)-XML- und KSeF-verbundene Umgebung für Polens verpflichtenden E-Rechnungsrahmen ein.",
    fr: "Commencez facilement votre parcours KSeF. Partagez les informations de votre entreprise et Accqrate vous intègre rapidement avec un XML FA(3) entièrement conforme et un environnement connecté à KSeF, prêt pour le cadre obligatoire de facturation électronique polonais."
  },

  'Automatic FA(3) XML Field Mapping': {
    nl: "Automatische FA(3) XML-veldmapping",
    de: "Automatische Zuordnung der FA(3)-XML-Felder",
    fr: "Cartographie automatique des champs XML FA(3)"
  },

  'Avoid validation failures with Accqrates automatic population of all mandatory KSeF FA(3) fields, guaranteeing every Polish e-invoice is generated in the correct schema, without needing dedicated technical resources.': {
    nl: "Voorkom validatiefouten met de automatische invulling door Accqrate van alle verplichte KSeF FA(3)-velden, zodat elke Poolse e-factuur volgens het juiste schema wordt gegenereerd zonder nood aan extra technische middelen.",
    de: "Vermeiden Sie Validierungsfehler durch Accqrates automatische Befüllung aller obligatorischen KSeF-FA(3)-Felder, sodass jede polnische E-Rechnung im korrekten Schema erstellt wird – ohne zusätzliche technische Ressourcen.",
    fr: "Évitez les échecs de validation grâce au remplissage automatique par Accqrate de tous les champs FA(3) obligatoires, garantissant que chaque e-facture polonaise est générée dans le schéma correct, sans ressources techniques dédiées."
  },

  'Comprehensive KSeF Reconciliation Dashboard': {
    nl: "Uitgebreid KSeF-afstemmingsdashboard",
    de: "Umfassendes KSeF-Abgleichs-Dashboard",
    fr: "Tableau de réconciliation KSeF complet"
  },

  'Easily match and reconcile invoices submitted or retrieved from KSeF with your business applications through Accqrates intuitive dashboards, granular reports, and Excel-ready reconciliation outputs.': {
    nl: "Match en reconcile facturen die bij KSeF zijn ingediend of daaruit zijn opgehaald eenvoudig met uw bedrijfsapplicaties via Accqrates intuïtieve dashboards, gedetailleerde rapporten en Excel-klare afstemmingsbestanden.",
    de: "Gleichen Sie Rechnungen, die an KSeF übermittelt oder daraus abgerufen wurden, mühelos mit Ihren Geschäftsanwendungen ab – mit Accqrates intuitiven Dashboards, detaillierten Berichten und Excel-fähigen Abgleichsdateien.",
    fr: "Rapprochez facilement les factures soumises ou récupérées depuis KSeF avec vos applications métiers grâce aux tableaux de bord intuitifs d’Accqrate, aux rapports détaillés et aux exports Excel prêts à l’emploi."
  },

  'Full Support for KSeF Compliance Reviews': {
    nl: "Volledige ondersteuning voor KSeF-compliancecontroles",
    de: "Umfassende Unterstützung bei KSeF-Compliance-Prüfungen",
    fr: "Support complet pour les contrôles de conformité KSeF"
  },

  'Accqrate doesnt stop at implementation. We offer complete assistance during KSeF-related compliance reviews, ensuring every FA(3) invoice and integration meets Polands mandatory e-invoicing standards.': {
    nl: "Accqrate stopt niet bij de implementatie. Wij bieden volledige ondersteuning bij KSeF-gerelateerde compliancecontroles, zodat elke FA(3)-factuur en integratie voldoet aan de verplichte Poolse e-facturatiestandaarden.",
    de: "Accqrate endet nicht bei der Implementierung. Wir bieten umfassende Unterstützung bei KSeF-bezogenen Compliance-Prüfungen, damit jede FA(3)-Rechnung und Integration den verpflichtenden polnischen E-Rechnungsstandards entspricht.",
    fr: "Accqrate ne s’arrête pas à la mise en œuvre. Nous offrons une assistance complète lors des contrôles de conformité liés à KSeF afin de garantir que chaque facture FA(3) et chaque intégration répondent aux normes obligatoires de facturation électronique en Pologne."
  },

  // ========== E-INVOICING BELGIUM SECTION ==========

  'Flexible methods for': {
    nl: "Flexibele methoden voor",
    de: "Flexible Methoden für",
    fr: "Méthodes flexibles pour"
  },

  'Belgium E-Invoicing': {
    nl: "Belgische e-facturatie",
    de: "Belgische E-Rechnungsstellung",
    fr: "E-facturation en Belgique"
  },

  'Adaptive approaches for seamless Peppol-based e-invoicing and EN 16931 compliance.': {
    nl: "Aanpasbare benaderingen voor naadloze Peppol-gebaseerde e-facturatie en EN 16931-conformiteit.",
    de: "Adaptive Ansätze für nahtlose Peppol-basierte E-Rechnungen und EN 16931-Konformität.",
    fr: "Approches adaptatives pour une e-facturation fluide via Peppol et une conformité à l’EN 16931."
  },

  'API-Based Integrations': {
    nl: "API-gebaseerde integraties",
    de: "API-basierte Integrationen",
    fr: "Intégrations basées sur API"
  },

  "Accqrate's APIs enable smooth generation and exchange of structured EN 16931-compliant UBL invoices through the Peppol network, ensuring effortless Belgian compliance and real-time connectivity.": {
    nl: "De API’s van Accqrate maken een vlotte generatie en uitwisseling mogelijk van gestructureerde UBL-facturen die voldoen aan EN 16931 via het Peppol-netwerk, wat Belgische conformiteit en realtimeconnectiviteit garandeert.",
    de: "Die APIs von Accqrate ermöglichen die reibungslose Erstellung und den Austausch strukturierter, EN 16931-konformer UBL-Rechnungen über das Peppol-Netzwerk und sorgen für mühelose belgische Compliance sowie Echtzeit-Konnektivität.",
    fr: "Les API d’Accqrate permettent de générer et d’échanger facilement des factures UBL structurées et conformes à l’EN 16931 via le réseau Peppol, assurant une conformité belge sans effort et une connectivité en temps réel."
  },

  'FTP/S-FTP Integrations': {
    nl: "FTP/S-FTP-integraties",
    de: "FTP/S-FTP-Integrationen",
    fr: "Intégrations FTP/S-FTP"
  },

  'Accqrate supports secure file-based integration flows with a complete feedback loop, ensuring your source systems stay fully synchronized with all Peppol exchanges.': {
    nl: "Accqrate ondersteunt veilige bestandsgebaseerde integratiestromen met een volledige feedbackloop, zodat uw bronsystemen volledig gesynchroniseerd blijven met alle Peppol-uitwisselingen.",
    de: "Accqrate unterstützt sichere dateibasierte Integrationsabläufe mit vollständiger Feedback-Schleife, sodass Ihre Quellsysteme vollständig mit allen Peppol-Austauschen synchron bleiben.",
    fr: "Accqrate prend en charge des flux d’intégration sécurisés basés sur des fichiers, avec une boucle de retour complète, garantissant la synchronisation totale de vos systèmes sources avec tous les échanges Peppol."
  },

  'Manual or Excel Uploads': {
    nl: "Handmatige of Excel-uploads",
    de: "Manuelle oder Excel-Uploads",
    fr: "Téléversements manuels ou Excel"
  },

  'For non-integrated systems, simply download our template and upload your Excel files. Accqrate handles all EN 16931 field mappings automatically for compliant Belgian e-invoicing.': {
    nl: "Voor niet-geïntegreerde systemen downloadt u eenvoudig onze template en uploadt u uw Excel-bestanden. Accqrate verwerkt automatisch alle EN 16931-veldtoewijzingen voor conforme Belgische e-facturatie.",
    de: "Für nicht integrierte Systeme laden Sie einfach unsere Vorlage herunter und laden Sie Ihre Excel-Dateien hoch. Accqrate übernimmt automatisch alle EN 16931-Feldzuordnungen für eine konforme belgische E-Rechnungsstellung.",
    fr: "Pour les systèmes non intégrés, téléchargez simplement notre modèle et importez vos fichiers Excel. Accqrate gère automatiquement toutes les correspondances de champs EN 16931 pour une e-facturation belge conforme."
  },

  'Fully Compliant': {
    nl: "Volledig conform",
    de: "Vollständig konform",
    fr: "Entièrement conforme"
  },

  "Peppol-ready and EN 16931–aligned, ensuring 100% audit-proof e-invoicing for Belgium's 2026 mandate.": {
    nl: "Peppol-klaar en afgestemd op EN 16931, wat 100% audit-bestendige e-facturatie garandeert voor de Belgische verplichting van 2026.",
    de: "Peppol-bereit und EN 16931-konform – für 100% revisionssichere E-Rechnungen im Rahmen von Belgiens Mandat 2026.",
    fr: "Prêt pour Peppol et conforme à l’EN 16931, garantissant une e-facturation entièrement audit-proof pour le mandat belge de 2026."
  },

  'Audited & Verified': {
    nl: "Geaudit en geverifieerd",
    de: "Geprüft und verifiziert",
    fr: "Audité et vérifié"
  },

  "Customer deployments are fully validated against Belgium's structured e-invoicing standards and Peppol requirements.": {
    nl: "Klantimplementaties worden volledig gevalideerd volgens de gestructureerde Belgische e-factureringsnormen en Peppol-vereisten.",
    de: "Kundenimplementierungen werden vollständig gemäß den strukturierten belgischen E-Rechnungsstandards und den Peppol-Anforderungen validiert.",
    fr: "Les déploiements clients sont entièrement validés selon les normes belges de facturation électronique structurée et les exigences Peppol."
  },

  'Flexibility in Deployment': {
    nl: "Flexibiliteit in implementatie",
    de: "Flexibilität in der Bereitstellung",
    fr: "Flexibilité de déploiement"
  },

  'Choose Accqrate Cloud or deploy on your own server both fully compliant with Belgian e-invoicing rules.': {
    nl: "Kies voor Accqrate Cloud of implementeer op uw eigen server – beide volledig conform de Belgische e-factureringsregels.",
    de: "Wählen Sie Accqrate Cloud oder stellen Sie auf Ihrem eigenen Server bereit – beides vollständig konform mit den belgischen E-Rechnungsanforderungen.",
    fr: "Choisissez Accqrate Cloud ou un déploiement sur votre propre serveur – dans les deux cas entièrement conforme aux règles belges d’e-facturation."
  },

  'Rapid Implementation': {
    nl: "Snelle implementatie",
    de: "Schnelle Implementierung",
    fr: "Mise en œuvre rapide"
  },

  'Go live in just 5 days with guaranteed Peppol integration and EN 16931-compliant invoice generation.': {
    nl: "Ga live in slechts 5 dagen met gegarandeerde Peppol-integratie en EN 16931-conforme factuurgeneratie.",
    de: "Gehen Sie in nur 5 Tagen live – mit garantierter Peppol-Integration und EN 16931-konformer Rechnungserstellung.",
    fr: "Mettez en production en seulement 5 jours avec une intégration Peppol garantie et une génération conforme à l’EN 16931."
  },

  'Process millions of structured UBL invoices daily with enterprise-grade performance.': {
    nl: "Verwerk dagelijks miljoenen gestructureerde UBL-facturen met prestaties op ondernemingsniveau.",
    de: "Verarbeiten Sie täglich Millionen strukturierter UBL-Rechnungen mit Performance auf Enterprise-Niveau.",
    fr: "Traitez chaque jour des millions de factures UBL structurées avec des performances de niveau entreprise."
  },

  'End-to-End Support': {
    nl: "End-to-end ondersteuning",
    de: "End-to-End-Support",
    fr: "Support de bout en bout"
  },

  'We provide complete assistance for Belgian e-invoicing integration from onboarding to continuous compliance.': {
    nl: "Wij bieden volledige ondersteuning voor Belgische e-facturatie-integratie – van onboarding tot voortdurende naleving.",
    de: "Wir bieten vollständige Unterstützung für die belgische E-Rechnungsintegration – von der Onboarding-Phase bis zur laufenden Compliance.",
    fr: "Nous fournissons une assistance complète pour l’intégration de l’e-facturation belge – de l’onboarding à la conformité continue."
  },

// ========== WHY CHOOSE BELGIUM SECTION ==========

  'Why Choose': {
    nl: "Waarom kiezen voor",
    de: "Warum wählen",
    fr: "Pourquoi choisir"
  },

  'Seamlessly integrate your existing ERP/POS with Peppol and achieve full EN 16931 compliance for Belgium\'s 2026 e-invoicing mandate.': {
    nl: "Integreer uw bestaande ERP/POS naadloos met Peppol en bereik volledige EN 16931-conformiteit voor de Belgische e-facturatieverplichting van 2026.",
    de: "Integrieren Sie Ihr bestehendes ERP/POS nahtlos mit Peppol und erreichen Sie vollständige EN 16931-Konformität für Belgiens E-Rechnungsmandat 2026.",
    fr: "Intégrez parfaitement votre ERP/POS existant avec Peppol et atteignez une conformité totale à l’EN 16931 pour le mandat belge 2026."
  },

  'Effortless Invoice Generation': {
    nl: "Moeiteloze factuurgeneratie",
    de: "Mühelose Rechnungserstellung",
    fr: "Génération de factures sans effort"
  },

  'Create fully compliant structured UBL e-invoices, including credit notes, debit notes, and corrected invoices ready for Peppol exchange.': {
    nl: "Maak volledig conforme gestructureerde UBL-e-facturen, inclusief creditnota’s, debetnota’s en gecorrigeerde facturen, klaar voor uitwisseling via Peppol.",
    de: "Erstellen Sie vollständig konforme strukturierte UBL-E-Rechnungen, einschließlich Gutschriften, Lastschriften und korrigierten Rechnungen – bereit für den Peppol-Austausch.",
    fr: "Générez des e-factures UBL structurées entièrement conformes, incluant avoirs, notes de débit et factures corrigées, prêtes pour l’échange via Peppol."
  },

  'Secure Storage': {
    nl: "Veilige opslag",
    de: "Sichere Archivierung",
    fr: "Stockage sécurisé"
  },

  'Store all your EN 16931 invoices safely within our high-availability archiving environment, aligned with Belgian retention rules.': {
    nl: "Sla al uw EN 16931-facturen veilig op in onze high-availability-archiveringsomgeving, conform de Belgische bewaartermijnen.",
    de: "Speichern Sie all Ihre EN 16931-Rechnungen sicher in unserer Hochverfügbarkeitsarchivierung, im Einklang mit den belgischen Aufbewahrungsvorschriften.",
    fr: "Stockez toutes vos factures EN 16931 en toute sécurité dans notre environnement d’archivage haute disponibilité, conforme aux règles de conservation belges."
  },

  'Compliant Templates': {
    nl: "Conforme sjablonen",
    de: "Konforme Vorlagen",
    fr: "Modèles conformes"
  },

  'Access standardized, EN 16931-aligned invoice templates while maintaining your brand identity.': {
    nl: "Gebruik gestandaardiseerde, EN 16931-conforme factuursjablonen terwijl uw merkidentiteit behouden blijft.",
    de: "Nutzen Sie standardisierte, EN 16931-konforme Rechnungsvorlagen und behalten Sie gleichzeitig Ihre Markenidentität.",
    fr: "Accédez à des modèles de facture standardisés et conformes à l’EN 16931 tout en préservant votre identité de marque."
  },

  'Peppol Connectivity': {
    nl: "Peppol-connectiviteit",
    de: "Peppol-Konnektivität",
    fr: "Connectivité Peppol"
  },

  'Exchange invoices securely through Peppol for guaranteed interoperability and regulatory compliance.': {
    nl: "Wissel facturen veilig uit via Peppol voor gegarandeerde interoperabiliteit en naleving van regelgeving.",
    de: "Tauschen Sie Rechnungen sicher über Peppol aus – für garantierte Interoperabilität und regulatorische Compliance.",
    fr: "Échangez vos factures en toute sécurité via Peppol pour une interopérabilité garantie et une conformité réglementaire assurée."
  },

  'Validation & Error Handling': {
    nl: "Validatie en foutafhandeling",
    de: "Validierung & Fehlerbehandlung",
    fr: "Validation et gestion des erreurs"
  },

  'Automated validations ensure your structured invoices pass all schema and mandate checks before transmission.': {
    nl: "Geautomatiseerde validaties zorgen ervoor dat uw gestructureerde facturen alle schema- en mandaatcontroles doorstaan vóór verzending.",
    de: "Automatisierte Validierungen stellen sicher, dass Ihre strukturierten Rechnungen alle Schema- und Mandatsprüfungen vor der Übermittlung bestehen.",
    fr: "Les validations automatisées garantissent que vos factures structurées passent tous les contrôles de schéma et d’obligations avant transmission."
  },

  'Automated Communication': {
    nl: "Geautomatiseerde communicatie",
    de: "Automatisierte Kommunikation",
    fr: "Communication automatisée"
  },

  'Send invoices directly to buyers via Email, Peppol, or file-based workflows integrated with your systems.': {
    nl: "Stuur facturen rechtstreeks naar kopers via e-mail, Peppol of bestandsgebaseerde workflows geïntegreerd met uw systemen.",
    de: "Senden Sie Rechnungen direkt an Käufer per E-Mail, Peppol oder dateibasierten Workflows, die in Ihre Systeme integriert sind.",
    fr: "Envoyez vos factures directement aux acheteurs par e-mail, via Peppol ou via des flux basés sur fichiers intégrés à vos systèmes."
  },

  'Financial Control': {
    nl: "Financiële controle",
    de: "Finanzkontrolle",
    fr: "Contrôle financier"
  },

  'Track payments, monitor outstanding balances, and maintain complete visibility over your Belgian invoice lifecycle.': {
    nl: "Volg betalingen, bewaak openstaande saldi en behoud volledig inzicht in de levenscyclus van uw Belgische facturen.",
    de: "Verfolgen Sie Zahlungen, überwachen Sie offene Salden und behalten Sie vollständige Transparenz über den Lebenszyklus Ihrer belgischen Rechnungen.",
    fr: "Suivez les paiements, surveillez les soldes ouverts et gardez une visibilité totale sur le cycle de vie de vos factures belges."
  },

  'Peppol-ready onboarding': {
    nl: "Peppol-klare onboarding",
    de: "Peppol-bereites Onboarding",
    fr: "Onboarding prêt pour Peppol"
  },

  'Generate EN 16931-compliant UBL invoices': {
    nl: "Genereer UBL-facturen conform EN 16931",
    de: "Generieren Sie EN 16931-konforme UBL-Rechnungen",
    fr: "Générez des factures UBL conformes à l’EN 16931"
  },

  'PDF/A-3 with embedded XML': {
    nl: "PDF/A-3 met ingesloten XML",
    de: "PDF/A-3 mit eingebettetem XML",
    fr: "PDF/A-3 avec XML intégré"
  },

  'Optional digital signature': {
    nl: "Optionele digitale handtekening",
    de: "Optionale digitale Signatur",
    fr: "Signature numérique optionnelle"
  },

  'Track submissions, acceptance & rejections': {
    nl: "Volg indieningen, goedkeuringen en weigeringen",
    de: "Verfolgen Sie Übermittlungen, Annahmen und Ablehnungen",
    fr: "Suivez les dépôts, validations et rejets"
  },

  'Simple corrective actions': {
    nl: "Eenvoudige corrigerende acties",
    de: "Einfache Korrekturmaßnahmen",
    fr: "Actions correctives simples"
  },

  'Send invoices via Email, Peppol, or WhatsApp': {
    nl: "Verzend facturen via e-mail, Peppol of WhatsApp",
    de: "Senden Sie Rechnungen per E-Mail, Peppol oder WhatsApp",
    fr: "Envoyez des factures par e-mail, via Peppol ou WhatsApp"
  },

// ========== COUNTRY CONTENT BELGIUM SECTION ==========

  'Integrate Your Existing ERPs, POS & Business Applications With Belgium\'s': {
    nl: "Integreer uw bestaande ERP’s, POS-systemen en bedrijfsapplicaties met België’s",
    de: "Integrieren Sie Ihre bestehenden ERP-, POS- und Geschäftsapplikationen mit Belgiens",
    fr: "Intégrez vos ERP, POS et applications métier existants avec le"
  },

  'Peppol Network': {
    nl: "Peppol-netwerk",
    de: "Peppol-Netzwerk",
    fr: "Réseau Peppol"
  },

  'PEPPOL E-INVOICING INTEGRATION': {
    nl: "PEPPOL E-FACTURATIE-INTEGRATIE",
    de: "PEPPOL-E-RECHNUNGSINTEGRATION",
    fr: "INTÉGRATION DE LA FACTURATION ÉLECTRONIQUE PEPPOL"
  },

  'A Peppol-Ready EN 16931-Compliant Solution': {
    nl: "Een Peppol-klare, EN 16931-conforme oplossing",
    de: "Eine Peppol-bereite, EN 16931-konforme Lösung",
    fr: "Une solution prête pour Peppol et conforme à l’EN 16931"
  },

  '100% Compliance For Belgium\'s 2026  B2B E-Invoicing Mandate': {
    nl: "100% conformiteit voor België’s B2B-e-facturatiemandaat van 2026",
    de: "100% Compliance für Belgiens B2B-E-Rechnungsmandat 2026",
    fr: "Conformité à 100 % pour le mandat belge de facturation B2B 2026"
  },

// ========== COUNTRY FEATURES BELGIUM SECTION ==========

  'Enhanced': {
    nl: "Verbeterde",
    de: "Erweiterte",
    fr: "Amélioration de la"
  },

  'Electronic Invoicing': {
    nl: "Elektronische facturatie",
    de: "Elektronische Rechnungsstellung",
    fr: "Facturation électronique"
  },

  'Streamline your invoicing with Accqrate\'s automated, Peppol-ready, EN 16931-compliant platform built for secure, scalable European operations.': {
    nl: "Stroomlijn uw facturatie met Accqrate’s geautomatiseerde, Peppol-klare en EN 16931-conforme platform, gebouwd voor veilige en schaalbare Europese operaties.",
    de: "Optimieren Sie Ihre Rechnungsstellung mit Accqrates automatisierter, Peppol-bereiter und EN 16931-konformer Plattform für sichere und skalierbare europäische Abläufe.",
    fr: "Optimisez votre facturation grâce à la plateforme automatisée d’Accqrate, prête pour Peppol et conforme à l’EN 16931, conçue pour des opérations européennes sécurisées et évolutives."
  },

// ========== PROCESS DIAGRAM BELGIUM SECTION ==========

  'Belgium E-invoicing Process': {
    nl: "Belgisch e-facturatieproces",
    de: "Belgischer E-Rechnungsprozess",
    fr: "Processus de facturation électronique en Belgique"
  },

  'Belgium\'s e-invoicing framework operates through the Peppol network for secure invoice exchange.': {
    nl: "Het Belgische e-facturatiekader werkt via het Peppol-netwerk voor veilige factuuruitwisseling.",
    de: "Der belgische E-Rechnungsrahmen arbeitet über das Peppol-Netzwerk für einen sicheren Rechnungsaustausch.",
    fr: "Le cadre belge de la facturation électronique fonctionne via le réseau Peppol pour un échange sécurisé des factures."
  },

  'A structured e-invoice is generated using the Peppol BIS 3.0 standard.': {
    nl: "Een gestructureerde e-factuur wordt gegenereerd volgens de Peppol BIS 3.0-standaard.",
    de: "Eine strukturierte E-Rechnung wird gemäß dem Peppol BIS 3.0-Standard erzeugt.",
    fr: "Une e-facture structurée est générée selon le standard Peppol BIS 3.0."
  },

  'Peppol Submission': {
    nl: "Peppol-indiening",
    de: "Peppol-Übermittlung",
    fr: "Soumission via Peppol"
  },

  'The invoice is transmitted securely to the buyer via the Peppol network.': {
    nl: "De factuur wordt veilig naar de koper verzonden via het Peppol-netwerk.",
    de: "Die Rechnung wird sicher über das Peppol-Netzwerk an den Käufer übermittelt.",
    fr: "La facture est transmise en toute sécurité à l’acheteur via le réseau Peppol."
  },

  'The buyer\'s system processes the invoice and provides approval.': {
    nl: "Het systeem van de koper verwerkt de factuur en geeft goedkeuring.",
    de: "Das System des Käufers verarbeitet die Rechnung und erteilt eine Freigabe.",
    fr: "Le système de l’acheteur traite la facture et fournit une validation."
  },

  'Record-Keeping': {
    nl: "Archivering",
    de: "Archivierung",
    fr: "Archivage"
  },

  'Invoices are archived per Belgian regulations with traceability.': {
    nl: "Facturen worden gearchiveerd volgens de Belgische regelgeving met volledige traceerbaarheid.",
    de: "Rechnungen werden gemäß den belgischen Vorschriften mit vollständiger Nachverfolgbarkeit archiviert.",
    fr: "Les factures sont archivées conformément aux réglementations belges avec traçabilité."
  },

// ========== HERO SECTION BELGIUM ==========

  'Belgium ': {
    nl: "België",
    de: "Belgien",
    fr: "Belgique"
  },

  'Belgium\'s e-invoicing framework operates through the Peppol network, enabling secure, structured, and standardized digital invoice exchange. Businesses are required to use Peppol-compatible software for sending and receiving e-invoices, which are routed through the Mercurius platform for validation and tracking.': {
    nl: "Het Belgische e-facturatiekader werkt via het Peppol-netwerk, waardoor veilige, gestructureerde en gestandaardiseerde digitale factuuruitwisseling mogelijk wordt. Bedrijven moeten Peppol-compatibele software gebruiken voor het verzenden en ontvangen van e-facturen, die via het Mercurius-platform worden gevalideerd en gevolgd.",
    de: "Der belgische Rahmen für E-Rechnungen funktioniert über das Peppol-Netzwerk und ermöglicht einen sicheren, strukturierten und standardisierten digitalen Rechnungsaustausch. Unternehmen müssen Peppol-kompatible Software für den Versand und Empfang von E-Rechnungen verwenden, die über die Mercurius-Plattform validiert und nachverfolgt werden.",
    fr: "Le cadre belge de la facturation électronique fonctionne via le réseau Peppol, permettant un échange de factures numériques sécurisé, structuré et standardisé. Les entreprises doivent utiliser un logiciel compatible Peppol pour envoyer et recevoir des e-factures, qui transitent par la plateforme Mercurius pour validation et suivi."
  },

  'The invoice is transmitted securely to the buyer\'s system via the Peppol network.': {
    nl: "De factuur wordt veilig naar het systeem van de koper verzonden via het Peppol-netwerk.",
    de: "Die Rechnung wird sicher über das Peppol-Netzwerk an das System des Käufers übertragen.",
    fr: "La facture est transmise en toute sécurité au système de l’acheteur via le réseau Peppol."
  },

  'The recipient\'s system automatically processes the invoice, enabling efficient approval and payment cycles.': {
    nl: "Het systeem van de ontvanger verwerkt de factuur automatisch, wat efficiënte goedkeurings- en betalingscycli mogelijk maakt.",
    de: "Das System des Empfängers verarbeitet die Rechnung automatisch und ermöglicht effiziente Freigabe- und Zahlungsprozesse.",
    fr: "Le système du destinataire traite automatiquement la facture, permettant des cycles d’approbation et de paiement efficaces."
  },

  'Invoices are archived in compliance with Belgian regulations, with Mercurius ensuring traceability and delivery confirmation.': {
    nl: "Facturen worden gearchiveerd volgens de Belgische regelgeving, waarbij Mercurius zorgt voor traceerbaarheid en afleverbevestiging.",
    de: "Rechnungen werden gemäß den belgischen Vorschriften archiviert; Mercurius gewährleistet Nachverfolgbarkeit und Lieferbestätigungen.",
    fr: "Les factures sont archivées conformément aux réglementations belges, Mercurius garantissant la traçabilité et la confirmation de livraison."
  },

// ========== PROOF OF CONCEPT BELGIUM SECTION ==========

  'Free Proof of Concept for Peppol / EN 16931 Integration': {
    nl: "Gratis proof-of-concept voor Peppol-/EN 16931-integratie",
    de: "Kostenloser Proof of Concept für Peppol-/EN 16931-Integration",
    fr: "Preuve de concept gratuite pour l’intégration Peppol / EN 16931"
  },

  'Explore Accqrate\'s Belgium E-Invoicing Integration with a Free Proof of Concept': {
    nl: "Ontdek Accqrate’s Belgische e-facturatie-integratie met een gratis proof-of-concept",
    de: "Erkunden Sie Accqrates belgische E-Rechnungsintegration mit einem kostenlosen Proof of Concept",
    fr: "Découvrez l’intégration belge d’e-facturation d’Accqrate grâce à une preuve de concept gratuite"
  },

  'Zero–Risk Trial': {
    nl: "Proef zonder risico",
    de: "Risikoloser Test",
    fr: "Essai sans risque"
  },

  'Experience seamless integration between your ERP/POS and the Belgian Peppol test environment with no commitment. Validate results before you decide.': {
    nl: "Ervaar naadloze integratie tussen uw ERP/POS en de Belgische Peppol-testomgeving zonder verplichtingen. Valideer de resultaten voordat u beslist.",
    de: "Erleben Sie eine nahtlose Integration zwischen Ihrem ERP/POS und der belgischen Peppol-Testumgebung – völlig unverbindlich. Validieren Sie die Ergebnisse, bevor Sie entscheiden.",
    fr: "Découvrez une intégration fluide entre votre ERP/POS et l’environnement de test Peppol belge sans aucun engagement. Validez les résultats avant de décider."
  },

  'Ease of Integration': {
    nl: "Eenvoudige integratie",
    de: "Einfache Integration",
    fr: "Facilité d’intégration"
  },

  'Experience how smoothly your systems generate EN 16931 UBL invoices and exchange them via Peppol.': {
    nl: "Ervaar hoe vlot uw systemen EN 16931-UBL-facturen genereren en via Peppol uitwisselen.",
    de: "Erleben Sie, wie reibungslos Ihre Systeme EN 16931-UBL-Rechnungen erzeugen und über Peppol austauschen.",
    fr: "Découvrez la fluidité avec laquelle vos systèmes génèrent des factures UBL EN 16931 et les échangent via Peppol."
  },

  'Expert Guidance & Training': {
    nl: "Deskundige begeleiding en training",
    de: "Fachkundige Anleitung & Schulung",
    fr: "Accompagnement et formation d’experts"
  },

  'Your internal team or external partners receive complete technical guidance and hands-on support': {
    nl: "Uw interne team of externe partners ontvangen volledige technische begeleiding en praktische ondersteuning",
    de: "Ihr internes Team oder externe Partner erhalten umfassende technische Anleitung und praxisnahe Unterstützung",
    fr: "Votre équipe interne ou vos partenaires externes bénéficient d’un accompagnement technique complet et d’un support pratique"
  },

  'Onboarding Assistance': {
    nl: "Onboarding-ondersteuning",
    de: "Unterstützung beim Onboarding",
    fr: "Assistance à l’onboarding"
  },

  'We assist with company onboarding, Peppol profile setup, and structured invoice validation.': {
    nl: "Wij helpen bij bedrijfs-onboarding, het opzetten van uw Peppol-profiel en de validatie van gestructureerde facturen.",
    de: "Wir unterstützen beim Unternehmens-Onboarding, bei der Einrichtung Ihres Peppol-Profils und bei der Validierung strukturierter Rechnungen.",
    fr: "Nous vous assistons pour l’onboarding de votre entreprise, la mise en place de votre profil Peppol et la validation des factures structurées."
  },

  'Full Ownership & Responsibility': {
    nl: "Volledige verantwoordelijkheid en eigenaarschap",
    de: "Volle Verantwortung & Zuständigkeit",
    fr: "Responsabilité et prise en charge complètes"
  },

  'Accqrate takes end-to-end responsibility for validation, compliance, audit readiness, and technical accuracy.': {
    nl: "Accqrate neemt volledige end-to-end verantwoordelijkheid voor validatie, naleving, auditgereedheid en technische nauwkeurigheid.",
    de: "Accqrate übernimmt die vollständige End-to-End-Verantwortung für Validierung, Compliance, Auditbereitschaft und technische Genauigkeit.",
    fr: "Accqrate assume l’entière responsabilité de la validation, de la conformité, de la préparation aux audits et de l’exactitude technique."
  },

  'No Upfront Contracts': {
    nl: "Geen voorafgaande contracten",
    de: "Keine Vorabverträge",
    fr: "Aucun contrat préalable"
  },

  'Start with trust. No contracts, no advance payments. NDA included for complete confidentiality.': {
    nl: "Begin met vertrouwen. Geen contracten, geen vooruitbetalingen. NDA inbegrepen voor volledige vertrouwelijkheid.",
    de: "Starten Sie mit Vertrauen. Keine Verträge, keine Vorauszahlungen. NDA inklusive für vollständige Vertraulichkeit.",
    fr: "Commencez en toute confiance. Aucun contrat, aucun paiement anticipé. NDA inclus pour une confidentialité totale."
  },

  'ERP Expertise': {
    nl: "ERP-expertise",
    de: "ERP-Expertise",
    fr: "Expertise ERP"
  },

  'Our team brings deep experience across SAP, Oracle, Dynamics, Infor, BAAN, SAGE, and custom ERPs.': {
    nl: "Ons team beschikt over diepgaande ervaring met SAP, Oracle, Dynamics, Infor, BAAN, SAGE en maatwerk-ERP’s.",
    de: "Unser Team verfügt über umfassende Erfahrung mit SAP, Oracle, Dynamics, Infor, BAAN, SAGE und kundenspezifischen ERP-Systemen.",
    fr: "Notre équipe possède une expérience approfondie sur SAP, Oracle, Dynamics, Infor, BAAN, SAGE et des ERP personnalisés."
  },

  'Compliance Assurance': {
    nl: "Conformiteitsgarantie",
    de: "Compliance-Sicherung",
    fr: "Garantie de conformité"
  },
'We ensure your organization meets Belgium\'s 2026 e-invoicing mandate with Peppol and EN 16931 compliance.': {
    nl: "We zorgen ervoor dat uw organisatie voldoet aan de Belgische e-facturatieverplichting 2026 met Peppol- en EN 16931-conformiteit.",
    de: "Wir stellen sicher, dass Ihre Organisation das belgische E-Rechnungsmandat 2026 mit Peppol- und EN 16931-Konformität erfüllt.",
    fr: "Nous garantissons que votre organisation respecte le mandat belge de facturation électronique 2026, avec conformité Peppol et EN 16931."
  },

  'Fast Integration': {
    nl: "Snelle integratie",
    de: "Schnelle Integration",
    fr: "Intégration rapide"
  },

  'Go live within 5 working days, accelerating your readiness for mandatory B2B e-invoicing.': {
    nl: "Ga binnen 5 werkdagen live en versnel uw paraatheid voor verplichte B2B-e-facturatie.",
    de: "Gehen Sie innerhalb von 5 Arbeitstagen live und beschleunigen Sie so Ihre Bereitschaft für die verpflichtende B2B-E-Rechnung.",
    fr: "Mettez en production en 5 jours ouvrés et accélérez votre préparation à la facturation électronique B2B obligatoire."
  },

  // ========== SOFTWARE COMPONENT BELGIUM SECTION ==========

  'Get a Free Proof of Concept': {
    nl: "Ontvang een gratis proof of concept",
    de: "Erhalten Sie einen kostenlosen Proof of Concept",
    fr: "Obtenez une preuve de concept gratuite"
  },

  'Seamless': {
    nl: "Naadloos",
    de: "Nahtlos",
    fr: "Transparent"
  },

  'Complaint': {
    nl: "Klacht",
    de: "Beschwerde",
    fr: "Plainte"
  },

  'Secure': {
    nl: "Veilig",
    de: "Sicher",
    fr: "Sécurisé"
  },

  // ========== INTEGRATION SECTIONS BELGIUM ==========

  'Our solutions seamlessly integrate with any ERP/POS system you use.': {
    nl: "Onze oplossingen integreren naadloos met elk ERP-/POS-systeem dat u gebruikt.",
    de: "Unsere Lösungen integrieren sich nahtlos in jedes von Ihnen verwendete ERP-/POS-System.",
    fr: "Nos solutions s’intègrent de manière transparente à tout système ERP/POS que vous utilisez."
  },

  'Our integrators are equipped to collaborate with a wide range of solutions, including Global ERP systems, Local and Custom ERP, In-House ERP, both Online and Offline POS systems, Custom Applications, Accounting Software, and even Excel & SQL-Based Solutions, ensuring versatile and comprehensive compatibility': {
    nl: "Onze integrators zijn uitgerust om samen te werken met een breed scala aan oplossingen, waaronder wereldwijde ERP-systemen, lokale en maatwerk-ERP's, in-house ERP, online en offline POS-systemen, maatwerkapplicaties, boekhoudsoftware en zelfs Excel- en SQL-gebaseerde oplossingen, wat zorgt voor veelzijdige en uitgebreide compatibiliteit.",
    de: "Unsere Integratoren sind ausgestattet, um mit einer Vielzahl von Lösungen zusammenzuarbeiten, einschließlich globaler ERP-Systeme, lokaler und kundenspezifischer ERP, In-House-ERP, sowohl Online- als auch Offline-POS-Systemen, kundenspezifischen Anwendungen, Buchhaltungssoftware und sogar Excel- und SQL-basierten Lösungen – für vielseitige und umfassende Kompatibilität.",
    fr: "Nos intégrateurs sont prêts à collaborer avec une large gamme de solutions, y compris les ERP mondiaux, les ERP locaux et sur mesure, les ERP internes, les systèmes POS en ligne et hors ligne, les applications personnalisées, les logiciels comptables et même des solutions basées sur Excel et SQL, garantissant une compatibilité polyvalente et complète."
  },

  'For B2B transactions, the process is straightforward': {
    nl: "Voor B2B-transacties is het proces eenvoudig",
    de: "Für B2B-Transaktionen ist der Prozess unkompliziert",
    fr: "Pour les transactions B2B, le processus est simple"
  },

  'Talk to our expert': {
    nl: "Spreek met onze expert",
    de: "Sprechen Sie mit unserem Experten",
    fr: "Parlez à notre expert"
  },

  'Do You Want To Know More?': {
    nl: "Wilt u meer weten?",
    de: "Möchten Sie mehr erfahren?",
    fr: "Voulez-vous en savoir plus ?"
  },

  'Kick start your free proof of concept': {
    nl: "Start uw gratis proof of concept",
    de: "Starten Sie Ihren kostenlosen Proof of Concept",
    fr: "Lancez votre preuve de concept gratuite"
  },

  // ========== CONTACT FORM BELGIUM SECTION ==========

  'Get In Touch With Belgium': {
    nl: "Neem contact op voor België",
    de: "Kontaktieren Sie uns für Belgien",
    fr: "Contactez-nous pour la Belgique"
  },

  'Got any questions about the product or scaling on our platform? We\'re here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.': {
    nl: "Vragen over het product of opschaling op ons platform? Wij helpen u graag. Chat 24/7 met ons vriendelijke team en stap binnen 5 minuten aan boord.",
    de: "Haben Sie Fragen zum Produkt oder zur Skalierung auf unserer Plattform? Wir sind für Sie da. Chatten Sie 24/7 mit unserem freundlichen Team und steigen Sie in weniger als 5 Minuten ein.",
    fr: "Des questions sur le produit ou la montée en charge sur notre plateforme ? Nous sommes là pour vous aider. Discutez 24/7 avec notre équipe sympathique et embarquez en moins de 5 minutes."
  },

  'Call To us': {
    nl: "Bel ons",
    de: "Rufen Sie uns an",
    fr: "Appelez-nous"
  },

  'Our Friendly team is here to help': {
    nl: "Ons vriendelijke team staat klaar om te helpen",
    de: "Unser freundliches Team ist für Sie da",
    fr: "Notre équipe accueillante est là pour aider"
  },

  'Contact@accqrate-erp.com': {
    nl: "Contact@accqrate-erp.com",
    de: "Contact@accqrate-erp.com",
    fr: "Contact@accqrate-erp.com"
  },

  'Our Office Locations': {
    nl: "Onze kantoorlocaties",
    de: "Unsere Bürostandorte",
    fr: "Nos bureaux"
  },

  'Buy E-invoicing Software': {
    nl: "Koop e-facturatiesoftware",
    de: "E-Rechnungssoftware kaufen",
    fr: "Acheter un logiciel de facturation électronique"
  },

  'Seeking cutting-edge E-invoicing software ready for Phase 1 & 2? Let us find the perfect pricing fit for you.': {
    nl: "Op zoek naar geavanceerde e-facturatiesoftware, klaar voor fase 1 en 2? Laat ons de perfecte prijsoptie voor u vinden.",
    de: "Sie suchen hochmoderne E-Rechnungssoftware, bereit für Phase 1 & 2? Lassen Sie uns die passende Preisoption für Sie finden.",
    fr: "Vous recherchez un logiciel d’e-facturation de pointe prêt pour les phases 1 et 2 ? Laissez-nous trouver l’offre tarifaire idéale pour vous."
  },

  'Chat With Us': {
    nl: "Chat met ons",
    de: "Chatten Sie mit uns",
    fr: "Discutez avec nous"
  },

  'Integrate your ERP with compliance systems': {
    nl: "Integreer uw ERP met compliance-systemen",
    de: "Integrieren Sie Ihr ERP mit Compliance-Systemen",
    fr: "Intégrez votre ERP aux systèmes de conformité"
  },

  'Ready for Phase II integration? Our experts have got your back.': {
    nl: "Klaar voor Phase II-integratie? Onze experts ondersteunen u.",
    de: "Bereit für Phase-II-Integration? Unsere Experten unterstützen Sie.",
    fr: "Prêt pour l’intégration Phase II ? Nos experts vous accompagnent."
  },

  'Talk to an Expert': {
    nl: "Spreek met een expert",
    de: "Sprechen Sie mit einem Experten",
    fr: "Parlez à un expert"
  },

  'Become our Trusted Partner': {
    nl: "Word onze vertrouwde partner",
    de: "Werden Sie unser vertrauenswürdiger Partner",
    fr: "Devenez notre partenaire de confiance"
  },

  'Eager to streamline PEPPOL compliance for your clientele and expand your horizons? Let us collaborate.': {
    nl: "Wilt u PEPPOL-conformiteit voor uw klanten stroomlijnen en uw horizon verbreden? Laten we samenwerken.",
    de: "Möchten Sie die PEPPOL-Konformität für Ihre Kunden vereinfachen und Ihr Geschäftsfeld erweitern? Lassen Sie uns zusammenarbeiten.",
    fr: "Souhaitez-vous simplifier la conformité PEPPOL pour votre clientèle et élargir vos horizons ? Collaborons."
  },

  'Partner with Us': {
    nl: "Word partner",
    de: "Partnerschaft mit uns",
    fr: "Devenez partenaire"
  },

  'E-invoicing Standalone Software': {
    nl: "Standalone e-facturatiesoftware",
    de: "Eigenständige E-Rechnungssoftware",
    fr: "Logiciel d’e-facturation autonome"
  },

  'E-invoicing API Integration Software': {
    nl: "E-facturatie API-integratiesoftware",
    de: "E-Rechnungs API-Integrationssoftware",
    fr: "Logiciel d’intégration API pour e-facturation"
  },

  // ========== PRODUCT UPDATES BELGIUM SECTION ==========

  'Stay updated with all the latest announcements from PEPPOL': {
    nl: "Blijf op de hoogte van alle laatste aankondigingen van PEPPOL",
    de: "Bleiben Sie über alle aktuellen Ankündigungen von PEPPOL informiert",
    fr: "Restez informé de toutes les dernières annonces de PEPPOL"
  },

  'Subscribe Now': {
    nl: "Abonneer nu",
    de: "Jetzt abonnieren",
    fr: "Abonnez-vous maintenant"
  },

  'Accqrate Product Updates': {
    nl: "Accqrate productupdates",
    de: "Accqrate Produktupdates",
    fr: "Mises à jour produit Accqrate"
  },

  // ========== CTA SECTION BELGIUM & COMMON SECTION ==========

  'Want the latest on Belgium\'s e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?': {
    nl: "Wilt u het laatste over België’s e-facturatiemandaat, productupdates en exclusieve Accqrate-inzichten?",
    de: "Möchten Sie die neuesten Informationen zum belgischen E-Rechnungsmandat, Produktupdates und exklusive Accqrate-Einblicke erhalten?",
    fr: "Vous souhaitez les dernières informations sur le mandat belge d’e-facturation, les nouveautés produits et des insights exclusifs d’Accqrate ?"
  },

  'Subscribe to our newsletter and stay ahead, delivered straight to your inbox.': {
    nl: "Abonneer u op onze nieuwsbrief en blijf vooroplopen, rechtstreeks in uw inbox.",
    de: "Abonnieren Sie unseren Newsletter und bleiben Sie vorn – direkt in Ihrem Posteingang.",
    fr: "Abonnez-vous à notre newsletter et restez en avance, livré directement dans votre boîte mail."
  },

  'Get Peppol Compliance Demo': {
    nl: "Vraag een Peppol-conformiteitsdemo aan",
    de: "Fordern Sie eine Peppol-Compliance-Demo an",
    fr: "Obtenez une démo de conformité Peppol"
  },

  'Subscribe for Updates': {
    nl: "Abonneer voor updates",
    de: "Für Updates abonnieren",
    fr: "Abonnez-vous pour les mises à jour"
  },

  'Talk to Sales': {
    nl: "Praat met Sales",
    de: "Sprechen Sie mit dem Vertrieb",
    fr: "Parlez aux ventes"
  },

  'Free Proof of Concept': {
    nl: "Gratis proof of concept",
    de: "Kostenloser Proof of Concept",
    fr: "Preuve de concept gratuite"
  },

  '30 Days Free Trial': {
    nl: "30 dagen gratis proef",
    de: "30 Tage kostenlose Testphase",
    fr: "30 jours d’essai gratuit"
  },

  'No complexity, Subscribe and use': {
    nl: "Zonder complexiteit: abonneer en gebruik",
    de: "Keine Komplexität – abonnieren und nutzen",
    fr: "Pas de complexité : abonnez-vous et utilisez"
  },

  // ========== ANNOUNCEMENT SECTION BELGIUM ==========

  'We Will Keep You Updated At All Times': {
    nl: "Wij houden u te allen tijde op de hoogte",
    de: "Wir halten Sie jederzeit auf dem Laufenden",
    fr: "Nous vous tiendrons informé en permanence"
  },

  'Stay Updated With The Latest News And Updates From PEPPOL, And Accurate E-Invoicing Enhancements For Seamless Business Operations.': {
    nl: "Blijf op de hoogte van het laatste nieuws en updates van PEPPOL en nauwkeurige e-facturatieverbeteringen voor naadloze bedrijfsvoering.",
    de: "Bleiben Sie über die neuesten Nachrichten und Updates von PEPPOL sowie über Verbesserungen der E-Rechnung für reibungslose Geschäftsabläufe informiert.",
    fr: "Restez informé des dernières actualités et mises à jour de PEPPOL ainsi que des améliorations de l’e-facturation pour des opérations commerciales fluides."
  },

  // ========== COMING SOON COMPONENT BELGIUM ==========

  'Coming Soon ...': {
    nl: "Binnenkort beschikbaar ...",
    de: "Demnächst verfügbar ...",
    fr: "Bientôt disponible ..."
  },

  'Get The Trial Version By Subscribing Here And Get A Feel Of Our Application': {
    nl: "Krijg de proefversie door u hier te abonneren en ervaar onze applicatie",
    de: "Erhalten Sie die Testversion, enabonnieren Sie sich hier und testen Sie unsere Anwendung",
    fr: "Obtenez la version d’essai en vous abonnant ici et découvrez notre application"
  },

  'Register your company for a trial application. Your data will be available in 30 days.': {
    nl: "Registreer uw bedrijf voor een proefapplicatie. Uw gegevens zijn binnen 30 dagen beschikbaar.",
    de: "Registrieren Sie Ihr Unternehmen für eine Testanwendung. Ihre Daten sind in 30 Tagen verfügbar.",
    fr: "Inscrivez votre entreprise pour une application d’essai. Vos données seront disponibles sous 30 jours."
  },



  'If you have any other questions not addressed here': {
    nl: "Als u nog andere vragen heeft die hier niet worden behandeld",
    de: "Wenn Sie weitere Fragen haben, die hier nicht beantwortet werden",
    fr: "Si vous avez d’autres questions qui ne sont pas traitées ici"
  },

  'Please feel free to contact us at': {
    nl: "Neem gerust contact met ons op via",
    de: "Bitte kontaktieren Sie uns unter",
    fr: "N’hésitez pas à nous contacter à"
  },

  'Contact Your Consultant': {
    nl: "Neem contact op met uw consultant",
    de: "Kontaktieren Sie Ihren Berater",
    fr: "Contactez votre consultant"
  },

  // ========== FAQ SECTION BELGIUM ==========

  'Frequently Asked Questions': {
    nl: "Veelgestelde vragen",
    de: "Häufig gestellte Fragen",
    fr: "Questions fréquemment posées"
  },

  'Ask Everything You Need To Know About Our Solutions And Services': {
    nl: "Vraag alles wat u moet weten over onze oplossingen en diensten",
    de: "Stellen Sie alle Fragen, die Sie zu unseren Lösungen und Dienstleistungen haben",
    fr: "Demandez tout ce que vous devez savoir sur nos solutions et services"
  },

  'No FAQs available for this country yet.': {
    nl: "Nog geen veelgestelde vragen beschikbaar voor dit land.",
    de: "Für dieses Land sind noch keine FAQs verfügbar.",
    fr: "Aucune FAQ disponible pour ce pays pour le moment."
  },

  'Please check back later or contact us directly.': {
    nl: "Kom later terug of neem direct contact met ons op.",
    de: "Bitte schauen Sie später noch einmal vorbei oder kontaktieren Sie uns direkt.",
    fr: "Veuillez revenir plus tard ou nous contacter directement."
  },

  // ========== VAT CALCULATOR BELGIUM SECTION ==========

  'Simplify VAT Calculations with Our Belgium VAT Calculator': {
    nl: "Vereenvoudig btw-berekeningen met onze Belgische btw-calculator",
    de: "Vereinfachen Sie die Mehrwertsteuerberechnung mit unserem belgischen MwSt-Rechner",
    fr: "Simplifiez les calculs de TVA avec notre calculateur de TVA pour la Belgique"
  },

  'Navigating VAT calculations has never been easier. Our Belgium VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.': {
    nl: "Het berekenen van btw is nog nooit zo eenvoudig geweest. Onze Belgische btw-calculator neemt het werk uit handen en berekent nauwkeurig en onmiddellijk de btw voor elk verkoopbedrag. Vergeet de formules; bepaal met een paar klikken de uiteindelijke verkoopprijs en btw-bedrag.",
    de: "Die Berechnung der Mehrwertsteuer war noch nie so einfach. Unser belgischer MwSt-Rechner nimmt Ihnen die Mühe ab und berechnet die Mehrwertsteuer für jeden Verkaufsbetrag sofort und genau. Vergessen Sie die Formeln – mit wenigen Klicks ermitteln Sie den Endverkaufspreis und den Mehrwertsteuerbetrag.",
    fr: "Calculer la TVA n’a jamais été aussi simple. Notre calculateur de TVA pour la Belgique vous évite les tracas en calculant instantanément et avec précision la TVA pour tout montant de vente. Oubliez les formules : en quelques clics, déterminez le prix final et le montant de la TVA."
  },

  'Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in Belgium in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.': {
    nl: "Belasting over de toegevoegde waarde (btw) is een indirecte belasting die wordt geheven op de meeste goederen en diensten in elke fase van de waardeketen, van productie tot verkooppunt. In België werd een maatregel in 2018 met 5% genomen; het tarief werd in juli 2020 aangepast naar 15% als reactie op COVID-19-maatregelen.",
    de: "Die Mehrwertsteuer ist eine indirekte Steuer auf die meisten Waren und Dienstleistungen in jeder Phase der Wertschöpfungskette, von der Produktion bis zum Verkaufsort. In Belgien wurde 2018 eine Regelung mit 5 % eingeführt; der Satz wurde im Juli 2020 im Zuge von COVID-19-Maßnahmen auf 15 % angepasst.",
    fr: "La taxe sur la valeur ajoutée (TVA) est un impôt indirect prélevé sur la plupart des biens et services à chaque étape de la chaîne d’approvisionnement, de la production au point de vente. En Belgique, une mesure a été appliquée en 2018 à 5 % ; ce taux a été ajusté à 15 % en juillet 2020 pour répondre aux impacts de la COVID-19."
  },

  'How to Calculate VAT in Belgium': {
    nl: "Hoe berekent u btw in België",
    de: "Wie berechnet man die Mehrwertsteuer in Belgien",
    fr: "Comment calculer la TVA en Belgique"
  },

  'Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:': {
    nl: "Of u nu btw toevoegt aan een verkoopprijs of deze eruit haalt: onze calculator verwerkt beide nauwkeurig:",
    de: "Ob Sie die Mehrwertsteuer zu einem Verkaufspreis hinzufügen oder herausrechnen – unser Rechner beherrscht beides mit Präzision:",
    fr: "Que vous ajoutiez la TVA à un prix de vente ou que vous l’extrayiez, notre calculateur gère les deux avec précision :"
  },

  'VAT Calculation Made Simple': {
    nl: "BTW-berekening eenvoudig gemaakt",
    de: "Mehrwertsteuerberechnung leicht gemacht",
    fr: "Calcul de la TVA simplifié"
  },

  'Excluding VAT: Ideal for sales prices that already include VAT.': {
    nl: "Exclusief btw: ideaal voor verkoopprijzen die btw al bevatten.",
    de: "Ohne MwSt.: Ideal für Verkaufspreise, die bereits MwSt. enthalten.",
    fr: "Hors TVA : Idéal pour les prix de vente qui incluent déjà la TVA."
  },

  'Instant Calculations: Quick and straightforward VAT computations.': {
    nl: "Directe berekeningen: snelle en eenvoudige btw-berekeningen.",
    de: "Sofortige Berechnungen: Schnelle und unkomplizierte MwSt-Berechnungen.",
    fr: "Calculs instantanés : calculs de TVA rapides et simples."
  },

  'Accuracy: Precise invoicing every time.': {
    nl: "Nauwkeurigheid: elke keer nauwkeurige facturering.",
    de: "Genauigkeit: Präzise Rechnungsstellung jedes Mal.",
    fr: "Précision : facturation précise à chaque fois."
  },

  'Error Reduction: Minimize manual calculation mistakes.': {
    nl: "Foutenreductie: minimaliseer handmatige rekenfouten.",
    de: "Fehlerreduzierung: Minimieren Sie manuelle Rechenfehler.",
    fr: "Réduction des erreurs : minimisez les erreurs de calcul manuelles."
  },

  'Time Savings: Spend less time on math and more on your business.': {
    nl: "Tijdbesparing: besteed minder tijd aan berekeningen en meer aan uw bedrijf.",
    de: "Zeitersparnis: Verbringen Sie weniger Zeit mit Rechnungen und mehr mit Ihrem Business.",
    fr: "Gain de temps : passez moins de temps sur les calculs et plus sur votre activité."
  },

  'Belgium has a standard VAT rate of 21% with reduced rates of 12%, 6% and 0% for specific goods and services.': {
    nl: "België heeft een standaard btw-tarief van 21% met verlaagde tarieven van 12%, 6% en 0% voor specifieke goederen en diensten.",
    de: "Belgien hat einen Standard-MwSt-Satz von 21 % mit ermäßigten Sätzen von 12 %, 6 % und 0 % für bestimmte Waren und Dienstleistungen.",
    fr: "La Belgique applique un taux de TVA standard de 21 % avec des taux réduits de 12 %, 6 % et 0 % pour certains biens et services."
  },
  
  'VAT Calculator': { nl: "Btw-calculator", de: "MwSt-Rechner", fr: "Calculateur de TVA" },

  'Total VAT this month': { nl: "Totale btw deze maand", de: "Gesamt-MwSt. diesen Monat", fr: "Total TVA ce mois" },
  'Showing VAT breakdown for the current month': { nl: "BTW-specificatie voor de huidige maand weergeven", de: "MwSt-Aufschlüsselung für den aktuellen Monat anzeigen", fr: "Affichage de la ventilation de la TVA pour le mois en cours" },

  'Sale Value': { nl: "Verkoopwaarde", de: "Verkaufswert", fr: "Valeur de vente" },
  'VAT Rate (%)': { nl: "BTW-tarief (%)", de: "MwSt-Satz (%)", fr: "Taux de TVA (%)" },
  'Is Sale Inclusive of VAT?': { nl: "Is de verkoop inclusief btw?", de: "Ist der Verkauf inkl. MwSt.?", fr: "La vente inclut-elle la TVA ?" },
  'Yes': { nl: "Ja", de: "Ja", fr: "Oui" },
  'No': { nl: "Nee", de: "Nein", fr: "Non" },

  'Inclusive of VAT': { nl: "Inclusief btw", de: "Inklusive MwSt.", fr: "TVA incluse" },
  'Exclusive of VAT': { nl: "Exclusief btw", de: "Exklusive MwSt.", fr: "Hors TVA" },

  'VAT Amount': { nl: "BTW-bedrag", de: "MwSt-Betrag", fr: "Montant de la TVA" },
  'Total Value': { nl: "Totale waarde", de: "Gesamtwert", fr: "Valeur totale" },

  // --- STATIC TEXT SECTIONS ---
  'What Is VAT?': { nl: "Wat is btw?", de: "Was ist Mehrwertsteuer?", fr: "Qu’est-ce que la TVA ?" },

  // Common bullet points
  'Adding VAT: Perfect for when sales are exclusive of VAT.': {
    nl: "BTW toevoegen: perfect voor wanneer verkoopprijzen exclusief btw zijn.",
    de: "MwSt. hinzufügen: Ideal, wenn Verkaufspreise ohne MwSt. angegeben sind.",
    fr: "Ajout de la TVA : parfait lorsque les prix de vente sont hors TVA."
  },
  // Benefits
  'With our Belgium VAT Calculator, enjoy:': { nl: "Met onze Belgische btw-calculator geniet u van:", de: "Mit unserem belgischen MwSt-Rechner profitieren Sie von:", fr: "Avec notre calculateur de TVA pour la Belgique, profitez de :" },

  // Belgium-specific label
  'Belgian VAT': { nl: "Belgische btw", de: "Belgische MwSt", fr: "TVA belge" },

  // Currency option (Belgium)
  'EUR': { nl: "EUR", de: "EUR", fr: "EUR" },

//------------------Webinar
' Unlocking Insights Of Webinars': {
    nl: "Inzichten uit webinars ontsluiten",
    de: "Gewinnung von Erkenntnissen aus Webinaren",
    fr: "Déverrouiller les insights des webinaires"
  },
  'This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations': {
    nl: "Dit webinar is essentieel voor professionals die in hun organisatie verantwoordelijk zijn voor facturatie en compliance.",
    de: "Dieses Webinar ist unverzichtbar für Fachleute, die in ihren Organisationen Rechnungsstellung und Compliance betreuen.",
    fr: "Ce webinaire est essentiel pour les professionnels en charge de la facturation et de la conformité au sein de leur organisation."
  },
  //-------------contact
  

  'Dammam': { nl: "Dammam", de: "Dammam", fr: "Dammam" },
  'Riyadh': { nl: "Riyad", de: "Riad", fr: "Riyad" },

  // Social Media
  'SOCIAL MEDIA': { nl: "SOCIAL MEDIA", de: "SOCIAL MEDIA", fr: "RÉSEAUX SOCIAUX" },

  // Belgium Country Cards
  'E-INVOICING': { nl: "E-FACTURATIE", de: "E-RECHNUNGSSTELLUNG", fr: "E-FACTURATION" },
  'INTEGRATION': { nl: "INTEGRATIE", de: "INTEGRATION", fr: "INTÉGRATION" },
  'PARTNERS': { nl: "PARTNERS", de: "PARTNER", fr: "PARTENAIRES" },
  'Support Illustration': { nl: "Ondersteuningsillustratie", de: "Support-Illustration", fr: "Illustration de support" },
  
  '2nd Floor, Suit NO. 3, Al khonaini building, king saud street, P.O BOX 2877 Dammam 31461 Kingdom of Saudi Arabia': {
    nl: "2e verdieping, suite nr. 3, Al Khonaini-gebouw, King Saud Street, P.O. BOX 2877 Dammam 31461 Koningrijk Saoedi-Arabië",
    de: "2. Stock, Suite Nr. 3, Al-Khonaini-Gebäude, King Saud Street, P.O. BOX 2877 Dammam 31461 Königreich Saudi-Arabien",
    fr: "2ème étage, suite n° 3, immeuble Al Khonaini, King Saud Street, P.O. BOX 2877 Dammam 31461 Royaume d’Arabie saoudite"
  },

  'Level 1, Building Z, Zone A Airport Road, Business Gate P.O. Box 93597 Riyadh 11683 Kingdom of Saudi Arabia': {
    nl: "Level 1, gebouw Z, Zone A Airport Road, Business Gate P.O. Box 93597 Riyad 11683 Koningrijk Saoedi-Arabië",
    de: "Ebene 1, Gebäude Z, Zone A Airport Road, Business Gate P.O. Box 93597 Riad 11683 Königreich Saudi-Arabien",
    fr: "Niveau 1, bâtiment Z, Zone A Airport Road, Business Gate P.O. Box 93597 Riyad 11683 Royaume d’Arabie saoudite"
  },
  
  //--------- ABOUT ACCQRATE BELGIUM SECTION ---------
  'Expansion and Growth Across the EU': { nl: "Uitbreiding en groei in de EU", de: "Expansion und Wachstum in der EU", fr: "Expansion et croissance à travers l’UE" },
  'Accqrate’s entry into Belgium marks a pivotal expansion in our European compliance strategy:': {
    nl: "De toetreding van Accqrate tot België markeert een cruciale uitbreiding van onze Europese compliance-strategie:",
    de: "Der Eintritt von Accqrate in Belgien markiert eine entscheidende Erweiterung unserer europäischen Compliance-Strategie:",
    fr: "L’arrivée d’Accqrate en Belgique marque une étape clé dans notre stratégie européenne de conformité :"
  },

  'PEPPOL-First Architecture': { nl: "PEPPOL-first architectuur", de: "PEPPOL-First-Architektur", fr: "Architecture « PEPPOL-first »" },
  'Accqrate is engineered to operate natively on PEPPOL standards, guaranteeing secure, structured, and interoperable invoice exchange.': {
    nl: "Accqrate is gebouwd om native op PEPPOL-standaarden te werken en garandeert veilige, gestructureerde en interoperabele factuuruitwisseling.",
    de: "Accqrate ist so konzipiert, dass es nativ auf PEPPOL-Standards betrieben wird und einen sicheren, strukturierten und interoperablen Rechnungsaustausch gewährleistet.",
    fr: "Accqrate est conçu pour fonctionner nativement selon les standards PEPPOL, garantissant un échange de factures sécurisé, structuré et interopérable."
  },

  'Rapid Market Adoption': { nl: "Snelle marktacceptatie", de: "Schnelle Marktdurchdringung", fr: "Adoption rapide sur le marché" },
  'From single-entity SMEs to multi-country enterprises, Belgian organizations increasingly rely on Accqrate for smooth integration with their ERP, POS, or invoicing systems.': {
    nl: "Van enkele KMO-entiteiten tot multinationale ondernemingen: Belgische organisaties vertrouwen steeds vaker op Accqrate voor een soepele integratie met hun ERP, POS of factureringssystemen.",
    de: "Von Einzelfirmen-KMU bis zu länderübergreifenden Konzernen verlassen sich belgische Organisationen zunehmend auf Accqrate für reibungslose Integrationen mit ihren ERP-, POS- oder Abrechnungssystemen.",
    fr: "Des PME mono-entité aux entreprises multi-pays, les organisations belges s’appuient de plus en plus sur Accqrate pour une intégration fluide de leur ERP, POS ou systèmes de facturation."
  },

  'Flexible Integration Capabilities': { nl: "Flexibele integratiemogelijkheden", de: "Flexible Integrationsmöglichkeiten", fr: "Capacités d’intégration flexibles" },
  '• API push & pull\n• PEPPOL connectivity\n• ERP adapters\n• Flat-file / Excel upload\n• Custom integration executables\n• Designed to support everything from legacy on-prem systems to complex multi-ERP landscapes': {
    nl: "• API push & pull\n• PEPPOL-connectiviteit\n• ERP-adapters\n• Flat-file / Excel-upload\n• Maatwerk integratie-executables\n• Ontworpen om alles te ondersteunen van legacy on-prem systemen tot complexe multi-ERP landschappen",
    de: "• API Push & Pull\n• PEPPOL-Konnektivität\n• ERP-Adapter\n• Flat-File / Excel-Upload\n• Kundenspezifische Integrations-Executables\n• Entwickelt zur Unterstützung von Legacy-On-Prem-Systemen bis hin zu komplexen Multi-ERP-Landschaften",
    fr: "• API push & pull\n• Connectivité PEPPOL\n• Adaptateurs ERP\n• Upload de fichiers plats / Excel\n• Exécutables d’intégration sur mesure\n• Conçu pour prendre en charge tout, des systèmes legacy on-prem aux paysages multi-ERP complexes"
  },

  'Purpose-Built for All Business Sizes': { nl: "Speciaal ontworpen voor alle bedrijfsformaten", de: "Zweckentwickelt für alle Unternehmensgrößen", fr: "Conçu pour toutes les tailles d’entreprise" },
  'Accqrate supports both:\n• SMEs needing a lightweight, standalone e-invoicing solution\n• Large enterprises requiring multi-entity orchestration, VAT reconciliation, and cross-border compliance': {
    nl: "Accqrate ondersteunt zowel:\n• KMO’s die een lichtgewicht, zelfstandige e-facturatieoplossing nodig hebben\n• Grote ondernemingen die multi-entiteit orchestratie, btw-afstemming en grensoverschrijdende naleving vereisen",
    de: "Accqrate unterstützt sowohl:\n• KMU, die eine leichtgewichtige, eigenständige E-Rechnungslösung benötigen\n• Große Unternehmen, die Multi-Entity-Orchestrierung, MwSt-Abstimmung und grenzüberschreitende Compliance benötigen",
    fr: "Accqrate prend en charge à la fois :\n• Les PME nécessitant une solution d’e-facturation légère et autonome\n• Les grandes entreprises requérant orchestration multi-entités, rapprochement de TVA et conformité transfrontalière"
  },
  
  'About Accqrate:': { nl: "Over Accqrate:", de: "Über Accqrate:", fr: "À propos d’Accqrate :" },

  'Advancing Digital Compliance & E-Invoicing for Belgium and the EU': {
    nl: "Vooruitgang in digitale naleving en e-facturatie voor België en de EU",
    de: "Vorantreiben digitaler Compliance & E-Rechnung für Belgien und die EU",
    fr: "Faire avancer la conformité numérique et l’e-facturation pour la Belgique et l’UE"
  },

  'Trusted by': { nl: "Vertrouwd door", de: "Vertraut von", fr: "Fiable par" },
  'Companies': { nl: "Bedrijven", de: "Unternehmen", fr: "Entreprises" },

  'Across': { nl: "In", de: "In", fr: "À travers" },
  'Industries': { nl: "Sectoren", de: "Branchen", fr: "Secteurs" },

  'Accqrate is a global E-Invoicing platform built to meet the digital tax and reporting modernization sweeping across the EU. From Belgium’s PEPPOL-based B2B mandate to ViDA-driven cross-border reporting, Accqrate delivers a scalable, compliant, and future-ready foundation for enterprises operating across Belgium and broader EU markets.': {
    nl: "Accqrate is een wereldwijd e-facturatieplatform dat is ontwikkeld om te voldoen aan de digitalisering van belasting- en rapportageverplichtingen in de EU. Van het PEPPOL-gebaseerde B2B-mandaat in België tot ViDA-gestuurde grensoverschrijdende rapportage, Accqrate levert een schaalbare, conforme en toekomstbestendige basis voor ondernemingen die in België en de bredere EU-markten opereren.",
    de: "Accqrate ist eine globale E-Rechnungsplattform, die entwickelt wurde, um den digitalen Steuer- und Berichtsmodernisierungen in der EU gerecht zu werden. Vom PEPPOL-basierten B2B-Mandat Belgiens bis hin zu ViDA-gesteuerter grenzüberschreitender Berichterstattung bietet Accqrate eine skalierbare, konforme und zukunftsbereite Grundlage für Unternehmen, die in Belgien und den größeren EU-Märkten tätig sind.",
    fr: "Accqrate est une plateforme mondiale d’e-facturation conçue pour répondre à la modernisation numérique de la fiscalité et des déclarations qui traverse l’UE. Du mandat B2B belge basé sur PEPPOL aux rapports transfrontaliers pilotés par ViDA, Accqrate fournit une base évolutive, conforme et prête pour l’avenir aux entreprises opérant en Belgique et sur les marchés européens élargis."
  },

  'Backed by Iteron AG, Switzerland, Accqrate brings European engineering standards, secure architectures, and a decade-long expertise in digital tax transformations across regulated geographies.': {
    nl: "Ondersteund door Iteron AG, Zwitserland, brengt Accqrate Europese engineeringstandaarden, veilige architecturen en een decennium aan expertise in digitale belastingtransformaties in gereguleerde jurisdicties.",
    de: "Gestützt von Iteron AG, Schweiz, bringt Accqrate europäische Engineering-Standards, sichere Architekturen und eine jahrzehntelange Expertise in digitalen Steuertransformationsprojekten über regulierte Regionen hinweg.",
    fr: "Soutenu par Iteron AG, Suisse, Accqrate apporte des standards d’ingénierie européens, des architectures sécurisées et une expertise de longue date dans les transformations fiscales numériques à travers des juridictions régulées."
  },

  'Accqrate In Belgium': { nl: "Accqrate in België", de: "Accqrate in Belgien", fr: "Accqrate en Belgique" },

  'Built for Belgium’s PEPPOL & FPS Finance Mandate': { nl: "Gebouwd voor België’s PEPPOL- & FPS Finance-mandaat", de: "Entwickelt für Belgiens PEPPOL- & FPS Finance-Mandat", fr: "Conçu pour le mandat PEPPOL & FPS Finance de la Belgique" },
  'Accqrate brings a Belgium-ready E-Invoicing engine that follows PEPPOL BIS standards, supports workflows aligned with Mercurius, and remains continuously updated with evolving FPS Finance requirements.': {
    nl: "Accqrate levert een voor België gereed e-facturatie-engine die de PEPPOL BIS-standaarden volgt, workflows ondersteunt die zijn afgestemd op Mercurius en continu wordt bijgewerkt met de veranderende vereisten van FPS Finance.",
    de: "Accqrate bietet eine für Belgien vorbereitete E-Rechnungs-Engine, die den PEPPOL BIS-Standards folgt, Workflows unterstützt, die mit Mercurius abgestimmt sind, und kontinuierlich an die sich entwickelnden Anforderungen von FPS Finance angepasst wird.",
    fr: "Accqrate propose un moteur d’e-facturation prêt pour la Belgique qui suit les standards PEPPOL BIS, prend en charge des workflows alignés sur Mercurius et est continuellement mis à jour avec l’évolution des exigences de FPS Finance."
  },

  'European Precision, Global Scalability': { nl: "Europese precisie, wereldwijde schaalbaarheid", de: "Europäische Präzision, globale Skalierbarkeit", fr: "Précision européenne, scalabilité mondiale" },
  'With Swiss-led engineering and global deployment experience across 30+ sectors, Accqrate delivers an enterprise-grade platform capable of handling Belgium’s upcoming B2B rollout and multi-country operations inside and outside the EU.': {
    nl: "Met Zwitsers geleide engineering en wereldwijde implementatie-ervaring in meer dan 30 sectoren levert Accqrate een platform op ondernemingsniveau dat België’s komende B2B-uitrol en multinationale operaties binnen en buiten de EU aankan.",
    de: "Mit schweizerisch geführter Engineering-Expertise und globaler Bereitstellungserfahrung in über 30 Branchen liefert Accqrate eine Plattform auf Enterprise-Niveau, die Belgiens bevorstehenden B2B-Rollout und länderübergreifende Operationen innerhalb und außerhalb der EU bewältigt.",
    fr: "Avec une ingénierie dirigée depuis la Suisse et une expérience de déploiement mondial dans plus de 30 secteurs, Accqrate fournit une plateforme de niveau entreprise capable de gérer le déploiement B2B à venir en Belgique et des opérations multi-pays à l’intérieur et à l’extérieur de l’UE."
  },

  'Compliance Made Simple': { nl: "Compliance eenvoudig gemaakt", de: "Compliance einfach gemacht", fr: "La conformité simplifiée" },
  'Accqrate combines automation, AI-driven validations, and standardized interoperability to make compliance intuitive, predictable, and scalable for companies of all sizes.': {
    nl: "Accqrate combineert automatisering, AI-gestuurde validaties en gestandaardiseerde interoperabiliteit om naleving intuïtief, voorspelbaar en schaalbaar te maken voor bedrijven van elke omvang.",
    de: "Accqrate kombiniert Automatisierung, KI-gestützte Validierungen und standardisierte Interoperabilität, um Compliance für Unternehmen jeder Größe intuitiv, vorhersehbar und skalierbar zu machen.",
    fr: "Accqrate combine l’automatisation, des validations pilotées par l’IA et une interopérabilité standardisée pour rendre la conformité intuitive, prévisible et évolutive pour les entreprises de toutes tailles."
  },
'Our Mission': { nl: "Onze missie", de: "Unsere Mission", fr: "Notre mission" },

  'Modernizing Europe’s E-Invoicing & Digital Tax Landscape': { nl: "Modernisering van Europa's e-facturatie- en digitale belastinglandschap", de: "Modernisierung des europäischen E-Rechnungs- und digitalen Steuerumfelds", fr: "Moderniser le paysage européen de la e-facturation et de la fiscalité numérique" },
  'We empower businesses with technology that simplifies PEPPOL connectivity, digital reporting, VAT oversight, and multi-entity governance.': {
    nl: "Wij versterken bedrijven met technologie die PEPPOL-connectiviteit, digitale rapportage, btw-toezicht en multi-entiteitsbestuur vereenvoudigt.",
    de: "Wir befähigen Unternehmen mit Technologie, die PEPPOL-Konnektivität, digitale Berichterstattung, MwSt-Überwachung und Multi-Entity-Governance vereinfacht.",
    fr: "Nous donnons aux entreprises les moyens, par la technologie, de simplifier la connectivité PEPPOL, la déclaration numérique, le contrôle de la TVA et la gouvernance multi-entités."
  },

  'Accelerating Digital Adoption': { nl: "Versnellen van digitale adoptie", de: "Beschleunigung der digitalen Adoption", fr: "Accélérer l’adoption numérique" },
  'Accqrate eliminates the traditional complexities of ERP and e-invoicing rollouts with quick integrations, easy scalability, and enterprise-grade reliability.': {
    nl: "Accqrate verwijdert traditionele complexiteit bij ERP- en e-facturatie-implementaties door snelle integraties, eenvoudige schaalbaarheid en betrouwbaarheid op ondernemingsniveau.",
    de: "Accqrate beseitigt die traditionellen Komplexitäten bei ERP- und E-Rechnungsrollouts durch schnelle Integrationen, einfache Skalierbarkeit und Zuverlässigkeit auf Enterprise-Niveau.",
    fr: "Accqrate supprime les complexités traditionnelles des déploiements ERP et e-facturation grâce à des intégrations rapides, une scalabilité facile et une fiabilité de niveau entreprise."
  },


  'Our Journey': { nl: "Onze reis", de: "Unsere Reise", fr: "Notre parcours" },

  'Accqrate’s evolution is defined by a relentless focus on compliance excellence, deep integration capabilities, and forward-looking technology leadership.': {
    nl: "De ontwikkeling van Accqrate wordt bepaald door een niet aflatende focus op compliance-excellence, diepgaande integratiemogelijkheden en toekomstgerichte technologische leiding.",
    de: "Die Entwicklung von Accqrate ist geprägt von einem konsequenten Fokus auf Compliance-Exzellenz, umfangreichen Integrationsfähigkeiten und zukunftsweisender Technologieführung.",
    fr: "L’évolution d’Accqrate se caractérise par un focus intransigeant sur l’excellence de conformité, des capacités d’intégration poussées et un leadership technologique tourné vers l’avenir."
  },

  'Iteron AG: High-End Technology Consultancy': { nl: "Iteron AG: high-end technologieconsultancy", de: "Iteron AG: High-End Technologieberatung", fr: "Iteron AG : cabinet de conseil technologique haut de gamme" },
  'Iteron AG begins operations in Switzerland, delivering advanced technology consulting across Europe. From enterprise SaaS to blockchain-based solutions, the company lays the groundwork for the modern digital compliance and e-invoicing platforms that would follow.': {
    nl: "Iteron AG start activiteiten in Zwitserland en levert geavanceerde technologieconsultancy in heel Europa. Van enterprise SaaS tot blockchain-oplossingen — het bedrijf legt de basis voor moderne platforms voor digitale compliance en e-facturatie.",
    de: "Iteron AG nimmt in der Schweiz den Betrieb auf und bietet in ganz Europa fortschrittliche Technologieberatung. Von Enterprise-SaaS bis zu blockchainbasierten Lösungen legt das Unternehmen das Fundament für moderne Plattformen zur digitalen Compliance und E-Rechnung.",
    fr: "Iteron AG lance ses activités en Suisse en fournissant du conseil technologique avancé à travers l’Europe. Du SaaS d’entreprise aux solutions blockchain, la société pose les bases des plateformes modernes de conformité numérique et d’e-facturation à venir."
  },

  'Accqrate Global Platform Initiated': { nl: "Accqrate globaal platform geïnitieerd", de: "Accqrate Global Platform initiiert", fr: "Lancement de la plateforme globale Accqrate" },
  'Accqrate emerges as a unified ERP and E-Invoicing platform engineered for high-compliance jurisdictions, multi-country operations, and enterprise-level digital transformation.': {
    nl: "Accqrate verschijnt als een verenigd ERP- en e-facturatieplatform, ontworpen voor jurisdicties met strikte compliance, multi-land operaties en digitale transformatie op ondernemingsniveau.",
    de: "Accqrate entsteht als ein einheitliches ERP- und E-Rechnungsplattform, entwickelt für hoch-compliance-pflichtige Rechtsräume, länderübergreifende Operationen und digitale Transformation auf Konzernebene.",
    fr: "Accqrate se présente comme une plateforme unifiée ERP et e-facturation, conçue pour des juridictions à haute exigence de conformité, des opérations multi-pays et la transformation numérique au niveau entreprise."
  },

  'E-Invoicing Launch Across Regulated Markets': { nl: "Lancering van e-facturatie in gereguleerde markten", de: "Einführung der E-Rechnung in regulierten Märkten", fr: "Lancement de l’e-facturation dans les marchés régulés" },
  

  'Expansion of API-First Integrations': { nl: "Uitbreiding van API-first integraties", de: "Ausbau API-first Integrationen", fr: "Extension des intégrations API-first" },
  'Accqrate strengthens its integration layer with certified connectors and toolkits for SAP, Oracle, Microsoft Dynamics and major ERP/POS platforms.': {
    nl: "Accqrate versterkt zijn integratielaag met gecertificeerde connectors en toolkits voor SAP, Oracle, Microsoft Dynamics en belangrijke ERP/POS-platformen.",
    de: "Accqrate stärkt seine Integrationsschicht mit zertifizierten Konnektoren und Toolkits für SAP, Oracle, Microsoft Dynamics und große ERP/POS-Plattformen.",
    fr: "Accqrate renforce sa couche d’intégration avec des connecteurs certifiés et des toolkits pour SAP, Oracle, Microsoft Dynamics et les principales plateformes ERP/POS."
  },

  'MNC Deployments Across MENA, ASEAN & EU': { nl: "MNC-implementaties in MENA, ASEAN & EU", de: "MNC-Bereitstellungen in MENA, ASEAN & EU", fr: "Déploiements MNC en MENA, ASEAN & UE" },
  'Accqrate supports multi-entity deployments, processing millions of monthly transactions across global enterprises with assured compliance.': {
    nl: "Accqrate ondersteunt multi-entiteitsimplementaties en verwerkt miljoenen transacties per maand voor wereldwijde ondernemingen met gegarandeerde compliance.",
    de: "Accqrate unterstützt Multi-Entity-Bereitstellungen und verarbeitet Millionen monatlicher Transaktionen für globale Unternehmen bei gesicherter Compliance.",
    fr: "Accqrate prend en charge des déploiements multi-entités, traitant des millions de transactions mensuelles pour des entreprises mondiales avec conformité garantie."
  },

  'Belgium & EU Compliance Acceleration': { nl: "Versnelling van België- & EU-compliance", de: "Beschleunigung der Belgien- & EU-Compliance", fr: "Accélération de la conformité Belgique & UE" },
  'Accqrate launches its Belgium PEPPOL engine with Mercurius interoperability and achieves full readiness for ViDA-aligned digital reporting.': {
    nl: "Accqrate lance zijn Belgische PEPPOL-engine met Mercurius-interoperabiliteit en bereikt complete gereedheid voor ViDA-gecoördineerde digitale rapportage.",
    de: "Accqrate startet seine belgische PEPPOL-Engine mit Mercurius-Interoperabilität und erreicht volle Einsatzbereitschaft für ViDA-kompatible digitale Berichterstattung.",
    fr: "Accqrate déploie son moteur PEPPOL pour la Belgique avec interopérabilité Mercurius et atteint une préparation complète pour la déclaration numérique alignée ViDA."
  },

  'Enterprise-Grade Automation & AI Validation Engine': { nl: "Automatiserings- & AI-validatie-engine op ondernemingsniveau", de: "Automatisierungs- & KI-Validierungs-Engine auf Enterprise-Niveau", fr: "Moteur d’automatisation et de validation IA de niveau entreprise" },
  'Accqrate introduces AccelerAI, a sophisticated automation layer for real-time compliance checks, anomaly detection, VAT reconciliation, and cross-border reporting.': {
    nl: "Accqrate introduceert AccelerAI, een geavanceerde automatiseringslaag voor realtime compliance-checks, anomaliedetectie, btw-afstemming en grensoverschrijdende rapportage.",
    de: "Accqrate führt AccelerAI ein, eine hochentwickelte Automatisierungsschicht für Echtzeit-Compliance-Checks, Anomalieerkennung, MwSt-Abstimmung und grenzüberschreitende Berichterstattung.",
    fr: "Accqrate présente AccelerAI, une couche d’automatisation sophistiquée pour les contrôles de conformité en temps réel, la détection d’anomalies, le rapprochement de TVA et les rapports transfrontaliers."
  },
   'Expansion and Growth in EU': { nl: "Uitbreiding en groei in de EU", de: "Expansion und Wachstum in der EU", fr: "Expansion et croissance dans l’UE" },

  'Accqrate has experienced remarkable growth and innovation, marked by significant achievements:': {
    nl: "Accqrate heeft opmerkelijke groei en innovatie doorgemaakt, gekenmerkt door belangrijke prestaties:",
    de: "Accqrate verzeichnet bemerkenswertes Wachstum und Innovation, gekennzeichnet durch bedeutende Errungenschaften:",
    fr: "Accqrate a connu une croissance et une innovation remarquables, marquées par des réalisations significatives :"
  },
    'Our Team': { nl: "Ons team", de: "Unser Team", fr: "Notre équipe" },

  'A global team of engineers, tax experts, and solution architects operates across Switzerland, India, MENA, and Europe. Our Belgium and EU compliance specialists bring deep knowledge of PEPPOL frameworks, VAT ecosystems, and ERP integrations, ensuring every deployment is accurate, predictable, and aligned with FPS Finance and EU standards.': {
    nl: "Een wereldwijd team van engineers, belastingexperts en solution-architecten werkt vanuit Zwitserland, India, MENA en Europa. Onze Belgische en EU-compliance-specialisten brengen diepe kennis van PEPPOL-kaders, btw-ecosystemen en ERP-integraties mee, zodat elke uitrol nauwkeurig, voorspelbaar en in lijn met FPS Finance en EU-standaarden is.",
    de: "Ein globales Team aus Ingenieuren, Steuerexperten und Lösungsarchitekten ist in der Schweiz, Indien, MENA und Europa tätig. Unsere belgischen und EU-Compliance-Spezialisten verfügen über tiefes Wissen zu PEPPOL-Frameworks, MwSt-Ökosystemen und ERP-Integrationen, wodurch jede Bereitstellung genau, vorhersehbar und konform mit FPS Finance und EU-Standards ist.",
    fr: "Une équipe mondiale d’ingénieurs, d’experts fiscaux et d’architectes de solutions opère en Suisse, en Inde, dans la région MENA et en Europe. Nos spécialistes conformité Belgique et UE apportent une connaissance approfondie des cadres PEPPOL, des écosystèmes TVA et des intégrations ERP, garantissant que chaque déploiement est précis, prévisible et aligné sur FPS Finance et les standards UE."
  },
   'Get 100% Peppol compliant with Accqrate': { nl: "Bereik 100% Peppol-conformiteit met Accqrate", de: "Erreichen Sie 100% Peppol-Konformität mit Accqrate", fr: "Atteignez 100 % de conformité Peppol avec Accqrate" },

  // Belgium Feature List
  'EN 16931 compliant structured invoices': { nl: "Gestructureerde facturen conform EN 16931", de: "Strukturierte Rechnungen gemäß EN 16931", fr: "Factures structurées conformes à l’EN 16931" },
  'Seamless Peppol network integration': { nl: "Naadloze integratie met het Peppol-netwerk", de: "Nahtlose Integration in das Peppol-Netzwerk", fr: "Intégration fluide au réseau Peppol" },
  'UBL format invoice generation': { nl: "Generatie van facturen in UBL-formaat", de: "Generierung von Rechnungen im UBL-Format", fr: "Génération de factures au format UBL" },
  "Ready for Belgium's 2026 mandate": { nl: "Klaar voor het Belgische mandaat 2026", de: "Bereit für Belgiens Mandat 2026", fr: "Prêt pour le mandat belge 2026" },
  // Image Alt Texts (should also be translatable)
  'Tick': { nl: "Vinkje", de: "Häkchen", fr: "Coche" },
  'Invoice': { nl: "Factuur", de: "Rechnung", fr: "Facture" },
  'Security Lock Illustration': { nl: "Illustratie beveiligingsslot", de: "Sicherheits-Schloss-Illustration", fr: "Illustration cadenas de sécurité" },
  'E-invoicing': { nl: "E-facturatie", de: "E-Rechnung", fr: "E-facturation" },
  'Resources': { nl: "Bronnen", de: "Ressourcen", fr: "Ressources" },

  //------------Navbar Items----------------


  // SECTION HEADINGS
  'Support': { nl: "Ondersteuning", de: "Support", fr: "Support" },

  // SUB ITEMS — E-INVOICING
  'Accqrate E-Invoicing': { nl: "Accqrate e-facturatie", de: "Accqrate E-Rechnung", fr: "Accqrate e-facturation" },
  'PEPPOL Certified and FPS FInance Complaint e-invoicing software': {
    nl: "PEPPOL-gecertificeerde en FPS Finance-conforme e-facturatiesoftware",
    de: "PEPPOL-zertifizierte und FPS-Finance-konforme E-Rechnungssoftware",
    fr: "Logiciel d’e-facturation certifié PEPPOL et conforme à FPS Finance"
  },

  'E-Invoicing Integration': { nl: "E-facturatie-integratie", de: "E-Rechnungsintegration", fr: "Intégration de l’e-facturation" },
  'Integrate your ERP and POS with PEPPOL Network with our seamless, adaptable e-invoicing API or Offline integrators': {
    nl: "Integreer uw ERP en POS met het Peppol-netwerk via onze naadloze, aanpasbare e-facturatie-API of offline integrators.",
    de: "Integrieren Sie Ihr ERP und POS mit dem Peppol-Netzwerk über unsere nahtlose, anpassbare E-Rechnungs-API oder Offline-Integratoren.",
    fr: "Intégrez votre ERP et POS au réseau Peppol grâce à notre API d’e-facturation adaptable et transparente ou à nos intégrateurs hors ligne."
  },

  // SUB ITEMS — SUPPORT
  'Get help when you need it': { nl: "Krijg hulp wanneer u het nodig heeft", de: "Hilfe erhalten, wenn Sie sie benötigen", fr: "Obtenez de l’aide quand vous en avez besoin" },

  'Blogs': { nl: "Blogs", de: "Blogs", fr: "Blogs" },
  'Insights, tips and industry news': { nl: "Inzichten, tips en branche-nieuws", de: "Einblicke, Tipps und Branchennews", fr: "Analyses, conseils et actualités sectorielles" },

  'Announcements': { nl: "Aankondigingen", de: "Ankündigungen", fr: "Annonces" },
  'Find answers to common questions': { nl: "Vind antwoorden op veelgestelde vragen", de: "Finden Sie Antworten auf häufig gestellte Fragen", fr: "Trouvez des réponses aux questions courantes" },

  'FAQs': { nl: "FAQ", de: "FAQ", fr: "FAQ" },
  'Connect with other users': { nl: "Verbind met andere gebruikers", de: "Mit anderen Nutzern verbinden", fr: "Connectez-vous avec d’autres utilisateurs" },

  'Tax Calculator': { nl: "Belastingcalculator", de: "Steuerrechner", fr: "Calculateur fiscal" },
  'Calculate your Belgium VAT obligations': { nl: "Bereken uw Belgische btw-verplichtingen", de: "Berechnen Sie Ihre belgischen MwSt-Verpflichtungen", fr: "Calculez vos obligations TVA en Belgique" },

  'Events': { nl: "Evenementen", de: "Veranstaltungen", fr: "Événements" },
  'Upcoming events and webinars in Belgium': { nl: "Aankomende evenementen en webinars in België", de: "Bevorstehende Veranstaltungen und Webinare in Belgien", fr: "Événements et webinaires à venir en Belgique" },


  // MAIN NAV
  
  'About us': { nl: "Over ons", de: "Über uns", fr: "À propos" },
  'Home': { nl: "Home", de: "Startseite", fr: "Accueil" },
  'Contact Sales': { nl: "Contacteer Sales", de: "Vertrieb kontaktieren", fr: "Contacter les ventes" },

  // LANGUAGE & COUNTRY DROPDOWN
  'Select Language': { nl: "Selecteer taal", de: "Sprache wählen", fr: "Sélectionnez la langue" },
  'Select Country': { nl: "Selecteer land", de: "Land wählen", fr: "Sélectionnez le pays" },
  'Loading...': { nl: "Laden...", de: "Wird geladen...", fr: "Chargement..." },

//------------------ FOOTER ITEMS ----------------


  'Company': { nl: "Bedrijf", de: "Unternehmen", fr: "Entreprise" },
  'Accelera': { nl: "Accelera", de: "Accelera", fr: "Accelera" },
  'Testimonials': { nl: "Getuigenissen", de: "Referenzen", fr: "Témoignages" },
  'Join our Team': { nl: "Word lid van ons team", de: "Werden Sie Teil unseres Teams", fr: "Rejoignez notre équipe" },
  'Press': { nl: "Pers", de: "Presse", fr: "Presse" },
  'Newsletter': { nl: "Nieuwsbrief", de: "Newsletter", fr: "Newsletter" },
  'Branding Assets': { nl: "Branding-assets", de: "Branding-Assets", fr: "Actifs de marque" },

  // MAIN FOOTER COLUMNS
  'E-invoicing Solution': { nl: "E-facturatieoplossing", de: "E-Rechnungslösung", fr: "Solution d’e-facturation" },
  'Accqrate E-invoicing': { nl: "Accqrate e-facturatie", de: "Accqrate E-Rechnung", fr: "Accqrate e-facturation" },
  'Integration Solution': { nl: "Integratieoplossing", de: "Integrationslösung", fr: "Solution d’intégration" },
  'Integration with SAP Suite': { nl: "Integratie met SAP-suite", de: "Integration mit der SAP-Suite", fr: "Intégration avec la suite SAP" },
  'Integration with Microsoft Suite': { nl: "Integratie met Microsoft-suite", de: "Integration mit der Microsoft-Suite", fr: "Intégration avec la suite Microsoft" },
  'Integration with Oracle Suite': { nl: "Integratie met Oracle-suite", de: "Integration mit der Oracle-Suite", fr: "Intégration avec la suite Oracle" },
  'Integration with Homegrown Solution': { nl: "Integratie met interne oplossingen", de: "Integration mit hausgemachter Lösung", fr: "Intégration avec solution interne" },
  'Integration with Legacy Solutions': { nl: "Integratie met legacy-oplossingen", de: "Integration mit Legacy-Lösungen", fr: "Intégration avec solutions legacy" },
  'Multi Country Integration': { nl: "Multilandintegratie", de: "Länderübergreifende Integration", fr: "Intégration multi-pays" },

  'Business Solution': { nl: "Zakelijke oplossing", de: "Business-Lösung", fr: "Solution métier" },
  'Accqrate Books': { nl: "Accqrate Books", de: "Accqrate Books", fr: "Accqrate Books" },
  'Accqrate Retail': { nl: "Accqrate Retail", de: "Accqrate Retail", fr: "Accqrate Retail" },
  'Accqrate People': { nl: "Accqrate People", de: "Accqrate People", fr: "Accqrate People" },
  'Accqrate CRM': { nl: "Accqrate CRM", de: "Accqrate CRM", fr: "Accqrate CRM" },
  'Accqrate Factory': { nl: "Accqrate Factory", de: "Accqrate Factory", fr: "Accqrate Factory" },
  'Accqrate Plan 360': { nl: "Accqrate Plan 360", de: "Accqrate Plan 360", fr: "Accqrate Plan 360" },
  'Accqrate Services': { nl: "Accqrate Services", de: "Accqrate Services", fr: "Accqrate Services" },
  'Accqrate FileHub': { nl: "Accqrate FileHub", de: "Accqrate FileHub", fr: "Accqrate FileHub" },

  
  'FAQ': { nl: "FAQ", de: "FAQ", fr: "FAQ" },

  'Case Studies': { nl: "Case studies", de: "Fallstudien", fr: "Études de cas" },

  'Product Updates': { nl: "Productupdates", de: "Produkt-Updates", fr: "Mises à jour produit" },
  'Alternate Product': { nl: "Alternatief product", de: "Alternatives Produkt", fr: "Produit alternatif" },
  'Knowledge Center': { nl: "Kenniscentrum", de: "Wissenszentrum", fr: "Centre de connaissances" },

  'Community': { nl: "Community", de: "Community", fr: "Communauté" },
  'Affiliates': { nl: "Partners", de: "Partnerprogramme", fr: "Affiliés" },
  'Non Profits': { nl: "Non-profits", de: "Non-Profits", fr: "Organisations à but non lucratif" },
  'Accqrate Sprouts': { nl: "Accqrate Sprouts", de: "Accqrate Sprouts", fr: "Accqrate Sprouts" },
  'Become a Partner': { nl: "Word partner", de: "Werden Sie Partner", fr: "Devenez partenaire" },
  'Community Forum': { nl: "Communityforum", de: "Community-Forum", fr: "Forum communautaire" },
  'Work with a Partner': { nl: "Werk met een partner", de: "Arbeiten Sie mit einem Partner", fr: "Travaillez avec un partenaire" },
  'Find an Accountant': { nl: "Vind een accountant", de: "Finden Sie einen Buchhalter", fr: "Trouvez un comptable" },
  'Partner Marketplace': { nl: "Partner-marketplace", de: "Partner-Marktplatz", fr: "Place de marché partenaires" },

  'Data & Safety management': { nl: "Gegevens- & veiligheidsbeheer", de: "Daten- & Sicherheitsmanagement", fr: "Gestion des données et sécurité" },
  'Security': { nl: "Beveiliging", de: "Sicherheit", fr: "Sécurité" },
  'Contact us': { nl: "Neem contact op", de: "Kontaktieren Sie uns", fr: "Contactez-nous" },
  
  'Cookie Policy': { nl: "Cookiebeleid", de: "Cookie-Richtlinie", fr: "Politique de cookies" },
  'Privacy Policy': { nl: "Privacybeleid", de: "Datenschutzrichtlinie", fr: "Politique de confidentialité" },
  'GDPR Policies': { nl: "AVG-beleid", de: "DSGVO-Richtlinien", fr: "Politiques RGPD" },
  'Terms of Service': { nl: "Gebruiksvoorwaarden", de: "Nutzungsbedingungen", fr: "Conditions d’utilisation" },
  'IPR Complaints': { nl: "IP-klachten", de: "IP-Beschwerden", fr: "Réclamations PI" },

  // ENTERPRISE SECTION
  'Enterprise Solution': { nl: "Enterprise-oplossing", de: "Enterprise-Lösung", fr: "Solution entreprise" },
  'Assessments': { nl: "Assessments", de: "Assessments", fr: "Évaluations" },
  'Accqrate ONE': { nl: "Accqrate ONE", de: "Accqrate ONE", fr: "Accqrate ONE" },
  'Custom Developments': { nl: "Maatwerkontwikkeling", de: "Kundenspezifische Entwicklungen", fr: "Développements sur mesure" },
  'Business Process Automations': { nl: "Automatisering van bedrijfsprocessen", de: "Automatisierung von Geschäftsprozessen", fr: "Automatisation des processus métier" },

 
  'Call:': { nl: "Bel:", de: "Anruf:", fr: "Appel :" },
  'Email:': { nl: "E-mail:", de: "E-Mail:", fr: "E-mail :" },
  'WhatsApp:': { nl: "WhatsApp:", de: "WhatsApp:", fr: "WhatsApp :" },
  'Connect with Accqrate Concierge': { nl: "Verbind met Accqrate Concierge", de: "Verbinden Sie sich mit Accqrate Concierge", fr: "Contactez le concierge Accqrate" },

  // TAGLINE
  'One unified platform with zero silos—integrated modules on a single data model, global compliance built-in, AI-powered automation, flexible cloud or on-prem deployment, fast implementation, and enterprise-grade security and scalability.': {
    nl: "Één uniform platform zonder silo’s — geïntegreerde modules op één datamodel, ingebouwde wereldwijde compliance, AI-gestuurde automatisering, flexibele cloud of on-prem deployment, snelle implementatie en beveiliging en schaalbaarheid op ondernemingsniveau.",
    de: "Eine einheitliche Plattform ohne Silos — integrierte Module auf einem einzigen Datenmodell, integrierte globale Compliance, KI-gestützte Automatisierung, flexible Cloud- oder On-Prem-Bereitstellung, schnelle Implementierung sowie Sicherheit und Skalierbarkeit auf Enterprise-Niveau.",
    fr: "Une plateforme unifiée sans silos — modules intégrés sur un modèle de données unique, conformité mondiale intégrée, automatisation pilotée par l’IA, déploiement cloud ou on-premises flexible, mise en œuvre rapide et sécurité et scalabilité de niveau entreprise."
  },

  // COPYRIGHT
  '© Copyright 2021 - 2025 Accqrate, All rights reserved.': {
    nl: "© Copyright 2021 - 2025 Accqrate, Alle rechten voorbehouden.",
    de: "© Copyright 2021 - 2025 Accqrate, Alle Rechte vorbehalten.",
    fr: "© Copyright 2021 - 2025 Accqrate, Tous droits réservés."
  },

  //--------------Homepage Items----------------


  "Meet an Expert": { nl: "Ontmoet een expert", de: "Treffen Sie einen Experten", fr: "Rencontrez un expert" },
  "Products to power every team": { nl: "Producten die elk team versterken", de: "Produkte für jedes Team", fr: "Des produits pour chaque équipe" },
  "Explore All Products...": { nl: "Ontdek alle producten...", de: "Alle Produkte erkunden...", fr: "Découvrez tous les produits..." },
  "One platform.": { nl: "Één platform.", de: "Eine Plattform.", fr: "Une plateforme." },
  "Zero silos.": { nl: "Geen silo’s.", de: "Keine Silos.", fr: "Zéro silos." },
  "All modules run on a single, integrated data model.": { nl: "Alle modules draaien op één geïntegreerd datamodel.", de: "Alle Module laufen auf einem einzigen, integrierten Datenmodell.", fr: "Tous les modules fonctionnent sur un modèle de données intégré unique." },

  
  "Security, scalability and performance proven across 30+ industries.": { nl: "Beveiliging, schaalbaarheid en performance bewezen in meer dan 30 sectoren.", de: "Sicherheit, Skalierbarkeit und Performance in über 30 Branchen nachgewiesen.", fr: "Sécurité, scalabilité et performance prouvées dans plus de 30 secteurs." },

  "AI, everywhere.": { nl: "AI, overal.", de: "KI, überall.", fr: "IA, partout." },
  "Accelera, our AI copilot ,accelerates routine work, insights and decisions.": { nl: "Accelera, onze AI-copilot, versnelt routinetaken, inzichten en beslissingen.", de: "Accelera, unser KI-Copilot, beschleunigt Routinetätigkeiten, Erkenntnisse und Entscheidungen.", fr: "Accelera, notre copilote IA, accélère les tâches routinières, les insights et les décisions." },

  "Fast time-to-value.": { nl: "Snelle time-to-value.", de: "Schnelle Time-to-Value.", fr: "Rapide time-to-value." },
  "Lightning-fast UI, one-click installs, and low-disruption migrations from SAP/Microsoft/Oracle or disjointed tools.": { nl: "Bliksemsnelle UI, one-click installs en laag-disruptieve migraties vanaf SAP/Microsoft/Oracle of losse tools.", de: "Blitzschnelle UI, One-Click-Installationen und migrationsarme Umstellungen von SAP/Microsoft/Oracle oder heterogenen Tools.", fr: "Interface ultra-rapide, installations en un clic et migrations à faible disruption depuis SAP/Microsoft/Oracle ou outils disparates." },

  "Built-in Global compliance:": { nl: "Ingebouwde wereldwijde compliance:", de: "Integrierte globale Compliance:", fr: "Conformité mondiale intégrée :" },


  "Deploy your way.": { nl: "Deploy op uw manier.", de: "Bereitstellung nach Ihrem Wunsch.", fr: "Déployez à votre façon." },
  "Cloud (managed, subscription) or On-Prem (full control over infra & data).": { nl: "Cloud (managed, subscription) of On-Prem (volledige controle over infra en data).", de: "Cloud (managed, Abonnement) oder On-Prem (volle Kontrolle über Infrastruktur & Daten).", fr: "Cloud (gérée, abonnement) ou On-Prem (contrôle total de l’infra et des données)." },

  "Based on reviews": { nl: "Gebaseerd op reviews", de: "Basierend auf Bewertungen", fr: "Basé sur les avis" },
   "Full Compliance with Belgium’s E-Invoicing Mandate": { nl: "Volledige naleving van het Belgische e-facturatiemandaat", de: "Vollständige Compliance mit Belgiens E-Rechnungsmandat", fr: "Conformité totale au mandat belge d’e-facturation" },
  "Accqrate ensures end-to-end compliance with Belgium’s B2B e-invoicing mandate and the FPS Finance requirements.": { nl: "Accqrate zorgt voor end-to-end naleving van het Belgische B2B-e-facturatiemandaat en de vereisten van FPS Finance.", de: "Accqrate gewährleistet End-to-End-Compliance mit Belgiens B2B-E-Rechnungsmandat und den Anforderungen von FPS Finance.", fr: "Accqrate garantit une conformité de bout en bout au mandat B2B belge d’e-facturation et aux exigences de FPS Finance." },

  "Structured formats fully aligned with Belgian and EU specifications": { nl: "Gestructureerde formaten volledig afgestemd op Belgische en EU-specificaties", de: "Strukturierte Formate vollständig an belgische und EU-Spezifikationen angepasst", fr: "Formats structurés entièrement alignés sur les spécifications belges et de l’UE" },
  "Secure, standardized exchange over PEPPOL": { nl: "Veilige, gestandaardiseerde uitwisseling via PEPPOL", de: "Sichere, standardisierte Übertragung über PEPPOL", fr: "Échange sécurisé et standardisé via PEPPOL" },
  "Automated updates for evolving tax and technical regulations": { nl: "Geautomatiseerde updates voor veranderende fiscale en technische regels", de: "Automatisierte Updates für sich wandelnde steuerliche und technische Vorschriften", fr: "Mises à jour automatiques pour l’évolution des règles fiscales et techniques" },
  "Seamless integration with Mercurius and tax authority systems": { nl: "Naadloze integratie met Mercurius en systemen van belastingautoriteiten", de: "Nahtlose Integration mit Mercurius und Systemen der Steuerbehörden", fr: "Intégration transparente avec Mercurius et les systèmes des autorités fiscales" },

  "Hassle-Free E-Invoicing Automation": { nl: "Zorgeloze e-facturatie-automatisering", de: "Problemloses E-Rechnungs-Automatisierung", fr: "Automatisation de l’e-facturation sans tracas" },
  "Shift from manual intervention to intelligent automation:": { nl: "Stap over van handmatige interventie naar intelligente automatisering:", de: "Wechsel von manueller Intervention zu intelligenter Automatisierung:", fr: "Passez de l’intervention manuelle à l’automatisation intelligente :" },

  "AI-powered validation to reduce rejections": { nl: "AI-gestuurde validatie om afkeuringen te verminderen", de: "KI-gestützte Validierung zur Reduzierung von Ablehnungen", fr: "Validation pilotée par l’IA pour réduire les rejets" },
  "Real-time error detection and correction suggestions": { nl: "Realtime foutdetectie en correctievoorstellen", de: "Echtzeit-Fehlererkennung und Korrekturvorschläge", fr: "Détection d’erreurs en temps réel et suggestions de correction" },
  "Zero-cost regulatory upgrades": { nl: "Regelgevende upgrades zonder kosten", de: "Kostenfreie regulatorische Upgrades", fr: "Mises à jour réglementaires sans coût" },
  "Automated generation → validation → PEPPOL submission → archiving": { nl: "Geautomatiseerde generatie → validatie → PEPPOL-indiening → archivering", de: "Automatisierte Erzeugung → Validierung → PEPPOL-Übermittlung → Archivierung", fr: "Génération automatisée → validation → soumission PEPPOL → archivage" },

  "Book an Appointment": { nl: "Plan een afspraak", de: "Vereinbaren Sie einen Termin", fr: "Réservez un rendez-vous" },
  "Your AI Copilot": { nl: "Uw AI-copilot", de: "Ihr KI-Copilot", fr: "Votre copilote IA" },
  "Work faster and decide smarter with AI embedded across the suite.": { nl: "Werk sneller en neem slimmer beslissingen met AI geïntegreerd door de suite.", de: "Arbeiten Sie schneller und treffen Sie intelligentere Entscheidungen mit in die Suite integrierter KI.", fr: "Travaillez plus vite et prenez de meilleures décisions grâce à l’IA intégrée à l’ensemble de la suite." },
  "Natural-language actions:": { nl: "Acties in natuurlijke taal:", de: "Aktionen in natürlicher Sprache:", fr: "Actions en langage naturel :" },
  "Automations:": { nl: "Automatiseringen:", de: "Automatisierungen:", fr: "Automatisations :" },
  "Insight to action:": { nl: "Inzicht naar actie:", de: "Von Insight zu Aktion:", fr: "De l’insight à l’action :" },
  "Assistive UX:": { nl: "Assisterende UX:", de: "Assistive UX:", fr: "UX d’assistance :" },
  "See Accelera in a 5-Minute Demo": { nl: "Bekijk Accelera in een demo van 5 minuten", de: "Sehen Sie Accelera in einer 5-Minuten-Demo", fr: "Découvrez Accelera en démo de 5 minutes" },
   "Future-Ready for ViDA": { nl: "Klaar voor de toekomst met ViDA", de: "Zukunftssicher für ViDA", fr: "Prêt pour l’avenir avec ViDA" },
  "Accqrate equips enterprises to be compliant across the upcoming ViDA landscape:": { nl: "Accqrate rust ondernemingen uit om compliant te zijn binnen het komende ViDA-landschap :", de: "Accqrate rüstet Unternehmen aus, um im kommenden ViDA-Umfeld compliant zu sein:", fr: "Accqrate permet aux entreprises d’être conformes dans le paysage ViDA à venir :" },

  "Cross-border interoperability within the EU": { nl: "Grensoverschrijdende interoperabiliteit binnen de EU", de: "Grenzüberschreitende Interoperabilität innerhalb der EU", fr: "Interopérabilité transfrontalière au sein de l’UE" },
  "Configurable digital reporting aligned with ViDA": { nl: "Configureerbare digitale rapportage afgestemd op ViDA", de: "Konfigurierbare digitale Berichterstattung im Einklang mit ViDA", fr: "Reporting numérique configurable aligné sur ViDA" },
  "Multi-entity, multi-VAT number management for MNCs": { nl: "Beheer van multi-entiteit en meerdere btw-nummers voor multinationals", de: "Multi-Entity, Multi-USt-Nummern-Management für multinationale Unternehmen", fr: "Gestion multi-entités et multi-numéros TVA pour les multinationales" },

  "Talk to our Consultant": { nl: "Spreek met onze consultant", de: "Sprechen Sie mit unserem Berater", fr: "Parlez à notre consultant" },
   
  "Speak to a Reference Customer": { nl: "Spreek met een referentieklant", de: "Sprechen Sie mit einem Referenzkunden", fr: "Parlez à un client de référence" },
   "Our Values Drive Everything We Do": { nl: "Onze waarden bepalen alles wat we doen", de: "Unsere Werte bestimmen alles, was wir tun", fr: "Nos valeurs guident tout ce que nous faisons" },
  "Built on trust, innovation and excellence, we deliver measurable results that transform business and create lasting impact.": { nl: "Gebouwd op vertrouwen, innovatie en excellentie leveren we meetbare resultaten die bedrijven transformeren en blijvende impact creëren.", de: "Auf Vertrauen, Innovation und Exzellenz gegründet liefern wir messbare Ergebnisse, die Unternehmen transformieren und nachhaltige Wirkung erzielen.", fr: "Fondée sur la confiance, l’innovation et l’excellence, nous délivrons des résultats mesurables qui transforment les entreprises et créent un impact durable." },
  "Book a Personalized Walkthrough": { nl: "Boek een gepersonaliseerde rondleiding", de: "Buchen Sie eine personalisierte Präsentation", fr: "Réservez une visite personnalisée" },
   "Frequently Answered Questions": { nl: "Veelgestelde vragen (FAQ)", de: "Häufig beantwortete Fragen", fr: "Questions fréquemment répondues" },
  "How long is the free trial?": { nl: "Hoe lang duurt de gratis proefperiode?", de: "Wie lange dauert die kostenlose Testphase?", fr: "Quelle est la durée de l’essai gratuit ?" },
  "30 days. (Plus an optional 14-day practice account for a total of 44 days.)": { nl: "30 dagen. (Plus een optioneel oefenaccount van 14 dagen, totaal 44 dagen.)", de: "30 Tage. (Plus optionales 14-tägiges Übungskonto, insgesamt 44 Tage.)", fr: "30 jours. (Plus un compte pratique optionnel de 14 jours, soit au total 44 jours.)" },

  "Can I terminate during the trial?": { nl: "Kan ik tijdens de proef beëindigen?", de: "Kann ich während der Testphase kündigen?", fr: "Puis-je résilier pendant l’essai ?" },
  "Yes, no commitment during the trial.": { nl: "Ja, geen verplichtingen tijdens de proef.", de: "Ja, während der Testphase keine Verpflichtung.", fr: "Oui, aucun engagement pendant l’essai." },

  "Do I need a credit card to start?": { nl: "Heb ik een creditcard nodig om te beginnen?", de: "Benötige ich eine Kreditkarte zum Start?", fr: "Ai-je besoin d’une carte bancaire pour commencer ?" },
  "No card required to begin the trial.": { nl: "Geen kaart nodig om de proef te starten.", de: "Keine Karte erforderlich, um die Testphase zu beginnen.", fr: "Aucune carte requise pour commencer l’essai." },

  "Where is Accqrate Cloud hosted?": { nl: "Waar wordt Accqrate Cloud gehost?", de: "Wo wird Accqrate Cloud gehostet?", fr: "Où est hébergé Accqrate Cloud ?" },
  "Regional hosting options with data-residency choices; on-prem available for full control.": { nl: "Regionale hostingopties met keuzes voor data-residency; on-premises beschikbaar voor volledige controle.", de: "Regionale Hosting-Optionen mit Auswahl der Datenresidenz; On-Premises verfügbar für volle Kontrolle.", fr: "Options d’hébergement régionales avec choix de résidence des données ; on-premises disponible pour un contrôle total." },

  "How do I pay the subscription?": { nl: "Hoe betaal ik het abonnement?", de: "Wie bezahle ich das Abonnement?", fr: "Comment paie-t-on l’abonnement ?" },
  "Monthly or annual plans; invoicing and payment options vary by region.": { nl: "Maandelijkse of jaarlijkse plannen; facturatie- en betalingsopties verschillen per regio.", de: "Monatliche oder jährliche Pläne; Rechnung- und Zahlungsoptionen variieren je nach Region.", fr: "Plans mensuels ou annuels ; les options de facturation et de paiement varient selon la région." },

  "What plans are available?": { nl: "Welke plannen zijn beschikbaar?", de: "Welche Pläne sind verfügbar?", fr: "Quels plans sont disponibles ?" },
  "Tiered by module mix and users; bundle pricing for suites.": { nl: "Gelaagd op basis van modulemix en gebruikers; bundelprijzen voor suites.", de: "Gestaffelt nach Modulmix und Nutzerzahlen; Bündelpreise für Suiten.", fr: "Niveaux selon la combinaison de modules et les utilisateurs ; tarification groupée pour les suites." },
    "Final Conversion Band": { nl: "Eindconversiebereik", de: "Endgültige Konvertierungsband", fr: "Bande de conversion finale" },
  "Run compliant, AI-powered operations with Accqrate.": { nl: "Voer conforme, door AI aangedreven operaties uit met Accqrate.", de: "Führen Sie konforme, KI-gestützte Abläufe mit Accqrate aus.", fr: "Exécutez des opérations conformes et pilotées par l’IA avec Accqrate." },

};

export const setLanguage = (l: LanguageCode) => {
  currentLang.lang = l;
};

type TranslationKey = keyof typeof translations;
type Translations = Record<TranslationKey, Record<LanguageCode, string>>;

export const t = (text: string): string => {
  const translation = (translations as unknown as Translations)[text as TranslationKey];
  return translation?.[currentLang.lang] || text;
};
