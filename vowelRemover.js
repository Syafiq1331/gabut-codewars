// Kode saya yang brutal
function shortcutSyafiq(string) {
  return string.split('').filter((element) => {
    return !['a', 'i', 'e', 'o', 'u'].includes(element);
  }).join('');
}


// Kode orang pake RegEx
function shortcutStranger(string) {
  return string.replace(/[aeiou]/g, '')
}

console.log(shortcutSyafiq('hello')) // hll
console.log(shortcutStranger('hello')) // hll