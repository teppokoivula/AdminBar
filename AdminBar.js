const adminBarInit = function() {

    // Add the adminbar-loaded class to body element.
    document.body.classList.add('adminbar-loaded');

    // Store references to AdminBar elements.
    const adminbar = document.getElementById('adminbar');
    const settings = JSON.parse(adminbar.getAttribute('data-adminbar'));
    const adminbar_browse = adminbar.querySelector('.adminbar__link--item-browse');

    // Set CSS variable for adminbar height.
    const setAdminbarHeight = () => {
        document.documentElement.style.setProperty('--adminbar-height', adminbar.offsetHeight + 'px');
    };
    setAdminbarHeight();
    window.addEventListener('resize', setAdminbarHeight);
    if (adminbar_browse) {
        adminbar_browse.parentNode.classList.add('adminbar__list-item--active');
    }

    // Store references to items that have the data-adminbar property defined.
    const adminbar_adjust = document.querySelectorAll('[data-adminbar-adjust]');

    // Create container to use for modal window.
    const adminbar_modal = document.createElement('div');
    adminbar_modal.setAttribute('data-active', 'browse');
    adminbar_modal.classList.add('adminbar__modal');
    adminbar_modal.classList.add('adminbar__modal--hidden');
    if (document.body.childNodes.length) {
        document.body.insertBefore(adminbar_modal, document.body.childNodes[0]);
    } else {
        document.body.appendChild(adminbar_modal);
    }

    // Make sure that our outermost content container (html element or something else) has proper padding and the modal element is properly
    // positioned, and adjust elements that have the data-adminbar-adjust attribute.
    if (adminbar.classList.contains('adminbar--auto-padding')) {
        let adminbar_content_container = document.querySelector('[data-adminbar-content]')
        if (typeof adminbar_content_container == 'undefined' || adminbar_content_container == null) {
            adminbar_content_container = document.documentElement;
        }
        if (!adminbar_content_container.hasAttribute('data-adminbar-content')) {
            adminbar_content_container.setAttribute('data-adminbar-content', '');
        }
        adminbar_content_container.style.paddingTop = 'var(--adminbar-height, 40px)';
        adjustPositions();
        let resize_timeout = false;
        window.addEventListener('resize', () => {
            window.clearTimeout(resize_timeout);
            resize_timeout = window.setTimeout(adjustPositions, 150);
        });
        function adjustPositions() {
            if (adminbar_adjust.length) {
                adminbar_adjust.forEach(function(item) {
                    const props = item.getAttribute('data-adminbar-adjust').split(' ');
                    if (props.indexOf('top') > -1) {
                        item.style.top = 'var(--adminbar-height, 40px)';
                    }
                    if (props.indexOf('max-height') > -1) {
                        item.style.maxHeight = 'calc(100% - var(--adminbar-height, 40px))';
                    }
                });
            }
        }
    }

    // Attach click handler to modal links.
    adminbar.querySelectorAll('.adminbar__link--modal').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const link = event.currentTarget;
            if (adminbar.getAttribute('data-active') == link.getAttribute('class')) {
                // Active link: close modal and clean up its contents.
                slideUp(true);
            } else {
                // Inactive link: remove iframe (if exists) and open modal.
                setActive(link);
                adminbar_modal.classList.add('adminbar__modal--loading');
                adminbar_modal.querySelectorAll('iframe').forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
                slideDown();

                // Create new iframe to contain link target page.
                const iframe = document.createElement('iframe');
                iframe.classList.add('adminbar__iframe');
                iframe.setAttribute('frameborder', 0);
                iframe.setAttribute('src', link.getAttribute('href'));
                adminbar_modal.appendChild(iframe);

                // Check if we need to inject jQuery. This is required by certain ProcessWire
                // Admin features (modal.js in particular).
                if (!window.jQuery) {
                    const script = document.createElement('script');
                    script.src = settings.urls.modules + 'Jquery/JqueryCore/JqueryCore.js';
                    document.body.appendChild(script);
                }
            }
        });
    });

    // Add CSS class to items that don't contain a link
    adminbar.querySelectorAll('.adminbar__list-item').forEach(function(item) {
        if (!item.getElementsByTagName('a').length) {
            item.classList.add('adminbar__list-item--linkless');
        }
    });

    // Attach click handler to the browse link.
    if (adminbar_browse) {
        adminbar_browse.addEventListener('click', function(event) {
            slideUp(true);
            return false;
        });
    }

    // Make a specific AdminBar link active, removing active state from all other links.
    function setActive(link) {
        adminbar.querySelectorAll('.adminbar__list-item').forEach(function(item) {
            item.classList.remove('adminbar__list-item--active');
        });
        link.parentElement.classList.add('adminbar__list-item--active');
        if (link.classList.contains('adminbar__link--child')) {
            link.parentElement.parentElement.parentElement.classList.add('adminbar__list-item--active');
        }
        adminbar.setAttribute('data-active', link.getAttribute('class'));
        link.blur();
    }

    // Slide modal window down.
    function slideDown() {
        adminbar_modal.classList.add('adminbar__modal--visible');
        adminbar_modal.classList.remove('adminbar__modal--hidden');
        document.body.style.overflow = 'hidden';
    };

    // Slide modal window up.
    function slideUp(clean) {
        if (adminbar_browse) {
            setActive(adminbar_browse);
        }
        adminbar_modal.classList.remove('adminbar__modal--loading');
        if (clean) {
            adminbar_modal.querySelectorAll('iframe').forEach(function(item) {
                item.setAttribute('src', '');
                item.parentNode.removeChild(item);
            });
        }
        adminbar_modal.classList.remove('adminbar__modal--visible');
        adminbar_modal.classList.add('adminbar__modal--hidden');
        adminbar_modal.removeAttribute('style');
        document.body.style.overflow = 'auto';
    };

    // After page has been saved in modal window, close the modal.
    const adminbar_page_saved = document.getElementById('adminbar-page-saved');
    if (adminbar_page_saved) {
        window.setTimeout(function() {
            adminbar_page_saved.classList.add('adminbar__page-saved--hidden');
            window.setTimeout(function() {
                adminbar_page_saved.parentNode.removeChild(adminbar_page_saved);
            }, 1500);
        }, 3000);
    }

}

if (document.readyState !== 'loading') {
    // The DOM is already ready, so we can run our code immediately.
    adminBarInit();
} else {
    document.addEventListener('DOMContentLoaded', function() {
        adminBarInit();
    });
}
