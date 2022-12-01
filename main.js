// 1


// function max_name(data) {
//     return data.split(' ').reduce((a, b) => b.length < a.length ? a : b)

// }

// console.log(max_name('Michael', 'George', 'Alex'));


// 3


let arr = [3, 5, 2, 4, 1]

for (j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
}

console.log(arr);





