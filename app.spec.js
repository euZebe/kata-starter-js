import { sayHello } from './app';

describe('sayHello', () => {
  test('should say Hello world!', () => {
    expect(sayHello()).toEqual('Hello world!');
  });

  test(' 1 != "1"', () => {
    expect(1).not.toEqual("1");
  })
});