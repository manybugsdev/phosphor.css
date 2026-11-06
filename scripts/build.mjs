// Bundle modern-normalize + the terminal theme into dist/.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

const normalize = await readFile(require.resolve('modern-normalize/modern-normalize.css'), 'utf8');
const theme = await readFile(new URL('../src/phosphor.css', import.meta.url), 'utf8');

const banner = `/*! ${pkg.name} v${pkg.version} | MIT License */\n\n`;
const css = banner + normalize.trim() + '\n\n' + theme.trim() + '\n';

const minified =
	banner.trim() +
	'\n' +
	(normalize + theme)
		.replace(/\/\*(?!!)[\s\S]*?\*\//g, '')
		.replace(/\s+/g, ' ')
		.replace(/\s*([{};,>])\s*/g, '$1')
		.replace(/:\s+/g, ':')
		.replace(/;}/g, '}')
		.trim() +
	'\n';

await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
await writeFile(new URL('../dist/phosphor.css', import.meta.url), css);
await writeFile(new URL('../dist/phosphor.min.css', import.meta.url), minified);

console.log(`dist/phosphor.css      ${css.length} bytes`);
console.log(`dist/phosphor.min.css  ${minified.length} bytes`);
