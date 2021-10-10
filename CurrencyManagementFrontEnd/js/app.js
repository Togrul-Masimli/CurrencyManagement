function filter_months(start, end) {
    let date_intervals = [];

    if (start.getYear() === end.getYear() && start.getMonth() == end.getMonth()) {
        date_intervals.push([new Date(start.getTime()), end]);
        return date_intervals;
    }
    date_intervals.push([new Date(start.getTime()), end_of_month(start)]);
//    print_interval(date_intervals[0]);

    
    while (start.getMonth() < end.getMonth() || start.getFullYear() < end.getFullYear()) {
        modify_date(start, start.getFullYear(), start.getMonth() + 1, 1);
        let end_date = (end_of_month(start) > end) ? end : end_of_month(start);
        date_intervals.push([new Date(start.getTime()), end_date]);
        if (start.getMonth() === 11 && start.getDate() === 31) {
            modify_date(start, start.getFullYear() + 1, 0, 1);
        }
    }
    return date_intervals;
}

function print_interval(interval) {
    console.log(interval[0].toString() + " --- " + interval[1].toString());
}

function modify_date(date, year, month, day) {
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
}

function end_of_month(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

$(document).ready(function() {

	var selectedCurrency = $("#currencies option:selected").val();

    $("#currencies").change(function() {

        selectedCurrency = $("#currencies option:selected").val();
    });

    $('#btn').click(function() {
        $('#charts').empty();
        
        var startDate = $('#start').val();
        var endDate = $('#end').val();

        var label = selectedCurrency.toUpperCase() + " Infiyasiyasi";

        var starting = new Date(startDate);  
        var ending = new Date(endDate);

        let interval = filter_months(starting, ending);


        for (var i = 0; i < interval.length; i++) {

            var days = [];
            var day = new Date(interval[i][0].getTime());
            for (; day <= interval[i][1]; day.setDate(day.getDate() + 1)){
                days.push(new Date(day).getDate());
            }

            var chr = String.fromCharCode(97 + i);
            debugger
            $('#charts').append(`<canvas id="chart${chr}" style="width: 800px; height: 400px; margin-bottom: 70px;"></canvas>`);
            $.ajax({
                type: 'GET',
                url: "https://localhost:5001/currency/" + selectedCurrency,
                dataType: 'json',
                data: {
                    StartDate: interval[i][0].toISOString().split('T')[0],
                    EndDate: interval[i][1].toISOString().split('T')[0]
                },
                success: function(data) {
                    console.log(data);
                    var ctx = document.getElementById(`chart${chr}`).getContext('2d');
                    var chart = new Chart(ctx, {
                        type: 'line',
                        data: {
                        labels: days,
                        datasets: [{
                            label: label,
                            borderColor: '#006241',
                            borderWidth: 1,
                            fill: true,
                            data: data
                        }]  
                        },
                    });
                },
                async: false
            });
        }
    })
});