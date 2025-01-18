// let count = 0;
// function radheyRadhey(){
    
//     count++;
//    // console.log(count) // print 1 to 72
//     if(count === 72){
//         return;
//     }
//     console.log(count) // print 1 to 71
//     radheyRadhey();
// }

// radheyRadhey()

// ==========================================================
//   ~~~~~~~~~~ Print 1 to n ~~~~~~~~~~
// function printNumbers(n){ // TC & SC O(n) & O(n)
//     if(n > 0){
//         printNumbers(n-1);
//         console.log(n)
//     }
// }
// printNumbers(10)

// function print(i , n){
//     if(i>n){
//        return;
//     }
 
//    //  console.log(i)
//     print(i+1, n)
//     console.log(i)
//  }
 
//  console.log(print(1,10))
 
// console.log(printR(10,1))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~

// function fact(n){
//    if(n===1){
//       return 1;
//    }

//    return n*fact(n-1)
// }

// console.log(fact(5))

// Q. ~~~~~~~~~~~~~~~ Fibonacci Numbers ~~~~~~~~~~~~~
function fibonacci(n) {
   if (n <= 0) return 0; // Base case for n = 0
   if (n === 1) return 1; // Base case for n = 1
   return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
 }
 
 const n = 10;
 console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);