// group 3: Matthew Merrill, Christian Land, Clint Lawson, Daniel H
// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    return mergeSortedArrays(arr1, arr2);
}


// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
    let arr3 = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] > arr2[0]) {
            arr3.push(arr2.shift());
        } else {
            arr3.push(arr1.shift())
        }
    }
    if (arr1.length === 1) {
        arr3.push(arr1[0]);
    } else if (arr2.length === 1) {
        arr3.push(arr2[0]);
    }
    return arr3
}



// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals
//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m)