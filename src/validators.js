export function validateBossesArray (array) {
  array.forEach(el => {
    if (!(el.hasOwnProperty('name') && el.hasOwnProperty('status') && ['down', 'progress', null].includes(el.status))) return false
  })
  return true
}
