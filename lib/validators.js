export function validateNavSectionArray (array) {
  array.forEach((el) => {
    if (!(
      Object.prototype.hasOwnProperty.call(el, 'text') &&
        Object.prototype.hasOwnProperty.call(el, 'url'))
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
