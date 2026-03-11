# Commands

This module records a **demonstration observation count**, from 0 to 5. It does not calculate an ADAS-Cog subscore.

## Workflow

Walk through the source instructions using fictional examples.

## Resources

- Definition: `data/tasks/commands.json`
- Domain validator: `src/tasks/commands.js`
- Synthetic response: `examples/task-responses/commands.json`
- Boundary scenarios: `data/scenarios/commands.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
