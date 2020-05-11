export const state = () => ({
  scrollX: 0,
  scrollY: 0
})

export const mutations = {
  setScrollX (state, scrollX) {
    state.scrollX = scrollX
  },
  setScrollY (state, scrollY) {
    state.scrollY = scrollY
  }
}
