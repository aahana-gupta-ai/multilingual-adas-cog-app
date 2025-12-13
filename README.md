# Multilingual ADAS-Cog App

Culturally aware cognitive-assessment workflows.

**Package status:** runnable portfolio starter. Only the ADAS-Cog repository also contains supplied original web source in `legacy/`. Other project production code was not supplied. Newly generated code must not be represented as the original implementation.

## What works in this starter

- Eleven observation workflows with explicit missing responses.
- Nine source-language resource sets; the new interface remains English.
- Fictional session JSON export and a preserved original web application under legacy/.

## Run

```bash
python3 scripts/serve.py
```

Open http://127.0.0.1:8000. Use the bundled example content. No dependency install or account is required.

## Verify

```bash
node --test
node scripts/verify.mjs
```

## Contents

- `src/`: functioning browser application and reusable helpers.
- `data/`: indexed demonstration resources.
- `tests/`: behavior and data-integrity tests.
- `docs/`: architecture, provenance, integration limits, and workflow guides.
- `schemas/` and `examples/`: documented export formats.

Every project is packaged with exactly **160 files**, including code, resources, tests, and documentation; file count is not a measure of research quality.

## Topics

`data-science` `healthcare` `dementia` `multilingual` `research`

Set these through GitHub's About settings.

## Attribution and rights

Project identity and background come from the uploaded Aahana Gupta descriptions. Starter code and new example content were generated for this bundle. No new open-source license is assigned. Review `NOTICE.md` and `docs/PROVENANCE.md` before public distribution.
