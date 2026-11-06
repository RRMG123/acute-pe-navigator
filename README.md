# Acute PE Navigator

A single-page clinical calculator for acute pulmonary embolism, built from the
2026 AHA/ACC/ACCP/ACEP/CHEST/SCAI/SHM/SIR/SVM/SVN Guideline for the Evaluation
and Management of Acute Pulmonary Embolism in Adults (Creager et al.,
*Circulation*. 2026;153:e977–e1051. doi:10.1161/CIR.0000000000001415).

## What it does

For patients with acute PE already confirmed on imaging.

1. **Questions** – every input on one tab: vitals, history, labs, CTPA/echo
   findings, presentation, hemodynamics, respiratory status, Hestia,
   treatment modifiers and follow-up details. The category and scores update
   live in the side panel.
2. **Severity scores** – PESI, sPESI, Bova, Hestia, CPES, shock index, NEWS2,
   each with a points breakdown.
3. **Category & management** – AHA/ACC Acute PE Clinical Category (A–E,
   subcategories, respiratory modifier R) with category-matched
   recommendations (COR/LOE), Table 7 advanced-therapy options, IVC filter
   and special-population agent selection.
4. **Duration & follow-up** – anticoagulation duration by VTE risk factor,
   recurrent PE management, follow-up care.
5. **Summary** – the reperfusion decision (anticoagulation alone vs
   mechanical thrombectomy or other advanced therapy) for the patient's
   category, a treatment-options table with COR/LOE, missing data,
   escalation triggers, and a copy-ready note for the chart or PERT.

## Use

Open `index.html` in any browser, or enable GitHub Pages
(Settings → Pages → Deploy from branch → `main` / root).

## Disclaimer

Clinical decision support for trained clinicians. It does not replace clinical
judgment, multidisciplinary PERT input, or local protocols. Verify drug dosing
against product labeling. Not affiliated with or endorsed by the guideline's
authors or societies.

## Google Sheets version

`apps-script/` contains a Google Apps Script build. In a Google Sheet, open
Extensions → Apps Script, replace `Code.gs` with `apps-script/Code.gs`, add an
HTML file named `Index` with the contents of `apps-script/Index.html`, save,
and reload the sheet. A **PE Navigator** menu opens the calculator, and
**Save case to sheet** logs scores (no identifiers) to a "PE Cases" tab.
