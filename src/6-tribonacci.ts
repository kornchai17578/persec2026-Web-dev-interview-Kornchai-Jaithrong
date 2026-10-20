export function tribonacci(signature: number[], count: number): number[] {
  if (count < 0) {
    throw new Error('tribonacci expects a non-negative count');
  }

  const result = signature.slice(0, count); //ดึงค่าเริ่มต้นจาก signature และตัดให้เหลือไม่เกิน count

  while (result.length < count) { //ถ้ายังไม่ครบ count ให้คำนวณค่าต่อไป
    const lastThree = result.slice(-3); //เอาค่าล่าสุด 3 ตัว
    const next = lastThree.reduce((sum, value) => sum + value, 0); //รวมค่าล่าสุด 3 ตัวเข้าด้วยกัน
    result.push(next); //เพิ่มค่าต่อไปใน result
  }

  return result;
}
