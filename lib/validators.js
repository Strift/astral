export function validateBossesArray(array) {
  array.forEach((el) => {
    if (!(
      Object.prototype.hasOwnProperty.call(el, 'name') &&
      Object.prototype.hasOwnProperty.call(el, 'status') &&
      ['down', 'progress', null].includes(el.status))
    ) return false
  })
  return true
}
