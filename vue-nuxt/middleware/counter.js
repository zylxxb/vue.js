export default function(context){
  let store = context.store
  store.commit('ADD_COUNTER')
  console.log('跳转');
  store.commit('GET_SECONDS')
  console.log('设置时间');
}
