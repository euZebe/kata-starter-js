import sayHello from './app';

describe('sayHello', () => {
  test('should say Hello world!', () => {
    expect(sayHello()).toBe('Hello world!');
  });
});