# phosphor.css

Classless CSS for a retro phosphor-terminal look, built on [modern-normalize](https://github.com/sindresorhus/modern-normalize).
Write plain semantic HTML — no classes needed.

**Demo:** https://manybugsdev.github.io/phosphor.css/

## Usage

```html
<link rel="stylesheet" href="dist/phosphor.min.css">
```

modern-normalize is bundled into `dist/`, so one stylesheet is all you need.

## Themes

```html
<html data-theme="amber">  <!-- green (default) | amber | white -->
```

## Customize

Override the custom properties on `:root`:

```css
:root {
  --term-fg: #33ff66;          /* phosphor color */
  --term-bg: #050a06;
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
- Blinking cursor after `<h1>`, `##`-style heading prefixes
- `[link]`-style nav, `[+]/[-]` details, `>` blockquotes
- Shell prompt: `<pre><kbd>cmd</kbd></pre>` renders as `$ cmd`
- Forms, tables, progress bars, dialogs
- Images tinted to the phosphor color
- Print styles without CRT effects

## Development

```sh
npm install
npm run build   # src/phosphor.css + modern-normalize -> dist/
```

Open `index.html` for a demo.

## License

MIT. Includes [modern-normalize](https://github.com/sindresorhus/modern-normalize) (MIT, © Sindre Sorhus).
