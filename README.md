This repository contains the official documentation website for the StbEmu Android application.
The documentation website is available at [docs.stbemu.com](https://docs.stbemu.com).

## Documentation versions

Use the version selector in the navigation bar to switch between **Latest** (the redesigned Settings interface) and **Legacy** (the previous interface). Both versions are available in English, Ukrainian, Spanish, Brazilian Portuguese, Russian, German, French, Turkish, Arabic, Polish, Italian, Indonesian, Simplified Chinese, Vietnamese, Hindi, Japanese, Korean, Greek, Dutch, Swedish, Bulgarian, European Portuguese, Norwegian Bokmål, and Croatian. Arabic uses a right-to-left layout.

Latest localized guides use the app's translated screen, setting, option, and button labels, matching [StbEmu commit `bbc182302`](https://github.com/mvasilchuk/stbemu/commit/bbc18230291d2f9ae5e92c5bcb781c867a693483). English app resources are the source; each localized guide uses the corresponding translated resource values. Preserve existing document IDs, links, and heading anchors when updating displayed labels. Product names, firmware names, protocols, and example values keep the spelling shown by the app. Arabic UI labels use their natural direction; technical values retain left-to-right isolation.

Legacy documentation retains its historical wording and English UI labels where previously used. Do not apply Latest UI-label updates to Legacy files.

Latest uses the main URLs, such as `/settings/` and `/uk/settings/`. Legacy uses `/legacy/settings/` and `/uk/legacy/settings/`.

Edit Latest in `docs/` and `i18n/<locale>/docusaurus-plugin-content-docs/current/`, with navigation in `sidebars.ts`.
Edit Legacy in `versioned_docs/version-legacy/` and `i18n/uk/docusaurus-plugin-content-docs/version-legacy/`, with navigation in `versioned_sidebars/version-legacy-sidebars.json`.
Use relative Markdown links between versioned documents so links stay within the selected version.

Run `npm run build` to build all languages and both versions, then `npm run serve -- --port 3000` to preview them together locally.
