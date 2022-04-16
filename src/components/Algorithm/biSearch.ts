function biSearch(array: number[], a: number): number {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === a) {
            return mid;
        } else if (array[mid] > a) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

export { biSearch };