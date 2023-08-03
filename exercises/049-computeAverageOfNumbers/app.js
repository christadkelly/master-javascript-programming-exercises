// Write your function here
function computeAverageOfNumbers(nums) {
    if (nums.length == 0) return 0;

    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    let avg = total / nums.length;
    return avg;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); 