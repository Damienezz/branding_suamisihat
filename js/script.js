document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidenav
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Load Navigation
    fetch('partials/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});
