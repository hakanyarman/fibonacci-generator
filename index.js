function fibonacciGenerator(n) {
    let array = [0, 1];
    if(n>2){
        for (let i = 0; i < n - 2; i++) {
            let nextNum = array[array.length - 1] + array[array.length - 2];
            array.push(nextNum);
        }
    }
    else if(n==1){
        array = [0];
    }
    else if(n==2){
        array = array ;
    }
    return array;
};

// n is the number of elements in the fibonacci array.
