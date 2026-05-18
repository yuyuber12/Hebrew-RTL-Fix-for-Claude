# Hebrew RTL Fix for Claude

A simple Chrome extension that automatically fixes mixed Hebrew-English text direction inside Claude responses.

The extension detects Hebrew text in Claude messages and applies proper RTL (Right-To-Left) formatting so mixed Hebrew-English sentences display correctly.

---

## Features

- Fixes broken RTL/LTR text direction
- Automatically detects Hebrew text
- Works directly inside Claude responses
- Lightweight and fast
- Runs automatically on `claude.ai`

---

## Problem

Mixed Hebrew-English text inside Claude responses can appear visually broken because browsers struggle with bidirectional text rendering.

Example issues:
- Reversed punctuation
- Incorrect sentence flow
- Broken alignment
- Mixed RTL/LTR rendering problems

This extension automatically corrects those issues.

---

## How It Works

The extension:

1. Detects if a response contains Hebrew characters
2. Applies:
   - `direction: rtl`
   - `text-align: right`
   - `unicode-bidi: plaintext`
3. Watches for new Claude responses using `MutationObserver`

---

## Project Structure

```txt
├── manifest.json
├── content.js
├── styles.css
└── icon.png
```

---

## Installation

### Load Extension Manually

1. Open Chrome
2. Go to:

```txt
chrome://extensions
```

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

---

## Files

### `manifest.json`

Defines:
- Extension metadata
- Permissions
- Injected scripts/styles
- Claude website matching

### `content.js`

Main logic:
- Detects Hebrew text
- Fixes RTL formatting
- Monitors dynamically loaded responses

### `styles.css`

Adds additional RTL rendering support for Claude message elements.

---

## Current Target

The extension currently works on:

```txt
https://claude.ai/*
```

---

## Technologies Used

- JavaScript
- CSS
- Chrome Extensions Manifest V3

---

## Future Improvements

Possible future updates:
- Toggle ON/OFF button
- Support for more AI chat websites
- Better handling for code blocks
- Smart mixed-language formatting
- Firefox support

---

## Author

Created by Yonatan.
