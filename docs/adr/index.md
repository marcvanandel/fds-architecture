<!-- This file is the homepage of your Log4brains knowledge base. You are free to edit it as you want -->

# Architectuur knowledge base

Welkom 👋 bij de architectuur knowledge base van FDS Architectuur.
Hier zijn alle principes en 'design decisions' terug te vinden van het project.
Deze design decisions worden vastgelegd in een 'Architecture Desicion Record' formaat.

## Definitie en doel

Tijdens het ontstaan en gebruik van het Federatief DataStelsel, FDS, zijn en worden keuzes gemaakt.
Aangezien een federatief datastelsel uitsluitend kan bestaan door de federatie van deelnemers,
is het van groot belang om goed te documenteren en te kunnen nalezen welke beslissingen er genomen zijn.

'Architecture Desicions' (AD), ook wel 'design desicions', zijn beslissingen die functionele of non-functional requirements adresseren die signifikant zijn voor de architectuur.
Architectuur is hierin een breed begrip, want elke beslissing die gaat over structuur, hergebruik of toepassing wordt hieronder gevat.
Een 'Architecture Desicion Record' (ADR) bevat een enkele AD / design desicion zoals vaak gebeurt in persoonlijke of overleg verslagen.
De verzameling van ADRs die worden vastgelegd en onderhouden vormen de basis waarop het project gebouwd is.

Een ADR is 'immutable', onveranderlijk. De status kan wel veranderen, maar de strekking van de design desicion, het besluit, wijzigt niet.
Op die manier kan er op voort gebouwd worden en is de basis van een project terug te lezen in de geschiedenis van design desicions in chronologische volgorde.
Bovendien heeft het onderhouden van documentatie tot doel dat:

- 🚀 Nieuw betrokken mensen snel en goed aan boord kunnen komen en zich kunnen inlezen
- 🔭 Blinde accentatie of herhalen van discussies van beslissingen uit het verleden gaan plaatsvinden (zie ook [Michael Nygard's beroemde artikel over ADRs](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html))
- 🤝 Besluitvorming geformaliseerd en traceerbaar wordt voor het team én betrokkenen.

## Gebruik

Deze website wordt automatisch bijgewerkt nadat er een verandering in de `main` branch van dit Git repository van dit project.
Elke ADR is een Markdown bestand in de Git repo(sitory).
Dat betekent maximale ondersteuning in versiebeheer en de mogelijkheid voor iedereen (met een account) om bij te dragen en suggesties te doen.
Nadat wijzigingen zijn gereviewd en geaccepteerd, zal de website worden bijgewerkt.

In deze website kunnen alle ADRs / design desicions bekeken, doorgebladerd en opgezocht worden.

Voor wat betreft de status is dit een typische 'flow':

![ADR workflow](/l4b-static/adr-workflow.png)

De besluitvorming is helemaal een samenwerking en wordt ondersteund door pull requests.

## Meer informatie

- [Saxion Hogeschool over ADRs](https://video.saxion.nl/media/Architecture+Decision+Records+%28ADR%29+-+Advanced/1_k2u6kljl/278581542)
- [Log4brains documentation](https://github.com/thomvaill/log4brains/tree/master#readme)
- [What is an ADR and why should you use them](https://github.com/thomvaill/log4brains/tree/master#-what-is-an-adr-and-why-should-you-use-them)
- [ADR GitHub organization](https://adr.github.io/)
