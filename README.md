AdminBar module for ProcessWire CMS/CMF
---------------------------------------

This module provides easy front-end admin bar for editing page content in ProcessWire.

## Credits

This module was originally developed by @apeisa, with additional development by Teppo Koivula.
Credits for the bundled themes:

- "Original" theme by @apeisa (https://github.com/apeisa)
- "Tires" theme by @tires (https://processwire.com/talk/profile/2761-tires/), with Feather icons
  by Cole Bemis (https://twitter.com/colebemis)
- "Uikit" theme by Teppo Koivula ((https://github.com/teppokoivula), based on ProcessWire Uikit
  Admin Theme by Ryan Cramer ((https://processwire.com))

## Installing the module

This module can be installed just like any other ProcessWire module: copy or clone the directory
containing this module to your /site/modules/ directory, log in, go to Admin > Modules, click
"Check for new modules", and install "AdminBar".

Alternatively you can use the module installer in ProcessWire's Admin to install the module.

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