var arr = [1, 2, 34, 434, 54, 545, 454, 546, 724, 7, 3244, 3, 4327, 86, 32, 4];
function bubble(arr) {
    var i,
        j,
        length = arr.length;
    var tmp, curr, next;
    for (i = length - 1; i >= 0; i--) {
        for (j = 0; j < i; j++) {
            curr = arr[j];
            next = arr[j + 1];
            if (curr > next) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
// bubble(arr);
// console.log('stop here');
function quickSort(arr) {
    var length = arr.length;
    var pivotIdx, pivoVal;
    pivotIdx = Math.floor(length / 2);
    pivoVal = arr[pivotIdx];
    if (length < 2) {
        return arr;
    }
    var left = [],
        right = [],
        one;
    for (var i = 0; i < arr.length; i++) {
        if (i == pivotIdx) {
            continue;
        }
        one = arr[i];
        if (one > pivoVal) {
            right.push(one);
        } else {
            left.push(one);
        }
    }

    return [].concat(quickSort(left), pivoVal, quickSort(right));
}
// var b = quickSort(arr);
// console.log('stop here');
function eventLoop() {
    setTimeout(() => {
        new Promise((r, j) => {
            console.log(1);
            r();
        }).then(function() {
            console.log(2);
        });
    }, 0);
    setTimeout(() => {
        console.log(3);
    }, 0);
    new Promise((r, j) => {
        console.log(4);
        r();
    }).then(function() {
        console.log(5);
    });
}

function quickSort2(arr, i, j) {
    var length = arr.length;
    var left = typeof i != 'number' ? 0 : i;
    var right = typeof j != 'number' ? length - 1 : j;
    var pivotIdx;
    if (length == 0 || left >= right) {
        return arr;
    }
    pivotIdx = partition(arr, left, right);
    quickSort2(arr, left , pivotIdx - 1);
    quickSort2(arr, pivotIdx + 1, right);
    return arr;
}
function partition(arr, left, right) {
    var pivotIdx = left;
    var pivotVal = arr[left];
    var i, value;

    var replaceIdx = pivotIdx + 1;

    for (i = pivotIdx+1; i <= right; i++) {
        value = arr[i];
        if (value < pivotVal) {
            swap(arr, i, replaceIdx);
            replaceIdx++;
        }
    }
    swap(arr,pivotIdx,replaceIdx-1)
    return replaceIdx-1;
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
// var b = quickSort2(arr);
// console.log(b)


// 思路：获取没重复的最右一值放入新数组
/*
* 推荐的方法
*
* 方法的实现代码相当酷炫，
* 实现思路：获取没重复的最右一值放入新数组。
* （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/
function uniq(array){
    var temp = [];
    var index = [];
    var l = array.length;
    for(var i = 0; i < l; i++) {
        for(var j = i + 1; j < l; j++){
            if (array[i] === array[j]){
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
        index.push(i);
    }
    console.log(index);
    return temp;
}

var aa = [1,2,2,3,5,3,6,5];
console.log(uniq(aa));
console.log('new')