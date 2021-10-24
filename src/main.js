import Vue from 'vue'
import App from './App.vue'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

App.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, App.settings.env);
});