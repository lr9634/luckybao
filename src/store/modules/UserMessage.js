export default {
  namespaced: true,
  actions: {
    GetUser () {
      return new Promise((resolve, reject) => {
        this._vm.$https.get('/api/user/info').then(res => {
          resolve(res.data)
        })
      })
    }
  }
}
