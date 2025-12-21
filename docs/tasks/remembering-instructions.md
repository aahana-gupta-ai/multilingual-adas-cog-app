# Remembering instructions

This module records a **demonstration observation count**, from 0 to 5. It does not calculate an ADAS-Cog subscore.

## Workflow

Record the number of observed reminder events in a fictional interaction.

## Resources

- Definition: `data/tasks/remembering-instructions.json`
- Domain validator: `src/tasks/remembering-instructions.js`
- Synthetic response: `examples/task-responses/remembering-instructions.json`
- Boundary scenarios: `data/scenarios/remembering-instructions.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
