Vue.component('kpi-component',{
  props:['kpi'],
  template:'#kpi-component',
  mounted() {
    window.appQlik[this.kpi.keyApp].getObject(this.kpi.id+this.kpi.key,this.kpi.qlik);
  },
  methods:{
    download(){
      //alert("hola mundo");
      window.appQlik[this.kpi.keyApp].getObject(this.kpi.qlik).then(model => {
        window.appQlik[this.kpi.keyApp].table(model).exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true});
      });
    }
  }
});

Vue.component('kpiin-component',{
  props:['kpiin'],
  template:'#kpiin-component',
  mounted() {
    window.appQlik[this.kpiin.keyApp].getObject(this.kpiin.id+this.kpiin.key,this.kpiin.qlik);
  },
  methods:{
    download(){
      //alert("hola mundo");
      window.appQlik[this.kpiin.keyApp].getObject(this.kpiin.qlik).then(model => {
        window.appQlik[this.kpiin.keyApp].table(model).exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true});
      });
    }
  }
});


Vue.component('sidenav-component',{
  template:'#sidenav-component',
  data: function(){
    return{
      options:[
         {key:0,url:'/',tooltip:'Home',icon:'fas fa-home i-medium', styleIcon:'padding: 0 6px !important;'}
        ,{key:1,url:'/Flujos',tooltip:'Fujos',icon:'fas fa-funnel-dollar i-medium', styleIcon:''}
        ,{key:2,url:'/Incumplimiento',tooltip:'Incumplimiento',icon:'fas fa-praying-hands i-medium', styleIcon:''}
        ,{key:7,url:'/Adjudicacion',tooltip:'Adjudicación',icon:'fas fa-hand-holding-usd i-medium', styleIcon:''}
        ,{key:3,url:'/Distribucion',tooltip:'Distribución',icon:'fas fa-money-check i-medium', styleIcon:''}
        ,{key:4,url:'/Reporte',tooltip:'Reporte',icon:'fas fa-business-time i-medium', styleIcon:''}
        ,{key:5,url:'/Matriz',tooltip:'Matriz',icon:'fas fa-th i-medium', styleIcon:'padding: 0 8px !important;'}
        ,{key:6,url:'/Links',tooltip:'Links',icon:'fas fa-link i-medium', styleIcon:'padding: 0 8px !important;'}
      ]
    }
  }


});