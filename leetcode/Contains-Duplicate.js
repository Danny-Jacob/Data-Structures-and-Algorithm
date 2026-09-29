class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let count={}
        // for (let c of nums){
        //     count[c]=(count[c] || 0) + 1;
        //     if(count[c]>1){
        //         return true;
        //     }
        // }
        // return false;
        let n= nums.length;
        let count ={}
        for (let i=0;i<n;i++){
            count[nums[i]]=(count[nums[i]] || 0) + 1;
            if(count[nums[i]]>1){
                return true;
            }
            
        }
        return false;
        
    }
}
