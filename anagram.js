function anagram(a, b) {
  const strA = a.split("").sort().join("");
  const strB = b.split("").sort().join("");

  if (strA === strB) {
    console.log("ini adalah anagram");
  } else {
    console.log("ini bukan anagram");
  }
}

anagram("kamu", "muak");
anagram("kamu", "kaum");
anagram("kamu", "makam");
