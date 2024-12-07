
// var n=11
// var a=[1,2,3,2,4,3,2,4,6,2,6];
// let i=0
// while (i<n){
//     let j=i+1;
//     let c=0
//     while (j<n){
//         if (a[i]==a[j]){
//             c=c+1
//         }
//         j++
//     }
//     if (c==1){
//         console.log(a[i])
//     }
//     i++
// }

// console.log(d)
// let n =10;
// // let c = 0;
// // let c1=
// let i = 1;
// let count = 0;
// while(i<n){
//     let j = 1;
//     let c = 0;
//     while(j<n){
//         if(i%j==0){
//             c ++ ;
//         }
//         j++
//     }
//     if(c==2){
//     count ++
//     console.log(i);
    
// }
// i++
// }
// console.log("total number = " +count)




// function
// function vowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || 
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//          )   {
//             count++;
//         }
//     }
//          console.log(count);
//     }
//     vowels("heooopriya")
 


// arrows function
// const vowels = (str) => {
//     let count = 0;
//         for(const char of str){
//             if(char === "a" || 
//                 char === "e" ||
//                 char === "i" ||
//                 char === "o" ||
//                 char === "u"
//              )   {
//                 count++;
//             }
//         }
//              console.log(count);
//         }
//         vowels("heooopriya")

// for eaych loop for arra

// let nums = [1,2,3,4,5];
// nums.forEach((num) =>{
//     console.log(num*num)
// })

// map methods
// let a =[1,2,3,4,5];
// let b = a.map((val) =>{
//      return val*val;
// })
//   console.log(b);




// filter method
// let a = [1,92,3,90,5,65,7,80,93,10,22];

// let num = a.filter((val)=>{
//     return val >=90;
// })
// console.log(num);


// // reduce ethods
// let a = [1,2,3,4,5];

// const output = a.reduce((result, current)=>{
//     return result + current;
// })
// console.log(output)

// function isPrime(n) {
//     if (n <= 1) return false; // Prime numbers are greater than 1
//     for (let i = 2; i <= Math.sqrt(n); i++) { // Check divisibility up to √n
//         if (n % i === 0) {
//             return false; // n is divisible by a number other than 1 and itself
//         }
//     }
//     return true; // If no divisors were found, n is prime
// }

// // Test cases
// console.log(isPrime(2)); // true
// console.log(isPrime(4));  // false
// console.log(isPrime(1));  // false
// console.log(isPrime(23)); // true

function login(username, password) {
    return username && password ? true : false;
}

// Test cases
console.log(login("user1", "pass123"));  // true
console.log(login("user2", ""));         // false
console.log(login("", "password"));      // false
console.log(login("admin", "admin"));    // true
