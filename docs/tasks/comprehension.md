# Comprehension

This module records a **demonstration observation count**, from 0 to 5. It does not calculate an ADAS-Cog subscore.

## Workflow

Record observations across five example instructions.

## Resources

- Definition: `data/tasks/comprehension.json`
- Domain validator: `src/tasks/comprehension.js`
- Synthetic response: `examples/task-responses/comprehension.json`
- Boundary scenarios: `data/scenarios/comprehension.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
