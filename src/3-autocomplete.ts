export function autocomplete(search: string, items: string[], maxResult: number): string[] {
  const needle = search.toLowerCase();//ทำคำค้นเป็นตัวเล็ก

  const rank = (text: string, index: number): number => {
    if (index === 0) return 0;//ถ้าเจอคำค้นอยู่ต้นคำให้จัดอันดับเป็น 0
    if (index + needle.length === text.length) return 2; //ถ้าเจอคำค้นอยู่ท้ายคำให้จัดอันดับเป็น 2
    return 1; //ถ้าเจอคำค้นอยู่ตรงกลางคำให้จัดอันดับเป็น 1
  };

  const matches = items
    .map((item) => { //หาตำแหน่งของคำค้นในแต่ละคำ แล้วจัดกลุ่ม
      const text = item.toLowerCase();
      const index = text.indexOf(needle);
      return { item, index, rank: rank(text, index) };
    })
    .filter((entry) => entry.index !== -1) //ตัดคำที่ไม่มีคำค้นทิ้ง
    .sort((a, b) => a.rank - b.rank || a.index - b.index); //เรียงลำดับ

  return matches.slice(0, Math.max(0, maxResult)).map((entry) => entry.item); //ตัดให้เหลือไม่เกิน maxResult ตัว
}
