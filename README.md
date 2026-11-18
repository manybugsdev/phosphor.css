# phosphor.css

Classless CSS for a retro phosphor-terminal look, built on [modern-normalize](https://github.com/sindresorhus/modern-normalize).
Write plain semantic HTML — no classes needed.

**Demo:** https://manybugsdev.github.io/phosphor.css/

## Usage

```html
<link rel="stylesheet" href="dist/phosphor.min.css">
```

modern-normalize is bundled into `dist/`, so one stylesheet is all you need.

## Customize

Set `color` and `background-color` on `html`. Every other color
(dim text, borders, accent, glow, highlights) is derived from `currentColor`.

```css
html {
  color: #ffb000;              /* amber */
  background-color: #0d0800;
}
```

Other custom properties:

```css
:root {
  --term-width: 80ch;          /* max content width */
  --term-scanline-opacity: 0.12;
  --term-font: 'VT323', ui-monospace, monospace;
}
```

`VT323` is used when available. To load it:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=VT323&display=swap">
```

## Features

- CRT scanlines, vignette, glow and subtle flicker (disabled with `prefers-reduced-motion`)
- Markdown-style heading prefixes (`#`, `##`, `###`, …)
- `[link]`-style nav, `[+]/[-]` details, `>` blockquotes
- Shell prompt: `<pre><kbd>cmd</kbd></pre>` renders as `$ cmd`
- Forms, tables, progress bars, dialogs
- Images shown in grayscale
- Print styles without CRT effects

## Development

```sh
npm install
npm run build   # src/phosphor.css + modern-normalize -> dist/
```

Open `index.html` for a demo.

## License

MIT. Includes [modern-normalize](https://github.com/sindresorhus/modern-normalize) (MIT, © Sindre Sorhus).
