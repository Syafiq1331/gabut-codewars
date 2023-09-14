// Problem
/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
*/

// Expectation
/*
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

// Solution ku
function correct(string) {
  return string.split('').map((item) =>
  (
    item == '5' ? 'S' : item &&
      item == '0' ? 'o' : item &&
        item == '1' ? 'I' : item
  )
  ).join('')
}

// Gak jelas, awokawokawokawokaw

// Solusi orang
correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')

// Singkat, padata & jelas

console.log(correct("BUDAPE5T"));