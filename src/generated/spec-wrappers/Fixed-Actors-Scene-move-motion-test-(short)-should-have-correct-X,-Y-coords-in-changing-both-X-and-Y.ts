declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Fixed Actors Scene: move motion test (short)', 'should have correct X, Y coords in changing both X and Y');
  import(`${LIB_PATH}/../../../ballet/src/specs/move/fas-move-short.spec.ts`);
});