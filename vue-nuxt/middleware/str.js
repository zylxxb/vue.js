export default function(context){
  let store = context.store
  store.commit('todo/SET_STR')
  console.log('设置子串');
}
