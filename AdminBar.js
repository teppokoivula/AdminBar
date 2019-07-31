document.addEventListener('DOMContentLoaded', function() {

    // Add the adminbar-loaded class to body element.
    document.body.classList.add('adminbar-loaded');

    // Store references to AdminBar elements.
    const adminbar = document.getElementById('adminbar');
    const adminbar_browse = adminbar.querySelector('.browse a')

    // Create container to use for modal window.
    const adminbar_modal = document.createElement('div');
    adminbar_modal.setAttribute('id', 'ab-modal');
    adminbar_modal.setAttribute('data-active', 'browse');
    adminbar_modal.classList.add('hidden');
    if (document.body.childNodes.length) {
        document.body.insertBefore(adminbar_modal, document.body.childNodes[0]);
    } else {
        document.body.appendChild(adminbar_modal);
    }

    // Attach click handler to modal links.
    adminbar.querySelectorAll('a.modal').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const link = event.currentTarget;
            if (adminbar.getAttribute('data-active') == link.getAttribute('class')) {
                // Active link: close modal and clean up its contents.
                slideUp(true);
            } else {
                // Inactive link: remove iframe (if exists) and open modal.
                setActive(link);
                adminbar_modal.classList.add('loading');
                adminbar_modal.querySelectorAll('iframe').forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
                slideDown();

                // Create new iframe to contain link target page.
                const iframe = document.createElement('iframe');
                iframe.setAttribute('name', 'ab_modal_iframe');
                iframe.setAttribute('id', 'ab_modal_iframe');
                iframe.setAttribute('frameborder', 0);
                iframe.setAttribute('src', link.getAttribute('href'));
                adminbar_modal.appendChild(iframe);
            }
        });
    });

    // Attach click handler to the browse link.
    adminbar_browse.addEventListener('click', function(event) {
        slideUp(true);
        return false;
    });

    // Make a specific AdminBar link active, removing active state from all other links.
    function setActive(link) {
        adminbar.querySelectorAll('li:not(.admin) a').forEach(function(item) {
            item.parentElement.classList.remove('active');
        });
        link.parentElement.classList.add('active');
        adminbar.setAttribute('data-active', link.getAttribute('class'));
    }

    // Slide modal window down.
    function slideDown() {
        adminbar_modal.classList.add('visible');
        adminbar_modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    // Slide modal window up.
    function slideUp(clean) {
        setActive(adminbar_browse);
        adminbar_modal.classList.remove('loading');
        if (clean) {
            adminbar_modal.querySelectorAll('iframe').forEach(function(item) {
                item.setAttribute('src', '');
                item.parentNode.removeChild(item);
            });
        }
        adminbar_modal.classList.remove('visible');
        adminbar_modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // After page has been saved in modal window, close the modal.
    const adminbar_page_saved = document.getElementById('ab-pagesaved');
    if (adminbar_page_saved) {
        window.setTimeout(function() {
            adminbar_page_saved.classList.add('hidden');
            window.setTimeout(function() {
                adminbar_page_saved.parentNode.removeChild(adminbar_page_saved);
            }, 1500);
        }, 3000);
    }

}, false);
