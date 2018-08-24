import Vue from 'vue'
import App from './App.vue'

new Vue({
  //template: '<App/>', // si cargase Vue con el procesador de templates esto es valido. Con runtime solo no funciona
  // Llamar a createElement como h se ha convertido en una convención además cambio por arrow function
  // render:function(createElement){
  //   return createElement('button-group');
  // }
  render: h => h(App)
}).$mount('#app')