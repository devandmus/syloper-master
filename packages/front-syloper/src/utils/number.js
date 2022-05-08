// eslint-disable-next-line import/prefer-default-export
export function currencyFormatter(value) {
  const dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return dollarUS.format(value);
}

export function numberFormatter(value) {
  return new Intl.NumberFormat('en-US').format(value);
}
