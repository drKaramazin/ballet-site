declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Fixed Actors Scene: offset test (short)', 'should have correct X, Y coords in changing X');
  import(`${LIB_PATH}/../../../ballet/src/specs/offset/fas-offset-short.spec.ts`);
});