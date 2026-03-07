# Orientation

This module records a **demonstration observation count**, from 0 to 8. It does not calculate an ADAS-Cog subscore.

## Workflow

Use invented responses. Personal names, locations, and other identifiers are not recorded by this demo.

## Resources

- Definition: `data/tasks/orientation.json`
- Domain validator: `src/tasks/orientation.js`
- Synthetic response: `examples/task-responses/orientation.json`
- Boundary scenarios: `data/scenarios/orientation.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
