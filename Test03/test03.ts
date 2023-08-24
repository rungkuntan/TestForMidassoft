function getQuestionPart(words: string[]): string[] {
  const allWordsSet = new Set<string>();

  for (const word of words) {
    // แยกคำในประโยคเป็นคำที่แยกออกมาแล้ว
    const separatedWords = word.split(" ");

    // เพิ่มคำทั้งหมดลงในเซต allWordsSet
    for (const separatedWord of separatedWords) {
      allWordsSet.add(separatedWord);
    }
  }

  const duplicateWordsSet = new Set<string>();

  const uniqueWordsSet = new Set<string>();

  // วนลูปผ่านคำทั้งหมดในเซต allWordsSet
  for (const word of allWordsSet) {
    // ถ้าคำมีการเกิดซ้ำกันในประโยคทั้งหมด
    if (words.every((sentence) => sentence.includes(word))) {
      duplicateWordsSet.add(word);
    } else {
      uniqueWordsSet.add(word);
    }
  }

  // แปลงเซตเป็นอาร์เรย์และส่งกลับ
  return Array.from(uniqueWordsSet);
}

const inputWords = ["TAN ROOM", "TAN BLACK", "BLOOD TAN"];
const result = getQuestionPart(inputWords);
console.log(result);
