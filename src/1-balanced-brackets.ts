/**
 * Checks whether a string containing only '(', ')', '[', ']', '{', '}'
 * has all brackets properly opened and closed (and correctly nested).
 */
export function isBalanced(input: string): boolean {
  const pairs: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const openers = new Set(['(', '[', '{']);

  const stack: string[] = [];

  for (const char of input) {
    if (openers.has(char)) {
      stack.push(char);
      continue;
    }

    if (char in pairs) {
      const last = stack.pop();
      if (last !== pairs[char]) {
        return false;
      }
      continue;
    }
  }

  return stack.length === 0;
}
