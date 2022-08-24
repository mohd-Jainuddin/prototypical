Array.prototype.myMap = function(callback){
    let myarr = this;
    let resultArr = [];
    for(let i=0;i<myarr.length;i++){
        let data = callback(myarr[i]);
        resultArr.push(data);
    }
    return resultArr;
}

let nums = [1,2,3,4,5];
let result = nums.myMap(function(num){
    return num*2;
})

console.log(result);