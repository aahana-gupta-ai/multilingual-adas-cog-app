# Word recall

This module records a **demonstration observation count**, from 0 to 10. It does not calculate an ADAS-Cog subscore.

## Workflow

Record the number of fictional demonstration words recalled. This is a workflow count, not a clinical score.

## Resources

- Definition: `data/tasks/word-recall.json`
- Domain validator: `src/tasks/word-recall.js`
- Synthetic response: `examples/task-responses/word-recall.json`
- Boundary scenarios: `data/scenarios/word-recall.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
