function largestSubarraySum(array) {
  let currentSum = 0
  let largestSum = 0

  for(let n of array) {
    // Assign currentSum to to the greater of: 0 or currentSum + n 
    currentSum = Math.max(0, (currentSum + n))
    // If currentSum is larger than largestSum, set largestSum to equal currentSum
    largestSum = Math.max(largestSum, currentSum) 
  }
  return largestSum
}