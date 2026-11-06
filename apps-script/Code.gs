/**
 * Acute PE Navigator — Google Sheets add-on script
 * Based on the 2026 AHA/ACC/ACCP/ACEP/CHEST/SCAI/SHM/SIR/SVM/SVN acute PE guideline
 * (Creager et al., Circulation 2026;153:e977–e1051).
 * Clinical decision support only; does not replace clinical judgment.
 */

// Adds the "PE Navigator" menu when the spreadsheet opens.
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('PE Navigator')
    .addItem('Open calculator (full window)', 'openDialog')
    .addItem('Open calculator (sidebar)', 'openSidebar')
    .addToUi();
}

function page_() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Acute PE Navigator')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function openDialog() {
  SpreadsheetApp.getUi().showModelessDialog(page_().setWidth(1200).setHeight(820), 'Acute PE Navigator');
}

function openSidebar() {
  SpreadsheetApp.getUi().showSidebar(page_());
}

// Lets the calculator be deployed as a web app (Deploy > New deployment > Web app).
function doGet() {
  return page_().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Called by the "Save case to sheet" button. Stores scores and key values, no identifiers.
function saveCase(d) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Saving works only when the calculator is opened from the spreadsheet menu.');
  var sh = ss.getSheetByName('PE Cases') || ss.insertSheet('PE Cases');
  var cols = ['timestamp','category','categoryName','pesi','pesiClass','spesi','bova','hestia',
              'cpes','news2','shockIndex','age','sex','hr','sbp','rr','spo2','troponin','bnp','lactate','rv','riskFactor'];
  if (sh.getLastRow() === 0) {
    sh.appendRow(cols);
    sh.getRange(1, 1, 1, cols.length).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  d = d || {};
  d.timestamp = new Date();
  sh.appendRow(cols.map(function (c) { return d[c] === null || d[c] === undefined ? '' : d[c]; }));
  return sh.getLastRow();
}
