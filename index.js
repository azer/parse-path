module.exports = parsePath;


function parsePath (context, path) {
  var parts = path.split('.');

  if (parts.length == 1) {
    return context[path];
  }

  var i = -1,
      len = parts.length,
      value;

  while (++i < len) {
    value = ( i == 0 ? context : value )[parts[i]];

    if (typeof value == 'function' && i < len - 1) {
      value = value();
    }

    if (value == undefined || value == null) {
      return undefined;
    }

  }

  return value;
}
