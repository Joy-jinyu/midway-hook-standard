export const mapToObj = (arrays) => {
  const result = {}
  arrays.forEach((item) => {
    const { key, value } = item
    result[key] = value
  })
  return result
}
