/*
Size XL: s12 m12 l12 Style: kpi-xl,
Size L: s12 m12 l12 Style: kpi-,
Size M: s12 m6 l6 Style: kpi-,
Size S: s12 m6 l4 Style: kpi-,
Size XS: s6 m4 l3 Style: kpi-xs,
*/

let homeComponent = {
  template: '#home-component',
  data: function () {
    return {
      row1KPI: [
        { key: 0, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'qamd', title: 'Créditos',style:'kpi-xs', download: false,
         /* kpiIn:{
            row1KPIN:[
                      { key: 0, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s12 m12 l12',keyApp:0,qlik:'NrHfp', title: '',style:'kpiin-xs', download: false}
                    ]
          , row2KPIN:[
                      { key: 1, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Periodo Anterior',style:'kpiin-xs', download: false}
                    , { key: 2, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Año Anterior',style:'kpiin-xs', download: false}

                    ]
            }*/
        }
      , { key: 1, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'JcJvj', title: 'Capital',style:'kpi-xs', download: false,
           /* kpiIn:{
              row1KPIN:[
                        { key: 3, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s12 m12 l12',keyApp:0,qlik:'NrHfp', title: '',style:'kpiin-xs', download: false}
                      ]
            , row2KPIN:[
                        { key: 4, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Periodo Anterior',style:'kpiin-xs', download: false}
                      , { key: 5, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Año Anterior',style:'kpiin-xs', download: false}
  
                      ]
            }*/
        }
      , { key: 2, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'WJYuPN', title: 'Interés',style:'kpi-xs', download: false,
          /*kpiIn:{
            row1KPIN:[
                      { key: 6, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s12 m12 l12',keyApp:0,qlik:'NrHfp', title: '',style:'kpiin-xs', download: false}
                    ]
          , row2KPIN:[
                      { key: 7, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Periodo Anterior',style:'kpiin-xs', download: false}
                    , { key: 8, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Año Anterior',style:'kpiin-xs', download: false}

                    ]
          }*/
        }
      , { key: 3, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'WJYuPN', title: 'Total',style:'kpi-xs', download: false,
          /*kpiIn:{
            row1KPIN:[
                      { key: 9, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s12 m12 l12',keyApp:0,qlik:'NrHfp', title: '',style:'kpiin-xs', download: false}
                   
                    ]
          , row2KPIN:[
                      { key: 10, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Periodo Anterior',style:'kpiin-xs', download: false}
                    , { key: 11, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Año Anterior',style:'kpiin-xs', download: false}

                    ]

          }*/
        }
    ]
    ,row2KPI: [
      { key: 4, id: 'homeKPI',size:'s12 m6 l6',keyApp:0,qlik:'Btbd', title: '',style:'kpi-xs-home' , download: false}
    ]
    ,row3KPI: [
      { key: 5, id: 'homeKPI',size:'s12 m6 l6', keyApp:0,qlik:'vCNaSe', title: 'Gráfica ejemplo 5',style:'kpi-m', download: true}
    , { key: 6, id: 'homeKPI',size:'s12 m6 l6', keyApp:0,qlik:'akDGX', title: 'Gráfica ejemplo 6', style:'kpi-m', download: true}
    ]
    }
  }
};

