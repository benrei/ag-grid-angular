function unflatten(obj) {
  var result = {};
  for (const key in obj) {
    var keys = key.split(".");
    keys.reduce(function(acc, curVal, i) {
      return (
        acc[curVal] ||
        (acc[curVal] = isNaN(Number(keys[i + 1]))
          ? keys.length - 1 == i
            ? obj[key]
            : {}
          : [])
      );
    }, result);
  }
  return result;
}
export { unflatten };
