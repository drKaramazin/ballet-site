declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Fixed Actors Scene: opacity motion test', 'should have a correct opacity');
  import(`${LIB_PATH}/../../../ballet/src/specs/opacity/fas-opacity.motion.spec.ts`);
});