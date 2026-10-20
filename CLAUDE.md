# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, Thai-language trip hub for a Chiang Mai group trip ("ชายเหมี่ยง · Chiang Mai 2026"), published as a static site on GitHub Pages from `main`. No build tool, no package manager, no tests.

## Architecture: loader + encoded payload

The real page is **not** `index.html`. `index.html` is a small bootstrap that:

1. Fetches `payload-0.txt` … `payload-3.txt` (indices hardcoded in `[0,1,2,3]`).
2. Concatenates them, base64-decodes, gunzips (via `DecompressionStream`).
3. `document.write`s the result over itself.

The payload files are one gzip+base64 blob split into fixed 6000-character chunks with no newlines. The decoded page (~55 KB) is a self-contained HTML file: inline CSS, inline JS, fonts from Google Fonts (Noto Sans Thai, Fragment Mono) and Fontshare (Switzer), Lucide icons from unpkg, an Unsplash hero photo, and external links (Google Maps shares, Instagram, TikTok, Agoda images). The design follows the Framer "Uncharted" template: cream paper, near-black ink, hairline rules, square corners, mono uppercase kickers, numbered sections.

Consequences for editing:

- **Never edit `payload-*.txt` by hand.** Decode, edit the HTML, re-encode, re-split.
- **Chunk count must match the loader.** If re-encoding yields a different number of chunks, update the index list in `index.html` and delete any stale `payload-N.txt`.
- **Bump the cache-buster** (`?v=...` on the fetch URL in `index.html`) whenever payloads change, or GitHub Pages / browsers will serve the old page.

## Commands

Decode the current page to an editable file:

```sh
cat payload-*.txt | base64 -d | gunzip > trip.html
```

Re-encode after editing and overwrite the chunks (macOS `base64` and `split`):

```sh
gzip -9 -c trip.html | base64 | tr -d '\n' > all.b64
rm -f payload-*.txt
split -b 6000 -d -a 1 all.b64 payload-
for f in payload-?; do mv "$f" "$f.txt"; done
rm all.b64 trip.html
```

Verify the round-trip before committing:

```sh
cat payload-*.txt | base64 -d | gunzip | diff - trip.html && echo OK
```

Preview locally (`fetch()` does not work over `file://`, so a server is required):

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Keep `trip.html` out of git; the tracked files are `index.html`, `payload-*.txt`, and `img/`.

## Images

Location photos live in `img/` and are referenced from the decoded page by relative path (`img/<place>.jpg`), which works because the loader writes the page into the same document at the site root. They are creator photos pulled from review posts (Lemon8, Trip.com moments, Pantip, TikTok, YouTube) and self-hosted because the social CDN URLs are signed and expire. Every image carries a `.credit` badge that links to the source post; keep that badge when swapping an image, and resize new images to about 1400px on the long edge before adding them.


## Itinerary data refresh (2026-10)

`itinerary-update.js` is loaded by the bootstrap after the compressed HTML has been decoded. It renders the current itinerary from the supplied spreadsheet into the page and adds date filters and map/reference links. Keep the itinerary data in that script when refreshing this sheet-driven schedule.

- Do not edit `payload-*.txt` by hand; the original design remains in the encoded payload.
- Keep the script URL cache-busted in `index.html` when updating the itinerary script.
- The spreadsheet lists the return train with the same direction text as the outbound row, but its ticket link is labeled return. The rendered itinerary therefore shows Chiang Mai → Krung Thep Aphiwat and notes the correction.
- Booking-status cells were blank in the spreadsheet; the page does not mark any reservations as confirmed.
