document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize Sidenav
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Load Navigation HTML
    fetch('partials/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;

            // Re-initialize sidenav after loading the navigation content
            var newElems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(newElems);
        })
        .catch(error => console.error('Error loading navigation:', error));
});
