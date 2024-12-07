function sumArray(numArray){
    return new Promise((resolve, reject) => {
        const sum = numArray.filter((x)=>numArray.Math.max());
        resolve(sum);
    });
};

const newArray = async()=>{
    try{
        const number = [1,2,3,4,6];
        let sum = await sumArray(number);  
         console.log(sum);
    }
    catch(error){
        console.log(error);
    };
};

newArray();