
// for normally adding the for loop for learning
for (let i = 0; i < 10; i++) {
    console.log("hello" + i)
}

// iterating the array through for loop and working on oit 
let a = [12, 3, 43, 34, 34]
let b = a.length
for (let i = 0; i < b; i++){
    console.log(a[i])
}


// calling the function in the loop
function greet(value) {
    console.log("hello"+value)
}

for (let i = 0; i < b; i++){
    greet(a[i])
}


// for learning the while llop

let p = 0;
while (p < 5) {
    console.log("while", p);
    p++
}