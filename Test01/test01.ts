function getHandScore(input: string): number {
  const cards = input.split(" "); //แยกค่าinputของstringที่รับเข้ามา

  const suitScores: { [key: string]: number } = { S: 0, H: 0, D: 0, C: 0 }; //กำหนดค่า suitscore แต่ละตัว

  for (const card of cards) {
    const value = parseInt(card.substring(1));
    const suitEmblems = card.charAt(0);

    ///กำหนดเงื่อนไขถ้ารับ Input นอกเหนือจาก Number (J,Q,K,A)
    if (isNaN(value)) {
      if (card.substring(1) === "A") {
        suitScores[suitEmblems] += 11;
      } else {
        suitScores[suitEmblems] += 10;
      }
    } else {
      suitScores[suitEmblems] += value;
    }
  }

  //ใช้ Math.max หาค่าของ Suit ที่ค่าเยอะที่สุด

  const maxScore = Math.max(
    suitScores.S,
    suitScores.H,
    suitScores.D,
    suitScores.C
  );

  return maxScore;
}

console.log(getHandScore("S8 S10 S10 S10 CA CA CA")); // S:38 C:30 result is 38
