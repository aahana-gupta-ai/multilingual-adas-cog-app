# Object naming

This module records a **demonstration observation count**, from 0 to 12. It does not calculate an ADAS-Cog subscore.

## Workflow

Record a fictional observation of the twelve object labels.

## Resources

- Definition: `data/tasks/object-naming.json`
- Domain validator: `src/tasks/object-naming.js`
- Synthetic response: `examples/task-responses/object-naming.json`
- Boundary scenarios: `data/scenarios/object-naming.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
