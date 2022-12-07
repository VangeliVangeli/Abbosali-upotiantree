function utopianTree(n) {
    
  let height = 1; 
  for(let i=1; i <= n; i++){
    //below condition picks ODD NUMBERS
       if(i%2 == 1)
       {
          height *= 2;
       } 
       else 
       {        
          height++;
       }     
   }
   return height;
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