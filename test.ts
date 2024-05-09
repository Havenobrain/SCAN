const arr: number[] = [4, 7, 9]

arr.forEach(testFunction)
myForeach(arr, testFunction)

//

// testFunction(4, 0)
// testFunction(7, 1)
// testFunction(9, 2)

//

function testFunction(item: number, index: number) {
    console.log(`item = ${item}, index = ${index}`)
}

function myForeach(arr: number[], testFunction: any) {
    for (let i = 0; i < arr.length; i++) {
        testFunction(arr[i], i)
    }
}
