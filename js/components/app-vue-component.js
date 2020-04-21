let headerComponent ={
  template:'#header-component',
};
let mainComponent={
  template:'#main-component'
};
let footerComponent={
  template:'#footer-component'
};
document.addEventListener("qlik-cargado", () => {
	window.mashupVue = new Vue({
    router: router,
    components:{
      'header-component': headerComponent,
      'main-component': mainComponent,
      'footer-component': footerComponent
    }
  }).$mount('#mashup-vue');
  let evento = new Event("vue-cargado");
	document.dispatchEvent(evento);
})
