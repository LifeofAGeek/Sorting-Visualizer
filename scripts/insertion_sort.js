function Insertion_sort() {
  c_delay = 0;

  for (var i = 1; i < a_size; i++) {
    var key = div_sizes[i];
    var j = i - 1;
    div_update(divs[i], div_sizes[i], "#40e334");
    div_update(divs[j], div_sizes[j], "#40e334");

    while (j >= 0 && div_sizes[j] > key) {
      div_update(divs[j], div_sizes[j], "#40e334");
      div_update(divs[j + 1], div_sizes[j + 1], "#40e334");
      div_sizes[j + 1] = div_sizes[j];
      j = j - 1;
    }
    div_sizes[j + 1] = key;
    for (var k = 0; k <= i; k++) div_update(divs[k], div_sizes[k], "#410b78");
  }
  div_update(divs[i - 1], div_sizes[i - 1], "#410b78");
  enable_buttons();
}
