// write the function that search for a element in the array and returns the index of it ,,, if the element is not present return -1


function checknumber(arr, number) {
    let arrlength = arr.length

    for (let i = 0; i <= arrlength; i++) {
        if (arr[i] == number) {
            return i
        }

    }
    return -1
}
let number = 43
let arr = [1, 23, 434, 343, 23, 43]

console.log(checknumber(arr, number))

// write the function that returns the number of negaticve numbers in the array


// initilize the function 
function countnegative(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count += 1
        }
    }
    return count
}

console.log(countnegative([1, 2, 32, -2, 232, -3, -5]))


// need to find largest number in array

function largestnumber(arr) {
    let largest=arr[0]
    for (let i = 1; i <= arr.length; i++){
        if (arr[i] > largest) {
            largest=arr[i]
        }
    }
    return largest
}

console.log(largestnumber([12, 2, 12, 1, 12, 32, 32, 32]))

function samllestnumber(arr) {
    let smallest = arr[0]
    for (let i = 1; i <= arr.length; i++){
        if(arr[i]<smallest)
        {
            smallest=arr[i]
        }
    }
return smallest
}

console.log(samllestnumber([12,2,21,23,-1]))