const Stack = require('./stack');
const Queue = require('./queue');

function trek() {
  const crew = new Stack();
  const add = ['Kirk', 'Spock', 'McCoy', 'Scotty']
  for (let i = 0; i < add.length; i++) {
    crew.push(add[i])
  }
  return crew
}

function peek(stack) {
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top.data === null) {
    return true
  }
  return false;
}

function display(stack) {
  console.log(stack.top)
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const s_arr = s.split('');
  const s_stack = new Stack();
  for (let i = 0; i < s_arr.length; i++) {
    s_stack.push(s_arr[i]);
  }
  let backwardss = ''
  while (s_stack.top !== null) {
    backwardss = backwardss + s_stack.pop()
  }
  if (s === backwardss) {
    return true
  }
  return false
}

function matchParen(string) {
  /*
    Implementation details?
    Base it off palindrome?
    Filter in only desired characters, i.e. (), [], {}, '', ""
    If filtered string not palindrome, find first error, return array position of error
  */
}

function sortStack(stack) {
  /*
    Implementation?
      1. Make new stack
      2. Take top item of stack A, move to stack B?
      3. if A > B, move A to B
      4. 
  */
}

// Queue drills rely on understanding doubly linked list - return to them later?

module.exports = {
  trek,
  peek,
  isEmpty,
  display,
  is_palindrome,
}