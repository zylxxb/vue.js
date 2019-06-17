export default ({app}) => {
  var token = app.store.getters.isAuth
  app.router.beforeEach((to, from, next) => {
    token = app.store.getters.isAuth
    if (to.path === '/login') {
      next()
    } else {
      if (token) {
        next()
      } else {
        next()
        app.router.replace('/login')
      }
    }
  })
}
