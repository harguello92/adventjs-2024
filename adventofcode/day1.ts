/*
--- Day 1: Historian Hysteria ---

You haven't even left yet and the group of Elvish Senior Historians has already hit a problem: their list of locations to check is currently empty. Eventually, someone decides that the best place to check first would be the Chief Historian's office.

Upon pouring into the office, everyone confirms that the Chief Historian is indeed nowhere to be found. Instead, the Elves discover an assortment of notes and lists of historically significant locations! This seems to be the planning the Chief Historian was doing before he left. Perhaps these notes can be used to determine which locations to search?

Throughout the Chief's office, the historically significant locations are listed not by name but by a unique number called the location ID. To make sure they don't miss anything, The Historians split into two groups, each searching the office and trying to create their own complete list of location IDs.

There's just one problem: by holding the two lists up side by side (your puzzle input), it quickly becomes clear that the lists aren't very similar. Maybe you can help The Historians reconcile their lists?

For example:

3   4
4   3
2   5
1   3
3   9
3   3
Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are. Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.

In the example list above, the pairs and distances would be as follows:

The smallest number in the left list is 1, and the smallest number in the right list is 3. The distance between them is 2.
The second-smallest number in the left list is 2, and the second-smallest number in the right list is another 3. The distance between them is 1.
The third-smallest number in both lists is 3, so the distance between them is 0.
The next numbers to pair up are 3 and 4, a distance of 1.
The fifth-smallest numbers in each list are 3 and 5, a distance of 2.
Finally, the largest number in the left list is 4, while the largest number in the right list is 9; these are a distance 5 apart.
To find the total distance between the left list and the right list, add up the distances between all of the pairs you found. In the example above, this is 2 + 1 + 0 + 1 + 2 + 5, a total distance of 11!

Your actual left and right lists contain many location IDs. What is the total distance between your lists?
*/


const puzzleInputDemo = `
77221   93653
61169   27995
49546   69782
11688   41563
15820   48282
63235   37517
28850   68189
80735   25255
42616   65322
55068   99897
30851   35509
14907   49013
64732   92011
16709   68830
`;


const becomeLocationIDsToArrays = (input: string) => {
  const rows = input.trim().split(/\n+/);

  const leftSide = rows.map((row) => Number(row.split(/\s+/)[0]))
  const rightSide = rows.map((row) => Number(row.split(/\s+/)[1]))

  return {
    leftSide,
    rightSide,
    totalRows: rows.length
  }
}

// Part 1
const runDistance = (input: string) => {
  const { leftSide, rightSide, totalRows } = becomeLocationIDsToArrays(input);

  const sortASC = (arrayList: number[]) => arrayList.sort((a, b) => a - b)

  const leftSideASCSorted = sortASC(leftSide);
  const rightSideASCSorted = sortASC(rightSide);

  let totalDistanceBetweenLocationIDs = 0;

  for (let i = 0; i < totalRows; i++) {
    totalDistanceBetweenLocationIDs += Math.abs(leftSideASCSorted[i] - rightSideASCSorted[i]);
  }

  return totalDistanceBetweenLocationIDs;
}

runDistance(puzzleInputDemo)


//Part 2
const runSimilarity = (input: string) => {
  const { leftSide, rightSide, totalRows } = becomeLocationIDsToArrays(input);
  let similarityScore = 0;

  for (let i = 0; i < totalRows; i++) {
    similarityScore += leftSide[i] * rightSide.filter((item) => item === leftSide[i]).length
  }

  return similarityScore;
}

runSimilarity(puzzleInputDemo);
