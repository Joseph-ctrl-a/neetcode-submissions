class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}

        for i in range(len(nums)):
            lookingFor = target - nums[i]
            if lookingFor in map:
                return [map[lookingFor], i]
            map[nums[i]] = i
        return false
        