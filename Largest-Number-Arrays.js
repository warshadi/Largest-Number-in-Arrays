function largestOfFour(arr) {
    let emp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < arr[i][j + 1]) {
                let temp = arr[i][j];
                arr[i][j] = arr[i][j + 1];
                arr[i][j + 1] = temp;
                j = -1;
            }
        }
    }
    for (let z = 0; z < arr.length; z++) {
        emp.push(arr[z][0]);
    }
    console.log(emp);
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
