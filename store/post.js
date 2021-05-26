export const state = () => ({
  testValue: 1
})

export const mutations = {
  set(state, newState){
    for(const key of Object.keys(newState)){
      state[key] = newState[key];
    }
  }
}

export const getters = {
  testValueTimes2(state){
    return state.testValue * 2
  }
}