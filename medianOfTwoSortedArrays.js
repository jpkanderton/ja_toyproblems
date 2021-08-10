var findMedianSortedArrays = function(nums1, nums2) {
  let currentDigit;
  let keyDigits = [];
  let count = 0;
  let i_nums1 = 0;
  let i_nums2 = 0;


  let totalLength = nums1.length + nums2.length;
  let isOddLength =  totalLength % 2 !== 0;
  let countAfterKeyDigit = 0;
  let maxCountAfterKeyDigit = (isOddLength) ? Math.ceil(totalLength / 2)  : Math.floor(totalLength / 2) + 1;
  let keyDigit = (isOddLength) ? Math.ceil(totalLength / 2)  : Math.floor(totalLength / 2);

  while (count <= totalLength) {
      count++;
      let nums1_val = nums1[i_nums1];
      let nums2_val = nums2[i_nums2];

      if ((nums2_val === undefined && nums1_val !== undefined) || nums1_val <= nums2_val) {
          currentDigit = nums1_val;
          i_nums1++;
      } else {
          currentDigit = nums2_val;
          i_nums2++;
      }

      if (count >= keyDigit) {
          keyDigits.push(currentDigit);
          if (count === maxCountAfterKeyDigit) {
              break;
          }
      }
  }

  if (isOddLength) {
      return keyDigits[0]
  } else {
      return (keyDigits[0] + keyDigits[1]) / 2
  }

};

/*
Runtime: 116 ms, faster than 87.86% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 43.2 MB, less than 88.19% of JavaScript online submissions for Median of Two Sorted Arrays.
*/