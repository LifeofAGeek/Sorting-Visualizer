function Selection_sort() {
  c_delay = 0;
  for (var i = 0; i < a_size - 1; i++) {
    div_update(divs[i], div_sizes[i], "#40e334");
    index_min = i;
    for (var j = i + 1; j < a_size; j++) {
      div_update(divs[j], div_sizes[j], "#40e334");
      if (div_sizes[j] < div_sizes[index_min]) {
        if (index_min != i) {
          div_update(divs[index_min], div_sizes[index_min], "#e0743a");
        }
        index_min = j;
        div_update(divs[index_min], div_sizes[index_min], "#e0743a");
      } else {
        div_update(divs[j], div_sizes[j + 1], "#e0743a");
      }
    }

    if (index_min != i) {
      var temp = div_sizes[index_min];
      div_sizes[index_min] = div_sizes[i];
      div_sizes[i] = temp;

      div_update(divs[index_min], div_sizes[index_min], "#40e334");
      div_update(divs[i], div_sizes[i], "#40e334");
      div_update(divs[index_min], div_sizes[index_min], "#40e334");
      div_update(divs[index_min], div_sizes[index_min], "#e0743a");
      div_update(divs[i], div_sizes[i], "#e0743a");
      div_update(divs[index_min], div_sizes[index_min], "#e0743a");
    }
    div_update(divs[i], div_sizes[i], "#410b78");
  }
  div_update(divs[i], div_sizes[i], "#410b78");

  enable_buttons();
}
