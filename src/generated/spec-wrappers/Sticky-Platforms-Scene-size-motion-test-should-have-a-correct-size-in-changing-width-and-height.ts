declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Sticky Platforms Scene: size motion test', 'should have a correct size in changing width and height');
  import(`${LIB_PATH}/../../../ballet/src/specs/size/sps-size.motion.spec.ts`);
});