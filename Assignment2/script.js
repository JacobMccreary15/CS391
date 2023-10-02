$(document).ready(function () {
    function apiSearch() {
        var params = {
            'q': $('#query').val(),
            'count': 50,
            'offset': 0,
            'mkt': 'en-us'
        };

        $.ajax({
            url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
            type: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': '4b53406b3cd34a22821778264052ac05'
            }
        })
            .done(function (data) {
                var len = data.webPages.value.length;
                var results = '';
                for (i = 0; i < len; i++) {
                    results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
                }

                $('#searchResults').html(results);
                $('#searchResults').dialog();
            })
            .fail(function () {
                alert('error!');
            });
    }

    function apiSearchLucky() {
        var params = {
            'q': $('#query').val(),
            'count': 50,
            'offset': 0,
            'mkt': 'en-us'
        };

        $.ajax({
            url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
            type: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': '4b53406b3cd34a22821778264052ac05'
            }
        })
            .done(function (data) {
                if (data.webPages.value.length > 0) {
                    window.location.href = data.webPages.value[0].url;
                };
            })
            .fail(function () {
                alert('error!');
            });
    }

    function displayTime() {
        const currentTime = new Date();
        const formatTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        $('#time').text(formatTime);
        $('#time').dialog();
    };

    var backgrounds = [
        'https://images.unsplash.com/photo-1636409484134-0d23f1992511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1634979930354-cefa3d70287b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ];

    var clickCount=0; 

    function changeBackground() {
        $('body').css('background-image', 'url(' + backgrounds[clickCount] + ')');

        clickCount = (clickCount + 1) % backgrounds.length;
    };

    $("#searchButton").click(function () {
        apiSearch();
    });

    $('#timeButton').click(function () {
        displayTime();
    });

    $('#luckyButton').click(function () {
        apiSearchLucky();
    });

    $('h1').click(function () {
        changeBackground();
    });


});