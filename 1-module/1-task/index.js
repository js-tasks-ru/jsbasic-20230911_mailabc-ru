function factorial(n) {
  if (typeof n !== 'number') {
    alert('Введите число');
    return;
  }

  if (n === 1 || n === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
