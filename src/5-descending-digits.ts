export function sortDigitsDescending(num: number): number {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error('sortDigitsDescending expects a positive integer');
  }

  const sorted = String(num)//แปลงตัวเลขเป็นสตริง
    .split('')//แยกสตริงเป็นตัวอักษรทีละหลัก
    .sort((a, b) => Number(b) - Number(a)) //เรียงจากมากไปน้อย
    .join(''); //ต่อกลับเป็นสตริงเดียว

  return Number(sorted); //แปลงกลับเป็นตัวเลข
}
