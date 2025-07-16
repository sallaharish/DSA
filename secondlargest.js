// for finding the second largest number in the aarrauy
// corner cases for <</a>
// array should not have length <2 and what if array ahve duplicates number 

function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have length of 2"
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]


        }
        else if (a[i] > secondLargest && a[i] != firstLargest) {
            secondLargest = a[i]
        }
    }
    return secondLargest
}

let a = [1, 2, 423, 23, 232423, 232423]
console.log(secondLargest(a))