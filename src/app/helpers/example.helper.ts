import path from 'node:path';
const fs = require('node:fs');

export interface ExampleHelper {
  ts: string;
  html: string;
  css: string;
}

export type Example = 'multiscene' | 'move-motion' | 'size-motion' | 'opacity-motion';

function readExampleFile(examplePath: string): Promise<string> {
  return fs.readFileSync(path.resolve(process.cwd(), `src/app/examples/${examplePath}`), { encoding: 'utf-8' });
}

export async function readExample(exampleName: Example): Promise<ExampleHelper> {
  const ts = readExampleFile(`${exampleName}/${exampleName}.ts`);
  const html = readExampleFile(`${exampleName}/${exampleName}.html`);
  const css = readExampleFile(`${exampleName}/${exampleName}.css`);

  return Promise.all([ts, html, css]).then(([ts, html, css]) => ({ ts, html, css }));
}
