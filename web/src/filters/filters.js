import Vue from "vue";

Vue.filter("toReadable", function(value, type = "Number") {
  //converts some data to readable format
  if (type == "Number") {
    if (isNaN(value)) return "Error";
    return Number(value).toLocaleString();
  }
});
