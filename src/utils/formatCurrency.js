function formatCurrency(amount) {
  if (typeof amount !== 'number') {
    return '0';
  }

  return amount.toLocaleString('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default formatCurrency;
