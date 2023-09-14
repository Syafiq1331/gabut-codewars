// Instruction
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// Solution
function DNAStrand(dna) {
  // return string.split('').map((item) =>
  // (
  //   item == '5' ? 'S' : item &&
  //     item == '0' ? 'o' : item &&
  //       item == '1' ? 'I' : item
  // )
  // ).join('')

  return dna.split('').map(item =>
  (
    item == 'A' ? 'T' : item && item == 'T' ? 'A' : item && item == 'C' ? 'G' : item && item == 'G' ? 'C' : item
  )
  ).join('');
}

console.log(DNAStrand("AAAA")); // Expected TTTT
console.log(DNAStrand("ATTGC")); // Expected TAACG