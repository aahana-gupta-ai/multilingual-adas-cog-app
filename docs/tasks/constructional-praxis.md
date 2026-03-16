# Constructional praxis

This module records a **demonstration observation count**, from 0 to 4. It does not calculate an ADAS-Cog subscore.

## Workflow

Observe four drawing prompts. Record only a demo completion count.

## Resources

- Definition: `data/tasks/constructional-praxis.json`
- Domain validator: `src/tasks/constructional-praxis.js`
- Synthetic response: `examples/task-responses/constructional-praxis.json`
- Boundary scenarios: `data/scenarios/constructional-praxis.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
