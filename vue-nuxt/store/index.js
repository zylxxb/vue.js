export const state = () => ({
  user: '',
  password: '',
  counter: 0,
  seconds: 0
})

export const mutations = {
  SET_INFO(state, user, password){
    state.user = user
    state.password = password
  },
  REMOVE_INFO(state){
    state.user = ''
    state.password = ''
  },
  ADD_COUNTER(state){
    state.counter++
  },
  GET_SECONDS(state){
    let getDay = new Date()
    state.seconds = getDay.getSeconds()
  }
}

export const getters = {
  isAuth(state){
    return !! state.user
  }
}
