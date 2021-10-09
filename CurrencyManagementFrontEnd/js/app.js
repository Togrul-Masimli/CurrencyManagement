$(document).ready(function() {

	var selectedCurrency = $("#currencies option:selected").val();

    $("#currencies").change(function() {

        selectedCurrency = $("#currencies option:selected").val();
    });

    $('#btn').click(function() {
        $('#charts').empty();
        var days = [];
        
        var startDate = $('#start').val();
        var endDate = $('#end').val();

        var label = selectedCurrency.toUpperCase() + " Infiyasiyasi";


        console.log(startDate);

        var starting = new Date(startDate);  
        var ending = new Date(endDate);

        var lastDate = new Date(starting.getFullYear(), starting.getMonth() + 1, 0)
        console.log(lastDate);


        for (var day = starting; day <= ending; day.setDate(day.getDate() + 1)){
            days.push(new Date(day).getDate());
        }
        console.log(days);

        $('#charts').append('<canvas id="chart"></canvas>');

        $.ajax({
            type: 'GET',
            url: "https://localhost:5001/currency/" + selectedCurrency,
            dataType: 'json',
            data: {
                StartDate: startDate,
                EndDate: endDate
            },
            success: function(data) {
                console.log(data);
                var ctx = document.getElementById('chart').getContext('2d');
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
            }
        });

    })
});