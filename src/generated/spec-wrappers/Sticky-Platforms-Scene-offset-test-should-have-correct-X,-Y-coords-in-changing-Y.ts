declare var LIB_PATH: string | undefined;

import('../../spec-examples-generator/spec-jit-proxy').then((proxy) => {
  proxy.runTest('Sticky Platforms Scene: offset test', 'should have correct X, Y coords in changing Y');
  import(`${LIB_PATH}/../../../ballet/src/specs/offset/sps-offset.spec.ts`);
});