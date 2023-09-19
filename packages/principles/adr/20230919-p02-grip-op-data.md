# Principe P02: Grip op data

- Status: draft
- Deciders: FDS programma
- Date: [YYYY-MM-DD van wanneer deze beslissing het laatst is bijgewerkt] <!-- optional. To customize the ordering without relying on Git creation dates and filenames -->
- Tags: Strategisch_Principe, Architectuur_Principe

Issue: [description | ticket/issue URL] <!-- optional -->

## Context en probleemstelling

Er is veel data binnen de overheid en deze wordt ook nog eens veelvuldig gedeeld en gekopieerd. Het is onduidelijk waar welke data is,
wat de actualiteit en betrouwbaarheid daarvan is,
en ook niet waar persoonsgegevens precies bij en voor gebruikt worden.
Hoe kan dit geadresseerd worden?

## Beslissingsfactoren <!-- optional -->

- [Data bij de Bron](#data-bij-de-bron)
- [Regie op Gegevens](#regie-op-gegevens)
- FDS & Digilab onderzoek richting Event Sourcing
- … <!-- numbers of drivers can vary -->

## Overwogen opties

- [Data bij de Bron](#data-bij-de-bron)
- [Regie op Gegevens](#regie-op-gegevens)
- [Grip op data](#grip-op-data)
- … <!-- numbers of options can vary -->

## Besluit

Gekozen oplossing: "Grip op data", omdat het onderliggende problematiek adresseert om data bij de bron te ondersteunen cq mogelijk te maken en een voorwaarde is om regie op gegevens te kunnen realiseren.

### Positieve gevolgen <!-- optional -->

- ongecontroleerde kopieën van data moeten worden opgeruimd
- data bij de bron ophalen wordt aangejaagd
- gecontroleerde kopieën van data worden expliciet gemaakt
  - hoe is in onderzoek
- er zal ook grip verkregen moeten worden op historische data (kopieën uit het verleden)

### Negatieve Consequences <!-- optional -->

- snelle en gemakkelijke kopieën van data worden opgeruimd,
  - waardoor processen mogelijk moeilijker en/of langzamer worden
  - wat zwaardere afhankelijkheden tussen organisaties op koppelingen legt
  - data-aanbieders zullen hogere beschikbaarheid en betrouwbaarheid moeten leveren voor hun dataservices
- systemen zullen (mogelijk?) anders opgebouwd moeten worden
  - tbv gecontroleerde kopieën
  - tbv historische data

## Pros en Cons van de oplossingen <!-- optional -->

### Data bij de Bron

**Data bij de bron** is niet ondubbelzinnig duidelijk.
[Data bij de Bron](https://www.digitaleoverheid.nl/data-bij-de-bron/) wordt als uitgangspunt genoemd bij de Digitale Overheid:

> Data bij de bron is een belangrijk uitgangspunt voor de digitale transformatie van de Nederlandse overheid. Data hoort zo veel mogelijk op één logische plek te staan, bij de eigenaar van die gegevens.

Eén logische plek is echter niet zo logisch als een basisregistratie een verzameling is van de 'stukjes' basisregistratie die bij elke gemeente ligt.
Dat is namelijk niet één plek.
Dat is wél de eigenaar.
Maar wat is er nu belangrijker bij dit uitgangspunt: 'één logische plek' of 'bij de eigenaar van die gegevens'?

Om hier een uitweg in te vinden, worden extra oplossingen ingebracht zoals Landelijke Voorzieningen.
Op zichzelf zijn deze ook nuttig en van toegevoegde waarde,
maar in het kader van data bij de bron zijn deze ingewikkeld.

- Wat is nu de bron?
- Wie is hier nu eigenaar van?
- De oorspronkelijke gemeente? Die is in ieder geval niet ontslagen van haar verantwoordelijkheid op de juistheid van de data
- De uitvoeringsorganisatie? Die is in ieder geval niet direct verantwoordelijkheid voor de juistheid, maar wel weer voor de beschikbaarheid e.d.

Dit uitgangspunt levert dan ook weer nieuwe vragen op:

- Wat is 'dé bron'?
- Is dat altijd hetzelfde vanuit elk perspectief? Of mag dat ook anders zijn vanuit data-aanbieder, bronhouder en data-afnemer?

**FDS overwegingen**

- Goed, omdat het de oorsprong van data en informatie adresseert
- Goed, omdat het zich richt op waar de verantwoordelijkheid ligt, in ieder geval wat betreft de oorsprong van de data
- Slecht, omdat geen uitsluitsel geeft over de nieuwe vragen die het opwerkt
- … <!-- numbers of pros and cons can vary -->

### Regie op Gegevens

[Regie op gegevens](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/regie-op-gegevens/) is ook een programma van de Digitale Overheid.
In dit programma is een voorstudie gedaan naar een [kader voor regie op gegevens](https://rog.pleio.nl/news/view/f0dc6a48-97e1-4102-a656-72e86a811511/voorstudie-naar-een-kader-voor-regie-op-gegevens):

- Hoofdprincipes
  - _Mens centraal_ 
  - _Digitale autonomie_
  - _Inclusiviteit_
- Inrichtingsprincipes 
  - _Vertrouwen_
  - _Transparantie_
  - _Interoperabiliteit_
  - _Dataminimalisatie_

Al deze principes zijn erop gericht om duidelijkheid en grip te kunnen verschaffen aan personen en bedrijven daar waar het over hen gaat.
Daarvoor is het noodzakelijk om te weten waar welke data is en wordt gebruikt, zeker in geval van persoonsgegevens.

**FDS overwegingen**

- Goed, omdat het aandacht vraagt voor [verantwoord datagebruik](./20230915-P01-verantwoord-datagebruik.md)
- Goed, omdat het (indirect) vraagt naar _grip op data_
- Slecht, omdat het 'slechts' _indirect_ vraagt naar _grip op data_ en niet expliciet; het stelt meer een voorwaarde van _grip op data_
- … <!-- numbers of pros and cons can vary -->

### Grip op data

In een federatief datastelsel mag het niet zo zijn dat er 'onbekende' databronnen zijn.
Van _alle_ data is bekend waar deze ontstaan is.
Van _alle_ data is bekend waar deze vandaan komt.
Van _alle_ data is bekend waar deze gebruikt wordt.
Op _alle_ data is _grip_.
Dus: _grip op data_.

Afgeleide en/of gevolgen daarvan zijn, dat er regie op gegevens gedaan kan worden.
En _minder_ data betekent gemakkelijker en sneller _grip_.
Dus zo min mogelijk kopieën van data en als er wel kopieën zijn,
dan zijn deze expliciet inclusief de voorzieningen om actualiteit, traceerbaarheid en gebruik te volgen.

- Goed, omdat het de kern raakt of voorwaarde is om regie op gegevens te kunnen doen
- Goed, omdat het onbekende en onbeheerde kopieën van data tegengaat, zoals data bij de bron tracht te bereiken
- Goed, omdat het een meer onderliggende basis legt zodat data bij de bron beter of anders bereikt kan worden
- … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

- [Link naam](link to adr) <!-- example: Refined by [xxx](yyyymmdd-xxx.md) -->
- … <!-- numbers of links can vary -->
