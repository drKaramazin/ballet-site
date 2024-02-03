import { DocsSpecsGlobalEnv } from "./docs-specs-global-env";

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const colors = require('colors/safe');

function prepareOutcomeDir(outcomePath: string) {
  fs.rmSync(outcomePath, {
    force: true,
    recursive: true,
  });
  fs.mkdirSync(outcomePath, {
    recursive: true,
  });
}

const specsPath = path.resolve(__dirname, '..', '..', '..', 'ballet', 'src', 'specs');
let specs: Array<string> = glob.sync(specsPath + '/**/*.spec.ts');
specs = specs.map(spec => path.relative(specsPath, spec));

console.log('Generation...');

const outcomePath = path.join(__dirname, '..', 'generated', 'spec-wrappers');
prepareOutcomeDir(outcomePath);

(global as DocsSpecsGlobalEnv).runnerResult = {
  total: 0,
  generated: 0,
}

import(path.resolve(__dirname, 'spec-aot-proxy.ts')).then(async proxy => {
  for (const spec of specs) {
    console.log('Spec:', spec);
    proxy.runSpec(outcomePath, spec);
    await import(path.resolve(specsPath, spec));
  }
}).then(() => {
  console.log(
    'Done. '
    + colors.green(`Generated ${(global as DocsSpecsGlobalEnv).runnerResult.generated} of ${(global as DocsSpecsGlobalEnv).runnerResult.total}.`)
    + ` Skipped ${(global as DocsSpecsGlobalEnv).runnerResult.total - (global as DocsSpecsGlobalEnv).runnerResult.generated}.`
  );
});