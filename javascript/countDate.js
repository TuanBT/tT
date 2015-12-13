  var firstDate = new Date(2014, 1, 1, 0, 0, 0, 0);
  var today = new Date();
  var subDate = cal_to_jd(today.getFullYear(), today.getMonth()+1, today.getDate()) - cal_to_jd(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
  document.getElementById("day").innerHTML = subDate;
  
  function cal_to_jd(  y2, m2, d2  ) {
   var j1=0;
   var jy=0;
   var ja=0;
   var jm=0;
	if( m2 > 2 ) {
		jy = y2;
		jm = m2 + 1;
	} else {
		jy = y2 - 1;
		jm = m2 + 13;
	}


	var intgr = Math.floor( Math.floor(365.25*jy) + Math.floor(30.6001*jm) + d2 + 1720995 );
	var intgr2 = intgr;

    var gregcal = 15 + 31*( 10 + 12*1582 );
	if( d2 + 31*(m2 + 12*y2) >= gregcal ) {
		ja = Math.floor(0.01*jy);
		intgr2 += 2 - ja + Math.floor(0.25*ja);
	}

	rjd = intgr2;
    return rjd;
	}