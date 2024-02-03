declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Sticky Platforms Scene: bound motion test', 'should have a correct opacity');
  import(`${LIB_PATH}/../../../ballet/src/specs/bound/sps-bound.motion.spec.ts`);
});