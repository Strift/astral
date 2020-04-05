import { ref, isRef } from '@vue/composition-api'

export function wrap (value) {
  return isRef(value) ? value : ref(value)
}

export function unwrap (ref) {
  return isRef(ref) ? ref.value : ref
}
