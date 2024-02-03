declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Fixed Actors Scene: bound motion test', 'should have a correct opacity');
  import(`${LIB_PATH}/../../../ballet/src/specs/bound/fas-bound.motion.spec.ts`);
});