function setPlaceValues(num) {
    // let [log, num, arr] = [console.log, 1125];
    let [log, arr1, arr2, match] = [console.log, [], []];

    // log(
    //   num,
    //   num.toString().length, // changed to a string to count.
    //   // concept: replicate each amount in sequence, then floor: i.e. 1125, 125, 25, 5; then Math.Floor to 1000, 100, 20, 5.
    //   );

    arr1 = [...num.toString()];
    // log(arr)

    // for loop
    for (let k = 0; k < arr1.length; k++) {
        const power = Math.pow(10, ((arr1.length - 1) - (k))).toString();
        // used regex to 
        const addOn = power.replace(/^\w/, "");
        arr2.push(arr1[k] + addOn);
    }
    // log(arr1, arr2);
    arr1 = [...arr2].map(elem => Number(elem));
    // log(arr1);
    // arr1 = arr1.map(elem => Number(elem));
    log(arr1);
}

setPlaceValues(36);
setPlaceValues(891);
setPlaceValues(3999);
setPlaceValues(4567245);
