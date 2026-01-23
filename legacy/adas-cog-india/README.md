# ADAS-Cog India

A multilingual, culturally adapted cognitive-assessment web prototype attributed in the application to **Aahana Gupta**.

## About this export

This package contains the **existing deployed web application**, recovered from <https://adas-cog-india.netlify.app/> on **4 October 2026**. `index.html` is preserved exactly as served, with its HTML, CSS, JavaScript, translations, word lists, and drawing interface in one file. There are no external asset dependencies.

**This is not the later Expo / React Native mobile-app project.** That project was built in the [original Manus conversation](https://manus.im/app/4lTUZbr3rEKzrATpa04rGw); its source was not available to this export session. This package also does not contain Netlify account settings, submission records, a private database, or email configuration.

## Included functionality

- Patient-demographic and consent-entry screens.
- English, Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali, Malayalam, and Kannada language options. Some interface text and fallback content remain in English.
- Adapted and original word-list options. In this version, choosing a non-English language always uses its native adapted list, regardless of the selected list option.
- Eleven assessment screens: word recall, naming objects, commands, constructional praxis, ideational praxis, orientation, word recognition, remembering instructions, spoken language, word finding, and comprehension.
- Touch/mouse drawing canvas and score summary.
- An existing same-origin POST submission hook intended for Netlify Forms.

## Run locally

There is no build step or dependency installation.

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Use **fictional patient details only** when testing.

The assessment interface works as a static page. A basic local server and GitHub Pages do **not** provide the submission backend.

## Upload to GitHub

1. Extract the ZIP.
2. Create a GitHub repository, for example `adas-cog-india`.
3. Select **Add file → Upload files**.
4. Upload the files **inside** the `adas-cog-india` folder, not the ZIP itself.
5. Commit the uploaded files.

For Git users, run these commands from inside the extracted folder:

```bash
git init -b main
git add .
git commit -m "Import ADAS-Cog India web prototype"
git remote add origin https://github.com/YOUR-USERNAME/adas-cog-india.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If your new repository already has commits, clone that repository and copy these files into it instead.

### Optional GitHub Pages demo

In the repository, open **Settings → Pages**, select deployment from the `main` branch and the root folder, then save. This publishes the static demo, **not** a research database or clinical service.

## Verification

Optional development requirement: Node.js 18 or later.

```bash
node --test tests/source.test.cjs
```

These tests check JavaScript syntax, language/list structure, screen rendering under a minimal DOM stub, and selected existing calculation behavior. They do **not** establish clinical validity, accessibility, real-browser compatibility, or backend delivery.

## Important limitations before clinical use

This export preserves the existing implementation rather than silently changing it. It should be treated as a **research/demo prototype, not a validated diagnostic product**.

- **Scoring needs review.** The page says the total is out of 70, but naming and recognition are counted as raw errors, and the implemented possible total is 85. Missing responses default to zero errors. The recall screen does not offer a button for all ten words recalled. The displayed severity bands are hardcoded and are not validated by this export.
- **Submission success is not verified.** The code POSTs to `/` and suppresses errors, while the summary always claims the session was recorded and an email was sent. Those claims are not evidence of delivery.
- **Netlify Forms requires separate configuration.** The recovered, deployed HTML has already been processed by Netlify. To enable form detection on a fresh Netlify site, review its form declaration, add `data-netlify="true"` to the hidden `adas-cog-session` form, enable Forms for that site, and verify the actual submission response. Do not assume the original backend settings transfer with this file.
- **No persistence or authentication is implemented in this web file.** Assessment state exists in JavaScript memory and is lost on refresh. Patient records are not bundled in this export.
- **Encryption claims need correction or substantiation.** The consent text claims secure encrypted storage, but this source does not implement application-level encryption, an authenticated database, or verified secure storage.
- **Input handling needs review.** User-entered patient details are interpolated into summary HTML without escaping. Validate and escape input before real deployment.
- **Consent, translations, scoring protocol, data handling, and institutional/advisor claims require appropriate review.** The source's existing names, contact details, copyright statement, and patent-pending wording are preserved; they were not independently verified.

Before any live study, obtain qualified clinical and ethics review, implement appropriate privacy/security controls, and test the actual data destination. Do not upload real patient information, API keys, or private records to GitHub.

## Rights

The application contains an existing “All rights reserved” notice. **No new open-source license has been assigned.** Public hosting alone does not change ownership or grant third-party reuse rights. Confirm rights to the code and assessment materials before selecting a license.
