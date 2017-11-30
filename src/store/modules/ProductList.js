export default {
  namespaced: true,
  actions: {
    GetProductList ({store}, {page, pageSize, cartId}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/list', {
          params: {
            page,
            page_size: pageSize,
            cat_id: cartId
          }
        }).then(res => {
          resolve(res.data.list)
        })
      })
    },
    GetHomeIndex () {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/home/index').then(res => {
          resolve(res.data)
        })
      })
    },
    GetArticleList () {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/article/list').then(res => {
          resolve(res.data)
        })
      })
    },
    GetPrice ({store}, {id, genes}) {
      console.log(id)
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/trial/submit', {
          product_id: id,
          genes
        }).then(res => {
          resolve(res.data)
        })
      })
    },
    GetProduct ({store}, {id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/view', {
          params: {
            product_id: id
          }
        }).then(res => {
          resolve(res.data)
        })
      })
    },
    GetProfessional ({store}, {id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/insured/job', {
          params: {
            product_id: id
          }
        }).then(res => {
          resolve(res.data)
        })
      })
    },
    GetAttr ({store}, {id, genes}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/view', {
          product_id: id,
          genes
        }).then(res => {
          resolve(res.data)
        })
      })
    },
    GetSubmit ({store}, {id, healthId, genes, questions}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/submit', {
          product_id: id,
          healthy_id: healthId,
          genes,
          questions
        }).then(res => {
          resolve(res.data)
        })
      })
    },
    GetHealth ({store}, {id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/insure/attr', {
          params: {
            product_id: id
          }
        }).then(res => {
          resolve(res.data)
        })
      })
    }
  }
}
