//冒泡排序
const bubbleSort = arr => {
    let i, j, len1, len2, tmp;

    for (i = 0, len1 = arr.length; i < len1; i++) {
        for (j = 0, len2 = len1 - 1 - i; j < len2; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
};

//选择排序
const selectionSort = arr => {
    let len = arr.length,
        indexMin, i, j, tmp;

    for (i = 0; i < len - 1; i++) {
        indexMin = i;

        for (j = i + 1; j < len; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }

        if (i !== indexMin) {
            tmp = arr[i];
            arr[i] = arr[indexMin];
            arr[indexMin] = tmp;
        }
    }

    return arr;
};

//插入排序
const insertionSort = arr => {
    let len = arr.length,
        i, j, tmp;

    for (i = 1; i < len; i++) {
        j = i;
        tmp = arr[i];

        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = tmp;
    }

    return arr;
};

//归并排序
const mergeSort = arr => {
    let len = arr.length;
    if (len === 1) {
        return arr;
    }

    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let res = [],
        len1 = left.length,
        len2 = right.length;

    while (len1 > 0 && len2 > 0) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
            len1--;
        } else {
            res.push(right.shift());
            len2--;
        }
    }

    if (len1 > 0) {
        res = res.concat(left);
    }
    if (len2 > 0) {
        res = res.concat(right);
    }

    return res;
};

//快速排序
const quickSort = arr => {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(len / 2),
        pivot = arr.splice(pivotIndex, 1)[0],
        left = [],
        right = [];

    len--;
    for (let i = 0; i < len; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
};
