declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Sticky Platforms Scene: move motion test (short)', 'should have correct X, Y coords in changing both X and Y');
  import(`${LIB_PATH}/../../../ballet/src/specs/move/sps-move-short.spec.ts`);
});