var intersection = function (nums1, nums2) {
  let set = new Set(nums1);
  let ans = new Set();

  for (let i = 0; i < nums2.length; i++) {
    set.has(nums2[i]) && ans.add(nums2[i]);
  }
  return [...ans];
};

var intersection = function (nums1, nums2) {
  let intersection = nums1.filter((x) => nums2.includes(x));

  let set = new Set(intersection);

  return [...set];
};

function intersect(nums1, nums2) {
  let setNum1 = new Set(nums1);

  return [...new Set(nums2.filter((num) => setNum1.has(num)))];
}
