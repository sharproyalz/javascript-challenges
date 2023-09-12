// 242. Anagram
const isAnagram = (x, y) => {
    const wordInputedX = x.toLowerCase().split("").sort().join("");
    const wordInputedY = y.toLowerCase().split("").sort().join("");

    return wordInputedX === wordInputedY;
};

console.log(isAnagram("AnAgRam", "ganaraM"));

// 26. Remove Duplicates from Sorted Array
const removeDuplicates = () => {
    let nums = [1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 9];
    let removedDuplicate = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
        } else {
            removedDuplicate += +nums[i];
        }
    }
    const arrayNums = removedDuplicate.split("");
    const convertedString = arrayNums.map((str) => parseInt(str, 10));
    const arrayLength = arrayNums.length;
    return convertedString;
};

console.log(removeDuplicates());

// 350. Intersection of Two Arrays II
const intersect = (nums1, nums2) => {
    let sortedNum1 = nums1.sort();
    let sortedNum2 = nums2.sort();

    let intersect = [];
    for (let i = 0; i < sortedNum2.length; i++) {
        if (sortedNum1[i] !== sortedNum2[i]) {
            for (let j = 0; j < sortedNum1.length; j++) {
                if (sortedNum1[j] === sortedNum2[i]) {
                    intersect.push(sortedNum2[i]);
                }
            }
        } else {
            intersect.push(sortedNum2[i]);
        }
    }
    sortedArray = intersect.sort(function (a, b) {
        return a - b;
    });
    return sortedArray;
};

console.log(
    intersect(
        [1, 2, 2, 3, 4, 10, 2, 4, 9, 8, 7, 6, 5, 4],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    )
);

// 1. Two Sum
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
    return "No equal value";
};

console.log(twoSum([2, 7, 11, 15], 18));
