var btn = document.getElementById('button');

var clicks = 0;


btn.addEventListener('click', function() {
    clicks = clicks + 1;
    btn.innerHTML = clicks + ' Clicks';
});