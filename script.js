/* 
Find the index of the third largest number from an array 

It returns the first instance of the third largest number (assuming that there can be duplicates) 
*/

function findThirdLargest(arr) {
    const sortedArr = arr.slice().sort((a,b) => b - a);
    const uniqueNumbers = new Set (sortedArr);

    const thirdLargestNum = [...uniqueNumbers.values()][2];
    return arr.indexOf(thirdLargestNum);
}

console.log(findThirdLargest([91, 2, 33, 51, 54, 39, 34, 61, 34, 91]));

