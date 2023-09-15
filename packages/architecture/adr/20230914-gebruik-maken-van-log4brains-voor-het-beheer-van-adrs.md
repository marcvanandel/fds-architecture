# Gebruik maken van Log4brains voor het beheer van ADRs

- Status: proposed
- Date: 2023-09-13
- Tags: dev-tools, doc

## Context en probleemstelling

Wij willen ontwerpbeslissingen en architectuurbesluiten vastleggen voor dit project.
Welke tool(s) zouden we willen gebruiken voor het beheer van deze beslissingen?

## Overwogen opties

- [Log4brains](https://github.com/thomvaill/log4brains): architecture knowledge base (command-line + static site generator)
- [ADR Tools](https://github.com/npryce/adr-tools): command-line to create ADRs
- [ADR Tools Python](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/): command-line to create ADRs
- [adr-viewer](https://github.com/mrwilson/adr-viewer): static site generator
- [adr-log](https://adr.github.io/adr-log/): command-line to create a TOC of ADRs

## Besluit

Gekozen oplossing: "log4brains", omdat dit de functionaliteiten van de andere tools bevat en zelfs meer.

## Links <!-- optional -->

- [Saxion Hogeschool over ADRs](https://video.saxion.nl/media/Architecture+Decision+Records+%28ADR%29+-+Advanced/1_k2u6kljl/278581542)
- [Log4brains documentation](https://github.com/thomvaill/log4brains/tree/master#readme)
- [What is an ADR and why should you use them](https://github.com/thomvaill/log4brains/tree/master#-what-is-an-adr-and-why-should-you-use-them)
- [ADR GitHub organization](https://adr.github.io/)
