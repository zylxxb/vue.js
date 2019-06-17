export const state = () => ({
  string: null
})
export const mutations = {
  SET_STR(state){
    state.string = Math.random()
  }
}
