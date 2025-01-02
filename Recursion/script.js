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
function printNumbers(n){ // TC & SC O(n) & O(n)
    if(n > 0){
        printNumbers(n-1);
        console.log(n)
    }
}
printNumbers(10)