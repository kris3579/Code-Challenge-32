'use strict';

class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  push(value) {
    this.storage.push(value);
    this.size += 1;
  }

  pop() {
    this.storage.pop();
    this.size -= 1;
  }

  peek() {
    let finalIndex;
    if (this.storage.length !== 0) {
      for (let i = 0; i < this.storage.length; i++) {
        finalIndex = i;
      }
      return this.storage[finalIndex];
    }
    return undefined;
  }
}

module.exports = function bracketValidation(str) {
  const validationStack = new Stack();
  if (typeof str !== 'string') {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      validationStack.push(str[i]);
    }
    if (str[i] === ')') {
      if (validationStack.peek() === '(') {
        validationStack.pop();
      }
    }
    if (str[i] === '}') {
      if (validationStack.peek() === '{') {
        validationStack.pop();
      }
    }
    if (str[i] === ']') {
      if (validationStack.peek() === '[') {
        validationStack.pop();
      }
    }
  }
  if (validationStack.size === 0) {
    return true;
  }
  return false;
};
