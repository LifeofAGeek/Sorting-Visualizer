function Bubble_sort() {
  c_delay = 0;
  for (var i = 0; i < a_size - 1; i++) {
    for (var j = 0; j < a_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "#40e334");

      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(divs[j], div_sizes[j], "#40e334");
        div_update(divs[j + 1], div_sizes[j + 1], "#40e334");

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        div_update(divs[j], div_sizes[j], "#40e334");
        div_update(divs[j + 1], div_sizes[j + 1], "#40e334");
      }

      div_update(divs[j], div_sizes[j], "#e0743a");
    }
    div_update(divs[j], div_sizes[j], "#410b78");
  }
  div_update(divs[0], div_sizes[0], "#410b78");

  enable_buttons();
}
