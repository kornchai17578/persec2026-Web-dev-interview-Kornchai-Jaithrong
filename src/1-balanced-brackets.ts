export function isBalanced(input: string): boolean {
  const pairs: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const openers = new Set(['(', '[', '{']);

  const stack: string[] = [];

  for (const char of input) {
    if (openers.has(char)) { //ถ้าเป็นตัวเปิดให้เก็บไว้ใน stack
      stack.push(char);
      continue;
    }

    if (char in pairs) { //ถ้าเป็นตัวปิดให้เอาตัวล่าสุดออกจาก stack แล้วเช็คว่าตรงกันไหม
      const last = stack.pop();
      if (last !== pairs[char]) {
        return false;
      }
      continue;
    }
  }

  return stack.length === 0; //ถ้า stack ว่างแสดงว่าตัวเปิดและตัวปิดตรงกันหมด
}
