const Vue = require('vue');
const Vuetify = require('vuetify');

const App = require('./src/components/App.vue');

Vue.prototype.$eventHub = new Vue();

Vue.use(Vuetify);

new Vue({
   el: '#app',
   render: function(createElement){
      return createElement(App);
   }
})