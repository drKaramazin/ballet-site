declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Fixed Actors Scene: size motion test', 'should have a correct size in changing width');
  import(`${LIB_PATH}/../../../ballet/src/specs/size/fas-size.motion.spec.ts`);
});