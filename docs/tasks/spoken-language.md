# Spoken language

This module records a **demonstration observation count**, from 0 to 5. It does not calculate an ADAS-Cog subscore.

## Workflow

Record a fictional observation of five conversation turns; no clinical rating is calculated.

## Resources

- Definition: `data/tasks/spoken-language.json`
- Domain validator: `src/tasks/spoken-language.js`
- Synthetic response: `examples/task-responses/spoken-language.json`
- Boundary scenarios: `data/scenarios/spoken-language.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
