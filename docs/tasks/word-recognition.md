# Word recognition

This module records a **demonstration observation count**, from 0 to 20. It does not calculate an ADAS-Cog subscore.

## Workflow

Inspect the original target words and distractors as a demonstration list.

## Resources

- Definition: `data/tasks/word-recognition.json`
- Domain validator: `src/tasks/word-recognition.js`
- Synthetic response: `examples/task-responses/word-recognition.json`
- Boundary scenarios: `data/scenarios/word-recognition.json`

A blank response is `null` with status `missing`. Zero is a recorded count and remains distinct from a missing response. Real administration and scoring require a separately reviewed protocol.
