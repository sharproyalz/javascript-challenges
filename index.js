// // 242. Anagram
const isAnagram = (x, y) => {
    const wordInputedX = x.toLowerCase().split("").sort().join("");
    const wordInputedY = y.toLowerCase().split("").sort().join("");

    return wordInputedX === wordInputedY;
};

console.log(isAnagram("AnAgRam", "ganaraM"));

// 26. Remove Duplicates from Sorted Array
const removeDuplicates = (nums) => {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1, 2, 2]));

// // 350. Intersection of Two Arrays II
const intersect = (nums1, nums2) => {
    let sortedNum1 = nums1.sort((a, b) => a - b);
    let sortedNum2 = nums2.sort((a, b) => a - b);

    let intersect = [];
    let i = 0;
    let j = 0;
    while (i < sortedNum1.length && j < sortedNum2.length) {
        if (sortedNum1[i] < sortedNum2[j]) {
            i++;
        } else if (sortedNum1[i] > sortedNum2[j]) {
            j++;
        } else {
            intersect.push(sortedNum1[i]);
            i++;
            j++;
        }
    }

    return intersect;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// // 1. Two Sum
const twoSum = (nums, target) => {
    storeNumber = {};

    for (let i = 0; i < nums.length; i++) {
        difference = target - nums[i];
        if (difference in storeNumber) {
            return [storeNumber[difference], i];
        }
        storeNumber[nums[i]] = i;
    }
    return "No equal values";
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 10));
