/* Check if an array is sorted.
 *
 * |Name |Type    |Desc          |
 * |-----|--------|--------------|
 * |arr  |array   |Array to check|
 * |[cmp]|function|Comparator    |
 */

/* example
 * isSorted([1, 2, 3]); // -> true
 * isSorted([3, 2, 1]); // -> false
 */

/* module
 * env: all
 * test: all
 */

exports = function(arr, cmp) {
    cmp = cmp || comparator;

    for (var i = 0, len = arr.length; i < len - 1; i++) {
        if (cmp(arr[i], arr[i + 1]) > 0) return false;
    }

    return true;
};

function comparator(a, b) {
    return a - b;
}
