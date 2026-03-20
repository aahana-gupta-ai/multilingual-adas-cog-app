# Word finding

This module records a **demonstration observation count**, from 0 to 5. It does not calculate an ADAS-Cog subscore.

## Workflow

Record observations across five fictional naming opportunities.

## Resources

- Definition: `data/tasks/word-finding.json`
- Domain validator: `src/tasks/word-finding.js`
- Synthetic response: `examples/task-responses/word-finding.json`
- Boundary scenarios: `data/scenarios/word-finding.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
