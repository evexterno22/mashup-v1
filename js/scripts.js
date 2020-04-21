document.addEventListener('vue-cargado', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var sidenav1 = document.querySelectorAll('#sidenav-1');
  var dropdown1 = document.querySelectorAll('.dropdown-trigger');
  var optSidenav = {};
  var instDropdown1=M.Dropdown.init(dropdown1);
  var instSidenav = M.Sidenav.init(sidenav, optSidenav);
  var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });

  var tooltip=document.querySelectorAll('.tooltipped');
    var instTooltip = M.Tooltip.init(tooltip, {});
});
