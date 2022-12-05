function fibonacciGenerator(n) {
    let array = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        let nextNum = array[array.length - 1] + array[array.length - 2];
        array.push(nextNum);
    }
    return array;
};
fibonacciGenerator(8);
fibonacciGenerator(12);
// n is the number of elements in the fibonacci array.
