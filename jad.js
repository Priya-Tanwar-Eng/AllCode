//  var obj ={
//     fname : "priya",
//     lname : "tanwar",
//     age :24,
// };
// for (var key in obj){
//     console.log(key + " : " + [key] )
// }



// var a = [23 ,42, 67,78,43,34,]
// var b=[]
// for(let i =0; i< a.length; i++){
//     if( a[i]%2==0){
//        b[i]=0;
//     }else{
//         b[i]=a[i]
//     }
// }
// console.log(b)
// let b = [];
// var n=7
// var a=[1,2,3,2,4,3,2];
// let i=0
// let c=1
// let d=0
// while (i<n){
//     let j=i+1;
//     while (j<n){
//         if (a[i]==a[j]){

//             console.log(a[i])
//             break
           
//         }
//         j++
//     }
//     i++
// }
   
 function name (x){
    let c = 0;
    for(let i = 1; i<=x; i++){
        if(x%i==0){
            c++
        }
    }
    if(c==2){
        console.log("prime number");
    }else{
        console.log("not a prime number")
    }
 }

 name(17);
