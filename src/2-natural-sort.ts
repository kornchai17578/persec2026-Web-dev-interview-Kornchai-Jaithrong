export function naturalSort(items: string[]): string[] {
  const tokenize = (value: string): string[] => value.match(/\d+|\D+/g) ?? []; //แยกตัวเลขและตัวอักษรออกจากกัน

  const compare = (a: string, b: string): number => {
    const tokensA = tokenize(a); //แยกตัวเลขและตัวอักษรออกจากกันเป็นชุดๆ เช่น "TH10" จะได้ ["TH", "10"]
    const tokensB = tokenize(b); //แยกตัวเลขและตัวอักษรออกจากกันเป็นชุดๆ
    const length = Math.max(tokensA.length, tokensB.length); //หาความยาวของ array ที่มากที่สุด

    for (let i = 0; i < length; i++) {
      const tokenA = tokensA[i] ?? '';
      const tokenB = tokensB[i] ?? '';

      const isNumeric = /^\d+$/.test(tokenA) && /^\d+$/.test(tokenB); //เช็คว่าทั้งสอง token เป็นตัวเลขหรือไม่
      if (isNumeric) { //ถ้าเป็นตัวเลขให้เปรียบเทียบเป็น number
        const diff = Number(tokenA) - Number(tokenB);
        if (diff !== 0) return diff;
      } else if (tokenA !== tokenB) { //ถ้าไม่ใช่ตัวเลขให้เปรียบเทียบเป็น string
        return tokenA < tokenB ? -1 : 1;
      }
    }

    return 0;
  };

  return [...items].sort(compare);
}
