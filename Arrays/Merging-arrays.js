function mergeSortedArrays(arr1, arr2){
    const mergedArray =[];

    let array1item= arr1[0];
    let array2item= arr2[0];
    let i=1;
    let j=1;

    //Check input- whether last array is empty

    if (arr1.length ===0){
        return arr2;
    }
    if (arr2.length ===0){
        return arr1;
    }
    while (array1item || array2item) {

        if (!array2item || array1item<array2item){
            mergedArray.push(array1item)
            array1item = arr1[i]
            i++;
        }else{
            mergedArray.push(array2item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

mergeSortedArrays([1,2,3], [4,5,6])
