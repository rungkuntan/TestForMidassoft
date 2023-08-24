function getClockAngle(hh_mm: string): number {
  const [hourStr, minuteStr] = hh_mm.split(":");
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // สูตรคำนวณหามุมจากเข็มชั่วโมง + เข็มนาที
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteAngle = minute * 6;

  // นำค่าของมุมระหว่างเข็มชั่วโมงและเข็มนาทีมาหาค่าสมบูรณ์โดยใช้ Math.abs เพื่อไม่ให้ค่าความต่างระหว่างมุมของทั้ง 2 ประเภทออกมาเป็นลบ
  let angleDifference = Math.abs(hourAngle - minuteAngle);

  // กำหนดให้หาก angleDifference > 180 มีค่ามากกว่า 180 จะนำค่าที่ได้มาลบด้วย 360 อีกที
  if (angleDifference > 180) {
    angleDifference = 360 - angleDifference;
  }

  return angleDifference;
}

console.log(getClockAngle("11:00"));
