# Multilingual ADAS-Cog

**Exploring how language and cultural context can change cognitive assessment.**

This repository documents my work on culturally adapted ADAS-Cog workflows and a multilingual assessment interface developed alongside my dementia-assessment research.

## The question

Standardised cognitive tests are designed to make judgement measurable. But what happens when the language, examples, or assumptions inside the test do not match the patient being assessed?

That question led me to study how ADAS-Cog performance changes across linguistic and cultural contexts, and to build a multilingual workflow that could support more context-aware data collection.

## What this repository demonstrates

- Structured ADAS-Cog observation workflows
- Multilingual resource sets for assessment support
- Explicit handling of missing responses
- Session export for reproducible analysis
- A preserved version of the earlier web application in `legacy/`

## Why I built it

My research began with a broader concern: a score can look objective while still carrying assumptions about language and culture. Building the interface let me test that problem not only as a research question, but as a design problem.

## Run the demonstration

```bash
python3 scripts/serve.py
```

Then open `http://127.0.0.1:8000`.

## Repository structure

- `legacy/` — preserved earlier web application
- `src/` — current demonstration interface and reusable helpers
- `data/` — demonstration resources
- `tests/` — behaviour and data-integrity tests
- `docs/` — architecture, provenance, and workflow notes
- `schemas/`, `examples/` — documented export formats

## Research integrity

No patient-identifiable data is included here. Demonstration datasets and examples are synthetic or non-identifying.

The original project, research direction, and supplied legacy application are mine. Parts of the current public portfolio/demo scaffolding were created later with AI-assisted development tools. See `docs/PROVENANCE.md` and `NOTICE.md` for the exact distinction.

**Themes:** cognitive science · dementia · multilingual technology · human-centred assessment · research
