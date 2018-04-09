;
(function() {
  window.myFirstLib = {
    remove: function(arr, index) {
      arr.splice(index, 1);
      return arr;
    },
    repeat: function(str, count) {
      for (let i = 0; i < count; i++) {
        console.log(str)
      }
    },
    pluck: function(arr, property_name) {
      for (let i = 0; i < arr.length; i++) {
        let arr2 = [];
        arr2.push(arr[i][property_name]);
        return arr2;
      }
    }
  };
}());
