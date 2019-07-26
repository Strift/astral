export function validateNavButtonArray (array) {
  array.forEach((el) => {
    if (!(
      Object.prototype.hasOwnProperty.call(el, 'text') &&
      Object.prototype.hasOwnProperty.call(el, 'section') &&
      Object.prototype.hasOwnProperty.call(el, 'active'))
    ) return false
  })
  return true
}

export function validateBossArray (array) {
  array.forEach((el) => {
    if (!(
      Object.prototype.hasOwnProperty.call(el, 'name') &&
      Object.prototype.hasOwnProperty.call(el, 'status') &&
      ['down', 'progress', null].includes(el.status))
    ) return false
  })
  return true
}
