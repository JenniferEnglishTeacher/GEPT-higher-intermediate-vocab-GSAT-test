const SPREADSHEET_ID = "1S9FUy3eaRtWRgUxEZUfO7Cl6R-25NoIJ4-k7rovaxBA";
const SHEET_NAME = "quiz result";

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`Sheet tab not found: ${SHEET_NAME}`);
  }

  sheet.appendRow([
    payload.dateTime || new Date(),
    payload.studentName || "",
    payload.unitAlphabetNum || "",
    payload.percentage || "",
    payload.incorrectWords || "",
    payload.lookUpWords || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("GEPT GSAT quiz result receiver is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
