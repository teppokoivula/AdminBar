document.addEventListener('DOMContentLoaded', function() {

    // Add the adminbar-loaded class to body element.
    document.body.classList.add('adminbar-loaded');

    // Store references to AdminBar elements.
    const adminbar = document.getElementById('adminbar');
    const adminbar_items = adminbar.querySelectorAll('li');
    const adminbar_links = adminbar.querySelectorAll('li:not(.admin) a');
    const adminbar_modal_links = adminbar.querySelectorAll('a.modal');
    const adminbar_browse = adminbar.querySelector('.browse a')

    const modal = document.createElement('div');
    modal.setAttribute('id', 'ab-modal');
    modal.setAttribute('data-active', 'browse');
    modal.classList.add('hidden');
    document.body.prepend(modal);

    // Attach click handler to regular links.
    adminbar_links.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            setActive(event.currentTarget);
        });
    });

    // Attach click handler to modal links.
    adminbar_modal_links.forEach(function(item) {
        item.addEventListener('click', function(event) {
            const modal_link = event.currentTarget;
            if (adminbar.getAttribute('data-active') == modal_link.getAttribute('class')) {
                slideUp(true);
            } else {
                modal.classList.add('loading');
                modal.querySelectorAll('iframe').forEach(function(item) {
                    item.remove();
                });
                slideDown();

                const iframe = document.createElement('iframe');
                iframe.setAttribute('name', 'ab_modal_iframe');
                iframe.setAttribute('id', 'ab_modal_iframe');
                iframe.setAttribute('frameborder', 0);
                iframe.setAttribute('src', modal_link.getAttribute('href'));
                modal.append(iframe);

                adminbar.setAttribute('data-active', modal_link.getAttribute('class'));
            }
            return false;
        });
    });

    // Attach click handler to the browse link.
    adminbar_browse.addEventListener('click', function(event) {
        slideUp(true);
        return false;
    });

    // Make a specific AdminBar link active, removing active state from all other links.
    function setActive(link) {
        adminbar_links.forEach(function(item) {
            item.parentElement.classList.remove('active');
        });
        link.parentElement.classList.add('active');
    }

    // Slide modal window down.
    function slideDown() {
        modal.classList.add('visible');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    // Slide modal window up.
    function slideUp(clean) {
        adminbar.setAttribute('data-active', 'browse');
        modal.classList.remove('loading');
        if (clean) {
            modal.querySelectorAll('iframe').forEach(function(item) {
                item.setAttribute('src', '');
                item.remove();
            });
            setActive(adminbar_browse);
        }
        modal.classList.remove('visible');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // After page has been saved in modal window, close the modal.
    const adminbar_page_saved = document.getElementById('ab-pagesaved');
    if (adminbar_page_saved) {
        document.setTimeout(function() {
            slideUp(adminbar_page_saved);
        }, 3000);
    }

}, false);
