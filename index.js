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

    if (value == undefined || value == null) {
      return undefined;
    }

    if (typeof value == 'function') {
      value = value();
    }

  }

  return value;
}
