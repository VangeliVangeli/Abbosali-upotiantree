function utopianTree(n) {
    if (n == 0) return 1;
    while (n > 0) {
  
      if (n % 2 == 0) {
        return utopianTree(n - 1) + 1;
      } else {
        return utopianTree(n - 1) * 2;
      }
      n--;
    }
  
  }
//   const testCases = [
//     [0, 1, 4],
//     [2, 7],
//     [0, 1, 2, 3, 4, 5, 6, 7, 8]
//   ];
  
//   for (let i = 0; i < testCases.length; i++) {


//     const tests = testCases[i];
  
//     for (let e = 0; e < tests.length; e++) {
  
//       console.log(tests[e], utopianTree(tests[e]));
//     }
// }