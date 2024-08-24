$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


// Functionality for Join Us button depending on config.json regOpen
fetch('../assets/config.json')
    .then(response => response.json())
    .then(config => {
        const joinUsLinkMobile = document.getElementById('joinUsMobile');
        const joinUsLinkDesktop = document.getElementById('joinUsDesktop');

        if (config.regOpen) {
            joinUsLinkMobile.setAttribute('href', 'index.html#join-us');
            joinUsLinkDesktop.setAttribute('href', 'index.html#join-us');
            joinUsLinkMobile.removeAttribute('data-bs-toggle');
            joinUsLinkMobile.removeAttribute('data-bs-target');
            joinUsLinkDesktop.removeAttribute('data-bs-toggle');
            joinUsLinkDesktop.removeAttribute('data-bs-target');
        } else {
            joinUsLinkMobile.setAttribute('href', '#');
            joinUsLinkMobile.setAttribute('data-bs-toggle', 'modal');
            joinUsLinkMobile.setAttribute('data-bs-target', '#regModal');

            joinUsLinkDesktop.setAttribute('href', '#');
            joinUsLinkDesktop.setAttribute('data-bs-toggle', 'modal');
            joinUsLinkDesktop.setAttribute('data-bs-target', '#regModal');
        }
    })
    .catch(error => console.error('Error loading config.json:', error));

// Dropdown menus
(function($bs) {
    const CLASS_NAME = 'has-child-dropdown-show';
    $bs.Dropdown.prototype.toggle = function(_orginal) {
        return function() {
            document.querySelectorAll('.' + CLASS_NAME).forEach(function(e) {
                e.classList.remove(CLASS_NAME);
            });
            let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
            for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                dd.classList.add(CLASS_NAME);
            }
            return _orginal.call(this);
        }
    }($bs.Dropdown.prototype.toggle);

    document.querySelectorAll('.dropdown').forEach(function(dd) {
        dd.addEventListener('hide.bs.dropdown', function(e) {
            if (this.classList.contains(CLASS_NAME)) {
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
            }
            e.stopPropagation(); // do not need pop in multi level mode
        });
    });

    // for hover
    document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function(dd) {
        dd.addEventListener('mouseenter', function(e) {
            let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
            if (!toggle.classList.contains('show')) {
                $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                dd.classList.add(CLASS_NAME);
                // $bs.Dropdown.clearMenus();
            }
        });
        dd.addEventListener('mouseleave', function(e) {
            let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
            if (toggle.classList.contains('show')) {
                $bs.Dropdown.getOrCreateInstance(toggle).toggle();
            }
        });
        dd.addEventListener('click', function(e) {
            window.location.href = e.target.getAttribute('href');
        });
    });
})(bootstrap);