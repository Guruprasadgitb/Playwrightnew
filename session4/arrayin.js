// const nums = [2,4,5,2,1,2];
// const count = {};
// for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     count [value] = (count[value] || 0)+1
// } 
// console.log(count);

const nums = [2,4,5,2,1,2];
const k = 2;
let  sum = 0;


for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (k==value) {
        sum += 1;
    }
    
}console.log(`The value of k is ${sum}`);


