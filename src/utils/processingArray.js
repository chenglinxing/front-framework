export function moveUp(arr, index) {
  if (index > 0 && index < arr.length) {
    let element = arr[index];
    arr.splice(index, 1);
    arr.splice(index - 1, 0, element);
  }
}

export function moveDown(arr, index) {
  if (index >= 0 && index < arr.length - 1) {
    let element = arr[index];
    arr.splice(index, 1);
    arr.splice(index + 1, 0, element);
  }
}
