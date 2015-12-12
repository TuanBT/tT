
      var oneDay = 24*60*60*1000;
  var firstDate = new Date(2014, 1, 1, 0, 0, 0, 0);
  var today = new Date();
  var subDate = Math.round(Math.abs((firstDate.getTime() - today.getTime())/(oneDay)));
  document.getElementById("day").innerHTML = subDate;
