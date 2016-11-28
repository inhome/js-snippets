# text-tools

A few text helpers for small browser forms.

Run `node test.js` from this folder.

## nonEmptyLines

Trim each line and discard blank lines. Input is converted to a string.

## uniqueWords

Whitespace separates words. Matching is case-sensitive and preserves first occurrence order.

## escapeHtml

Escape text for an HTML text or quoted attribute context. This is not a URL, script, or CSS sanitizer.

## limitText

Count Unicode code points rather than UTF-16 units. Combining grapheme clusters may still be split.
