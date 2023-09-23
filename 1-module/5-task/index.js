function truncate(str, maxlength) {
  let quantityRemoveLetters = 0;
  let newString = '';

  if (str.length === maxlength || str.length < maxlength) {
    return str;
  }

  if (str.length > maxlength) {
    quantityRemoveLetters = (str.length - maxlength) + 1;
    newString = str.slice(0, str.length - quantityRemoveLetters) + '…';
  }
  return newString;
}

