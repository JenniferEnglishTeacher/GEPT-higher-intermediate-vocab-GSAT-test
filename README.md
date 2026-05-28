# GEPT High-Intermediate GSAT Test Generator

Open `index.html` in a browser to generate an interactive GSAT-style English practice test from the GEPT high-intermediate vocabulary list.

## How to Use

1. Enter the first GEPT word number.
2. Choose a batch size, such as 80 words.
3. Enter a version code if you want a different shuffled version.
4. Click **Generate**.
5. Upload this whole folder to GitHub Pages. Keep `index.html` and `vocab-data.js` together.

Students can answer on their own devices. Multiple-choice feedback appears immediately, and clicking any English word opens the lookup panel.

## Printable Word Worksheet

After generating a batch, click **Download Word Worksheet**. The page downloads a Microsoft Word-compatible `.doc` file with the student worksheet and a teacher answer key. You can also upload this `.doc` file to Google Drive and open it as a Google Doc.

## Google Sheets Result Recording

The page records results through a small Google Apps Script web app. The receiver is already prepared in `google-apps-script-Code.gs` with this spreadsheet ID:

`1S9FUy3eaRtWRgUxEZUfO7Cl6R-25NoIJ4-k7rovaxBA`

It appends rows to the tab named `quiz result` with these columns:

`dateTime`, `studentName`, `unitAlphabetNum`, `percentage`, `incorrectWords`, `lookUpWords`

Setup:

1. Open the Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Paste the contents of `google-apps-script-Code.gs`.
4. Click **Deploy > New deployment**.
5. Choose **Web app**.
6. Set **Execute as** to yourself.
7. Set **Who has access** to anyone.
8. Deploy and copy the web app URL.
9. Paste that URL into **Google Sheets receiver URL** on the test page.

Current receiver URL already saved in `index.html`:

`https://script.google.com/macros/s/AKfycbwVu-U9iqgVL8-6x6j7nMxdsQysKZ1Djn1ZnVR9t8Ov3wM10rbkevXb-xGD8FgCjZBN/exec`

After that, students enter their name, finish the test, and click **Finish & Submit**. Their score row will be appended to the `quiz result` tab.

## Files

- `index.html`: the interactive test page and generator.
- `vocab-data.js`: the vocabulary data extracted from the Excel workbook.
- `google-apps-script-Code.gs`: the Google Sheets result receiver.
