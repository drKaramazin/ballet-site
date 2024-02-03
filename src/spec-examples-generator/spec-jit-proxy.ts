import { DocsSpecsGlobalEnv } from "./docs-specs-global-env";

export function runTest(targetDescription: string, targetExpectation: string) {

  (window as DocsSpecsGlobalEnv).skipTesting = true;

  window.describe = window.xdescribe = window.fdescribe = function (description: string, specDefinitions: () => void): void {

    window.expect = function () {
      return {
        toBeTruthy: (val: any) => {},
        withContext: () => {
          return {
            toEqual: (val: any) => {},
            approximatelyEqualTo: (val: any) => {},
          };
        },
      } as any;
    }

    window.jasmine = {
      addMatchers: () => {},
    } as any;

    const done = {
      fail: (message: string) => {
        console.error(message);
      }
    };

    window.beforeEach = function (action: jasmine.ImplementationCallback) {
      action((() => {}) as any);
    }

    window.afterEach = function (action: jasmine.ImplementationCallback) {}

    function surroundedIt(expectation: string, assertion?: jasmine.ImplementationCallback) {
      if (description === targetDescription && expectation === targetExpectation) {
        if (assertion) {
          const result = assertion((() => {}) as any);
        }
      }
    }

    window.it = window.xit = window.fit = function (expectation: string, assertion?: jasmine.ImplementationCallback) {
      surroundedIt(expectation, assertion);
    }

    specDefinitions();
  }

}