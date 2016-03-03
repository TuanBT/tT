var time = '1/1/2014 0:0:0';

$( document ).ready(function() {

});

$('.boxTotal').countid({
    clock: true,
    dateTime: time,
    dateTplElapsed: "<span>Tổng số ngày:&nbsp;</span><span>%D</span>"
});

//%Y%O%D%H%M%S
//<span hidden='hidden'>%Y%O%D%H%M%S</span>%Y%O%D%H%M%S<span hidden='hidden'>%Y%O%D%H%M%S</span>


    $('#years').countid({
        clock: true,
        dateTime: time,
        dateTplElapsed: "<span hidden='hidden'></span>%Y<span hidden='hidden'></span>"
    });

    $('#months').countid({
        clock: true,
        dateTime: time,
        dateTplElapsed: "<span hidden='hidden'>%Y</span>%O<span hidden='hidden'>%D%H%M%S</span>"
    });

    $('#days').countid({
        clock: true,
        dateTime: time,
        dateTplElapsed: "<span hidden='hidden'>%Y%O</span>%D<span hidden='hidden'>%H%M%S</span>"
    });

    $('#hours').countid({
        clock: true,
        dateTime: time,
        dateTplElapsed: "<span hidden='hidden'>%Y%O%D</span>%H<span hidden='hidden'>%M%S</span>"
    });

    $('#minutes').countid({
        clock: true,
        dateTime: time,
        dateTplElapsed: "<span hidden='hidden'>%Y%O%D%H</span>%M<span hidden='hidden'>%S</span>"
    });

    $('#seconds').countid({
        clock: true,
        dateTime: time,
        dateTplElapsed: "<span hidden='hidden'>%Y%O%D%H%M</span>%S<span hidden='hidden'></span>"
    });




