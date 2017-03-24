/* @flow */

function foo(x: string, y: number): string {
  return {test:y};
}
foo({}, '123');
