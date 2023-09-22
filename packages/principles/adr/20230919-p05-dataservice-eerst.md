# Principe P05: Dataservice eerst

- Status: draft
- Deciders: FDS programma
- Date: [YYYY-MM-DD van wanneer deze beslissing het laatst is bijgewerkt] <!-- optional. To customize the ordering without relying on Git creation dates and filenames -->
- Tags: Strategisch_Principe, Architectuur_Principe

Issue: [description | ticket/issue URL] <!-- optional -->

## Context en probleemstelling

[Beschrijf de context en de probleemstelling, bijvoorbeeld in vrije tekst in twee of drie zinnen. Wellicht wil het probleem in de vorm van een vraag positioneren.]

## Beslissingsfactoren <!-- optional -->

- [driver 1, e.g., a force, facing concern, …]
- [driver 2, e.g., a force, facing concern, …]
- … <!-- numbers of drivers can vary -->

## Overwogen opties

- API First
- Dataservice eerst
- [optie 3]
- … <!-- numbers of options can vary -->

## Besluit

Gekozen oplossing: "[optie 1]", omdat [rechtvaardiging. bijvoorbeeld enige optie, die voldoet aan knock out criterium desicion driver | die krachtkracht | oplost … | komt het beste naar voren (zie hieronder)].

### Positieve gevolgen <!-- optional -->

- [bijv. verbetering van de kwaliteit, opvolgende besluiten benodigd, ...]
- …

### Negatieve Consequences <!-- optional -->

- [bijv. compromis op kwaliteit, opvolgende besluiten benodigd, ...]
- …

## Pros en Cons van de oplossingen <!-- optional -->

### API First

> // TODO Amazon's API First journey beschrijven oid

[voorbeeld | beschrijving | verwijzen naar meer informatie | …] <!-- optional -->

- Goed, omdat [argument a]
- Goed, omdat [argument b]
- Slecht, omdat [argument c]
- … <!-- numbers of pros and cons can vary -->

### Dataservice eerst

Data wordt uitsluitend dmv dataservices beschikbaar gesteld.
'Dataservice eerst' is globaal beter bekend als 'API First'.
Een dataservice is namelijk een digitale, machine leesbare interface; een Application Programming Interface dus.

Voor een deel is dit een gevolg van [P04: Geautomatiseerd boven handmatig](#P04-Geautomatiseerd-boven-handmatig).
Toch is het een nieuw principe, want het geeft aan dat eerst een (technisch) contract wordt opgesteld voordat aan verdere implementatie en automatisering wordt gewerkt.
Het voordeel van dit principe is dan ook dat nadat de dataservice is gedefinieerd,
kunnen aanbieder en afnemer parallel ontwikkelen zonder dat de dataservice al data levert (of zelfs bestaat).
Het (API) contract levert voldoende zekerheid voor beide kanten om aan de slag te gaan.

Een dataservice is méér dan alleen een API, een technische interface.
Het bevat ook:
- Metadata
- Inwinningscontext; voorwaarden, grondslag en context voor ontstaan
- Gebruikscontext; voorwaarden voor hergebruik, richtlijnen voor (her)gebruik en vertaling naar andere contexten

Op basis van deze gegevens kunnen data-afnemers bepalen of voldoen aan de voorwaarden voor het (her)gebruik van een dataservice.

Voor meer informatie, zie [basisconcept](https://www.noraonline.nl/wiki/FDS_Basis_concept).

- Goed, omdat [argument a]
- Goed, omdat [argument b]
- Slecht, omdat [argument c]
- … <!-- numbers of pros and cons can vary -->

### [optie 3]

[voorbeeld | beschrijving | verwijzen naar meer informatie | …] <!-- optional -->

- Goed, omdat [argument a]
- Goed, omdat [argument b]
- Slecht, omdat [argument c]
- … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

- [Link naam](link to adr) <!-- example: Refined by [xxx](yyyymmdd-xxx.md) -->
- … <!-- numbers of links can vary -->
