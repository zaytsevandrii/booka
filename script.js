var removeDuplicates = function (nums, val) {
    let temporal = 0
    let neArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[temporal] = nums[i]
            neArr.push(nums[i])
            temporal++
        }
    }
    return temporal, neArr
}

console.log(removeDuplicates((nums = [3, 2, 2, 3]), (val = 3)))
