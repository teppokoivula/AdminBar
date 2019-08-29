<?php namespace ProcessWire;

// Add ProcessWire mark/icon and icons to Admin Bar.
$this->addHookAfter('AdminBar::getItems', function(HookEvent $event) {

    // Get items from HookEvent.
    $items = $event->return;

    // Icons.
    $has_icons = is_null($this->theme_uikit_icons) ? 30 : $this->theme_uikit_icons;
    if ($has_icons) {

        // Define the common part of each SVG icon, and then the icon-specific paths separately.
        $svg = '<svg class="adminbar__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">%s</svg>';
        $icons = array_filter([
            'browse' => '<path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z" fill="#fff"/>',
            'edit' => '<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" fill="#fff"/>',
            'new' => '<path d="M1344 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff"/>',
            'user' => '<path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" fill="#fff"/>',
            'admin' => '<path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z" fill="#fff"/>',
            'profile' => '<path d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z" fill="#fff"/>',
            'logout' => '<path d="M1664 896q0 156-61 298t-164 245-245 164-298 61-298-61-245-164-164-245-61-298q0-182 80.5-343t226.5-270q43-32 95.5-25t83.5 50q32 42 24.5 94.5t-49.5 84.5q-98 74-151.5 181t-53.5 228q0 104 40.5 198.5t109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5q0-121-53.5-228t-151.5-181q-42-32-49.5-84.5t24.5-94.5q31-43 84-50t95 25q146 109 226.5 270t80.5 343zm-640-768v640q0 52-38 90t-90 38-90-38-38-90v-640q0-52 38-90t90-38 90 38 38 90z" fill="#fff"/>',
        ]);

        // Define the function used for applying icons for each Admin Bar item.
        $user = $this->wire('user');
        $user_icon = $this->theme_uikit_user_icon ?? 'default';
        $add_icons = function(&$item, $key) use ($icons, $svg, &$add_icons, $user, $user_icon) {
            $path = $icons[$key] ?? null;
            if ((!empty($item['text']) || $key == 'logout' && !empty($item['html'])) && !empty($path)) {
                if ($key == 'user' && $user_icon == 'gravatar') {
                    // Use Gravatar?
                    $url = "https://www.gravatar.com/avatar/" . md5(strtolower(trim($user->email))) . "?s=48&d=mm&r=g";
                    $img = '<img class="adminbar__avatar" src="' . $url . '" alt="' . $user->name . '" />';
                    $item['text'] = $img . $item['text'];
                } else if ($key == 'logout') {
                    // Logout is a form, so icon needs some additional styles.
                    $item['html'] = preg_replace(
                        '/\<button.*?type="submit".*?\>/i',
                        '$0' . sprintf($svg, $path),
                        $item['html']
                    );
            } else {
                    // Show different icon (lock) for edit action if editing is disabled.
                    if ($key == 'edit' && empty($item['link'])) {
                        $path = '<path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" fill="#fff"/>';
                    }
                    $item['text'] = sprintf($svg, $path) . $item['text'];
                }
            }

            // If the item has child items, they might have icons as well.
            if (!empty($item['children'])) {
                array_walk($item['children'], $add_icons);
            }
        };

        // First iterate Admin Bar items column by column with foreach, and then item by item with
        // array_walk.
        foreach ($items as $key => $column) {
            if ($has_icons == 30 || ($key == 'left' && $has_icons == 10) || ($key == 'right' && $has_icons == 20)) {
                array_walk($column, $add_icons);
                $items[$key] = $column;
            }
        }
    }

    // ProcessWire logo/mark/icon.
    $theme_path = $this->config->paths->AdminThemeUikit;
    if ($theme_path) {
        $img = 'uikit/custom/images/pw-mark.png';
        if (is_file($theme_path . $img)) {
            $has_img = is_null($this->theme_uikit_img) ? 1 : $this->theme_uikit_img;
            if ($has_img) {
                $items['left'] = [
                    'logo' => '<a class="adminbar__logo" href="' . $this->config->urls->admin . '">'
                            . '<img class="adminbar__logo-img" src="' . $this->config->urls->AdminThemeUikit . $img . '" alt="" />'
                            . '</a>',
                ] + $items['left'];
            }
        }
    }

    // Return modified items.
    $event->return = $items;
});
