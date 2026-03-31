import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import JavaScriptObfuscator from 'javascript-obfuscator';

const distDir = join(process.cwd(), 'dist', 'assets');

const files = await readdir(distDir);
const jsFiles = files.filter(f => f.endsWith('.js'));

console.log(`Obfuscating ${jsFiles.length} JS files...`);

for (const file of jsFiles) {
  const filePath = join(distDir, file);
  const code = await readFile(filePath, 'utf-8');

  const result = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.5,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.2,
    identifierNamesGenerator: 'hexadecimal',
    renameGlobals: false,
    selfDefending: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    stringArray: true,
    stringArrayEncoding: ['rc4'],
    stringArrayThreshold: 0.8,
    transformObjectKeys: true,
    unicodeEscapeSequence: false,
  });

  await writeFile(filePath, result.getObfuscatedCode());
  console.log(`  ✓ ${file}`);
}

console.log('Done!');
