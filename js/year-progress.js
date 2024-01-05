function startYearProgress(){
    let title = document.getElementById("year-progress-title");
    let titlePercent = document.getElementById("year-progress-percent");
    var bar = document.getElementById('year-progressbar');

    var animate = setInterval(function () {
        
        // Time
        var now = new Date();
        var yearStart = new Date(now.getFullYear(), 0, 1);
        var yearEnd = new Date(now.getFullYear() + 1, 0, 1);
        var totalDuration = yearEnd.getTime() - yearStart.getTime();
        var currentDuration = now.getTime() - yearStart.getTime();

        // // Calculate percentage
        var percent = (currentDuration / totalDuration) * 100;

        // Set title
        title.innerText = now.getFullYear();
        titlePercent.innerText = percent.toFixed(6) + "%";
        
        // Set bar
        bar.value = percent;
    }, 100);
}

startYearProgress();
