# Gebruik van Markdown Architectural Decision Records

- Status: proposed
- Date: 2023-09-13
- Tags: doc

## Context en probleemstelling

Wij willen ontwerpbeslissingen en architectuurbesluiten vastleggen voor dit project.
Welke formaat en structuur zouden we willen gebruiken voor het vastleggen van deze beslissingen?

## Overwogen opties

- [NORA Wiki](https://www.noraonline.nl/wiki/NORA_online)
- [MADR](https://adr.github.io/madr/) 2.1.2 with Log4brains patch
- [MADR](https://adr.github.io/madr/) 2.1.2 – The original Markdown Architectural Decision Records
- [Michael Nygard's template](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) – The first incarnation of the term "ADR"
- [Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions) – The Y-Statements
- Other templates listed at <https://github.com/joelparkerhenderson/architecture_decision_record>
- Formless – No conventions for file format and structure

## Besluit

Gekozen oplossing: "MADR 2.1.2 with Log4brains patch", omdat:

- Markdown een bredere (de facto) standaard is dan Mediawiki
- Markdown i.c.m. Git meer versiebeheer mogelijkheden heeft
- Markdown meer mogelijkheden voor publicatie heeft door de rijke selectie aan tools die beschikbaar; het is zelfs mogelijk om vanuit één collectie Markdown bestanden meerdere publicaties te doen (misschien zinnig voor verschillende perspectieven en/of communities om te publiceren?)
- Implicit assumptions should be made explicit.
  Design documentation is important to enable people understanding the decisions later on.
  See also [A rational design process: How and why to fake it](https://doi.org/10.1109/TSE.1986.6312940).
- The MADR format is lean and fits our development style.
- The MADR structure is comprehensible and facilitates usage & maintenance.
- The MADR project is vivid.
- Version 2.1.2 is the latest one available when starting to document ADRs.
- The Log4brains patch adds more features, like tags.

The "Log4brains patch" performs the following modifications to the original template:

- Change the ADR filenames format (`NNN-adr-name` becomes `YYYYMMDD-adr-name`), to avoid conflicts during Git merges.
- Add a `draft` status, to enable collaborative writing.
- Add a `Tags` field.

### Positieve gevolgen <!-- optional -->

- Invulling van NORA implicatie [Maak besluiten traceerbaar en controleerbaar](https://www.noraonline.nl/wiki/Maak_besluiten_traceerbaar_en_controleerbaar) en het bovenliggende principe [Geef inzicht in de afhandeling van de dienst](https://www.noraonline.nl/wiki/Geef_inzicht_in_de_afhandeling_van_de_dienst)
- …

### Negatieve Consequences <!-- optional -->

- Gebruikers en 'contributors' hebben kennis en ervaring van Git(Hub) en Markdown nodig

## Pros en Cons van de oplossingen <!-- optional -->

### NORA Wiki

Een wiki is een manier om online content te publiceren én tegelijk dat te beheren met meerdere mensen.
Het biedt de mogelijkheid om door content te bladeren, te zoeken en links tussen pagina's te maken.
Een 'What You See Is What You Get' (WYSIWYG) editor ondersteunt niet-technische gebruikers.
Dit is waar [Wikipedia](https://www.wikipedia.org/) mee ontstaan en groot geworden is.

De Nederlandse Overheids Referentie Architectuur, NORA, maakt gebruik van dezelfde technologie als Wikipedia: [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki).
Het doel is vergelijkbaar als met Wikipedia, namelijk dat het beheer van content eenvoudig is en door iedereen gedaan kan worden.

- Goed, omdat gepubliceerde content en het wijzigen van content dicht bij elkaar staan en te vinden zijn
- Goed, omdat niet-technische gebruikers gemakkelijk kunnen bijdragen (na aanmaken van een account, dat zelfstandig gedaan kan worden)
- Slecht, omdat versiebeheer per pagina niet zo duidelijk is
- Slecht, omdat versiebeheer van meerdere en samenhangende pagina's eigenlijk niet goed ondersteund worden (er zijn wel wat mogelijkheden ... maar allemaal suboptimaal)
- Vergelijkbaar met Markdown, omdat het onderliggende formaat waarmee een wiki werkt, ondanks de WYSIWYG editor, gebaseerd is op 'wikitekst'.
  Dat is de facto standaard van Mediawiki en lijkt op Markdown.
  Wikitekst is minder gestandaardiseerd dan Markdown en alleen (in deze vorm) ondersteund door Mediawiki.

### Markdown in enige vorm

Bij de ontwikkeling van content, het zij op internet, het zij in documenten, is er behoefte aan opmaak.
Opmaak in Microsoft Word is specifiek en direct afhankelijk van de tool MS Word.
Op internet is de afhankelijkheid naar een tool er niet.
Hoogstens van de HTML (+ CSS + JavaScript) standaarden voor visualisatie mogelijkheden.

Om voor de ontwikkeling van content op internet niet afhankelijk te zijn van technische experts die HTML+ kunnen schrijven,
wordt er al lang gezocht naar manieren om met 'pseudo codes' opmaak aan te geven in platte tekst.
Wikitekst, zoals in de [NORA Wiki](#nora-wiki), is daar een voorbeeld van.
Het vroegere Wordperfect had daar ook mogelijkheden voor.
Voor software documentatie is Markdown de de facto standaard.

Markdown is een vrij eenvoudige specificatie van speciale codes die opmaak betekenis hebben.
Door een conversiestap van bron (source) document naar HTML kan een mooie HTML website gepubliceerd worden.
Doordat Markdown redelijk gestandaardiseerd is, zijn er vele (😳) tools beschikbaar die een website kunnen genereren.
Hier is enorme keuze om een geschikte tool te vinden afhankelijk van de situatie.

Doordat Markdown bestanden platte tekst bestanden zijn, is versiebeheer mbv Git makkelijk, logisch en veel toegepast.
Daarom is dit ook een prettige oplossing voor software developers documentatie.
Tools als GitHub en GitLab hebben standaard ook ondersteuning voor Markdown incl. presentatie als HTML.

- Goed, omdat Markdown eenvoudige codes gebruikt, zodat ook minder-technische mensen er mee uit de voeten kunnen
- Goed, omdat Markdown redelijk gestandaardiseerd is
- Goed, omdat versiebeheer per Markdown bestand zeer mogelijk is mbv Git
- Goed, omdat versiebeheer over een collectie Markdown bestanden ook zeer mogelijk is door de toepassing van Git
- Goed, omdat de brondocumenten in Markdown echt ontkoppeld zijn van de tool voor publicatie in HTML
- Slecht, omdat de brondocumenten op enige afstand kunnen staan door de ontkoppeling met de publicatie tool
- Slecht, omdat het versiebeheer geen onderdeel is van Markdown en extra toegevoegd moet worden. Git is daarvoor zeer geschikt ... maar ook zo uitgebreid, dat minder-technische mensen daar moeite mee hebben. Dit verhoogt de barrière voor minder-technische mensen om Markdown (plus Git) te gebruiken
- Vergelijkbaar met Wikitekst, omdat het platte tekst is waarin met codes opmaak wordt geproduceerd

## Links <!-- optional -->

- Gerelateerd aan [Gebruik maken van Log4brains voor het beheer van ADRs](./20230915-gebruik-maken-van-log4brains-voor-het-beheer-van-adrs.md)
- [Markdown Guide](https://www.markdownguide.org/)
- [Markdown meest officiële specificatie - on Daring Fireball](https://daringfireball.net/projects/markdown/)
