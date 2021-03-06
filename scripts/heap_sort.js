function Heap_sort() {
  c_delay = 0;
  heap_sort();
  enable_buttons();
}
function swap(i, j) {
  div_update(divs[i], div_sizes[i], "#40e334");
  div_update(divs[j], div_sizes[j], "#40e334");

  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[j];
  div_sizes[j] = temp;

  div_update(divs[i], div_sizes[i], "#40e334");
  div_update(divs[j], div_sizes[j], "#40e334");

  div_update(divs[i], div_sizes[i], "#e0743a");
  div_update(divs[j], div_sizes[j], "#e0743a");
}

function max_heapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;
  if (l < n && div_sizes[l] > div_sizes[largest]) {
    if (largest != i) {
      div_update(divs[largest], div_sizes[largest], "#e0743a");
    }
    largest = l;
    div_update(divs[largest], div_sizes[largest], "#40e334");
  }

  if (r < n && div_sizes[r] > div_sizes[largest]) {
    if (largest != i) {
      div_update(divs[largest], div_sizes[largest], "#e0743a");
    }
    largest = r;
    div_update(divs[largest], div_sizes[largest], "#40e334");
  }

  if (largest != i) {
    swap(i, largest);

    max_heapify(n, largest);
  }
}

function heap_sort() {
  for (var i = Math.floor(a_size / 2) - 1; i >= 0; i--) {
    max_heapify(a_size, i);
  }
  for (var i = a_size - 1; i >= 0; i--) {
    swap(0, i);

    div_update(divs[i], div_sizes[i], "#410b78");
    div_update(divs[i], div_sizes[i], "#40e334");

    max_heapify(i, 0);

    div_update(divs[i], div_sizes[i], "#e0743a");
    div_update(divs[i], div_sizes[i], "#410b78");
  }

  // div_update(divs[i], div_sizes[i], "#410b78");
}
