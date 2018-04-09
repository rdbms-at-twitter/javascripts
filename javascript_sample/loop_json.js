const Vue = require('vue');
const axios = require('axios');

// Json取得URL
const URL = 'http://192.168.56.200/tables/data.json';

// Vue.js のインスタンス

module.export = new Vue({
  data: {
      // JSON格納用DOM
      search_list: []
  },
  methods: {
   },
  async created() {
    try {
      let res = await axios.get(URL)
      this.search_list = res.data
      console.log(this.search_list);
    } catch (error) {
      console.error(error)
    }
  }
});