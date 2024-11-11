const toNumberFloat = (value: string): number => Number.parseFloat(value)

const toCurrency = (value: string | number): string => {
  return new Intl.NumberFormat(
    "en-US",
    { style: "currency", currency: "USD" }
  ).format(typeof value === 'string' ? toNumberFloat(value) : value)
}

export {
  toCurrency,
  toNumberFloat,
}