AdminBar module for ProcessWire CMS/CMF
---------------------------------------

This module provides easy front-end admin bar for editing page content in ProcessWire.

## Credits

This module was originally developed by @apeisa, with additional development by Teppo Koivula.
Credits for the bundled themes:

- "Original" theme by @apeisa (https://github.com/apeisa)
- "Tires" theme by @tires (https://processwire.com/talk/profile/2761-tires/), with Feather icons
  by Cole Bemis (https://twitter.com/colebemis)
- "Uikit" theme by Teppo Koivula (https://github.com/teppokoivula), based on ProcessWire Uikit
  Admin Theme by Ryan Cramer (https://processwire.com)

SVG loading icon (loading.svg) is from https://github.com/n3r4zzurr0/svg-spinners, copyright Utkarsh
Verma and licensed under The MIT License (MIT).

## Installing the module

This module can be installed just like any other ProcessWire module: copy or clone the directory
containing this module to your /site/modules/ directory, log in, go to Admin > Modules, click
"Check for new modules", and install "AdminBar".

Alternatively you can use the module installer in ProcessWire's Admin or Composer to install this
module. The module is available via Packagist for Composer installation as `teppokoivula/admin-bar`.

### Requirements

- ProcessWire >= 3.0.112
- PHP >= 7.1.0

If you're running an earlier version of ProcessWire or PHP, you can use the 1.1.5 release of this
module instead. Note, though, that 1.x branch of the module is no longer supported, and as such it
*may not* work as expected, and *will* lack some of the features available via the 2.x branch.

## Permissions

By default AdminBar is visible only for superusers only. If you want to grant non-superusers access
to AdminBar, please add permission "adminbar" to their role(s).

If you are upgrading from an older version of AdminBar, you may need to uninstall and then reinstall
the module in order to see that permission. Alternatively you can add this permission manually: just
provide "adminbar" as the name of the permission (the label doesn't really matter).

## Themes

AdminBar comes with a selection of built-in themes. You can change the theme via module config, and
if you want you can also create a custom theme of your own:

1. Create directory for your custom theme anywhere under your site directory. This directory should
   contain at least theme.css file, but you can also include theme.js, theme.php, and config.php.

   *For examples on how theme files work, check out the uikit theme, found from the /themes/uikit/
   directory within the AdminBar directory.*

2. Select "Custom ..." option for theme in module config.
3. Type into the "Custom theme" text input the path to the directory your custom theme's files are
   located in. This path should be relative to (start from) your site directory.

## Hooks

As with any ProcessWire module, you can identify hookable methods by the three underscores before
the method name: `___hookableMethod()`. Here are the details for most common hookable methods in
the AdminBar module/class:

* `___isEnabled()`: this method returns a boolean that defines if AdminBar should be enabled (i.e.
  displayed) for current request.
* `___isEnabledFor(Page $page)`: this method returns a boolean that defines if AdminBar should be
  enabled for provided page.
* `___render()`: this method renders the Admin Bar. You can hook _before_ it if you want to provide
  custom arguments for the method (overriding strings etc.) or you can hook _after_ it if you want
  to manually modify the returned output string.
* `___getTemplates()`: this method returns the "template strings" used by the render method. These
  are essentially the parts that make up the final markup, and if you want to modify the markup of
  the Admin Bar, you can hook _after_ this method and modify the returned template strings array.
* `___getData()`: this method returns the value of the data-adminbar attribute added to the Admin
  Bar. If you need custom properties mainly for JavaScript use, you should hook _after_ this method
  and modify the returned array of options.
* `___getItems()`: this method returns a list of items displayed in the Admin Bar. You can modify
  certain aspects of these items (strings/labels, use of modal links, etc.) by hooking _before_ this
  method and modifying the args array – or if you want to modify the displayed items, you can hook
  _after_ this method and modify the returned array of items.

## Frontend utilities

### CSS custom property

AdminBar sets the `--adminbar-height` CSS custom property on the document root (`:root`). This
allows you to adjust your layout based on the Admin Bar height using pure CSS:

```css
.sticky-header {
    top: var(--adminbar-height, 0);
}

.full-height-container {
    height: calc(100vh - var(--adminbar-height, 0));
}
```

The value is updated automatically when the Admin Bar height changes (e.g., due to window resize).

### data-adminbar-adjust attribute

You can use the `data-adminbar-adjust` attribute to control behaviour of frontend elements while
Admin Bar is enabled/displayed. This attribute should contain a space-separated list of CSS
properties that should be modified when Admin Bar height is recalculated.

Example and supported values:

```
<div data-adminbar-adjust="top max-height"></div>
```

Adjustments are applied as inline CSS styles. Assuming that the height of the Admin Bar was 100px
at the time of calculation, the example above would result in...

```
<div style="top: 100px; max-height: calc(100% - 100px);" data-adminbar-adjust="top max-height"></div>
```

By default your main content container is assumed to be document root and Admin Bar will automatically
add top padding to this element to make space for itself. In some cases content may live within another
full height container, in which case you may prefer to adjust the padding of that element instead. This
can be achieved by adding the `data-adminbar-content` attribute to said element:

```
<html>
    <body>
        <div class="main" data-adminbar-content>
            ...
        </div>
    </body>
</html>
```

## License

This program is free software; you can redistribute it and/or modify it under the terms of the GNU
General Public License as published by the Free Software Foundation; either version 2 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not,
write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
02110-1301, USA.

(See included LICENSE file for full license text.)