let flujosComponent = {
  template: '#flujos-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'flujosKPI',size:'s12 m8 l8',keyApp:1,qlik:'SqDbku', title: 'Gráfica ejemplo 1',style:'kpi-m' , download: true}
      , { key: 1, id: 'flujosKPI',size:'s12 m4 l4',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-m' , download: true}
      ]
      ,row2KPI: [
        { key: 2, id: 'flujosKPI',size:'s12 m8 l4',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-m' , download: true}
      , { key: 3, id: 'flujosKPI',size:'s12 m4 l4',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 4',style:'kpi-m' , download: true}
      ]
      ,row3KPI: [
        { key: 4, id: 'flujosKPI',size:'s12 m8 l8',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 5',style:'kpi-m' , download: true}
      , { key: 5, id: 'flujosKPI',size:'s12 m4 l4',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 6',style:'kpi-m' , download: true}
      ]
      ,row4KPI: [
        { key: 6, id: 'flujosKPI',size:'s12 m8 l8',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 7',style:'kpi-m' , download: true}
      , { key: 7, id: 'flujosKPI',size:'s12 m4 l4',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 8',style:'kpi-m' , download: true}
      ,
      ]
      ,row5KPI: [
        { key: 8, id: 'flujosKPI',size:'s12 m8 l7',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 9',style:'kpi-xs' , download: true}
      , { key: 9, id: 'flujosKPI',size:'s12 m4 l5',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 10',style:'kpi-xs' , download: true}
      ]
      
    }
  }
};

let incumplimientoComponent = {
  template: '#incumplimiento-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'incumplimientoKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-l' , download: true}
      ]
      ,row2KPI: [
        { key: 1, id: 'incumplimientoKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-l' , download: true}
      ]
      , row3KPI: [
        { key: 2, id: 'incumplimientoKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-l' , download: true}
      ]

    }
  }
};

let adjudicacionComponent = {
  template: '#adjudicacion-component',
  data: function (){
    return{
      row1KPI: [
        { key: 1, id: 'adjudicacionKPI',size:'s12 m8 l8',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-m' , download: true}
      , { key: 2, id: 'adjudicacionKPI',size:'s12 m4 l4',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-m' , download: true}
      ]
      ,row2KPI: [
        { key: 0, id: 'adjudicacionKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-m' , download: true}
      ]

    }
  }
};

let distribucionComponent = {
  template: '#distribucion-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'distribucionKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-m' , download: true}
      ]
      ,row2KPI: [
        { key: 1, id: 'distribucionKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-m' , download: true}
      ]
      , row3KPI: [
        { key: 2, id: 'distribucionKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-m' , download: true}
      ]

    }
  }
};

let reporteComponent = {
  template: '#reporte-component',
  data: function (){
    return{
      row1KPI: [
        { key: 0, id: 'reporteKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-xl' , download: false}
      ]
    }
  }
};

let matrizComponent = {
  template: '#matriz-component',
  data: function (){
    return{
      
      row1KPI: [
        { key: 0, id: 'matrizKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 1',style:'kpi-l', download: true}
      ]
      ,row2KPI: [
        { key: 1, id: 'matrizKPI',size:'s12 m12 l12',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 2',style:'kpi-l' , download: true}
      ]
      ,row3KPI: [
        { key: 2, id: 'matrizKPI',size:'s2 m2 l2',keyApp:0,qlik:'Btbd', title: '',style:'kpi-xs-matriz' , download: false}
      , { key: 3, id: 'matrizKPI',size:'s2 m2 l2',keyApp:0,qlik:'Btbd', title: '',style:'kpi-xs-matriz' , download: false}
      ]
      ,row4KPI: [
        { key: 4, id: 'matrizKPI',size:'s12 m6 l6',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 3',style:'kpi-s' , download: true}
      , { key: 5, id: 'matrizKPI',size:'s12 m6 l6',keyApp:0,qlik:'Btbd', title: 'Gráfica ejemplo 4',style:'kpi-s' , download: true}
      ]
    }
  }
};

let linksComponent = {
  template: '#links-component',
  data: function (){
    return{
    }
  }
};


const routes = [
  { path: '/', component: homeComponent }
  ,{ path: '/Flujos', component: flujosComponent }
  ,{ path: '/Incumplimiento', component: incumplimientoComponent }
  ,{ path: '/Adjudicacion', component: adjudicacionComponent }
  ,{ path: '/Distribucion', component: distribucionComponent }
  ,{ path: '/Reporte', component: reporteComponent }
  ,{ path: '/Matriz', component: matrizComponent }
  ,{ path: '/Links', component: linksComponent }
];

const router = new VueRouter({
  routes: routes,
  //base:"/extensions/mashul-qlik-vue-material-cdn/mashul-qlik-vue-material-cdn.html#",
  mode: "hash"
});
