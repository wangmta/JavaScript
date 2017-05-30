function removeWithoutCopy(arr, item) {
    for (x in arr) {
        while (arr[x] == item) {
            arr.splice(arr.indexOf(arr[x]),1)
        }
    }
    console.log(arr);
};
removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)