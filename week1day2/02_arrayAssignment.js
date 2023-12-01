/*
1) Move Zeroes:

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/


let nums = [0, 1, 0, 3, 12]

function moveZeros(n) {
    let Output = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (n[i] == 0) {
            Output.push(n[i]);
        } else {
            Output.unshift(n[i]);
        }
    }
    return Output;
}

console.log(moveZeros(nums));
/*

2) Array intersection

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

function arrInstesection(a1, a2) {
    let ins = [];

    for (let i = 0; i <= a2.length - 1; i++) {
        for (let j = 0; j <= a1.length - 1; j++) {
            if (a2[i] == a1[j]) {
                ins.push(a2[i]);
                a1.splice(j, 1);
                break;
            };

        }

    }
    return ins;

}
console.log(arrInstesection(nums1, nums2));


/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example:
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1


*/

// let nums = [34, 7, 21, 89, 54, 10, 91, 67];

function minAndmax(input) {
    let max = input[0];
    let min = input[0];

    for (let i = 1; i < input.length; i++) {

        if (input[i] > max) {
            max = input[i]
        }
        if (input[i] < min) {
            min = input[i]
        }

    }
    console.log(max, min);

}
minAndmax(nums);
/*


4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates
elements removed.The order of the elements in the resulting array should be same as the order
    in the original array.

        Example:
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
let iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]

function removeDuplicate(input) {
    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        let exists = false;
        for (let j = 0; j < resultArray.length; j++) {
            if (input[i] === resultArray[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            resultArray.push(input[i])
        }
    }
    return resultArray;

}



console.log(removeDuplicate(iputArray));
